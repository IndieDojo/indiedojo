import React, { Component } from 'react';
import styled from 'styled-components';
import { WithPadding, Title, H1Xxxl, H2Md, H3Md, Button } from '../components/Base';
import { BookingButton } from '../components/BookingButton'

const JumboWrapper = styled.div`
  padding: ${props => props.theme.margins.xl} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 60vh;
  border-bottom: 1px solid black;
  border-top: 8px solid black;
}`

const DatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${props => props.isMobile ? props.theme.margins.lg : props.theme.margins.xl};
  &:first-of-type {
    border-right: 2px solid ${props => props.theme.colors.light};
  }
`
const Logo = styled.div`
  height: 200px;
  width: 200px;
  background-image: url('	https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/indie-dojo-logo-200x200.jpg');
  background-size: contain;
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
    letter-spacing: -0.3rem;
  }
`


const Jumbo = props =>
  <JumboWrapper {...props}>
    <Logo/>
    <LogoText margin='0' lineHeight='1.25' black>Indie Dojo</LogoText>
    <H2Md margin='xxl' bold>One week bootcamp for indie hackers</H2Md>
    <DatesWrapper>
      <Date isMobile={props.isMobile}>
        <H3Md color='text' bold>Kyoto</H3Md>
        <H3Md color='text'>6-11 November</H3Md>
        <BookingButton href='https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking'>Book</BookingButton>
      </Date>
      <Date isMobile={props.isMobile}>
        <H3Md color='text' bold>Bali</H3Md>
        <H3Md color='text'>4-9 December</H3Md>
        <BookingButton href='https://www.codecamps.com/courses/o8X4WmtnC3hMMKovu/booking'>Book</BookingButton>
      </Date>
    </DatesWrapper>
  </JumboWrapper>

export default Jumbo
