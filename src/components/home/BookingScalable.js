import React, { Component } from "react";
import styled from "styled-components";
import { Subtitle, LinkTo } from "../styled/Base";

const DatesWrapper = styled.div`
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centered ? 'center' : 'flex-start'};
`;

const BookingSubtitle = Subtitle.extend`
  color: ${props => props.theme.colors.text};
  font-size: 1.8vw;
`

const BookingPrice = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 1.75vw;
  a{
    color: ${props => props.light ? 'white' : 'inherit'};
  }

  @media (min-width: 600px) {
    font-size: 1.5vw;
  }
`;

const BookingButton = styled.a`
  display: inline-block;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  padding: 1vw 2vw;
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${props => props.light ? 'white' : props.theme.colors.accent};
  color: ${props => props.light ? 'white' : props.theme.colors.primary};
  font-size: 2vw;
  font-weight: ${props => props.theme.weights.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    border-color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    text-decoration: none;
  }
`

const BookingScalable = ({ light, centered, isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <BookingDate centered={centered} isMobile={isMobile}>
      <BookingSubtitle light={light}>Kyoto, Japan, November 13-18 2017</BookingSubtitle>
      <BookingButton light={light}
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book Now
      </BookingButton>
      <BookingPrice>Early Registration Price: <br/> <strong>$1,490</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</BookingPrice>
    </BookingDate>
  </DatesWrapper>
);

export default BookingScalable;
