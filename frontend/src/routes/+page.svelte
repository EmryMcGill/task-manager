<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import SideMenu from '../components/SideMenu.svelte';
    import TaskList from '../components/TaskList.svelte';
    import Login from '../components/Login.svelte';
    import { currentUser } from '../stores';
</script>

<div>
    {#if $currentUser == null}
    <Login />
    {:else}
    <div class='content'>
        <SideMenu />
        <div class='col'>
            <TaskList />
        </div>
    </div>
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