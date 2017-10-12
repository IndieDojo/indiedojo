import React, { Component } from "react";
import styled from "styled-components";
import ReactGA from 'react-ga';
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
      <Subtitle size='md' color={light ? 'white' : 'text'} shadow={shadow}>Location and dates to be announced shortly</Subtitle>
      <BookingButton light={light} fill={fill}
        href='/#subscribe'
        onClick={() => {
          ReactGA.event({ category: 'Apply', action: `Apply button clicked` });
          fbq('track', 'Lead');
        }}
      >
        {/* Apply Now */}
        Comming Soon
      </BookingButton>
      {/* <Subtitle size='nm' color={light ? 'white' : 'text'} shadow={shadow} center>Early Bird: <br/> <strong>$1,490</strong> + $490 accom.</Subtitle> */}
    </BookingDate>
  </DatesWrapper>
);

export default Booking;
