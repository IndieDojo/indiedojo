import React, {Component} from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { WithPadding, Background, Title } from "../styled/Base";


const BookingWrapper = styled.div`
  position: relative;
`

const VideoPlayer = styled.video`
  box-sizing: border-box;
  object-fit: fill;
  width: 100%;
  @media only screen and (min-width: 700px) {
    clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% 100%, 50% 46.25vw, 0 100%);
    -webkit-clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% 100%, 50% 46.25vw, 0 100%);
    clip-path: url("#video-shape");
  }
`;

const VideoPlayerSVG = () =>
  <svg width="0" height="0">
    <defs>
    	<clipPath id="video-shape" clipPathUnits="objectBoundingBox">
    	  <polygon points="0 0.2, 0.5 0, 1 0.2, 1 1, 0.5 0.8, 0 1" />
    	</clipPath>
    </defs>
  </svg>

const BookingContents = styled.div`
  margin-top: 8vw;
  @media only screen and (max-width: 700px) {
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
  @media only screen and (min-width: 700px) {
    margin-top: -10vw
  }
`

const mobileImageUrl = "/photos/indiedojo-first-frame-mobile.jpg";
const landingPageVideoUrl = "https://player.vimeo.com/external/225555019.sd.mp4?s=c847916f5aeabe291a49a322d0d5abe7e632deb3&profile_id=164";
const landingPageVideoUrl720="https://player.vimeo.com/external/225555019.hd.mp4?s=5d365fe6ff3a4146ff42c705ebe626e4a02ad5b9&profile_id=174";
const videoFirstFrameUrl = "https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/tiny/indiedojo-first-frame.jpg";


class BookingBlock extends Component {
  componentDidMount() {
    setTimeout( () =>
      document.getElementById('video-kyoto').play(),
      5000
    );
  }

  render() {
    return <BookingWrapper>
      <VideoPlayer
          id='video-kyoto'
          loop
          muted
          playsInline
          poster={videoFirstFrameUrl}
        >
          <source src={landingPageVideoUrl720} type="video/mp4" />
      </VideoPlayer>
      <VideoPlayerSVG />

      <BookingContentWrapper>
        <BookingContents>
          <Title size='xl' color='white' bold center shadow>
            Join us
          </Title>
          <Booking light fill center shadow/>
        </BookingContents>
      </BookingContentWrapper>
    </BookingWrapper>
  }
}

export default BookingBlock;
