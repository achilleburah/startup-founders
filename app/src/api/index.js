import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export const fetchStartups = () => axios.get(BASE_URL + 'startup/list')
