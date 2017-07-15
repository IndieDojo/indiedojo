import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, Text, Subtitle } from '../styled/Base';
import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../styled/Grid";
import { WithPadding, H1 } from "../styled/Base";

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  margin-bottom: ${props => props.theme.margins.xl};
`

const NewsletterField = styled.input`
  box-sizing: border-box;
  border: 3px solid ${props => props.theme.colors.veryLightGrey};
  margin-right: 3px;
  font-size: ${props => props.theme.fontSizes.nm};
  padding: 10px;
  line-height: 50px;
  height: 50px;
  outline: none;
  &:focus {
    border: 3px solid ${props => props.theme.colors.primary};
  }
`

const NewsletterButton = styled.input`
  padding: 10px ${props => props.theme.margins.xl};
  color: ${props => props.theme.colors.primary};
  border: 3px solid ${props => props.theme.colors.primary};
  background: none;
  font-size: ${props => props.theme.fontSizes.nm};
  cursor: pointer;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${props => props.theme.colors.primary};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    ${props => props.theme.colors.primary};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    ${props => props.theme.colors.primary};
  }
  &:-moz-placeholder { /* Firefox 18- */
    ${props => props.theme.colors.primary};
  }
  &:input-placeholder {
    ${props => props.theme.colors.primary};
  }
  outline: none;
  &:hover {
    color: ${props => props.theme.colors.primaryHover};
    border: 3px solid ${props => props.theme.colors.primaryHover};
  }
`

const Book = styled.div`
  display: flex;
  box-sizing: border-box;
  background: ${props => props.theme.colors.veryLight};
  padding: ${props => props.theme.margins.lg};
  width: 100%;
`

const BookContents = styled.div`

`

const BookImage = styled.img`
  width: 120px;
`

const Newsletter = ({isMobile}) =>
  <ContainerSmall>
    <WithPadding padding='xxl'>
      <NewsletterWrapper>
        <Title margin='sm' bold center>
          Can't Join This Time?
        </Title>

        <Text paddingBottom='xl'>
          You can still be part of Indie Dojo!
          Sign up for our newsletter to know about <b>upcoming bootcamps</b>,
          be notified of <b>live streams and hangouts</b>,
          and get access to an <b>exclusive eBook</b>.
        </Text>

        {/* <NewsletterForm action="//sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&amp;id=d8282e7e96" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate> */}
        <NewsletterForm action="//gmail.us10.list-manage.com/subscribe/post?u=ad72e9706ca16886b52c76e66&amp;id=14ef1c90fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <NewsletterField type="text" placeholder="Your first name" name="FNAME" class="" id="mce-FNAME" />
          <NewsletterField type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
          <NewsletterButton
            onClick={() => ReactGA.event({ category: 'Subscribe', action: `${section} subscribe` })}
            className="button"
            type="submit"
            value="Sign Up"
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
              Through 9 short case studies, learn how leading companies
              use color to establish their brand and reinforce their messaging.
            </Text>
          </BookContents>
        </Book>

      </NewsletterWrapper>
    </WithPadding>
  </ContainerSmall>

export default Newsletter
