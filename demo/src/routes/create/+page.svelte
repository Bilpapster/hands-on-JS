<script>
    import { goto } from '$app/navigation';
    import { tasks } from '$lib/tasks.js';
  
    let title = '';
    let category = '';
    let date = '';
  
    function createDetailedTask() {
      tasks.update(current => [...current, { title, category, date }]);
      goto('/');
    }
</script>

<div class="card-container">
  <ion-card class="task-card">
    <ion-input
      label="Title"
      placeholder="Task title"
      value={title}
      on:ionInput={(e) => title = e.detail.value}
      class="glass-input"
    />

    <ion-input
      label="Due Date"
      type="date"
      value={date}
      on:ionInput={(e) => date = e.detail.value}
      class="glass-input"
    />

    <ion-select
      class="glass-input"
      label="Category"
      placeholder="Select category"
      value={category}
      on:ionChange={(e) => category = e.detail.value}
    >
      <ion-select-option value="Work">Work</ion-select-option>
      <ion-select-option value="Personal">Personal</ion-select-option>
      <ion-select-option value="Other">Other</ion-select-option>
    </ion-select>

    <ion-button expand="block" color="success" on:click={createDetailedTask} class="ion-margin-top">Create Task</ion-button>
    <ion-button expand="block" color="medium" on:click={() => goto('/')} class="ion-margin-top">Cancel</ion-button>
  </ion-card>
</div>
  
  
<style>
  body {
      margin: 0;
      background: #f4f4f8;
      font-family: system-ui, sans-serif;
  }

  .card-container {
      background: #f4f4f8;

      display: flex;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
  }

  .task-card {
      width: 100%;
      max-width: 500px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      background: rgba(255, 255, 255, 0.9);
      padding: 2rem;
      backdrop-filter: blur(12px);
  }

  .glass-input {
      --background: rgba(255, 255, 255, 0.5);
      --border-radius: 8px;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --padding-start: 12px;
      --padding-end: 12px;
  }

  ion-input,
  ion-select {
      margin-bottom: 1.5rem;
  }

  ion-button {
      margin-top: 1rem;
  }
</style>
    