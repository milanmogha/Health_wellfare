import React from 'react';
import styled from 'styled-components';
import { resources } from '../assets/Data';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion';

const CardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const Card = styled.div`
  width: 38%;
  background-color: #cffffb;    
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: 0.3s ease-in-out;
  margin: 0 30px;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled(motion.div)`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


const Button = styled.button`
  background-color: #4ec1f2;
  border: none;
  border-radius: 10%;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    background-color: #0494d1;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;


export const Resources = () => {
const navigate=useNavigate();
const handleClick = (id) => {
    navigate(`/resources/${id}`);
  };
const motionVariants=useMotion()
  return (
    <CardContainer
    variants={motionVariants.fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
      {resources.map((resources, index) => (
        <Card key={index}>
          <Image src={resources.image} alt={resources.title} 
          variants={motionVariants.fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}/>
          <CardContent
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}>
            <Title>{resources.title}</Title>
            <Description>{resources.description}</Description>
            <br />
            <Button onClick={() => handleClick(resources.id)}>View More</Button>
          </CardContent>
        </Card>
      ))}
    </CardContainer>
  );
};

