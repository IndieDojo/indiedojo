import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, Text, Subtitle } from '../styled/Base';
import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../styled/Grid";
import { WithPadding, H1 } from "../styled/Base";
import { Cross } from "../styled/Patterns";

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background: red;
  ${''/* margin-top: -9vw; */}
  clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% 66%, 50% 100%, 0 66%);
`


const NewsletterPattern = Cross.extend`
  clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 66%, 50% 100%, 0 66%);
  background-color: #f3efee;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const NewsletterContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  position: relative;
  z-index: 10;
`

const NewsletterText = Text.extend`
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  margin-bottom: ${props => props.theme.margins.xl};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const NewsletterField = styled.input`
  box-sizing: border-box;
  border: 3px solid ${props => props.theme.colors.veryLightGrey};
  margin-right: 3px;
  font-size: ${props => props.theme.fontSizes.nm};
  padding: 10px;
  line-height: 50px;
  height: 50px;
  min-width: 200px;
  outline: none;
  &:focus {
    border: 3px solid ${props => props.theme.colors.primary};
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: ${props => props.theme.margins.sm};
    &:nth-child(2) {
      margin-bottom: ${props => props.theme.margins.md};
    }
  }
`

const NewsletterButton = styled.input`
  box-sizing: border-box;
  padding: 10px ${props => props.theme.margins.xl};
  color: ${props => props.theme.colors.primary};
  border: 3px solid ${props => props.theme.colors.primary};
  background: none;
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: ${props => props.theme.weights.bold};
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${props => props.theme.colors.primaryHover};
    border: 3px solid ${props => props.theme.colors.primaryHover};
  }
`

const Book = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${props => props.theme.margins.lg};
  width: 100%;
`

const BookContents = styled.div`

`

const BookImage = styled.img`
  width: 120px;
`

const Newsletter = ({isMobile}) =>
  <NewsletterWrapper>
    {/* <NewsletterPattern/> */}

    <NewsletterContents>
      <Title margin='sm' bold center>
        Can't Join This Time?
      </Title>

      <NewsletterText paddingBottom='xl'>
        You can still be part of Indie Dojo!
        Sign up for our newsletter to know about <b>upcoming bootcamps</b>,
        be notified of <b>live streams and hangouts</b>,
        and get access to an <b>exclusive eBook</b>.
      </NewsletterText>

      {/* <NewsletterForm action="//sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&amp;id=d8282e7e96" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate> */}
      <NewsletterForm action="//gmail.us10.list-manage.com/subscribe/post?u=ad72e9706ca16886b52c76e66&amp;id=14ef1c90fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <NewsletterField type="text" placeholder="Your first name" name="FNAME" class="" id="mce-FNAME" />
        <NewsletterField type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <NewsletterButton
          onClick={() => ReactGA.event({ category: 'Subscribe', action: `${section} subscribe` })}
          className="button"
          type="submit"
          value="Get eBook"
          name="subscribe"
          id="mc-embedded-subscribe"
        />
      </NewsletterForm>

    <Book>

      <div>
        <BookImage src="/color-theory-for-startups.png"/>
      </div>

      <BookContents>
        <Subtitle size='nm' margin='sm' uppercase>Your Free eBook</Subtitle>
        <Subtitle size='md' margin='md' bold>Color Theory for Startups</Subtitle>
        <Text>
          Through nine short case studies, learn how leading companies
          use color to establish their brand and reinforce their messaging.
        </Text>
      </BookContents>
    </Book>
    </NewsletterContents>
  </NewsletterWrapper>

export default Newsletter
