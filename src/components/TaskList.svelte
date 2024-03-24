<script>
    import { onMount } from 'svelte';
    import Task from "./Task.svelte";
    import AddTaskButton from "./AddTaskButton.svelte";
    import { user } from '../user';


    let tasks = []

    onMount(() => {
        getTasks()
    })

    const getTasks = () => {
        user.get('tasks').map().once(async (data, id) => {
            if (data) {
                let task = {
                    title: data.title,
                    id: id
                }
                if (task.title) {
                    tasks = [...tasks, task]
                }
            }
        })
    }

    const createTask = (title) => {
        const date = new Date().toISOString();
        user.get('tasks').get(date).put({title: title});
    }

    const removeTask = (id) => {
        user.get('tasks').get(id).put(null)
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