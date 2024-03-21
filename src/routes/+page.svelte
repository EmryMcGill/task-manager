<script>
    import '../app.css'
    import Header from "../components/Header.svelte";
    import SideMenu from '../components/SideMenu.svelte';
</script>

<div>
    <div class='content'>
        <SideMenu />
    </div>
</div>


<style>
    .content {
        display: flex;
        flex-direction: row;
    }
</style>