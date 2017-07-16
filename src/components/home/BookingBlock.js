import React, { Component } from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { WithPadding, Background, Title } from "../styled/Base";
import { ContainerSmall } from "../styled/Grid";

const BookingWrapper = styled.div`
  position: relative;
  height: 100vh;
`

const BookingBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
  // clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 66%, 50% 100%, 0 66%);
  clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 100%, 50% 66%, 0 100%);
  background-image: url('/oskar-krawczyk-172854.jpg');
  background-size: cover;
  background-position: 50% 0%;
`

const BookingContents = styled.div`
  height: 66vh;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;

const BookingTitle = Title.extend`
  color: white;
`

const mobileImageUrl = "/indiedojo-first-frame-mobile.jpg";
const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
const landingPageVideoUrl720="https://player.vimeo.com/external/225555019.hd.mp4?s=5d365fe6ff3a4146ff42c705ebe626e4a02ad5b9&profile_id=174";
const videoFirstFrameUrl = "/indiedojo-first-frame.jpg";

const BookingBlock = ({ isMobile, light }) =>
  <BookingWrapper>
    <BookingBackground>
      <VideoPlayer
          autoPlay
          loop
          muted
          playsInline
          poster={videoFirstFrameUrl}
          isMobile={isMobile}
        >
          <source src={landingPageVideoUrl720} type="video/mp4" />
      </VideoPlayer>
    </BookingBackground>
    <BookingContents>
      <BookingTitle margin='md' bold center>
        Join us in Kyoto
      </BookingTitle>
      <Booking light={true} centered={true}/>
    </BookingContents>
  </BookingWrapper>

export default BookingBlock;
