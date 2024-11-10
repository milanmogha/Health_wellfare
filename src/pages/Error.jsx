import React from 'react'
import styled from 'styled-components'
import Img from "../assets/Images/errorpage.png";
const Container=styled.div`
    width:85%;
    min-height:80vh;
    margin:5rem auto;
    display:flex;
    justify-content:center;
    background-color:  #c3e9fa;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
    padding: 0 20px;
    gap: 6rem;
    align-items:center;
    .text{
      @media (max-width: 575px) {
      }
    }
    @media (max-width: 575px) {
      flex-direction: column-reverse;
      width: 100%;
    }
`
const Box = styled.div`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    position: relative;
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
    &.text{
        margin-left: auto;
    }
`;
const Heading=styled.h1`
    font-size: 44px;
    text-align: center;
    font-weight: bold;
    color: #202020;
    text-shadow: 0 0 1px #fff;
`
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 400px;
    height: 50rem;
    border-radius: 10px;
  }
`;

export const Error = () => {
  return (
    <Container>
      <Box>
        <ImageWrapper>
        <img src={Img} alt="error image" />
        </ImageWrapper>
      </Box>
      <Box>
        <Heading>Page does not seem to exist</Heading>
      </Box>
    </Container>
  )
}


