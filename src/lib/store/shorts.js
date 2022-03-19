import { writable } from "svelte/store";
import api from "../utils/api.js";

const shorts = writable([]);
const timeout = writable(false);

async function fetchShorts() {
    timeout.subscribe(async (value) => {
        if (!value) {
            const response = await api.get('http://game.test/api/v1/shorts/widget')

            shorts.set(response.data.data);
            timeout.set(true);
        }
    })
}

export { shorts, timeout, fetchShorts }
