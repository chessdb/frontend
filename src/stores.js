import { writable } from "svelte/store";

export const selected_piece = writable({
    char: "",
    index: -1,
});