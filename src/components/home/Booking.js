import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../components/BookingButton";
import { Subtitle } from "../components/Base";

const DatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
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

const Booking = ({ light, isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <Date isMobile={isMobile}>
      <Subtitle color={light ? 'transparentWhite' : 'text' }>Kyoto, 13-18 November</Subtitle>
      <BookingButton
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book
      </BookingButton>
    </Date>
  </DatesWrapper>
);

export default Booking;
