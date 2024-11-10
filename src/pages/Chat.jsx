import React from 'react'
import styled from 'styled-components'
import Img from "../assets/Images/sadgirl2.png"
import { motion } from 'framer-motion'
import { useMotion } from '../Motion'

const Container=styled.div`
  display: flex;
  margin: 3rem 10rem;
  align-items: center;
  justify-content: center;
  background-color:  white;
  border: 2px solid #a0e2f2;
  padding: 20px;
  border-radius: 30px;
`
const Btn=styled.button`
  height:5rem;
  border-radius:10px;
  text-align: center;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  border:3px solid #4ec1f2;
  background-color: #4ec1f2;
    text-shadow:.5px .5px black;
    color:white;
  cursor:pointer;
  &:hover{
    color: #202020;
    background-color: transparent;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
  a{
    all:unset;
  }
`;
const Box = styled.div`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    position: relative;
    /* border: 2px solid red; */
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
    &.text{
        margin-left: auto;
    }
`;
const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  
  img {
    width: 100%;
    max-width: 400px;
    height: 40rem;
    border-radius: 10px;
  }
`;
const Heading=styled(motion.h1)`
    font-size: 44px;
    text-align: center;
    font-weight: bold;
    color: #0494d1;
    text-shadow: 0 0 1px #fff;
`
const Subtitle=styled(motion.h2)`
        text-align: center;
        font-size: 2rem;
        color: #202020;
        margin-bottom: 1rem;
    `
export const Chat = () => {
  const motionVariants=useMotion()
  return (
    <Container>
      <Box>
      <Heading>Welcome to Your Mental Wellness Companion!</Heading>
      <Subtitle>Life can feel overwhelming, but remember, you're not alone. Our chatbot is here to provide you with a safe space to share, reflect, and find helpful guidance. </Subtitle>
      <Btn><a href=''>Let's Begin!</a></Btn>
      </Box>
      <Box>
      <ImageWrapper
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} >
          <img src="https://cdn1.iconfinder.com/data/icons/love-148/512/heart-valentine-love-romantic-man-happy-passion-256.png" alt="Sad girl" />
        </ImageWrapper>
      </Box>
    </Container>
  )
}
