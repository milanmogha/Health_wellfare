import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../Context'
import { useMotion } from '../Motion';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled(motion.form)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: #0494d1;
  font-size: 2rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  padding-left: 30px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #0494d1;
  
  & + span { 
      color: #0494d1; 
    }}
`;

const Icon = styled.span`
  position: absolute;
  top: 55%;
  transition: color 0.3s ease;
  left: 0.75rem;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #202020;
  
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: #0494d1;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4ec1f2;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #0494d1;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
`;

const LoginLink = styled.div`
  margin-top: 1rem;
  color: #888;
  font-size: 1.3rem;
  a {
    color: #0494d1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Form Validation and Component
export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    mentalHealthStatus: '',
    age:'' 
  });

  const Navigate=useNavigate();
  const {StoreToken}= useAuth()

  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    if (!formData.username) validationErrors.username = 'Username is required';
    if (!formData.email) validationErrors.email = 'E-mail is required';
    else if (!formData.email.includes('@')|| !formData.email.endsWith('.com')) validationErrors.email = 'E-mail is invalid';
    if (!formData.age) validationErrors.age = 'Age is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    else if (formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) validationErrors.confirmPassword = 'Confirm Password is required';
    else if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    
    return validationErrors;
  };

  const handleSubmit = async(e) => {  
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          const res_data = await response.json();
          StoreToken(res_data.token);
          toast.success("Account created successfully!", { position: "top-center" });
          setErrors({});
          Navigate("/login");
        } else {
          const errorMsg = await response.text();
          toast.error(`Error: ${errorMsg}`, { position: "top-center" });
          setErrors({ form: errorMsg });
        }
      } catch (error) {
        console.log(error)
        toast.error("Network error. Please try again.", { position: "top-center" });
      }
    }
  };


const motionVariants=useMotion();

const handleChange = (e) => {
  const name = e.target.name;
  let value = e.target.value; 

  
  if (name === 'phone' || name === 'age') {
      value = Number(value); // Convert to number to avoid db error
  }

  setFormData({
      ...formData,
      [name]: value,
  });
};

  return (
    <Container>
       <ToastContainer />
      <Form onSubmit={handleSubmit}
      variants={motionVariants.fadeInBottomVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <Title>Sign Up</Title>

       {/* Username Input */}
        <InputWrapper>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          <Icon><ion-icon name="person-circle-outline"></ion-icon></Icon>
        </InputWrapper>

        {/* Email Input */}
        <InputWrapper>
          <Input
            type="text"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <Icon><ion-icon name="mail-outline"></ion-icon></Icon>
        </InputWrapper>

        {/* Age Input */}
        <InputWrapper>
        
          <Input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <Icon><ion-icon name="calendar-outline"></ion-icon></Icon>
          {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
        </InputWrapper>

        
        {/* Phone Input */}
        <InputWrapper>
        
          <Input
            type="number"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Icon><ion-icon name="calendar-outline"></ion-icon></Icon>
          {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
        </InputWrapper>

        {/* Mental Health Status Dropdown */}
        <InputWrapper>
          <Select
            name="mentalHealthStatus"
            value={formData.mentalHealthStatus}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>Mental Health Status</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </InputWrapper>

        {/* Password Input */}
        <InputWrapper>
        
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <Icon><ion-icon name="lock-closed-outline"></ion-icon></Icon>
        </InputWrapper>

        {/* Confirm Password Input */}
        <InputWrapper>
        
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <Icon><ion-icon name="lock-closed-outline"></ion-icon></Icon>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </InputWrapper>

        {/* Privacy Policy Checkbox */}
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            name="agree"  
            onChange={handleChange}
          />
          <Label>I accept terms of privacy policy</Label>
        </CheckboxWrapper>
        {errors.agree && <ErrorMessage>{errors.agree}</ErrorMessage>}

        {/* Submit Button */}
        <Button type="submit">Create Account</Button>

        {/* Login Link */}
        <LoginLink>
          Already have an account? <a href="/login">Sign in here</a>
        </LoginLink>
      </Form>
    </Container>
  );
};
