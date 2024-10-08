import axios from "axios"
import { Endpoints } from "./../utils/consts.js"

export const authApi = axios.create({
  baseURL: Endpoints.BASE_URL,
  withCredentials: true,
})

authApi.defaults.headers.common["Content-Type"] = "application/json"

export const refreshAccessTokenFn = async () => {
  const parsedData = JSON.parse(localStorage.getItem("logged_in"))
  const response = await authApi.post(Endpoints.AUTH.REFRESH, {
    refresh: parsedData.refresh_token,
  })

  console.log("refreshAccessTokenFn", response)
  return response.data
}

authApi.interceptors.request.use((config) => {
  const parsedData = JSON.parse(localStorage.getItem("logged_in"))
  config.headers.Authorization = `Bearer ${parsedData?.access_token}`
  return config
})

authApi.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    console.log("authApi.interceptors", error)
    const originalRequest = error.config
    const errMessage = error.response.data.message
    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshAccessTokenFn()
      return authApi(originalRequest)
    }
    if (error.response.data.message.includes("not refresh")) {
      document.location.href = Endpoints.AUTH.LOGIN
    }
    return Promise.reject(error)
  }
)

export const signUpUserFn = async (user) => {
  const response = await authApi.post("register/", user)
  return response.data
}

export const loginUserFn = async (user) => {
  const response = await authApi.post(Endpoints.AUTH.LOGIN, user)
  return response.data
}

export const verifyEmailFn = async (verificationCode) => {
  const response = await authApi.get(`auth/verifyemail/${verificationCode}`)
  return response.data
}

export const logoutUserFn = async () => {
  const response = await authApi.get(Endpoints.AUTH.LOGOUT)
  return response.data
}

export const getMeFn = async () => {
  const response = await authApi.get(Endpoints.AUTH.USERS_ME)
  return response.data
}
