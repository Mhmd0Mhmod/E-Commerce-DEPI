import React, { createContext, useState, useContext } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuthed = useIsAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthed);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
