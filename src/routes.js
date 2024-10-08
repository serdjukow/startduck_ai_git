import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {
  HOME_ROUTE,
  AUTTH_LOGIN_ROUTE,
  AUTTH_LOGOUT_ROUTE,
  AUTH_CHANGEPASSWORD_ROUTE,
  CALENDAR_ROUTE,
  AUTH_RECOVERPW_ROUTE,
} from "./utils/consts"
import Loader from "./components/Loader.jsx"
import useAuthStore from "./store/useAuthStore.js"

const HomePages = lazy(() => import("./ChatPages.jsx"))
const HomePage = lazy(() => import("./Pages/HomePage.jsx"))
const AuthPages = lazy(() => import("./AuthPages.jsx"))
const AuthLoginPage = lazy(() => import("./Pages/AuthLoginPage.jsx"))
const AuthLogoutPage = lazy(() => import("./Pages/AuthLogoutPage.jsx"))
const AuthChangepasswordPage = lazy(() =>
  import("./Pages/AuthChangepasswordPage.jsx")
)
const AuthRecoverpwPage = lazy(() => import("./Pages/AuthRecoverpwPage.jsx"))
const CalendarPage = lazy(() => import("./Pages/CalendarPage.jsx"))

export const useRoutes = () => {
  const { isAuth, isLoading } = useAuthStore()

  const PrivateRoute = ({ children }) => {
    if (isLoading) {
      return <Loader />
    } else if (!isLoading) {
      return isAuth ? children : <Navigate to={AUTTH_LOGOUT_ROUTE} />
    }
  }

  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomePages />}>
        <Route
          index
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path={CALENDAR_ROUTE}
          element={
            <PrivateRoute>
              <CalendarPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path={HOME_ROUTE} element={<AuthPages />}>
        <Route
          path={AUTTH_LOGIN_ROUTE}
          element={
            isAuth ? <Navigate to={HOME_ROUTE} replace /> : <AuthLoginPage />
          }
        />
        <Route
          path={AUTTH_LOGOUT_ROUTE}
          element={
            isAuth ? <Navigate to={HOME_ROUTE} replace /> : <AuthLogoutPage />
          }
        />
        <Route
          path={AUTH_CHANGEPASSWORD_ROUTE}
          element={
            isAuth ? (
              <PrivateRoute>
                <AuthChangepasswordPage />
              </PrivateRoute>
            ) : (
              <AuthLogoutPage />
            )
          }
        />

        <Route
          path={AUTH_RECOVERPW_ROUTE}
          element={
            isAuth ? (
              <Navigate to={HOME_ROUTE} replace />
            ) : (
              <AuthRecoverpwPage />
            )
          }
        />

        <Route path="*" element={<AuthLoginPage />} />
      </Route>
    </Routes>
  )
}
