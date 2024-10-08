import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
import { toast } from "react-toastify"
import {
  loginFn,
  checkAuthFn,
  logoutFn,
  changePasswordFn,
  passwordResetFn,
  verifyTokenFn,
} from "./../services/AuthService.js"
import useUsersMeStore from "./useUserMeStore"

const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        accessToken: null,
        refreshToken: null,
        isAuth: false,
        isLoading: false,

        setAuth: (bool) => set({ isAuth: bool }),
        setLoading: (bool) => set({ isLoading: bool }),
        setTokens: (data) =>
          set({
            accessToken: data.access,
            refreshToken: data.refresh,
          }),

        setCsrfToken: (csrfToken) => set({ csrfToken }),

        clearTokens: () =>
          set({ accessToken: null, refreshToken: null, isAuth: false }),

        login: async (data) => {
          set({ isLoading: true })
          try {
            const response = await loginFn(data)
            set({
              accessToken: response.data.access,
              refreshToken: response.data.refresh,
              isAuth: true,
            })
            toast.success("You successfully logged in!")
          } catch (e) {
            toast.error(e.message, { position: "top-right" })
            console.log(e.message)
          } finally {
            set({ isLoading: false })
          }
        },

        logout: async () => {
          const { refreshToken } = get()
          try {
            await logoutFn(refreshToken)
            set({ isAuth: false, accessToken: null, refreshToken: null })
            toast.success("You successfully logged out!")
            useUsersMeStore.getState().clearUserMe()
          } catch (e) {
            toast.error(e.message, { position: "top-right" })
          }
        },

        checkAuth: async () => {
          const { refreshToken } = get()
          set({ isLoading: true })
          try {
            const response = await checkAuthFn(refreshToken)
            set({
              accessToken: response.data.access,
              refreshToken: response.data.refresh,
              isAuth: true,
            })
          } catch (e) {
            set({ isAuth: false, accessToken: null, refreshToken: null })
            toast.error(`Your session has expired. Please log in again.`, {
              position: "top-right",
            })
          } finally {
            set({ isLoading: false })
          }
        },

        changePassword: async (data) => {
          const { logout } = get()
          set({ isLoading: true })
          try {
            await changePasswordFn(data)
            toast.success("You have successfully changed your password")
            await logout()
          } catch (e) {
            toast.error(e.message, { position: "top-right" })
            console.log(e.response.data.new_password[0])
            console.log(e.response.status)
          } finally {
            set({ isLoading: false })
          }
        },

        passwordReset: async (email) => {
          set({ isLoading: true })
          try {
            await passwordResetFn(email)
            toast.success("Password reset email has been sent.")
          } catch (e) {
            toast.error(e.message, { position: "top-right" })
            console.log(e.message)
          } finally {
            set({ isLoading: false })
          }
        },

        verifyToken: async (token) => {
          set({ isLoading: true })
          try {
            const response = await verifyTokenFn(token)
            toast.success("Token verified")
            return response.status === 200
          } catch (e) {
            toast.error(e.message, { position: "top-right" })
            console.log(e.message)
            return false
          } finally {
            set({ isLoading: false })
          }
        },
      }),
      {
        name: "logged_in",
        getStorage: () => localStorage,
      }
    )
  )
)

export default useAuthStore
