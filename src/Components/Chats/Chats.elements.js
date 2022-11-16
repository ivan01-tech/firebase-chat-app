import styled from "styled-components";
import { background, secondaryColor } from '../../utils/colors'
import { Button, Input } from "../globalStyled";

export const ChatWrapper = styled.div`
  background-color: #${background};
  width:70%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
overflow: hidden;
padding: 15px;
background-color: #${secondaryColor};
color: whitesmoke;
`
export const Tools = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: 1.1rem;
`

export const FooterForm = styled.form`
  display: flex;
  align-items: center;
  height: 50px;
  
  justify-content: stretch;
  width: 100%;
  background-color: white;
  overflow: hidden;
`
export const FooterTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
.icons{
    display: inline-block;
    height: 70%;
    width: 35px;
    color: #80808086;
    font-weight: lighter;
  }
`

/** --------------------- Messages ----------------------- */



/**---------------------------------------------*/

export const ButtonFooterTools = styled(Button)`
  border-radius: 0;
  padding: 3px ;
  margin: auto;
  display: flex;
`

export const InputForm = styled(Input)`
   width: 70%;
   height: 100%;
   padding: 0;
  border: none;
  &:focus{
    border: none;
  }
`