import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.span`
   font-family: "Playfair Display", serif;
   font-style: normal;
   font-size: 4em;
   color: #602aa2;
   text-shadow: 0 0 4px #fff;
   font-weight: bold;
   cursor: pointer;
   transition: all 0.2s ease;
   position: relative;
   bottom: 10px;
   &:hover {
       transform: scale(1.02);
   }
   @media (max-width: 450px) {
    font-size: 1.5rem;
    margin-top: 50px;
    margin-right: 2rem;
  }
`;

const SLink = styled(Link)`
    all: unset;
`;

const Icon = styled.span`
   font-size: 1.5em;
   color: #602aa2;
   margin-left: 10px;
   text-shadow: 0 0 4px #fff;

   // Additional hover styling for the icon
   &:hover {
       color: #4ccdc3;
   }
`;
const Logo = () => {
  return (
    <>
      <LogoText>
        <SLink to='/'>
          MannMitra
          <Icon className="icon">
            <box-icon
            color="#602aa2" size="lg"
             type='solid' name='donate-heart'></box-icon>
          </Icon>
        </SLink>
      </LogoText>
    </>
  );
};

export default Logo;
