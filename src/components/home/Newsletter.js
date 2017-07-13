import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, Text, Subtitle } from '../components/Base';
import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../grid/Grid";
import { WithPadding, H1 } from "../components/Base";
// import Markdown from 'react-remarkable';

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


// const NewsletterHeading = H2Lg.extend`
//   text-align: center;
//   margin-bottom: 10px;
//   max-width: 400px;
// `

// const NewsletterIntro = H3Nm.extend`
//   text-align: center;
//   margin-bottom: 20px;
//   max-width: 400px;
//   font-size: 18px;
// `

const NewsletterForm = styled.form`
  border: 1px solid #333;
  display: inline-block;
  margin-bottom: 40px;
  max-width: 400px;
`

const NewsletterField = styled.input`
  border: 0;
  border-right: 1px solid #333;
  font-size: 18px;
  padding: 10px;
`

const NewsletterButton = styled.input`
  border: 0;
  background: #eee;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
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

// const BookHeading = styled.h4`
//   text-transform: uppercase;
//   font-weight: normal;
//   font-size: 16px;
//   margin-bottom: 5px;
// `
//
// const BookTitle = styled.h3`
//   font-size: 22px;
//   margin-bottom: 5px;
// `

const BookImage = styled.img`
  width: 120px;
`

const Newsletter = ({isMobile}) =>
  <WithPadding padding='xxl'>
    <NewsletterWrapper>
      <Title margin='sm' bold center>
        Can't Join This Time?
      </Title>

      {/* <NewsletterIntro> */}
        <Text paddingBottom='xl'>
          You can still be part of Indie Dojo!
          Sign up for our newsletter to know about <b>upcoming bootcamps</b>,
          be notified of <b>live streams and hangouts</b>,
          and get access to an **exclusive eBook**.
        </Text>
      {/* </NewsletterIntro> */}

      <NewsletterForm action="//sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&amp;id=d8282e7e96" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <NewsletterField type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <NewsletterButton
          onClick={() => ReactGA.event({ category: 'Subscribe', action: `${section} subscribe` })}
          className="button"
          type="submit"
          value="Sign Up"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
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

export default Newsletter
