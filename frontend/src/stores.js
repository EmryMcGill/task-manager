import { writable } from 'svelte/store';

export const current_cat_store = writable({_id: 123});

export const currentUser = writable(null)