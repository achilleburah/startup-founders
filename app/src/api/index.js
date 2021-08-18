import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export const fetchStartups = () => axios.get(BASE_URL + 'startup/list')

export const createStartup = startup =>
  axios.post(BASE_URL + 'startup/create', startup)
