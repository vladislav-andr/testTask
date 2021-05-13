import axios from './axios'

export const getUsers = () => axios.get(`/users`)

export const getFoundUsers = (key: string, page: number = 1, per_page: number = 10) => axios.get(`/search/users?q=${key}&page=${page}&per_page=${per_page}`)//
