import React, { Component } from "react";
import styled from "styled-components";
import { FluidContainer, Container } from "../styled/Grid";
import { WithPadding, MainTitle, Title, Subtitle } from "../styled/Base";
import { Logo } from "../styled/Logo";
import Booking from "./Booking";

// this breaks SSR: height: ${props => props.isMobile ? `100vh` : `${window && window.innerWidth * 0.5625}px`};

// 1.125 is a ratio of height/width of the cover photo
const VideoWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 100vh;
  overflow:hidden;
`;

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;

const VideoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;d
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

const mobileImageUrl = "/indiedojo-first-frame-mobile.jpg";
const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
const videoFirstFrameUrl = "/indiedojo-first-frame.jpg";

const Jumbo = ({ isMobile }) => (
  <VideoWrapper isMobile={isMobile}>
    {isMobile
      ? <Image src={mobileImageUrl} />
      : <VideoPlayer
          autoPlay
          loop
          muted
          playsInline
          poster={videoFirstFrameUrl}
          isMobile={isMobile}
        >
          <source src={landingPageVideoUrl} type="video/mp4" />
        </VideoPlayer>}

    <VideoCover isMobile={isMobile} />

    <LandingMessageWrapper>
      <Logo light isMobile={isMobile} />
      <MainTitle margin="md" color="transparentWhite" bold center>
        A one-week bootcamp for indie hackers
      </MainTitle>
      <WithPadding padding="sm">
        <Booking light isMobile={isMobile} />
      </WithPadding>
    </LandingMessageWrapper>
  </VideoWrapper>
);
export default Jumbo;
