import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5c43f.firebaseio.com/'
});

export default instance;