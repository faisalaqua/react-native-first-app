import axios from "axios";

export const baseURL = "http://192.168.244.15:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
