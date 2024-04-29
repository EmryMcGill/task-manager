<script>
    let username = ''
    let email = ''
    let password = ''
    let password2 = ''
    let mssg = {mssg: ''}
    let reg = false
    import { currentUser } from '../stores'

    const login = async () => {
        // login user
        const user = { email, password }
        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (response.ok) {
            // set the current user and log in
            const json = await response.json()
            currentUser.set(json)
        }
        else {
            mssg = await response.json()
        }
    }

    const signup = async () => {
        // post new user
        const user = { username, email, password, password2 }
        const response = await fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (response.ok) {
            reg = false
        }
        else {
            mssg = await response.json()
        }
    }

    const signout = async () => {
        console.log('signout')
    }
</script>


{#if reg}
<form on:submit|preventDefault>
    <input 
    type='text' 
    placeholder="username" 
    bind:value={username} />
    <input 
    type='email' 
    placeholder="email" 
    bind:value={email} />
    <input 
    type='password' 
    placeholder="password" 
    bind:value={password} />
    <input 
    type='password' 
    placeholder="confirm password" 
    bind:value={password2} />
    <p>{mssg.mssg}</p>
    <button on:click={signup} >Sign Up</button>
</form>
{:else}
<form on:submit|preventDefault>
    <input 
    type='email' 
    placeholder="email" 
    bind:value={email} />
    <input 
    type='password' 
    placeholder="password" 
    bind:value={password} />
    <p>{mssg.mssg}</p>
    <button on:click={login} >Login</button>
    <button on:click={() => reg = true} >don't have an account? sign up here</button>
</form>
{/if}


<style>
    form {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    input {
        margin-bottom: .5em;
    }
</style>