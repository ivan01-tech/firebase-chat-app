import styled from "styled-components";
import { primaryColor } from "../../utils/colors";

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${primaryColor};
`;

export const SignInWrapper = styled.div`
  width: 350px;
  background-color:white;
  padding:30px  50px  ;
  border-radius: 7px;
  
`;
export const SignInHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

// export const Form = styled.form`
// /* width: 95%; */
// margin: auto;
// `;

export const FromGroIn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
  font-weight: 600;
  
`;



export const Message = styled.p`
  color:${function ({ color }) {
    return color
  }} ;
  width: 100%;
  margin: auto;
  padding: 10px;
`

export const Error = styled(Message)`
  color: red;
`

