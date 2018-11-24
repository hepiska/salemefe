import axios from "axios"
import fuctbase64 from 'fuctbase64'
import { Base_url } from "./constant"

const instance = axios.create({
  baseURL: Base_url,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  }
})


export const upload = data =>
  instance.post("/upload", { base64Data: data })
