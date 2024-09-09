import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
  const { role, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
