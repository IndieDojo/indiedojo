import React, { Component } from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { WithPadding, Background, Title } from "../styled/Base";
import { ContainerSmall } from "../styled/Grid";

const BookingWrapper = styled.div`
  position: relative;
`

const VideoPlayer = styled.video`
  box-sizing: border-box;
  object-fit: contain;
  width: 100%;
  @media only screen and (min-width: 600px) {
    clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% 100%, 50% 46.25vw, 0 100%); //height of the video is 720/1280 = 56.25vw
  }
`;

const BookingContents = styled.div`
  margin-top: 10vw;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

const BookingContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    margin-top: -10vw
  }
`

const mobileImageUrl = "/indiedojo-first-frame-mobile.jpg";
const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
const landingPageVideoUrl720="https://player.vimeo.com/external/225555019.hd.mp4?s=5d365fe6ff3a4146ff42c705ebe626e4a02ad5b9&profile_id=174";
const videoFirstFrameUrl = "/indiedojo-first-frame.jpg";

const BookingBlock = ({ isMobile, light }) =>
  <BookingWrapper>
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

    <BookingContentWrapper>
      <BookingContents>
        <Title size='xl' color='white' margin='sm' bold center shadow>
          Join us in Kyoto
        </Title>
        <Booking light={true} center shadow/>
      </BookingContents>
    </BookingContentWrapper>
  </BookingWrapper>

export default BookingBlock;
