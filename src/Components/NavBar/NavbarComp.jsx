import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext.js";
import { Button } from "../globalStyled.js";
import { NavBar, NavBarWrapper, Logo, NavbarBody } from "./Navbar.elements.js";
function NavbarComp() {
  const { user, Logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async function () {
    try {
      const data = await Logout();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignIn = async function () {
    navigate("/login");
  };

  const handleSignUp = async function () {
    navigate("/signup");
  };

  return (
    <NavBar>
      <NavBarWrapper>
        <Logo>Chat App</Logo>
        <NavbarBody>
          {!Boolean(user?.email) && (
            <Button onClick={handleSignIn}>Sign In</Button>
          )}
          {!Boolean(user?.email) && (
            <Button onClick={handleSignUp}>Sign Up</Button>
          )}
          {Boolean(user?.email) && (
            <Button onClick={handleLogout} color="darkred">
              Sign Out
            </Button>
          )}
        </NavbarBody>
      </NavBarWrapper>
    </NavBar>
  );
}

export default NavbarComp;
