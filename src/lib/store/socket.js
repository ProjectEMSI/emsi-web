import { io } from "socket.io-client";
import { browser } from "$app/env";
import { writable } from "svelte/store";

const connected = writable(0);

let socket;

if (browser) {
    socket = io('http://localhost:6001', {
        transports: ['websocket'],
        withCredentials: true,
    });

    socket.on('connect', () => {
        console.log('Connected!');
    })

    socket.on('disconnect', () => {
        console.log('Disconnected!');
    })

    socket.on('player connected', args => {
        connected.set(args.connected);
    })
}

export { socket, connected };
