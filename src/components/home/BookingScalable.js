import React, { Component } from "react";
import styled from "styled-components";
import { Subtitle, LinkTo } from "../styled/Base";


const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 601px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const BookingSubtitle = Subtitle.extend`
  color: ${props => props.theme.colors.text};
  @media only screen and (max-width: 700px) {
    text-align: center;
    align-self: center;
  }
`

const BookingPrice = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.nm};
  a{
    color: ${props => props.light ? 'white' : 'inherit'};
  }
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

const Regular = BookingPrice.extend`
  text-decoration: line-through;
`

const BookingButton = styled.a`
  padding: 10px 20px;
  margin: 20px 0;
  display: inline-block;
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${props => props.light ? 'white' : props.theme.colors.accent};
  color: ${props => props.light ? 'white' : props.theme.colors.primary};
  font-weight: ${props => props.theme.weights.bold};
  font-size: ${props => props.theme.fontSizes.regular.nm};
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    border-color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: ${props => props.theme.fontSizes.medium.nm};
  }
  @media only screen and (max-width: 700px) {
    font-size: ${props => props.theme.fontSizes.mobile.nm};
    align-self: center;
  }
`

const HeadSubtitle = Subtitle.extend`
  text-align: left;
  opacity: ${props => !!props.opacity ? props.opacity : 1 };
  @media only screen and (max-width: 700px) {
    text-align: center;
    align-self: center;
  }
`

const BookingScalable = ({ light, centered, isMobile }) =>
  <BookingWrapper centered={centered} isMobile={isMobile}>
    <BookingSubtitle size='nm' margin='md' light={light} bold>Kyoto, Japan, November 13-18 2017</BookingSubtitle>
    <HeadSubtitle size='nm' lineThrough opacity='0.5'>Price: <b>$2190</b> incl. accom.</HeadSubtitle>
    <HeadSubtitle size='nm'>
      Early Bird: <strong>$1,490</strong> + $490 accom.<br/>
      (<LinkTo inherit href="#included">What's included?</LinkTo>)<br/>
    </HeadSubtitle>
    <BookingButton light={light}
      href="https://www.codecamps.com/courses/na54tKhtccrr9GhEF/booking"
    >
      Book Now
    </BookingButton>


  </BookingWrapper>


export default BookingScalable;
