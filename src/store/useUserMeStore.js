import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
import { fetchUsersMeFn } from "./../services/UsersService"

const useUsersMeStore = create(
  devtools(
    persist(
      (set, get) => ({
        users_me: null,
        isloading: false,
        error: null,
        setUsersMe: (data) => set({ users_me: { ...data }, isLoading: false }),
        setError: (error) => set({ error, isLoading: false }),
        setLoading: () => set({ isLoading: true }),
        clearUserMe: () => set({ users_me: null, isLoading: false }),

        fetchUsersMe: async () => {
          set({ loading: true })
          try {         
            const res = await fetchUsersMeFn()
            set({ users_me: await { ...res.data }, error: null })
            return res.data
          } catch (error) {
            set({ error: error.message })
          } finally {
            set({ isloading: false })
          }
        },
      }),
      {
        name: "users_me",
        version: 1,

        migrate: (persistedState, version) => {
          if (version === 1) {
            return {
              ...persistedState,
              users: persistedState.users.map((user) => ({
                ...user,
                role: user.role || "users_me",
              })),
            }
          }
          return persistedState
        },
      }
    )
  )
)

export default useUsersMeStore
