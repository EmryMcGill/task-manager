<script>
    import { onMount } from "svelte";

    let checked = false
    let cats = [{title: 'main', id: new Date().toISOString()}]
    let isInput = false
    let newCat = ''

    onMount(() => {
        getCats()
    })

    const getCats = () => {
        // fetch cats
    }

    const handleToggle = () => {
        checked = !checked
        getCats()
    }

    const handleSubmit = () => {
        // create new cat
        // create locally
        cats = [...cats, {title: newCat, id: new Date().toISOString()}]
        newCat = ''
    }
</script>

<input type='checkbox' class='check' checked={checked} />
<div class='container'>
    <ul class='menu-list'>
        <h2 style={'margin: .5rem; margin-left: 1rem'}>Catagories</h2>
        {#each cats as cat}
            <li>{cat.title}</li>
        {/each}
        {#if isInput}
        <form on:submit={handleSubmit}>
            <input type="text" bind:value={newCat} autofocus on:blur={()=>isInput = !isInput} />
        </form>
        {:else}
        <button class="add-cat-btn" on:click={()=>isInput = !isInput}>+ Add Catagory</button>
        {/if}
    </ul>
    <button class='check-label' on:click={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>          
    </button>
</div>

<style>
    
    .container {
        display: flex;
        flex-direction: row;
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
        height: 100vh;
        width: 0rem;
        overflow: hidden;
        display: block;
        list-style-type: none;
        background-color: whitesmoke;
        transition: 0.5s;
    }

    li {
        margin-bottom: .5rem;
        margin-left: 1rem;
    }
    .check:checked + .container ul {
        width: 12rem;
        transition: .5s;
    }
    .check:checked + .container .menu-icon {
        transform: rotate(180deg);
        transition: .5s;
    }
    .add-cat-btn {
        margin-left: 1rem;
        background: none;
        border: 2px solid black;
        border-radius: .2rem;
        padding-left: .2rem;
        padding-right: .2rem;
        text-wrap: nowrap;
        transition: .1s;
    }
    .add-cat-btn:hover {
        background-color: black;
        color: white;
        transition: .1s;
        cursor: pointer;
    }
    input[type=text] {
        margin-left: 1rem;
        width: 8rem;
        border: none;
        border-bottom: 1px solid black;
        background: none;
    }
    input[type=text]:focus {
        outline: none;
    }
</style>