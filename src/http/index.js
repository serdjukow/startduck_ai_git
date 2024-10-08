import axios from "axios"
import { Endpoints } from "./../utils/consts.js"
import useAuthStore from "./../store/useAuthStore"
import Cookies from "js-cookie"

const $api = axios.create({
  withCredentials: false,
  baseURL: Endpoints.BASE_URL,
})

$api.defaults.headers.common["X-CSRFToken"] = Cookies.get("csrftoken")
$api.defaults.headers.common["Content-Type"] = "application/json"

$api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const { accessToken, refreshToken, checkAuth } = useAuthStore.getState()
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const response = await checkAuth({ refresh: refreshToken })
        const { access } = response.data
        useAuthStore.setTokens(accessToken, refreshToken)
        originalRequest.headers["Authorization"] = `Bearer ${access}`
        return $api(originalRequest)
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

$api.interceptors.request.use((config) => {
  const authStore = useAuthStore.getState()
  const token = authStore.accessToken
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

export default $api
