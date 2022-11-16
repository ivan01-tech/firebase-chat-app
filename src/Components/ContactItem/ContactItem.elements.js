import styled from "styled-components";
import { secondaryColor } from "../../utils/colors";

export const ContactItemWrapper = styled.div`
display: flex;
gap: 10px;
width: 100%;
height: auto;
padding: 5px 10px;
cursor: pointer;
overflow: hidden;
&:hover{
  background-color: #04083A ;
}
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span{
    font-size: .8rem;
  }
`