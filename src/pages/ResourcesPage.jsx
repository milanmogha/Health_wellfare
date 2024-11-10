import React from "react";
import styled from "styled-components";
import logo from '../assets/images/sad2.png';
import { Resources } from "../components/Resources";
import { motion } from "framer-motion";
import { useMotion } from "../Motion";

const Container=styled.div`
    width:90%;
    min-height:60vh;
    margin:2rem auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px;
   
    .text{
      @media (max-width: 575px) {
      }
    }
    @media (max-width: 575px) {
      flex-direction: column-reverse;
      width: 100%;
    }
`
const Box = styled(motion.div)`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
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
const Heading=styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #2774c7;
    text-shadow: 0 0 4px #fff;
`

const Imgcontainer=styled(motion.div)`
  width:30%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Img=styled.img`
  height: 35em;
`
const Subtitle=styled.h2`
    text-align: left;
    font-size: 20px;
    color: #202020;
    text-shadow: 0 0 1px #fff;
    font-weight: bold;
    margin-bottom: 1rem;
`

export const ResourcesPage = () => {
 const motionVariants = useMotion();
  return (
    <>
    <Container>
        <Box className='text'
        variants={motionVariants.fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
        <Heading>
        Mental health is about the functionality of your brain and all that impacts it
        </Heading>
        <Subtitle>
        In a nutshell, mental health includes your psychological and social well-being. It also encompasses your emotional health, or your ability to name, address, and regulate your emotions. Here's what you can do to improve yours
        </Subtitle>
        </Box>
        <Box>
        <Imgcontainer
        variants={motionVariants.fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
              <Img src={logo}/>
              </Imgcontainer>
        </Box>
    </Container>
    <Resources/>
    </>
  )
}

