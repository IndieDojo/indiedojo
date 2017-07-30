import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../styled/Grid'
import { WithPadding, MainTitle, Subtitle } from '../styled/Base';
import { Logo } from '../styled/Logo'
import Booking from './Booking'
import BookingScalable from './BookingScalable'

// 1.125 is a ratio of height/width of the cover photo
const JumboWrapper = styled.div`
  position: relative;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    align-items: center;
  }
  @media only screen and (min-width: 701px) {
    align-items: flex-start;
    height: 100vh;
    margin-bottom: 50vh;
  }
`;

const LandingMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    justify-content: center;
    align-items: center;
    margin: -20vw 0 20px 0;
    padding: 0 1rem;
  }
  @media only screen and (min-width: 701px) {
    justify-content: flex-start;
    align-items: flex-start;
    ${''/* position: absolute; */}  // breaks design in Safari
    padding-left: 30px;
  }

`;

const Image = styled.div`

  background-size: cover;
  width: 100%;

  @media only screen and (min-width: 701px) {
    position: absolute;
    z-index: 9;
    height: 100%;
    left: 0;
    top: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }
`;

const Image1 = Image.extend`
  background-image: url('/tiny/riff.jpg');

  @media only screen and (max-width: 700px) {
    display: none;
    height: 180px;
  }

  @media only screen and (min-width: 701px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  }
`;

const Image2 = Image.extend`
  background-image: url('https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/tiny/tori-gate.jpg');

  @media only screen and (max-width: 700px) {
    background-position: center 100%;
    height: 50vw;
    clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  }

  @media only screen and (min-width: 701px) {
    top: 50%;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
    -webkit-clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
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
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`

export const LogoImage = styled.img`
  display: block;
  max-width: 160px;
  position: relative;
`

export const PageTitle = Subtitle.extend`
  text-align: left;
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`

const Jumbo = ({isMobile}) =>
  <JumboWrapper isMobile={isMobile}>

    <Image1/>
    <Image2/>

    <LandingMessageWrapper>
      <LogoImage src="/images/indiedojo.png"/>
      <PageTitle size='lg' bold>A one-week bootcamp<br/>for indie hackers</PageTitle>
      <BookingScalable/>
    </LandingMessageWrapper>


  </JumboWrapper>

export default Jumbo;
