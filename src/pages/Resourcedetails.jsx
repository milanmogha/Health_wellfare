import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { resourcedetails } from '../assets/Data';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 

const MotionContainer = styled(motion.div)`
  width: 95%;
  min-height: 30vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 2rem;
  border-radius: 30px;
  background-color: #4ec1f2;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, .25);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MotionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: #0494d1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled(motion.div)`
  flex: 2;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 90%;
    max-width: 400px;
    height: 90%;
    border-radius: 10px;
  }
`;

const VideoWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 2.2rem;

  iframe {
    width: 35%;
    height: 220px;
    border: none;
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.h1`
  font-size: 2.5rem;
`;

const Text2 = styled.p`
  font-size: 2rem;
  color: #202020;
`;

export const Resourcedetails = () => {
  const { id } = useParams();
  const resource = resourcedetails.find((p) => p.id === parseInt(id));

  const motionVariants = useMotion();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!resource) {
    return <div>Podcast not found!</div>;
  }

  return (
    <MotionContainer
      variants={motionVariants.fadeInTopVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} 
    >
      <MotionHeader
        variants={motionVariants.fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h1>{resource.title}</h1>
      </MotionHeader>

      <ContentWrapper>
        <TextContent
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Text>{resource.description}</Text>
          <Text2>{resource.longDescription}</Text2>
        </TextContent>

        <ImageWrapper
          variants={motionVariants.fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <img src={resource.image} alt="Podcast" />
        </ImageWrapper>
      </ContentWrapper>

      <VideoWrapper
        variants={motionVariants.fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <iframe src={resource.video1} title="Video 1"></iframe>
        <iframe src={resource.video2} title="Video 2"></iframe>
      </VideoWrapper>
    </MotionContainer>
  );
};
