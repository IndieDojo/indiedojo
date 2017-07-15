import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../styled/BookingButton";
import { Subtitle, LinkTo } from "../styled/Base";

const DatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BookingDate = styled.div`
  
`;

const BookingPrice = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Booking = ({ light, isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <BookingDate isMobile={isMobile}>
      <Subtitle>Kyoto, Japan, November 13-18 2017</Subtitle>
      <BookingButton
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book Now
      </BookingButton>
      <BookingPrice >Early Registration Price: <br/> <strong>$1,490</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</BookingPrice>
    </BookingDate>
  </DatesWrapper>
);

export default Booking;
