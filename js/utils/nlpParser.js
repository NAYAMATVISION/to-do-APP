import { todayISO, addDaysISO, getNextWeekdayISO } from './dateHelpers.js';

/**
 * Natural Language Task Input Parser Engine
 * Extracts:
 *   - Title
 *   - Tag: @tag (e.g., @fitness, @goals, @deepwork)
 *   - Priority: !p1 (high), !p2 (medium), !p3 (low)
 *   - Date: today, tomorrow, friday, in N days, or YYYY-MM-DD
 *
 * Example inputs:
 *   - "Morning run tomorrow @fitness !p1"
 *   - "Prepare quarterly deck friday @goals !p2"
 *   - "Buy groceries today @errands"
 *
 * @param {string} raw - Raw input string
 * @returns {{ title: string, dueDate: string, tag: string|null, priority: 'p1'|'p2'|'p3' } | null}
 */
export function parseNLP(raw) {
  if (!raw || typeof raw !== 'string') return null;
  let text = raw.trim();
  if (!text) return null;

  // 1. Extract priority flag !p1, !p2, !p3
  let priority = 'p3';
  const pMatch = text.match(/!(p1|p2|p3)\b/i);
  if (pMatch) {
    priority = pMatch[1].toLowerCase();
    text = text.replace(pMatch[0], '').trim();
  }

  // 2. Extract @tag (e.g. @fitness, @goals, @errands)
  let tag = null;
  const tagMatch = text.match(/@([\w-]+)/i);
  if (tagMatch) {
    tag = tagMatch[1].toLowerCase();
    text = text.replace(tagMatch[0], '').trim();
  }

  // 3. Extract explicit ISO date YYYY-MM-DD
  let dueDate = null;
  const isoMatch = text.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (isoMatch) {
    dueDate = isoMatch[1];
    text = text.replace(isoMatch[0], '').trim();
  }

  // 4. Extract relative keyword "in N days" / "in N d"
  if (!dueDate) {
    const inDaysMatch = text.match(/\bin\s+(\d+)\s+(days?|d)\b/i);
    if (inDaysMatch) {
      const numDays = parseInt(inDaysMatch[1], 10);
      dueDate = addDaysISO(todayISO(), numDays);
      text = text.replace(inDaysMatch[0], '').trim();
    }
  }

  // 5. Extract relative keywords "today" or "tomorrow"
  if (!dueDate) {
    if (/\btoday\b/i.test(text)) {
      dueDate = todayISO();
      text = text.replace(/\btoday\b/i, '').trim();
    } else if (/\btomorrow\b/i.test(text)) {
      dueDate = addDaysISO(todayISO(), 1);
      text = text.replace(/\btomorrow\b/i, '').trim();
    }
  }

  // 6. Extract upcoming day of week (e.g. "friday", "next monday", "tuesday")
  if (!dueDate) {
    const weekdayRegex = /\b(next\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|tues|wed|thu|thur|thurs|fri|sat|sun)\b/i;
    const weekdayMatch = text.match(weekdayRegex);
    if (weekdayMatch) {
      const parsedWeekday = getNextWeekdayISO(weekdayMatch[2]);
      if (parsedWeekday) {
        dueDate = parsedWeekday;
        text = text.replace(weekdayMatch[0], '').trim();
      }
    }
  }

  // 7. Clean up remaining title string
  const title = text.replace(/\s{2,}/g, ' ').trim();
  if (!title) return null;

  return {
    title,
    dueDate: dueDate || todayISO(),
    tag,
    priority,
  };
}

/**
 * Generates badge data for live UI preview chips.
 * @param {{ title: string, dueDate: string, tag: string|null, priority: string }} parsed
 */
export function nlpPreviewChips(parsed) {
  if (!parsed) return null;
  return {
    titleChip: parsed.title,
    dateChip: parsed.dueDate,
    tagChip: parsed.tag ? `@${parsed.tag}` : null,
    priorityChip: parsed.priority ? `!${parsed.priority}` : '!p3',
  };
}
