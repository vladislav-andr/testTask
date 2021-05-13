import axios from 'axios'

const state: any = localStorage.getItem('persist:testTask')

let attr: any = { baseURL: 'https://api.github.com' }
let token = `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`

if (token) {
  attr = {
    ...attr,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const axiosInstance = axios.create(attr)

export default axiosInstance
