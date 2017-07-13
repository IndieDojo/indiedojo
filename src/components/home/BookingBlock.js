import React, { Component } from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { WithPadding, Background, Title } from "../components/Base";

const BookingBlock = ({ light, isMobile }) => (
  <Background>
    <WithPadding padding='xl'>
      <Title margin={isMobile ? "lg" : "xl"} bold center>
        Join us in Kyoto
      </Title>
      <Booking />
    </WithPadding>
  </Background>
);

export default BookingBlock;
