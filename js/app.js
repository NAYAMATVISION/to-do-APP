import { state } from './state.js';
import { renderListView } from './views/listView.js';
import { renderBoardView } from './views/boardView.js';
import { icons } from './utils/icons.js';

document.addEventListener('DOMContentLoaded', () => {
  const appView = document.getElementById('app-view');
  const projectTitle = document.getElementById('project-title');
  const taskDialog = document.getElementById('task-dialog');
  const taskForm = document.getElementById('task-form');
  const openDialogBtn = document.getElementById('open-task-dialog-btn');
  const closeDialogBtn = document.getElementById('close-dialog-btn');
  const workspaceBtns = document.querySelectorAll('.ws-btn');
  const viewBtns = document.querySelectorAll('.view-btn');

  // Mount Header Vector SVGs
  const personalIconSlot = document.getElementById('icon-personal');
  const workIconSlot = document.getElementById('icon-work');
  const addTaskIconSlot = document.getElementById('icon-add-task');

  if (personalIconSlot) personalIconSlot.innerHTML = icons.user;
  if (workIconSlot) workIconSlot.innerHTML = icons.briefcase;
  if (addTaskIconSlot) addTaskIconSlot.innerHTML = icons.plus;

  // Initialize dialog default date to current ISO day
  const dateInput = document.getElementById('task-date-input');
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }

  // Core Render Engine
  function render() {
    // Dynamic project title based on selected workspace
    projectTitle.textContent = state.activeWorkspace === 'personal' 
      ? 'Personal Workspace' 
      : 'Work & Projects';

    // Synchronize workspace buttons UI
    workspaceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.workspace === state.activeWorkspace);
    });

    // Synchronize view tab buttons UI
    viewBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.currentView);
    });

    // Multi-view router
    if (state.currentView === 'list') {
      renderListView(appView, state);
    } else if (state.currentView === 'board') {
      renderBoardView(appView, state);
    } else if (state.currentView === 'calendar') {
      appView.innerHTML = `
        <div style="padding: 60px 0; text-align: center; color: var(--text-muted);">
          <p style="font-size: 15px; font-weight: 500;">Monthly Calendar View</p>
          <p style="font-size: 13px; margin-top: 6px;">Calendar engine will be hooked up on Day 6.</p>
        </div>
      `;
    }
  }

  // Register render callback with State Manager (Observer Pattern)
  state.subscribe(render);

  // Workspace Switcher Handlers
  workspaceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      state.setWorkspace(button.dataset.workspace);
    });
  });

  // View Mode Switcher Handlers
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      state.setView(button.dataset.view);
    });
  });

  // Native Dialog API Event Handlers
  openDialogBtn.addEventListener('click', () => {
    taskDialog.showModal();
  });

  closeDialogBtn.addEventListener('click', () => {
    taskDialog.close();
  });

  // Close dialog on backdrop click
  taskDialog.addEventListener('click', (e) => {
    const dialogDimensions = taskDialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      taskDialog.close();
    }
  });

  // Form Submission & Task Dispatch
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('task-title-input');
    const statusSelect = document.getElementById('task-status-select');
    const dateInput = document.getElementById('task-date-input');

    const title = titleInput.value.trim();
    const status = statusSelect.value;
    const dueDate = dateInput.value;

    if (title) {
      state.addTask({ title, status, dueDate });
      taskForm.reset();
      dateInput.value = new Date().toISOString().split('T')[0];
      taskDialog.close();
    }
  });

  // Global Event Delegation: Click actions for List Items and Board Cards
  appView.addEventListener('click', (e) => {
    const taskContainer = e.target.closest('.task-item') || e.target.closest('.board-card');
    if (!taskContainer) return;

    const taskId = taskContainer.dataset.id;

    // Toggle status checkmark
    if (e.target.classList.contains('task-checkbox')) {
      state.toggleTaskCompletion(taskId);
      return;
    }

    // Delete task button
    if (e.target.closest('.delete-task-btn')) {
      state.deleteTask(taskId);
      return;
    }
  });

  // Initial Paint
  render();
});