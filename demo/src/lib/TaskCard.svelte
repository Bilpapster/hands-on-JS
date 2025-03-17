<script>
	import { trash } from 'ionicons/icons';
	export let task;
	export let onRemove;
</script>

<style>
	.task-card {
		margin: 0.75rem 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(4px);
	}

	.task-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	.task-title {
		font-size: 1.2rem;
		font-weight: 500;
		color: #333;
	}

	.task-details {
		padding: 0 1rem 1rem;
		color: #666;
		font-size: 0.95rem;
	}

	.task-details p {
		margin: 0.5rem 0;
	}

	.task-details .label {
		font-weight: bold;
		color: #333;
	}

	ion-button {
		--padding-start: 0;
		--padding-end: 0;
		--border-radius: 50%;
		--box-shadow: none;
		--background: transparent;
	}

	ion-icon {
		font-size: 1.3rem;
		color: #eb445a;
	}

	.task-footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 1rem;
	}
</style>

<ion-card class="task-card">
	<div class="task-header">
		<div class="task-title">{task.title}</div>
		<ion-button on:click={onRemove}>
			<ion-icon icon={trash}></ion-icon>
		</ion-button>
	</div>

	<div class="task-details">
		{#if task.category}
			<p><span class="label">Category:</span> {task.category}</p>
		{/if}
		{#if task.date}
			<p><span class="label">Date:</span> {task.date}</p>
		{/if}
	</div>

	<div class="task-footer">
		<!-- Optionally, you can add a footer button or other details here -->
	</div>
</ion-card>
