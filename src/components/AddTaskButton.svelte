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
        border: 2px solid black;
        background-color: white;
        height: 2rem;
        padding-left: .5rem;
        padding-right: .5rem;
        margin-right: .2rem;
        border-radius: .2rem;
        text-wrap: nowrap;
        transition: .1s;
    }
    button:hover {
        cursor: pointer;
        background-color: #000000;
        color: white;
        transition: .1s;
    }
    input[type=text] {
        width: 100%;
        font-family: "Poppins";
        font-size: 1em;
    }

</style>