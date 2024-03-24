<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import AddTaskButton from '../components/AddTaskButton.svelte';
    import Header from "../components/Header.svelte";
    import SideMenu from '../components/SideMenu.svelte';
    import Task from '../components/Task.svelte'

    import Gun from 'gun';


    const db = Gun()
    let tasks = []

    onMount(() => {
        db.get('tasks').map().once(async (data, id) => {
            if (data) {
                console.log("got task");
                let task = {
                    title: data.title,
                    id: id
                }
                if (task.title) {
                    tasks = [...tasks, task]
                }
            }
        })
    })

    const createTask = (title) => {
        const date = new Date().toISOString();
        db.get('tasks').get(date).put({title: title});
    }

    const removeTask = (id) => {
        db.get('tasks').get(id).put(null)
        tasks = tasks.filter(task => task.id != id)
    }
</script>

<div>
    <div class='content'>
        <SideMenu />
        <div class='col'>
            <div class='task-list'>
                {#each tasks as task}
                    <Task title={task.title} id={task.id} removeTask={removeTask} />
                {/each}
                <AddTaskButton createTask={createTask} />
            </div>
        </div>
    </div>
</div>


<style>
    .content {
        display: flex;
        flex-direction: row;
    }
    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .task-list {
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        width: 80%;
    }
</style>