import styled, { createGlobalStyle } from "styled-components"
import { primaryColor, secondaryColor } from "../utils/colors"

export const GlobalStyle = createGlobalStyle`

h1{
  color:#${secondaryColor} ;
}

`

export const Form = styled.form`
/* width: 95%; */
margin: auto;
gap: 20px;
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
padding: 10px;
border: none;
border-bottom: 1px solid #4E3ACC;
width: 100%;
overflow: hidden;
/* display: block; */
margin: auto;
background-color:${function ({ color }) {
    return color ? color : `#F8FBFF`
  }};;

&:focus{
  border-radius: 4px;
  border: 1px solid #4E3ACC;
  outline: none;
border-bottom: 1px solid #4E3ACC;
}
&::placeholder{
  font-weight: bold;
  color: lightgray;
}
`
export const Label = styled.label`
display:flex;
align-items: center;
cursor: pointer;
/* font-size: .8rem; */
font-weight: 600;
color: gray;
`

export const Redirect = styled.div`
color:#B3C3C6;
font-size: .8rem;
margin-top: 1rem;
`

export const Button = styled.button`
padding: 10px;
margin: 10px;
outline: none;
border: none;
/* width: auto; */
width: 100%;

display: block;
margin: auto;
border-radius: 4px;
margin-top: 10px;
cursor: pointer;
background-color:${function ({ color }) {
    return color ? color : `#${primaryColor}`
  }};
/* border: 1px solid ${function ({ full, color }) {
    return full ? "inherit" : color
  }}; */

font-weight: bold;
color: white;

`

export const Img = styled.img`
  width:${function ({ width }) {
    return width ? width : 'auto'
  }} ;
  height:${function ({ width }) {
    return width ? width : 'auto'
  }}
  ;
border-radius: 50%;
  object-fit: cover;
`



