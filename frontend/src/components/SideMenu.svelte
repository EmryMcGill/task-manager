<script>
    import { onMount } from "svelte";
    import { current_cat_store } from '../stores'

    let checked = false
    let cats = []
    let isInput = false
    let newCat = ''
    let current_cat

    current_cat_store.subscribe((value) => {
            current_cat = value
    })

    onMount(async () => {
        await getCats()

        console.log(cats)
        current_cat_store.set(cats[0])
        console.log(current_cat)
    })

    const getCats = async () => {
        // fetch cats
        const response = await fetch('http://localhost:4000/api/catagorie')
        const json = await response.json()

        if (response.ok) {
          cats = json
        }
    }

    const handleToggle = () => {
        checked = !checked
        getCats().then(console.log(cats))
    }

    const handleSubmit = async () => {
        // post new cat
        const cat = { title: newCat }
        const response = await fetch('http://localhost:4000/api/catagorie', {
            method: 'POST',
            body: JSON.stringify(cat),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            // add locally
            const json = await response.json()
            cats = [...cats, json]
        }
        
        newCat = ''
    }

    const removeCat = async (id) => {
        // delete a cat
        const response = await fetch('http://localhost:4000/api/catagorie/' + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            // delete locally
            const json = await response.json()
            cats = cats.filter(cat => cat._id != json._id)
        }
    }
</script>

<input type='checkbox' class='check' checked={checked} />
<div class='container'>
    <ul class='menu-list'>
        <h2 style={'margin: .5rem; margin-left: 1rem'}>Catagories</h2>
        {#each cats as cat}
            {#if cat._id == current_cat._id} 
                <li style={'font-weight: 500'}>{cat.title}<button>X</button></li>
            {:else} 
                <li>{cat.title}</li> 
            {/if}
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
        display: flex;
        margin-bottom: .5rem;
        margin-left: 1rem;
        justify-content: space-between;
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