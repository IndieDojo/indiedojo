import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, H2Lg, H3Nm } from '../components/Base';
import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../grid/Grid";
import { WithPadding, H1 } from "../components/Base";

const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const NewsletterHeading = H2Lg.extend`
  text-align: center;
  margin-bottom: 10px;
`

const NewsletterIntro = H3Nm.extend`
  text-align: center;
  margin-bottom: 20px;
`

const NewsletterForm = styled.form`
  border: 1px solid #333;
  display: inline-block;
  margin-bottom: 40px;
`

const NewsletterField = styled.input`
  border: 0;
  border-right: 1px solid #333;
  padding: 10px;
`

const NewsletterButton = styled.input`
  border: 0;
  background: #eee;
  padding: 10px;
  cursor: pointer;
`

const Book = styled.div`
  display: flex;
  background: #eee;
  padding: 10px;
  margin: 0 auto 20px auto;
  max-width: 400px;
`

const BookContents = styled.div`

`

const BookTitle = styled.h3`
`

const BookImage = styled.img`
  width: 120px;
  margin-top: -30px;
`

const Newsletter = props =>
  <FluidContainer>
    <ContainerSmall>
      <WithPadding padding='xxl'>
        <NewsletterWrapper>
          <NewsletterHeading>Join the dojo</NewsletterHeading>

          <NewsletterIntro>Sign up for our newsletter to know about upcoming bootcamps and get access to an exclusive eBook</NewsletterIntro>

          <NewsletterForm action="//sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&amp;id=d8282e7e96" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <NewsletterField type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
            <NewsletterButton
              onClick={() => ReactGA.event({ category: 'Subscribe', action: `${section} subscribe` })}
              className="button"
              type="submit"
              value="Join"
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
              <BookTitle>Color Theory for Startups</BookTitle>

              <p>Through 9 short case studies, learn how leading companies
              use color to establish their brand and reinforce their messaging.</p>
            </BookContents>
          </Book>

        </NewsletterWrapper>
      </WithPadding>
    </ContainerSmall>
  </FluidContainer>

export default Newsletter
