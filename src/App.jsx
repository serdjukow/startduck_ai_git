import { useEffect, Suspense, useMemo } from "react";
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes.js'
import Loader from './components/Loader.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useThemeStore from "./store/useThemeStore";
import useAuthStore from "./store/useAuthStore";
import { useVerifyTokenAuth } from './hooks/useCheckAuth.js';
import { useShallow } from 'zustand/react/shallow'

import './assets/scss/app.scss';
import './assets/scss/icons.scss';
import './assets/scss/bootstrap.scss';
import './App.scss';

const App = () => {
  const routes = useRoutes()
  const { isDarkTheme } = useThemeStore(useShallow((state) =>
  ({
    isDarkTheme: state.isDarkTheme,
  })));
  const { isAuth } = useAuthStore(useShallow((state) =>
  ({
    isAuth: state.isAuth,
  })));
  //const memoizedCheckAuth = useMemo(() => useVerifyTokenAuth(), []);
  const { isError, isLoading } = useVerifyTokenAuth()


  useEffect(() => {
    if (isLoading) {
      console.log("Проверка статуса авторизации...");
    }
    if (isError) {
      console.log("Ошибка при проверке авторизации. Пользователь не авторизован.");
    }
  }, [isError, isLoading]);


  useEffect(() => {
    isDarkTheme
      ?
      document.body.setAttribute("data-bs-theme", "dark")
      :
      document.body.setAttribute("data-bs-theme", '')
  }, [isDarkTheme]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{routes}</Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App
