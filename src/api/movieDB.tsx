import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: '02a6c4aba2a9153678912acb1afd50c6',
        language: 'es-ES'
    }
})

export default movieDB