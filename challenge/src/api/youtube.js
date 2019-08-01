import axios from 'axios';

const KEY = 'AIzaSyDefS2ZAYSxuJU4GMvV97-IN8R94Dp3SzQ';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        key : KEY
    }
});