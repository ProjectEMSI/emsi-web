import axios from "axios";

let client = axios.create({
    baseURL: 'http://game.test/api/v1/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-Type": "application/json"
    },
})

export default client;
