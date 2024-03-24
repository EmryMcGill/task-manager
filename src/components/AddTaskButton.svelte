<script>
    export let createTask = null;
    let title = ''

    const onSubmit = () => {
        createTask(title)
        title = ''
    }
</script>

<form class="container" on:submit={onSubmit}>
    <button type='submit' class='container'>
        <h3>+ Add Task</h3>
    </button>
    <input type="text" bind:value={title} autofocus />
</form>



<style>
    .container {
        display: flex;
    }
    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: var(--primary);
        height: 2rem;
        padding-left: .5rem;
        padding-right: .5rem;
        margin-right: .2rem;
        border-radius: .2rem;
        color: white;
        text-wrap: nowrap;
    }
    button:hover {
        cursor: pointer;
        background-color: #27a36f;
    }
    input[type=text] {
        width: 100%;
        font-family: "Poppins";
        font-size: 1em;
    }

</style>