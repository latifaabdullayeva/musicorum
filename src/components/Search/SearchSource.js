import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?'
})
// baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?'
