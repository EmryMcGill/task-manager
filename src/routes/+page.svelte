<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import SideMenu from '../components/SideMenu.svelte';
    import Task from '../components/Task.svelte'

    import Gun from 'gun';
    import UserAuth from '../components/UserAuth.svelte';
    import { username } from '../user';
    import TaskList from '../components/TaskList.svelte';
</script>

<div>
    {#if $username}
    <div class='content'>
        <SideMenu />
        <div class='col'>
            <TaskList />
        </div>
    </div>
    {:else}
    <UserAuth />
    {/if}
    
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
</style>