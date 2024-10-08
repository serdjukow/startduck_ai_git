import { useQuery } from "@tanstack/react-query"
import useAuthStore from "./../store/useAuthStore"
import { verifyTokenFn } from "./../services/AuthService"
import { useShallow } from "zustand/react/shallow"

export const useVerifyTokenAuth = () => {
  const { accessToken, isAuth } = useAuthStore(
    useShallow((state) => ({
      accessToken: state.accessToken,
      isAuth: state.isAuth,
    }))
  )

  return useQuery({
    queryKey: ["authStatus"],
    queryFn: () => verifyTokenFn(accessToken),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    enabled: isAuth && !!accessToken,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
    retry: 1,
    onError: (e) => {
      console.error("useCheckAuth", e.message)
    },
  })
}
