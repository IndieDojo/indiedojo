import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container } from '../styled/Grid'
import { WithPadding, MainTitle, Subtitle } from '../styled/Base';
import { Logo } from '../styled/Logo'
import Booking from './Booking'

// this breaks SSR: height: ${props => props.isMobile ? `100vh` : `${window && window.innerWidth * 0.5625}px`};

// 1.125 is a ratio of height/width of the cover photo
const VideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 100vh;
`;

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;

const VideoCover = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // background: url('/black-pattern-2x2.png'), rgba(0,0,0,0.15);
  background-position: left-top;
  background-repeat: reapeat;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  z-index: 1;
`;

const LandingMessageWrapper = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

const Image = styled.img`
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
`;

const Image2 = styled.img`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
`;

const Cover = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Title = styled.h1`
`;

const Jumbo = ({isMobile}) =>
  <VideoWrapper className='video-wrapper' isMobile={isMobile}>
    
    <Image src="/35836232345_d90bfef2f6_b.jpg"/>



    <Image2 src="/freddie-marriage-50490.jpg"/>

    <LandingMessageWrapper>
      <Logo isMobile={isMobile}/>
      <Title>A one-week bootcamp <br/>for indie hackers</Title>
      <Booking light isMobile={isMobile}/>
    </LandingMessageWrapper>

  </VideoWrapper>
export default Jumbo
