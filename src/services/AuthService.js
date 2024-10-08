import axios from "axios"
import $api from "../http"
import { Endpoints } from "./../utils/consts.js"

export const loginFn = async (data) => {
  return $api.post(Endpoints.AUTH.LOGIN, { ...data })
}

export const logoutFn = async (refreshToken) => {
  return $api.post(Endpoints.AUTH.LOGOUT, { refresh_token: refreshToken })
}
export const changePasswordFn = async (data) => {
  return $api.post(Endpoints.AUTH.CHANGE_PASSWORD, {
    old_password: data.oldPassword,
    new_password: data.newPassword,
    new_password_confirm: data.newPasswordConfirm,
  })
}

export const passwordResetFn = async (email) => {
  return $api.post(Endpoints.AUTH.PASSWORD_RESET, { ...email })
}

export const verifyTokenFn = async (accessToken) => {
  return $api.post(Endpoints.BASE_URL + Endpoints.AUTH.PASSWORD_VERIFY, {
    token: accessToken,
  })
}

export const checkAuthFn = async (refreshToken) => {
  return axios.post(Endpoints.BASE_URL + Endpoints.AUTH.REFRESH, {
    refresh: refreshToken,
  })
}
