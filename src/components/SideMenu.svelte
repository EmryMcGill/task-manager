<script>
    import Header from "./Header.svelte";

    let checked = true

</script>

<input type='checkbox' class='check' checked={checked} />
<div class='container'>
    <ul class='menu-list'>
        <h3 style={'margin-bottom: .5rem'}>Catagories</h3>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
    <button class='check-label' on:click={()=>checked = !checked}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>          
    </button>
</div>

<style>
    .container {
        position:fixed;
        left: -12rem;
        display: flex;
        flex-direction: row;
        transition: .5s;
    }
    .check {
        display: none;
    }
    .check-label {
        color: black;
        margin-left: 1rem;
        margin-top: 1rem;
        background: none;
        border: none;
    }
    .menu-icon {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        transition: .5s;
    }
    ul {
        margin: 0;
        padding: 0;
        padding: 1em;
        height: 100vh;
        width: 10rem;
        display: block;
        list-style-type: none;
        background-color: whitesmoke;
    }
    li {
        margin-bottom: .5rem;
    }
    .check:checked + .container {
        left: 0;
        transition: .5s;
    }
    .check:checked + .container .menu-icon {
        transform: rotate(180deg);
        transition: .5s;
    }
</style>