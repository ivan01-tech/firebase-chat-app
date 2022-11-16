import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../NavBar/NavbarComp";

function Layout() {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
}

export default Layout;
