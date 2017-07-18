import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../styled/Buttons";
import { Subtitle, LinkTo } from "../styled/Base";

const DatesWrapper = styled.div`
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
`;

const BookingPrice = styled.div`
  color: ${props => props.light ? 'white' : 'inherit'};
  margin-top: 20px;
  font-size: 18px;
  a{
    color: ${props => props.light ? 'white' : 'inherit'};
  }
`;

const Booking = ({ light, center, shadow, fill }) => (
  <DatesWrapper className='dates-wrapper'>
    <BookingDate center>
      <Subtitle color={light ? 'white' : 'text'} shadow={shadow}>Kyoto, Japan, November 13-18 2017</Subtitle>
      <BookingButton light={light} fill={fill}
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book Now
      </BookingButton>
      <Subtitle size='nm' color={light ? 'white' : 'text'} shadow={shadow}>Early Registration Price: <br/> <strong>$1,950</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</Subtitle>
    </BookingDate>
  </DatesWrapper>
);

export default Booking;
