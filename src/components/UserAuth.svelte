<script>
    import { user } from '../user.js'

    let username
    let password

    const login = () => {
        user.auth(username, password, (err) => {
            console.log(err)
        })
    }
    const signup = () => {
        user.create(username, password, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
</script>

<div class='container'>
    <input type="text" placeholder="username" bind:value={username} />
    <input type="password" placeholder="password" bind:value={password} />
    <button on:click={login}>login</button>
    <button on:click={signup}>sign up</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
    input[type=password], input[type=text] {
        font-family: "Poppins";
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    button {
        font-size: 1rem;
        display: flex;
        align-items: center;
        border: 2px solid black;
        background-color: white;
        border-radius: .2rem;
        text-wrap: nowrap;
        padding-left: .5rem;
        padding-right: .5rem;
        margin-bottom: .5rem;
        transition: .1s;
    }
    button:hover {
        cursor: pointer;
        background-color: #000000;
        color: white;
        transition: .1s;
    }
</style>