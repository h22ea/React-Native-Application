import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.giphy.com/v1/stickers',
    headers: {
        Authorization: 'Bearer Y8N2iAFFHHkUmEQvsnutVF3t1vSEll2Q'
    },
})