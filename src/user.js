import Gun from 'gun'
import 'gun/sea'
import { writable } from 'svelte/store';

export const db = Gun()

export const user = db.user().recall({sessionStorage: true})

export const username = writable('')

db.on('auth', async (event) => {
    const alias = await user.get('alias')
    username.set(alias)
})