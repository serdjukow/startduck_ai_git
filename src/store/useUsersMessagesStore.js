import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-toastify"
import {
  fetchUsersMessagesFn,
  chatTransferFn,
  sendMessageFn,
} from "./../services/ChatsService"

const useUsersMessagesStore = create(
  devtools(
    persist(
      (set, get) => ({
        messages: [],
        status: "idle",
        error: null,
        datetime: null,
        loading: false,

        addMessage: (raw, role = "assistant") => {
          const newMessage = {
            id: uuidv4,
            raw,
            role,
            text: raw,
            created_at: new Date().toISOString(),
          }
          set({
            messages: [...get().messages, newMessage],
            status: "success",
          })
        },

        sendMessage: async (message, chatbot) => {
          // id
          const newMessage = {
            message: message,
            chatbot: chatbot,
            created_at: new Date().toISOString(),
          }
          set({ loading: true })

          try {
            console.log("sendMessage")
            const res = await sendMessageFn(newMessage, chatbot)
            console.log("sendMessage", res.data)
            set({
              messages: res.data.messages,
              status: res.data.status,
              error: null,
            })
          } catch (error) {
            set({ error: error.message, status: "error" })
          } finally {
            set({ loading: false })
          }
        },

        getMessagesByChatId: async (id) => {
          set({ loading: true })
          try {
            const res = await fetchUsersMessagesFn(id)
            set({
              messages: res.data.messages,
              status: res.data.status,
              error: null,
            })
          } catch (error) {
            set({ error: error.message, status: "error" })
          } finally {
            set({ loading: false })
          }
        },

        chatTransfer: async (id) => {
          set({ loading: true })
          try {
            const res = await chatTransferFn(id)
            toast.success(res.data.message)
          } catch (error) {
            set({ error: error.message, status: "error" })
          } finally {
            set({ loading: false })
          }
        },

        getDatetime: () => set({ datetime: new Date().toISOString() }),
      }),
      {
        name: "messages",
        version: 1,
      }
    )
  )
)

export default useUsersMessagesStore
