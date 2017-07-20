import React, { Component } from "react";
import styled from "styled-components";
import { Subtitle, LinkTo } from "../styled/Base";


const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 601px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const BookingSubtitle = Subtitle.extend`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`

const BookingPrice = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
  a{
    color: ${props => props.light ? 'white' : 'inherit'};
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const BookingButton = styled.a`
  padding: 10px 30px;
  margin: 20px 0;
  display: block;
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${props => props.light ? 'white' : props.theme.colors.accent};
  color: ${props => props.light ? 'white' : props.theme.colors.primary};
  font-weight: ${props => props.theme.weights.bold};
  font-size: ${props => props.theme.fontSizes.lg};
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

const BookingScalable = ({ light, centered, isMobile }) =>
  <BookingWrapper centered={centered} isMobile={isMobile}>
    <BookingSubtitle light={light}>Kyoto, Japan, November 13-18 2017</BookingSubtitle>
    <BookingButton light={light}
      href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
    >
      Book Now
    </BookingButton>
    <BookingPrice>Early Registration Price: <br/> <strong>$1,990</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</BookingPrice>
  </BookingWrapper>


export default BookingScalable;
