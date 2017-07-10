import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, H1Xxxl, H2Md, H3Md } from '../components/Base';


const JumboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 50vh;
  border-bottom: 4px solid black;
  border-top: 4px solid black;
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
const Logo = Title.extend`
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
    <Logo margin='0' lineHeight='1.25' black>Indie Dojo</Logo>
    <H2Md margin='xxl' bold>One week camp for indie hackers</H2Md>
    <DatesWrapper>
      <Date isMobile={props.isMobile}>
        <H3Md color='text'>Kyoto</H3Md>
        <H3Md color='text'>6-11 November</H3Md>
      </Date>
      <Date isMobile={props.isMobile}>
        <H3Md color='text'>Bali</H3Md>
        <H3Md color='text'>4-12 December</H3Md>
      </Date>
    </DatesWrapper>
  </JumboWrapper>

export default Jumbo
