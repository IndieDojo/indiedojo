import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../styled/Grid'
import { WithPadding, MainTitle, Subtitle } from '../styled/Base';
import { Logo } from '../styled/Logo'
import Booking from './Booking'
import BookingScalable from './BookingScalable'

// this breaks SSR: height: ${props => props.isMobile ? `100vh` : `${window && window.innerWidth * 0.5625}px`};

// 1.125 is a ratio of height/width of the cover photo
const VideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 66.66vw;
  margin-bottom: 33.33vw; //( 50% * 2/3 * window width)
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
`

const LandingMessageWrapper = styled.div`
  position: absolute;
  background: transparent;
  top: 16vw;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  background-image: url('/talk.jpg');
  background-size: cover;
`;

const Image2 = Image.extend`
  top: 50%;

  background-image: url('/pawel-nolbert-310974.jpg');
  clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
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
  font-size: 2.5vw;
`


const mobileImageUrl = "/indiedojo-first-frame-mobile.jpg";
const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
const landingPageVideoUrl720="https://player.vimeo.com/external/225555019.hd.mp4?s=5d365fe6ff3a4146ff42c705ebe626e4a02ad5b9&profile_id=174";
const videoFirstFrameUrl = "/indiedojo-first-frame.jpg";

export const LogoImage = styled.img`
  display: block;
  width: 10vw;
  position: relative;
`

const Jumbo = ({isMobile}) =>
  <VideoWrapper isMobile={isMobile}>

    <Image/>

    <Image2/>

    <LandingMessageWrapper>
      <Row>
        <Cell xs={6}>
          <LogoImage src="/indiedojo.png"/>
          <Statement>A one-week bootcamp<br/>for indie hackers</Statement>
          <BookingScalable/>
        </Cell>
      </Row>
    </LandingMessageWrapper>

  </VideoWrapper>

export default Jumbo;
