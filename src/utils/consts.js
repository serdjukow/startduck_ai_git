export const HOME_ROUTE = "/"

export const AUTTH_LOGIN_ROUTE = "/auth-login"
export const AUTTH_LOGOUT_ROUTE = "/auth-logout"
export const AUTH_CHANGEPASSWORD_ROUTE = "/auth-changepassword"
export const AUTH_RECOVERPW_ROUTE = "/auth-recoverpw"

export const CALENDAR_ROUTE = "calendar"

export const menuList = [
  {
    itemName: "Home",
    itemLink: HOME_ROUTE,
    itemIcon: "bx bx-conversation",
  },
  // {
  //   itemName: "Calendar",
  //   itemLink: CALENDAR_ROUTE,
  //   itemIcon: "mdi mdi-calendar-month-outline",
  // },
]

export const Endpoints = {
  BASE_URL: "https://back.comongames.com/api", //"https://sd.1236745-cb98970.tw1.ru/api",
  AUTH: {
    LOGIN: `/login/`,
    REFRESH: `/token/refresh/`,
    LOGOUT: `/logout/`,
    CHANGE_PASSWORD: `/change_password/`,
    PASSWORD_RESET: `/password_reset/`,
    PASSWORD_VERIFY: `/token/verify/`,
  },
  USERS: {
    USERS_ME: `/users/me/`,
    USERS_CHATS: `/users/chats/`,
  },
  CHATS: {
    USERS_MESSAGES: `/chat/`,
    USERS_TRANSFER: `/chat/`,
    SEND_MESSAGE: `/chat/`,
  },
}
