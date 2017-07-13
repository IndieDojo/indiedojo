import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container } from '../grid/Grid'
import { Title, H2Lg } from '../components/Base';
import Booking from './Booking'

const JumboWrapper = styled.div`
  padding: ${props => props.theme.margins.xl} ${props => props.theme.margins.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
}`

const Logo = styled.div`
  height: 200px;
  width: 200px;
  background-image: url('/indiedojo.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: ${props => props.theme.margins.lg};
`

const LogoText = Title.extend`
  font-size: 2.5rem;
  letter-spacing: -0.10rem;

  @media (min-width: 600px) {
    font-size: 3.5rem;
    letter-spacing: -0.15rem;
  }
  @media (min-width: 900px) {
    font-size: 5.2rem;
    letter-spacing: -0.2rem;
  }
`


const Jumbo = props =>
  <JumboWrapper>
    <Logo/>
    <H2Lg margin='xxl' bold center>A one-week bootcamp for indie hackers</H2Lg>
    <Booking isMobile={props.isMobile}/>
  </JumboWrapper>
export default Jumbo
