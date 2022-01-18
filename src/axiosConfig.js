import axios from 'axios'

const JSONHTTP = axios.create({
    baseURL:'http://localhost:3004/'
})


export default JSONHTTP
