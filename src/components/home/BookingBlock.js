import React, { Component } from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { WithPadding, Background, Title } from "../styled/Base";
import { ContainerSmall } from "../styled/Grid";

const BookingBlock = ({ light }) => (
  <ContainerSmall>
    <Background>
      <WithPadding padding='xl'>
        <Title margin='md' bold center>
          Join us in Kyoto
        </Title>
        <Booking />
      </WithPadding>
    </Background>
  </ContainerSmall>
);

export default BookingBlock;
