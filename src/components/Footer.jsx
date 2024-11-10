import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo';

const Container = styled.div`
    width: 100%;
    background-color: #c3e9fa;
    color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 4rem;
        text-align: left;
    }
`;

const DescriptionSection = styled.div`
    max-width: 600px;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    p{
      font-size: 1.5rem;
      color: black;
    }
`;

const LinksSection = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 3em;
    align-items: center;
    @media (min-width: 768px) {
        align-items: flex-start;
    }
    .point{
      cursor:pointer;
    }
`;

const Helpline = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #202020;
`;

const SocialMediaLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;


const SocialIcon = styled.a`
    color: #202020;
    font-size: 1.8rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: grey;
    }
`;

export const Footer = () => {
  return (
    <Container>
      <DescriptionSection>
      <Logo/><br/>
        <p>
        At MannMitra, we are dedicated to providing mental health support. Our platform offers a safe space where users can talk openly and receive helpful insights to manage their well-being. #BeBetterEveryDay
        </p>
        
      </DescriptionSection>

      <LinksSection>
        <Helpline>TeleMANAS helpline number: 1-8008914416</Helpline>
          <Helpline>ASHA helpline number: 0172-2660078</Helpline>
          <SocialIcon href="https://github.com/codermilind-op/MannMitra" target="_blank" aria-label="LinkedIn">Visit Project's Github repository</SocialIcon>
        <SocialMediaLinks>
          <SocialIcon href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </SocialIcon>
          <br></br>
          
          
          
        </SocialMediaLinks>
      </LinksSection>
    </Container>
  );
};
