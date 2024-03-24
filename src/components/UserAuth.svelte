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

<input type="text" placeholder="username" bind:value={username} />
<input type="text" placeholder="password" bind:value={password} />
<button on:click={login}>login</button>
<button on:click={signup}>sign up</button>
<style>

</style>