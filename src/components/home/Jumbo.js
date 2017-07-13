import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container } from '../grid/Grid'
import { MainTitle, Title, Subtitle } from '../components/Base';
import Booking from './Booking'

// 1.125 is a ratio of height/width of the cover photo
const VideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: ${props => props.isMobile ? `100vh` : `${window.innerWidth * 0.5625}px`};
  overflow:hidden;
`;

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100%;
  height: ${props => props.isMobile ? `100vh` : `${window.innerWidth * 0.5625}px`};
  z-index: -2;
`;

const VideoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isMobile ? `100vh` : `${window.innerWidth * 0.5625}px`};
  background: url('/black-pattern-2x2.png'), rgba(0,0,0,0.15);
  background-position: left-top;
  background-repeat: reapeat;
  z-index: 1;
`;

const LandingMessageWrapper = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -2;
`;


const Logo = styled.div`
  box-sizing: border-box;
  height: ${props => props.isMobile ? '100px' : '12vw'};
  width: ${props => props.isMobile ? '100px' : '12vw'};
  background-image: url('/indiedojo-white.png');
  background-size: contain;
  background-repeat: no-repeat;
`

const Jumbo = ({isMobile}) =>
  <VideoWrapper className='video-wrapper' isMobile={isMobile}>
    {isMobile
      ? <Image
          src="/indiedojo-first-frame-mobile.jpg"
        />
      : <VideoPlayer
          autoPlay
          loop
          muted
          playsInline
          poster="/indiedojo-first-frame.jpg"
          isMobile={isMobile}
        >
          <source
            src="https://player.vimeo.com/external/225405488.sd.mp4?s=a11ea740555d3ed029be2174fa7dd17df768f739&profile_id=164"
            type="video/mp4"
          />
        </VideoPlayer>
      }

    <VideoCover isMobile={isMobile}/>

    <LandingMessageWrapper>
      <Logo isMobile={isMobile}/>
      <MainTitle margin='md' color='transparentWhite' bold center>A one-week bootcamp for indie hackers</MainTitle>
      <Booking light isMobile={isMobile}/>
    </LandingMessageWrapper>
  </VideoWrapper>
export default Jumbo
