import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../styled/Grid'
import { WithPadding, MainTitle, Subtitle } from '../styled/Base';
import { Logo } from '../styled/Logo'
import Booking from './Booking'
import BookingScalable from './BookingScalable'

// this breaks SSR: height: ${props => props.isMobile ? `100vh` : `${window && window.innerWidth * 0.5625}px`};

// 1.125 is a ratio of height/width of the cover photo
const JumboWrapper = styled.div`
  position: relative;
  min-width: 100%;
  // margin-bottom: 33.33vw; //( 50% * 2/3 * window width)
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    align-items: center;
  }
  @media only screen and (min-width: 601px) {
    align-items: flex-start;
    height: 100vh;
    margin-bottom: 50vh;
  }
`;

const LandingMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    margin: -20vw 0 20px 0;
    padding: 0 1rem;
  }
  @media only screen and (min-width: 601px) {
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    padding-left: 50px;
  }
 
`;

const Image = styled.div`

  background-size: cover;
  width: 100%;

  @media only screen and (min-width: 601px) {
    position: absolute;
    z-index: 9;
    height: 100%;
    left: 0;
    top: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }
`;

const Image1 = Image.extend`
  background-image: url('/photos/talk.jpg');

  @media only screen and (max-width: 600px) {
    display: none;
    height: 180px;
  }

  @media only screen and (min-width: 601px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }
`;

const Image2 = Image.extend`
  background-image: url('/photos/pawel-nolbert-310974.jpg');

  @media only screen and (max-width: 600px) {
    background-position: center 100%;
    height: 50vw;
    clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  }
  
  @media only screen and (min-width: 601px) {
    top: 50%;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
  }

`;

const Cover = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Statement = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`

export const LogoImage = styled.img`
  display: block;
  max-width: 160px;
  position: relative;
`

const Jumbo = ({isMobile}) =>
  <JumboWrapper isMobile={isMobile}>

    <Image1/>
    <Image2/>

    <LandingMessageWrapper>
      <LogoImage src="/images/indiedojo.png"/>
      <Statement>A one-week bootcamp<br/>for indie hackers</Statement>
      <BookingScalable/>
    </LandingMessageWrapper>


  </JumboWrapper>

export default Jumbo;