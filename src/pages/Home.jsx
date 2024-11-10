import React from 'react'
import { Hero } from '../components/Hero'
import { Statistics } from '../components/Statistics'
import { Reviews } from '../components/Reviews'
import styled from 'styled-components'
import { Features } from '../components/Features'
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'
import { useAuth } from '../Context';

const Heading=styled(motion.h1)`
    font-size: 44px;
    text-align: center;
    font-weight: bold;
    color: #202020;
`
const Subtitle=styled(motion.h2)`
  margin-top: 1rem;
        text-align: center;
        font-size: 2.5rem;
        color: #666;
        margin-bottom: 1rem;
    `
const Btn=styled(motion.button)`
background-color: transparent; //new;
height:5rem;
border-radius:10px;
margin-top: 1rem;
text-align: center;
padding: 1rem;
font-size: 2rem;
font-weight: bold;
border:3px solid #4ec1f2;
  background-color: #4ec1f2;

cursor:pointer;
&:hover{
  background-color: transparent;
  text-shadow:.5px .5px black;
  transform: scale(1.1);
  transition: all 0.2s ease;
}
`;
const Container = styled.div`
  width:60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    position: relative;
    margin: auto;
    padding: 20px;
    /* border: 2px solid red; */
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
`;
const A=styled.a`
  all: unset;
`

export const Home = () => {
  const { isLoggedIn } = useAuth(); 
  const motionVariants=useMotion();
  return (
    <>
      <Hero/>
      <Statistics/>
      <Reviews/>
      <Features/>
      <Container>
    <Heading
    variants={motionVariants.fadeInLeftVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}>So what are you waiting for?</Heading>
    <Subtitle
    variants={motionVariants.fadeInRightVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}>Start your journey towards better mental health today</Subtitle>
    <Btn
    variants={motionVariants.fadeInBottomVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}><A href={isLoggedIn?'./chat':'./login'}>Chat with us now</A></Btn>
    </Container>
    </>
  )
}

