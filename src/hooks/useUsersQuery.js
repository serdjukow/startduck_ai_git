import { useQuery } from "@tanstack/react-query"
import useAuthStore from "../store/useAuthStore.js"
import useUsersMeStore from "../store/useUserMeStore.js"
import { useShallow } from "zustand/react/shallow"

export const useUsersQuery = (state) => {
  const { fetchUsersMe } = useUsersMeStore(
    useShallow((state) => ({
      fetchUsersMe: state.fetchUsersMe,
    }))
  )
  const { isAuth } = useAuthStore(
    useShallow((state) => ({
      isAuth: state.isAuth,
    }))
  )

  return useQuery({
    queryFn: () => fetchUsersMe(state),
    queryKey: ["user_me", state],
    enabled: isAuth,
    select: (data) => data.data,
    retry: 1,
    onSuccess: (data) => {
      stateContext.dispatch({ type: "SET_USER_ME", payload: data })
    },
  })
}
