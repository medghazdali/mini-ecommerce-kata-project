import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RedirectIfAuthenticated: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />; // Redirect to home if already logged in
  }

  return <Outlet />;
};

export default RedirectIfAuthenticated;
