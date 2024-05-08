import { Outlet, Navigate } from 'react-router-dom';
import Routes from '~constants/routes.enum';
// import { isAuthenticated } from 'src/services/authService';
import { useAppSelector } from '~configs/store/hooks';
import { selectors } from '~features/Auth';

const PrivateRoutes = () => {
  // const isAuth = isAuthenticated();
  const isAuthenticated = useAppSelector(selectors.getAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};

export default PrivateRoutes;
