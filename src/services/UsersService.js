import $api from "../http/index.js"
import { Endpoints } from "../utils/consts.js"

const fetchUsersMeFn = async () => {
  return await $api.get(Endpoints.USERS.USERS_ME, { method: "GET" })
}

export { fetchUsersMeFn }
