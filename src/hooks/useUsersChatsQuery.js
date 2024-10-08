import { useQuery } from "@tanstack/react-query"
import { fetchUsersChatsFn } from "../services/ChatsService.js"

export const useUsersChatsQuery = (state) => {
  return useQuery({
    queryFn: () => console.log("useUsersChatsQuery"), //fetchUsersChatsFn(state), //fetchChat(state),
    queryKey: ["usersChats", state],
    enabled: true,
    select: (data) => data.data,
    retry: 1,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      if (err instanceof Error) {
        console.log(errmessage)
      }
    },
  })
}
