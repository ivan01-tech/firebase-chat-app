import styled from "styled-components"

export const MessagesWrapper = styled.div`
display: flex;
flex-direction: column;
overflow-y: auto;
width: 100%;
flex: 1;

&::-webkit-scrollbar {
  visibility: hidden;
  width: 12px; /* width of the entire scrollbar */
}

&::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1); /* color of the tracking area */
}

&::-webkit-scrollbar-thumb {
  background-color: orange; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid orange; /* creates padding around scroll thumb */
}

&:hover{

&::-webkit-scrollbar {
  visibility: visible;
}
}
`

export const EmptyChat = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  align-items: center;
  font-weight: bold;
  color: gray;
  h4{
    text-transform: uppercase;
  }
  p{
    padding: 5px;
    border-radius: 15px;
    font-size: .8rem;
    background-color: lightgray;
  }
`