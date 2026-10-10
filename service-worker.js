/**
 * Komorebi Workspace — Service Worker (PWA Offline Caching & Interception)
 * Version: 1.0.0
 */

const CACHE_NAME = 'komorebi-cache-v8';

// Static assets to pre-cache on installation
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/variables.css',
  './css/base.css',
  './css/landing.css',
  './css/philosophy.css',
  './css/workspace.css',
  './js/app.js',
  './js/bundle.js',
  './js/state.js',
  './js/storage.js',
  './js/auth.js',
  './js/views/boardView.js',
  './js/views/listView.js',
  './js/views/calendarView.js',
  './js/utils/icons.js',
  './js/utils/dateHelpers.js',
  './js/utils/nlpParser.js',
  './js/utils/auraCanvas.js',
  './js/utils/breathingEngine.js',
  './js/utils/textEffects.js',
  './js/utils/tiltPhysics.js',
  './js/utils/philosophyLens.js'
];

/**
 * 1. Install Event — Pre-cache all core application assets
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline shell assets...');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      // Force the waiting service worker to become active immediately
      return self.skipWaiting();
    })
  );
});

/**
 * 2. Activate Event — Clean up stale cache versions & claim clients
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[ServiceWorker] Purging outdated cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      // Immediately control all open clients/tabs
      return self.clients.claim();
    })
  );
});

/**
 * 3. Fetch Event — Network First with Offline Cache Fallback
 */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests and http/https schemes
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  // Handle HTML navigation requests (Network first with offline cache fallback)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => {
        return caches.match('./index.html') || caches.match('./');
      })
    );
    return;
  }

  // Handle static assets: Network First to deliver latest updates immediately, fallback to Cache offline
  event.respondWith(
    fetch(req).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseToCache);
        });
      }
      return networkResponse;
    }).catch(() => {
      return caches.match(req);
    })
  );
});
