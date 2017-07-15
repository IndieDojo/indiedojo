import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../styled/BookingButton";
import { Subtitle, LinkTo } from "../styled/Base";

const DatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${props =>
  props.isMobile ? props.theme.margins.lg : props.theme.margins.xl};
  &:first-of-type {
    ${''/* border-right: 2px solid ${props => props.theme.colors.light}; */}
  }
`;

const BookingPrice = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: ${props => props.light ? props.theme.colors.transparentWhite : props.theme.colors.primary};
  a{
    color: ${props => props.theme.colors.transparentWhite};
  }
`;

const Booking = ({ light, isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <BookingDate isMobile={isMobile}>
      <Subtitle color={light ? 'transparentWhite' : 'text' }>Kyoto, Japan, November 13-18 2017</Subtitle>
      <BookingButton
        variant={ light ? 'jumbo' : 'else'}
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book Now
      </BookingButton>
      <BookingPrice light={light}>Early Registration Price: <strong>$1,490</strong> (<LinkTo inherit href="#included">What's included?</LinkTo>)</BookingPrice>
    </BookingDate>
  </DatesWrapper>
);

export default Booking;
