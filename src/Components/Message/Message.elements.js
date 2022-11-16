import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction:${function ({ owner }) {
    return owner === false ? 'row' : 'row-reverse'
  }};
  gap: 20px;
`
export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .8rem;
  color: gray;
  gap: 3px;
  width: 15%;
  font-weight: 300;
`
export const TextContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${function ({ owner }) {
    return owner === false ? 'flex-start' : 'flex-end'
  }};
  gap: 5px;
  width:min-content;
  width:85%;
`
export const Text = styled.p`
   background-color: ${function ({ owner }) {
    // console.log(owner, 'owner')
    return owner === false ? '#FFF' : '#4169e1'
  }};
   color: ${function ({ owner }) {
    return owner === false ? '#000' : '#FFF'
  }};
  ${function ({ owner }) {
    return owner === false ? 'border-radius:0px 6px 6px 6px;' : 'border-radius:6px 0px 6px 6px;'
  }}
  max-width: max-content;
  padding: 5px 15px;
`

export const ImgContent = styled.img`
  width: 50%;
  object-fit: cover;
  border: 4px solid ${function ({ owner }) {
    return owner === false ? '#FFF' : '#4169e1'
  }};
  border-radius: 5px;
`

