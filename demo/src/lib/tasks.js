import { writable } from 'svelte/store';

// export const tasks = writable([]);


// Retrieve tasks from localStorage if available, else set an empty array
const storedTasks = localStorage.getItem('tasks');
const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

export const tasks = writable(initialTasks);

// Subscribe to the store to update localStorage whenever the tasks change
tasks.subscribe((value) => {
  localStorage.setItem('tasks', JSON.stringify(value));
});
