import axios from "axios"
import fuctbase64 from 'fuctbase64'
import { Base_url } from "./constant"

const instance = axios.create({
  baseURL: Base_url,
  timeout: 1000,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  }
})


export const upload = data => {
  const config = { headers: { "Content-Type": "multipart/*" } }
  return instance.post("/upload", data, config)
}


export const createDress = data => instance.post("/dresses", data)

export const getAllDress = (skip = "0", searchkey = "", sort = 'id:desc', category = 'all', limit = "10", ) => {
  const _start = skip * limit
  // malas bikin obj qo qs
  const stringCategory = category === 'all' ? '' : `&category=${category}`
  return instance.get(
    `/dresses?title_contains=${searchkey}&_limit=${limit}&_start=${_start}&_sort=${sort}&${stringCategory}`
  )
}

export const getDressDetail = (id) => instance.get(`dresses/${id}`)

export const editDress = (id, data) => instance.put(`dresses/${id}`, data)
export const deleteDress = id => instance.delete(`dresses/${id}`)