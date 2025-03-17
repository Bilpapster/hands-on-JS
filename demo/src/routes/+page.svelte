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


<div class="page-container">
	<ion-card class="card-container">
		<div class="header">
			<ion-icon icon={listCircle}></ion-icon>
			<h1>My Task List</h1>
		</div>

		<div class="search-container">
			<ion-searchbar
				placeholder="Search tasks"
				value={searchQuery}
				on:ionInput={(e) => searchQuery = e.detail.value}>
			</ion-searchbar>
		</div>

		{#if $tasks.length > 0}
			{#each $tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase())) as task, i}
				<TaskCard {task} onRemove={() => removeTask(i)} />
			{/each}
		{:else}
			<p style="text-align: center; color: #666; padding: 1rem;">No tasks found.</p>
		{/if}

		<ion-button expand="block" color="primary" on:click={() => goto('/create')}>
			<ion-icon slot="start" icon={add}></ion-icon>
			Create Task
		</ion-button>
	</ion-card>
</div>


<style>
	@import './styles.css';
</style>
	