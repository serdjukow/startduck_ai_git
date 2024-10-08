import $api from "../http/index.js"
import { Endpoints } from "../utils/consts.js"

const fetchUsersChatsFn = async () => {
  return await $api.get(Endpoints.USERS.USERS_CHATS, { method: "GET" })
}
export { fetchUsersChatsFn }

const fetchUsersMessagesFn = async (id) => {
  return await $api.get(`${Endpoints.CHATS.USERS_MESSAGES}${id}/messages/`, {
    method: "GET",
  })
}
export { fetchUsersMessagesFn }

const chatTransferFn = async (id) => {
  return await $api.patch(`${Endpoints.CHATS.USERS_TRANSFER}${id}/transfer/`, {
    transfer_to_operator: true,
  })
}
export { chatTransferFn }

const sendMessageFn = async (data, id) => {
  return await $api.get(`${Endpoints.CHATS.SEND_MESSAGE}${id}/messages/`, data)
}
export { sendMessageFn }
