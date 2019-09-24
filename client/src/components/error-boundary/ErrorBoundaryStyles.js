import styled from 'styled-components'

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
  @media screen and (max-width: 800px) {
     width: 30vh;
     height: 30vh;
  }
 
`
export const ErrorImageTextHeader = styled.h2`
  font-size: 27px;
  color: #5C77AC;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  padding-top: 20px;
  @media screen and (max-width: 800px) {
     min-width: 350px;
  }
`

export const ErrorImageText = styled.h2`
  font-size: 20px;
  color: #5C77AC;
  max-width: 700px;
`
