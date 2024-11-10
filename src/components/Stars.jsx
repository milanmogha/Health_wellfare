import React, { useState } from 'react';
import styled from 'styled-components';

const Star = styled.span`
  cursor: pointer;
  font-size: 35px;
  color: ${({ isActive, isHovered }) => (isActive || isHovered ? 'gold' : 'gray')};
    transition: 0.5s ease;
    position: relative;
    top: -3px;
  &:hover {
    color: gold;
  }
`;

export const Stars = ({ setRating, rating }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          isActive={rating >= star}
          isHovered={hoveredStar >= star}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          onClick={() => setRating(star)}
        >
          ★
        </Star>
      ))}
    </div>
  );
};
