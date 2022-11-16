import styled from "styled-components";
import { primaryColor } from "../../utils/colors";

export const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${primaryColor};
`;

export const SignUpWrapper = styled.div`
  width: 350px;
  background-color:white;
  padding:30px  50px  ;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SignUpHeader = styled.div`
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
// gap: 20px;
// display: flex;
// flex-direction: column;
// `;

export const FromGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
  /* font-weight: 600; */
  
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

