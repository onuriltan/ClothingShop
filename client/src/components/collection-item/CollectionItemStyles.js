import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton'

export const CollectionItemContainer = styled.div`
    margin: 0 5px 30px 5px;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover {
      .image {
        opacity: 0.8;
      }
      button {
        opacity: 0.85;
        display: flex;
        &:hover {
         opacity: 1;
        }
      }
  }
  @media screen and (max-width: 800px) {
      width: 100%;
      min-width: 40vw;
      margin: 0;
      &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset; 
      }
  }
`

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.div`
   width: 90%;
   margin-bottom: 15px;
`

export const Price = styled.div`
    width: 10%;
    text-align: right;
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    &:hover {
     cursor: pointer;
    }
  }
`
