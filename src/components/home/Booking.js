import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../styled/Buttons";
import { Subtitle, LinkTo } from "../styled/Base";

const DatesWrapper = styled.div`
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centered ? 'center' : 'flex-start'};
`;

const BookingSubtitle = Subtitle.extend`
  color: ${props => props.light ? 'white' : 'inherit'};
`

const BookingPrice = styled.div`
  color: ${props => props.light ? 'white' : 'inherit'};
  margin-top: 20px;
  font-size: 18px;
  a{
    color: ${props => props.light ? 'white' : 'inherit'};
  }
`;

const Booking = ({ light, centered, isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <BookingDate centered={centered} isMobile={isMobile}>
      <BookingSubtitle light={light}>Kyoto, Japan, November 13-18 2017</BookingSubtitle>
      <BookingButton light={light}
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book Now
      </BookingButton>
      <BookingPrice light={light}>Early Registration Price: <br/> <strong>$1,490</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</BookingPrice>
    </BookingDate>
  </DatesWrapper>
);

export default Booking;
