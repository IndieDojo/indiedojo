import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../styled/Grid'
import { WithPadding, MainTitle, Subtitle } from '../styled/Base';
import { Logo } from '../styled/Logo'
import Booking from './Booking'
// const mobileImageUrl = "/indiedojo-first-frame-mobile.jpg";
// const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
// const landingPageVideoUrl720="https://player.vimeo.com/external/225555019.hd.mp4?s=5d365fe6ff3a4146ff42c705ebe626e4a02ad5b9&profile_id=174";
// const videoFirstFrameUrl = "/indiedojo-first-frame.jpg";

// const VideoPlayer = styled.video`
//   object-fit: cover;
//   width: 100%;
//   height: 100vh;
//   z-index: -2;
// `;

// const VideoCover = styled.div`
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   // background: url('/black-pattern-2x2.png'), rgba(0,0,0,0.15);
//   background-position: left-top;
//   background-repeat: reapeat;
//   background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
//   z-index: 1;
// `

// const Image = styled.div`
//   position: absolute;
//   z-index: 9;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
//   background-image: url('/talk.jpg');
//   background-size: cover;
// `;
//
// const Image2 = Image.extend`
//   top: 50%;
//
//   background-image: url('/pawel-nolbert-310974.jpg');
//   clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
// `;

// const Cover = styled.svg`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `
// const Statement = styled.h1`
//   color: ${props => props.theme.colors.text};
//   font-size: 2.5vw;
// `

const JumboWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 48vw; // comes from the proportion of the Image
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 48vw;
  left:0;
  top:0;
  background-image: url("/dajgoji-temple.jpg");
  clip-path: polygon(0% 0%, 100% 0%, 100% 20vw, 0% 40vw);
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 20vw, 0% 40vw);
  clip-path: url("#image-shape");
  background-size: cover;
`

const ImageSVG = () =>
  <svg width="0" height="0">
    <defs>
    	<clipPath id="image-shape" clipPathUnits="objectBoundingBox">
    	  <polygon points="0 0, 1 0, 1 0.42, 0 0.83" />
    	</clipPath>
    </defs>
  </svg>

const LandingMessageWrapper = styled.div`
  width: 100%;
  margin-top: 28vw;
  display: flex;
  flex-direction: column;
  transform: rotate(-11.5deg);
  overflow: hidden;
`;

export const LogoImage = styled.img`
  width: 15vw;
  min-width: 80px;
`
const Jumbo = ({isMobile}) =>
  <JumboWrapper isMobile={isMobile}>

    <Image />
    <ImageSVG />

    {/* <Image/>

    <Image2/> */}
    <Container>
      <WithPadding padding='xxl'>
        <LandingMessageWrapper>
          <Row>
            <Cell xs={12} center>
              <LogoImage src="/indiedojo-brown.png"/>
              <MainTitle color='text' bold>A one-week bootcamp for indie hackers</MainTitle>
              <Booking/>
            </Cell>
          </Row>
        </LandingMessageWrapper>
      </WithPadding>
    </Container>
  </JumboWrapper>

export default Jumbo;
