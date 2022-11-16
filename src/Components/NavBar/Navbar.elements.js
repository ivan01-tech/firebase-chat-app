import styled from "styled-components";
import { secondaryColor } from "../../utils/colors";

export const NavBar = styled.div`
  width: 100vw;
  max-height: 100px;
  background-color: #${secondaryColor};
  color: white;
  font-weight: 600;
  padding: 10px 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  `
export const NavBarWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.h4`

`
export const NavbarBody = styled.div`
  /* width: auto; */
  width: 40%;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`

