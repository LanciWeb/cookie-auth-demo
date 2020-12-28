import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const ProtectedRoute = ({ children, path }) => {
  const { authToken } = useContext(AuthContext);

  if (!authToken) return <Redirect to="/login" />;

  return <Route path={path}>{children}</Route>;
};

export default ProtectedRoute;
