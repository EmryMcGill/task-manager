<script>
    import '../app.css'
    import Header from "../components/Header.svelte";
    import SideMenu from '../components/SideMenu.svelte';
    import Task from '../components/Task.svelte'
</script>

<div>
    <div class='content'>
        <SideMenu />
        <Task />
    </div>
</div>


<style>
    .content {
        display: flex;
        flex-direction: row;
    }
</style>