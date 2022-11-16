import styled from 'styled-components'
import { secondaryColor } from '../../utils/colors'

export const ContactWrapper = styled.div`
  /* border-bottom-left-radius: 10px;
  border-top-left-radius: 10px; */
  width: 30%;
  background-color: #${secondaryColor};
  color: #fff;
  *{
    color: whitesmoke;
  }
  
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px  20px;
  gap: 10px;
  background-color: #070b42;
`
export const Name = styled.h3`

`
export const ContactList = styled.div`
display: flex;
flex-direction: column;
width: 100%;
/* gap: px; */
`

export const Img = styled.img`
  border-radius: 50%;
  
  width: 40px;
  height: 40px;
  object-fit: cover;
`
