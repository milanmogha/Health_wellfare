import React from 'react'
import styled from 'styled-components'
import { Piedata } from '../assets/Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'; 
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import Img from "../assets/Images/sadgirl2.png"
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 


const Container=styled(motion.div)`
    width:85%;
    min-height:80vh;
    margin:5rem auto;
    display:flex;
    justify-content:center;
    background-color: #c3e9fa;
    border-radius: 30px;
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
const Heading=styled(motion.h1)`
    font-size: 44px;
    text-align: center;
    font-weight: bold;
    color: black;
    text-shadow: 0 0 1px #fff;
`
const Subtitle=styled(motion.h2)`
        text-align: center;
        font-size: 2rem;
        color: black;
        margin-bottom: 1rem;
    `
    const TagWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  `;
  
  const Tag = styled.span`
    background-color: #602aa2;
    text-align: center;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 2rem;
  `;

  const ImageWrapper = styled(motion.div)`
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
  
export const Features = () =>{
  const motionVariants=useMotion();
  return(
    <>
      <Container
      variants={motionVariants.fadeInBottomVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} >
        <Box>
          {/* <Pie data={config} options={options}/> */}
          <ImageWrapper
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} >
          <img src={Img} alt="Sad girl" />
        </ImageWrapper>
        </Box>
        <Box className='text'>
        <Heading
        variants={motionVariants.fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} >
            1 in 8 people suffer from Mental Health Issues
        </Heading>
        <Subtitle
        variants={motionVariants.fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} >That's 970 million people. That's too many people. MannMitra can conduct hyper-realistic therapy sessions to help you combat problems like</Subtitle>
        <TagWrapper
        variants={motionVariants.fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} >
          <Tag>Anxiety</Tag>
          <Tag>Stress</Tag>
          <Tag>ADHD</Tag>
          <Tag>Depression</Tag>
          <Tag>OCD</Tag>
          <Tag>Loneliness</Tag>
          <Tag>Self esteem issues</Tag>
        </TagWrapper>
        </Box>
        </Container>
    </>
  )
}

