import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Not authenticated , Login First');
    }
  }, [isAuthenticated]);
  return isAuthenticated ? children : <Navigate to="/home" />;
};

export default PrivateRoute;
