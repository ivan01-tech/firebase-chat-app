import styled from "styled-components";
import { background } from "../../utils/colors";

export const Home = styled.main`
    width:  100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${background};
`

export const HomeWrapper = styled.div`
  width: 60%;
  height: 80%;
  box-shadow: 10px 10px 16px 6px rgba(207,200,230,0.71);
  border-radius: 5px;
  overflow: hidden;
display: flex;
@media(max-width: 700px) {
    width: 95%;
    height: 95%;
  }
`
