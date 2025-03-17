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
    
