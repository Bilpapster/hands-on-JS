<script>
	import { add, trash, listCircle } from 'ionicons/icons';
	import { goto } from '$app/navigation';
	import TaskCard from '$lib/TaskCard.svelte';
	import { tasks } from '$lib/tasks.js';

	let searchQuery = '';
	let showAlert = false;
	let newTask = '';

	$: console.log($tasks);

	function addTaskFast() {
		if (newTask.trim() !== '') {
			tasks.update(current => [...current, { title: newTask }]);
			newTask = '';
		}
		showAlert = false;
	}

	function removeTask(index) {
		tasks.update(current => current.filter((_, i) => i !== index));
	}
</script>




<style>
	@import './styles.css';
</style>
	
