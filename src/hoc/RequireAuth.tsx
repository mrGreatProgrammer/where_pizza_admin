import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store";
// import { useAuth } from '../hooks/useAuth';

type RequireAuthProps = { children: JSX.Element };

const RequireAuth = ({ children }: RequireAuthProps): JSX.Element => {
  const location = useLocation();
  const { userInfo } = useAppSelector((state) => state.appSlice);

  // const {user} = useAuth();

  if (!userInfo) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
