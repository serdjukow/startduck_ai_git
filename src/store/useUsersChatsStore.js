import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { fetchUsersChatsFn } from "../services/ChatsService.js"

const useUsersChatsStore = create(
  devtools(
    persist(
      (set, get) => ({
        chats: [],
        error: null,
        activeUserId: null,
        activeChatId: null,
        loading: false,
        error: null,
        activeUser: null,
        
        setActiveUserId: (id) => {
          const activeUser = get().chats.find((chat) => chat.id === id) || null
          set({ activeUserId: id, activeUser });
        },

        fetchUserChat: async () => {
          set({ loading: true })
          try {
            const res = await fetchUsersChatsFn()
            set({ chats: res.data, error: null })
          } catch (error) {
            set({ error: error.message })
          } finally {
            set({ loading: false })
          }
        },

        getStatusClass: (is_lead, in_process) => {
          if (is_lead) return "online"
          if (in_process) return "away"
          return ""
        },
      }),
      {
        name: "chats",
        version: 1,

        migrate: (persistedState, version) => {
          if (version === 1) {
            return {
              ...persistedState,
              chats: persistedState.chats.map((chat) => ({
                ...chat,
                chatbot: chat.chatbot || 0,
                token: chat.token || "",
                user_uuid: chat.user_uuid || "",
                transfer_to_operator: chat.transfer_to_operator || false,
                chat_panel_id: chat.chat_panel_id || "",
                total_messages: chat.total_messages || 0,
                is_lead: chat.is_lead || false,
                in_process: chat.in_process || false,
                created_at: chat.created_at || new Date().toISOString(),
              })),
            }
          }
          return persistedState
        },
      }
    )
  )
)

export default useUsersChatsStore