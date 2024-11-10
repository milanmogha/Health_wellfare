import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'; 
import { exampledata } from '../assets/Data';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

// Keyframe for fade-out effect
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Styled-components for dynamic theme
const Bigbox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border-radius: 25px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
  animation: ${({ fade }) => (fade ? fadeOut : 'none')} 1s ease forwards;
  background-color: ${({ theme }) => theme.backgroundColor}; /* Dynamically change background */
`;

const Chatbox1 = styled(motion.div)`
  background-color: ${({ theme }) => theme.chatBox1}; /* Dynamically change background */
  padding: 12px 18px;
  margin: 10px 0;
  border-radius: 20px;
  max-width: 85%;
  color: ${({ theme }) => theme.textColor}; /* Dynamically change text color */
  align-self: flex-start;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  word-wrap: break-word;
  border: 2px solid ${({ theme }) => theme.borderColor}; /* Dynamically change border color */
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const Chatbox2 = styled(motion.div)`
  background-color: ${({ theme }) => theme.chatBox2}; /* Dynamically change background */
  color: ${({ theme }) => theme.textColor}; /* Dynamically change text color */
  padding: 12px 18px;
  border: 2px solid ${({ theme }) => theme.borderColor}; /* Dynamically change border color */
  margin: 30px 0;
  border-radius: 20px;
  max-width: 85%;
  align-self: flex-end;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

const fadeDelay = 35000; // Time before fading out
const nextQuestionDelay = 37000; // Time before next question

export const Demotext = () => {
  const [index, setIndex] = useState(0);    // Question change state
  const [fade, setFade] = useState(false); // Fade animation state

  const motionVariants = {
    fadeInRightVariant: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    fadeInLeftVariant: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
  };

  const currentData = exampledata[index];

  // Define theme A (no theme switch functionality anymore)
  const themeA = {
    backgroundColor: '#fff',
    chatBox1: '#a0e2f2',
    chatBox2: '#b2f2f7',
    textColor: '#202020',
    borderColor: '#c3c3c3',
  };

  const theme = themeA; // Always using theme A

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFade(true); 
    }, fadeDelay);

    const nextIndexTimeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % exampledata.length);
      setFade(false); // Reset fade for the next question
    }, nextQuestionDelay);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextIndexTimeout);
    };
  }, [index]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Main Chat Box */}
      <Bigbox fade={fade} theme={theme}>
        <Chatbox1
          variants={motionVariants.fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          theme={theme}
        >
          {currentData.question}
        </Chatbox1>
        <Chatbox2
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          theme={theme}
        >
          <Typewriter
            key={index} 
            onInit={(typewriter) => {
              typewriter
                .typeString(`${currentData.answer}`)
                .pauseFor(2000)
                .start();
            }}
          />
        </Chatbox2>
      </Bigbox>
    </div>
  );
};
