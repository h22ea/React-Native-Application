import axios from 'axios';
import { links } from '../constants/links';

const GIPHY_TOKEN: string = process.env.GIPHY_TOKEN;

export default axios.create({
    baseURL: links.giphyApi,
    headers: {
        Authorization: `Bearer ${GIPHY_TOKEN}`
    },
})