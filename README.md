# Minimalist Workspace Roadmap & Task Manager

A zero-dependency, aesthetic productivity web application built entirely with **Vanilla JavaScript (ES Modules)**, **Semantic HTML5**, and **Modern CSS**. Designed for individual daily planning with multi-workspace segregation (Personal vs. Work), interactive multi-view layouts (List, Kanban Board, and Monthly Calendar), and full Progressive Web App (PWA) mobile installability[cite: 1, 2, 3].

---

## Key Features

* **Multi-Workspace Isolation:** Seamlessly toggle between personal routines and professional deliverables with dedicated state scopes.
* **Triple-View Productivity Engine:**
  * **List View:** Minimalist status-grouped task checklists with circular completion toggles.
  * **Kanban Board:** Multi-column workflow visualization powered by the native HTML5 Drag and Drop API.
  * **Calendar Grid:** Dynamic month-view planner with task date-mapping and visual indicator pills.
* **Zero External Dependencies:** Built without UI frameworks, bundlers, or third-party libraries—pure browser APIs only.
* **Reactive State Management:** Custom Observer pattern (Pub/Sub) delivering seamless synchronization across all UI views.
* **Persistent Local Storage:** Defensive, serialization-safe Web Storage layer preventing state loss on refresh.
* **PWA & Mobile Installable:** Complete with Web App Manifest and Service Worker caching for offline resilience and an app-like mobile experience.

---

## Tech Stack & Browser APIs

* **Core:** HTML5, CSS3, JavaScript (ES6+ Modules)
* **Storage:** Web Storage API (`localStorage`)
* **Interactivity:** HTML5 Drag & Drop API (`dragstart`, `dragover`, `drop`)
* **Components:** HTML5 Native Dialog API (`<dialog>`)
* **Mobile & Offline:** Web App Manifest, Service Worker API, Cache API
* **Visuals & Layout:** CSS Grid, CSS Flexbox, CSS Custom Properties (Design Tokens)

---

## Project Structure

```text
product-roadmap/
├── index.html              # Main application shell and UI layout
├── manifest.json           # PWA installation and branding manifest
├── service-worker.js       # Offline asset caching & network interception
├── README.md               # Project documentation and architectural manual
├── css/
│   ├── variables.css       # Design tokens, color palette, and spacing scales
│   ├── base.css            # CSS reset, typography, and container layouts
│   ├── components.css      # Buttons, modals, badges, and workspace tabs
│   └── views.css           # Layouts for List, Board, and Calendar views
└── js/
    ├── app.js              # Application entry point and view orchestration
    ├── state.js            # Observer-based state manager and task operations
    ├── storage.js          # Safe Web Storage API persistence wrapper
    ├── views/
    │   ├── listView.js     # List view rendering and checklist interactions[cite: 1]
    │   ├── boardView.js    # Kanban board view and Drag-and-Drop lifecycle
    │   └── calendarView.js  # Dynamic calendar calculation and date mapping[cite: 2]
    └── utils/
        └── dateHelpers.js  # Vanilla Date math and formatting utilities