import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../components/BookingButton";
import { H3Md } from "../components/Base";

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
    border-right: 2px solid ${props => props.theme.colors.light};
  }
`;

const Booking = ({ isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <Date isMobile={isMobile}>
      <H3Md color="text" bold>Kyoto</H3Md>
      <H3Md color="text">13-18 November</H3Md>
      <BookingButton
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book
      </BookingButton>
    </Date>
    <Date isMobile={isMobile}>
      <H3Md color="text" bold>Bali</H3Md>
      <H3Md color="text">4-9 December</H3Md>
      <BookingButton
        href="https://www.codecamps.com/courses/o8X4WmtnC3hMMKovu/booking"
      >
        Book
      </BookingButton>
    </Date>
  </DatesWrapper>
);

export default Booking;