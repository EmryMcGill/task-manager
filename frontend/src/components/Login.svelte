<script>
    let username = ''
    let email = ''
    let password = ''

    const login = async () => {
        console.log('login')
    }

    const signup = async () => {
        // post new user
        const user = { username, email, password }
        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (response.ok) {
            console.log('signup successful')
        }
        else {
            const json = await response.json()
            console.log(json)
        }
        

        
    }

    const signout = async () => {
        console.log('signout')
    }
</script>

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

    <button on:click={login} >Login</button>
    <button on:click={signup} >Sign Up</button>
</form>