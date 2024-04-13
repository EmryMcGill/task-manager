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

    const createTask = async (title) => {
        // post new task
        const task = { title }
        console.log('add task')
        const response = await fetch('http://localhost:4000/api/todo', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            // add locally
            const json = await response.json()
            tasks = [...tasks, json]
        }
    }

    const removeTask = async (id) => {
        // delete a task
        // tasks = tasks.filter(task => task._id != id)
        const response = await fetch('http://localhost:4000/api/todo/' + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            // delete locally
            const json = await response.json()
            tasks = tasks.filter(task => task._id != json._id)
        }
    }
</script>

<div class='task-list'>
    {#each tasks as task}
        <Task title={task.title} id={task._id} removeTask={removeTask} />
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