import axios from 'axios';

const GIPHY_TOKEN = process.env.GIPHY_TOKEN;

export default axios.create({
    baseURL: 'https://api.giphy.com/v1/stickers',
    headers: {
        Authorization: GIPHY_TOKEN
    },
})