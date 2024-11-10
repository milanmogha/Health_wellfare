import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'
import { useEffect } from 'react';
import { Stars } from '../components/Stars';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 3rem;
  background-color: ;
  border:2px solid #4ec1f2;
  border-radius: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
  }
`;


const Form = styled(motion.form)`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
  color: #202020;
  margin-bottom: 1.5rem;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #2c2828;
    box-shadow: 0 0 8px #2c2828;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: none;
    border-color: #2c2828;
    box-shadow: 0 0 8px #2c2828;
  }
`;

const Button = styled(motion.button)`
  width: 40%;
  padding: 0.8rem;
  background-color: #4ec1f2;
  border: 3px solid #4ec1f2;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    text-shadow: 0.5px 0.5px black;
    color: black;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;
const ImageWrapper = styled(motion.div)`
  display: none; 
  @media (min-width: 768px) {
    display: block;
    margin-top: 2rem;
    flex: 1;
    img {
      width: 80%;
      max-width: 400px;
      border-radius: 10px;
    }
  }
`;
const FeedbackForm = () => {


  //sending form data to db
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      username: event.target.name.value,
      email: event.target.email.value,
      feedback: event.target.feedback.value,
      rating: rating,
    };
  
    fetch("http://localhost:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message || "Failed to submit feedback");
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log("Success:", result);
        toast.success('Thanks for submitting feedback!', { autoClose: false })
        event.target.reset();
        setRating(0);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: false });
      });
  };
  
  const [rating, setRating] = useState(0)
  const motionVariants=useMotion()
  return (
    <Container>
      <ToastContainer position="top-center" />
        <ImageWrapper
          variants={motionVariants.fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} >
          <img src="https://cdn3.iconfinder.com/data/icons/star-related/64/customer-experience-256.png" alt="Sad girl" />
        </ImageWrapper>

      <Form onSubmit={handleSubmit}
      variants={motionVariants.fadeInRightVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>Fill this form to send us Feedback!</Title>
        
        <InputWrapper>
        <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" autoComplete="off" required />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" autoComplete="off" required />
        
      </InputWrapper>

        <Label>Rating</Label>
        <Stars rating={rating} setRating={setRating} />

        <InputWrapper>
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea id="feedback" name="feedback" rows="4" required></Textarea>
        </InputWrapper>


        <Button type="submit" >Submit</Button>
      </Form>
    </Container>
  );
};

export default FeedbackForm;
