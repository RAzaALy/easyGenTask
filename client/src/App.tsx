// App.tsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignUp from '~pages/Signup';
import Login from '~pages/Login';
import ApplicationPage from '~pages/Application';
import Navbar from '~layouts/Navbar';
import PrivateRoutes from './routes/ProtectedRoute';
import { getAuthData } from './services/authService';
import { useAppDispatch, useAppSelector } from '~configs/store/hooks';
import { actions, selectors } from '~features/Auth';
const App: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
const isAuthenticated = useAppSelector(selectors.getAuthenticated);
  useEffect(() => {
    const data = getAuthData();
    dispatch(actions.setUser(data?.user));
    data?.token && dispatch(actions.setAuthenticated(true));
    data?.token && navigate('/application');
  }, []);

  return (
    <>
      {isAuthenticated && <Navbar />} 
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/application" element={<ApplicationPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
