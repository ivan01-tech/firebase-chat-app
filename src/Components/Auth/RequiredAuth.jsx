import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { auth } from "../../fireBase-config";

function RequiredAuth() {
  const { user } = useAuthContext();
  console.log(user);
  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default RequiredAuth;
