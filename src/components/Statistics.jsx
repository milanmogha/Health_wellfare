// src/components/StatisticsClone.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 
// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: -2rem auto;
  width: 95%;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:  white;
  border: 2px solid #c8cdcf ;
  border-radius: 30px;
  padding: 1.5rem;
  text-align: left;
  flex: 1 1 calc(50% - 1rem); /* Two cards per row */
  max-width: 46%;
  margin-bottom: 2rem;
  min-height: 250px;

  /* Media query to make cards stack on smaller screens */
  @media (max-width: 768px) {
    flex: 1 1 100%; /* Full-width for mobile */
    max-width: 100%;
  }
`;

const Title = styled(motion.h3)`
  text-align: center;
  font-size: 3rem;
  text-shadow: 1px 0 0 #f0f0f0;
  color: #5bd4f5;
  font-weight:500;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 1rem;
`;

const TagWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const Tag = styled.span`
  background-color: #bcf9f9;
  text-align: center;
  color: #3e4a4b;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 1.7rem;
`;

export const Statistics = () => {
  const motionVariants = useMotion();
  return (
    <Container>
      <Card
      variants={motionVariants.fadeInLeftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>92% users feel better after their first conversation</Title>
        <Subtitle>For 40% of cases that’s the only help needed.</Subtitle>
        <TagWrapper>
          <Tag>Anxiety</Tag>
          <Tag>Stress</Tag>
          <Tag>Navigating relationships</Tag>
          <Tag>Depression</Tag>
          <Tag>Emotional</Tag>
          <Tag>Work burnout</Tag>
          <Tag>Loneliness</Tag>
          <Tag>Low confidence</Tag>
        </TagWrapper>
      </Card>

      <Card
      variants={motionVariants.fadeInRightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>Available 24/7</Title>
        <Subtitle>No appointments or waiting rooms. Instant replies even on weekends and at 4 A.M.</Subtitle>
        <Subtitle><strong>34%</strong> of sessions happen after midnight, when no traditional services are available.</Subtitle>
      </Card>

      <Card
      variants={motionVariants.fadeInLeftVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>No stigma. Completely anonymous.</Title>
        <Subtitle>When talking to AI, people are not afraid of being judged and address their problems earlier.</Subtitle>
        <Subtitle><strong>21%</strong> of users said they would not have anyone to talk to except AI.</Subtitle>
      </Card>

      <Card
      variants={motionVariants.fadeInRightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>Safe to Use</Title>
        <Subtitle>AI detects when a person needs more than a chatbot and redirects them to appropriate resources, such as a therapist or hotlines.</Subtitle>
        <Subtitle>Unlike other chatbots, <strong >MannMitra</strong> is trained on thousands of "clinical hours" to follow evidence-based approach</Subtitle>
      </Card>
    </Container>
  );
};
