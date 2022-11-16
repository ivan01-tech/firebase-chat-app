import styled from "styled-components";
import { Input } from "../globalStyled";

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height:  ${function ({ fullheight }) {
    return fullheight ? "100%" : "max-content"
  }};
  transition: height .3s ease;
`
export const InputSearch = styled(Input)`
 ${function ({ fullheight }) {
    return fullheight && "position: absolute;"
  }};
  
${function ({ fullheight }) {
    return fullheight && "top:0;"
  }};

  border: none;
  border-radius: 0;
  &::placeholder{
    font-weight: lighter;
  }
  &:focus{
    border: none;
  }
  `
export const SearchListItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    *{color: black;}
  `
export const SearchList = styled.div`
  position: absolute;
  display: flex;
  padding: 5px;
  top: 40px;
  bottom: 0;
  
  width: 100%;
  background-color: whitesmoke;
  color: #000;
  gap: 20px;
  border-bottom: 1px solid gray;
  flex-direction: column;
  overflow: auto;
`