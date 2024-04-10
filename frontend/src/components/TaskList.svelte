<script>
    import { onMount } from 'svelte';
    import Task from "./Task.svelte";
    import AddTaskButton from "./AddTaskButton.svelte";

    let tasks = []

    onMount(() => {
        getTasks()
    })

    const getTasks = async () => {
        // fetch tasks
        const response = await fetch('http://localhost:4000/api/todo')
        const json = await response.json()

        if (response.ok) {
          tasks = json
        }
    }

    const createTask = (title) => {
        // create new task
        // create locally
        tasks = [...tasks, {title: title, id: new Date().toISOString()}]
    }

    const removeTask = (id) => {
        // delete a task
        // delete locally
        tasks = tasks.filter(task => task.id != id)
    }
</script>

<div class='task-list'>
    {#each tasks as task}
        <Task title={task.title} id={task.id} removeTask={removeTask} />
    {/each}
    <AddTaskButton createTask={createTask} />
</div>

<style>
    .task-list {
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        width: 80%;
    }
</style>