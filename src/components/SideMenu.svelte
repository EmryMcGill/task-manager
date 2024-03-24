<script>
    let checked = false

</script>

<input type='checkbox' class='check' checked={checked} />
<div class='container'>
    <ul class='menu-list'>
        <h2 style={'margin: .5rem; margin-left: 1rem'}>Catagories</h2>
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

</style>