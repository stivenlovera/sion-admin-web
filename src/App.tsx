import { lazy, useEffect, useState } from 'react';
import './App.css';
import { Navigate, useRoutes } from 'react-router-dom';
import { modules } from './routes/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { SelectToken } from './Reducers/Slices/LoginSlice';
import { useAuthenticate } from './pages/login/hooks/useAuthenticate';
import { SessionContext } from './context/contextSessionTime';
const Login = lazy(() => import('./pages/login/login'));
const Page404 = lazy(() => import('./pages/page404/page-no-encontrada'));
const Sidebar = lazy(() => import('./components/Layout/side-bar/sideBar/sidebar'));
const SplashScreem = lazy(() => import('./pages/splash-screem/index'));

function App() {
  const token = useSelector(SelectToken);
  const [logger, setLogger] = useState('validando');
  const [time, setTime] = useState<boolean>(false)


  const inizialize = async () => {
    await getAuthenticate();
    setLogger('autorizado');
  }
  useEffect(() => {
    if (token) {
      inizialize()
    } else {
      setLogger('no autorizado')
    }
  }, [token])

  const { authorizacion, getAuthenticate } = useAuthenticate()

  const AuthRoutes = useRoutes([
    {
      path: "",
      element:
          <Sidebar authentication={authorizacion} />,
      children: modules(authorizacion),
    },
    {
      path: "*",
      element: <Page404 />
    },
  ]);

  const AnonimoRoutes = useRoutes([
    {
      path: "",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pagina-no-encontrada",
      element: <Page404 />
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ]);

  const ValidateRoutes = useRoutes([
    {
      path: "*",
      element: <SplashScreem />,
    },
  ]);

  if (token) {
    //periodo de espera
    if (logger == 'validando') {
      return ValidateRoutes;
    } else {
      return AuthRoutes;
    }
    //no autenticado
  } else {
    return AnonimoRoutes;
  }
}

export default App;
