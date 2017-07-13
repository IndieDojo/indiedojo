import React, { Component } from "react";
import styled from "styled-components";
import { BookingButton } from "../components/BookingButton";
import { H3Md, H3Nm } from "../components/Base";

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

const Booking = ({ isMobile }) => (
  <DatesWrapper className='dates-wrapper'>
    <Date isMobile={isMobile}>
      <H3Md color="text" bold>Kyoto</H3Md>
      <H3Nm color="text">13-18 November</H3Nm>
      <BookingButton
        href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
      >
        Book
      </BookingButton>
    </Date>
  </DatesWrapper>
);

export default Booking;
