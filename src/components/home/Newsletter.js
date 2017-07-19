import React, { Component } from 'react';
import styled from 'styled-components';
import { WithPaddin, Title, Subtitle, Text } from '../styled/Base';
import { FluidContainer, ContainerSmall, Row, Cell } from "../styled/Grid";


const NewsletterContainer = styled.div`


`

const NewsletterWrapper = styled.div`
  padding-top: 15vw;
  padding-bottom: 15vw;

  @media only screen and (min-width: 600px) {

  //This pattern doesn't work in Firefox
  ${''/* background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%220%200%2040%2040%22%20enable-background%3D%22new%200%200%2040%2040%22%20xml%3Aspace%3D%22preserve%22%20stroke%3D%22#cccccc%22%20stroke-linecap%3D%22round%22%20stroke-width%3D%221px%22%3E%0A%3Cline%20x1%3D%2226.7%22%20y1%3D%2225.6%22%20x2%3D%2223.4%22%20y2%3D%2228.3%22/%3E%0A%3Cline%20x1%3D%2229%22%20y1%3D%2228.4%22%20x2%3D%2231.2%22%20y2%3D%2224.7%22/%3E%0A%3Cline%20x1%3D%2215.9%22%20y1%3D%2224.7%22%20x2%3D%2219.5%22%20y2%3D%2227%22/%3E%0A%3Cline%20x1%3D%2217.4%22%20y1%3D%2217.9%22%20x2%3D%2216.4%22%20y2%3D%2222.1%22/%3E%0A%3Cline%20x1%3D%2225.9%22%20y1%3D%2229.7%22%20x2%3D%2227.6%22%20y2%3D%2233.6%22/%3E%0A%3Cline%20x1%3D%2234.4%22%20y1%3D%2225.4%22%20x2%3D%2237.7%22%20y2%3D%2228.1%22/%3E%0A%3Cline%20x1%3D%2234.5%22%20y1%3D%2229.9%22%20x2%3D%2230.6%22%20y2%3D%2232.2%22/%3E%0A%3Cline%20x1%3D%2236.6%22%20y1%3D%2221.1%22%20x2%3D%2232.5%22%20y2%3D%2222%22/%3E%0A%3Cline%20x1%3D%2220.1%22%20y1%3D%2221.3%22%20x2%3D%2222.9%22%20y2%3D%2224.5%22/%3E%0A%3Cline%20x1%3D%2223.2%22%20y1%3D%2231.6%22%20x2%3D%2221.5%22%20y2%3D%2235.4%22/%3E%0A%3Cline%20x1%3D%2218.3%22%20y1%3D%2237.9%22%20x2%3D%2216.2%22%20y2%3D%2233.5%22/%3E%0A%3Cline%20x1%3D%2229.3%22%20y1%3D%2235.5%22%20x2%3D%2226%22%20y2%3D%2238.2%22/%3E%0A%3Cline%20x1%3D%2234.9%22%20y1%3D%2235.5%22%20x2%3D%2237.3%22%20y2%3D%2232%22/%3E%0A%3Cline%20x1%3D%2220.7%22%20y1%3D%2217.7%22%20x2%3D%2223.8%22%20y2%3D%2214.7%22/%3E%0A%3Cline%20x1%3D%2227.6%22%20y1%3D%225.7%22%20x2%3D%2226.3%22%20y2%3D%229.8%22/%3E%0A%3Cline%20x1%3D%2233.1%22%20y1%3D%225.7%22%20x2%3D%2233%22%20y2%3D%221.5%22/%3E%0A%3Cline%20x1%3D%2220.3%22%20y1%3D%228%22%20x2%3D%2223.9%22%20y2%3D%2211.8%22/%3E%0A%3Cline%20x1%3D%2216.4%22%20y1%3D%2214.7%22%20x2%3D%2220.3%22%20y2%3D%2212.8%22/%3E%0A%3Cline%20x1%3D%2215.8%22%20y1%3D%226.5%22%20x2%3D%2217.1%22%20y2%3D%2210.6%22/%3E%0A%3Cline%20x1%3D%2229.4%22%20y1%3D%229.1%22%20x2%3D%2233%22%20y2%3D%2211.5%22/%3E%0A%3Cline%20x1%3D%2235.4%22%20y1%3D%22-1.4%22%20x2%3D%2238%22%20y2%3D%222%22/%3E%0A%3Cline%20x1%3D%2237.3%22%20y1%3D%224.9%22%20x2%3D%2235.3%22%20y2%3D%229%22/%3E%0A%3Cline%20x1%3D%2231.8%22%20y1%3D%22-3.2%22%20x2%3D%2230.6%22%20y2%3D%221%22/%3E%0A%3Cline%20x1%3D%2219.8%22%20y1%3D%225.1%22%20x2%3D%2224.6%22%20y2%3D%226.2%22/%3E%0A%3Cline%20x1%3D%2228.3%22%20y1%3D%2213%22%20x2%3D%2228.9%22%20y2%3D%2217.2%22/%3E%0A%3Cline%20x1%3D%2228.6%22%20y1%3D%2221.7%22%20x2%3D%2225.4%22%20y2%3D%2218.8%22/%3E%0A%3Cline%20x1%3D%2233.6%22%20y1%3D%2215.1%22%20x2%3D%2232.3%22%20y2%3D%2219.1%22/%3E%0A%3Cline%20x1%3D%2237.7%22%20y1%3D%2217.8%22%20x2%3D%2236.8%22%20y2%3D%2213.6%22/%3E%0A%3Cline%20x1%3D%222.3%22%20y1%3D%2231.9%22%20x2%3D%22-1.1%22%20y2%3D%2234.5%22/%3E%0A%3Cline%20x1%3D%224%22%20y1%3D%2234.5%22%20x2%3D%226.3%22%20y2%3D%2230.9%22/%3E%0A%3Cline%20x1%3D%221.3%22%20y1%3D%2237.5%22%20x2%3D%222.9%22%20y2%3D%2241.5%22/%3E%0A%3Cline%20x1%3D%229.5%22%20y1%3D%2231.6%22%20x2%3D%2212.7%22%20y2%3D%2234.4%22/%3E%0A%3Cline%20x1%3D%229.8%22%20y1%3D%2236.7%22%20x2%3D%225.6%22%20y2%3D%2237.9%22/%3E%0A%3Cline%20x1%3D%2210.6%22%20y1%3D%2224.6%22%20x2%3D%2211.1%22%20y2%3D%2228.9%22/%3E%0A%3Cline%20x1%3D%224.6%22%20y1%3D%2214.8%22%20x2%3D%221.3%22%20y2%3D%2217.6%22/%3E%0A%3Cline%20x1%3D%226%22%20y1%3D%2218.4%22%20x2%3D%228.2%22%20y2%3D%2214.7%22/%3E%0A%3Cline%20x1%3D%227.8%22%20y1%3D%221.7%22%20x2%3D%228.7%22%20y2%3D%226.2%22/%3E%0A%3Cline%20x1%3D%223.3%22%20y1%3D%2219.5%22%20x2%3D%225%22%20y2%3D%2223.4%22/%3E%0A%3Cline%20x1%3D%2211%22%20y1%3D%2215.2%22%20x2%3D%2214.3%22%20y2%3D%2217.9%22/%3E%0A%3Cline%20x1%3D%2211.5%22%20y1%3D%2220.2%22%20x2%3D%227.7%22%20y2%3D%2222.1%22/%3E%0A%3Cline%20x1%3D%2213.7%22%20y1%3D%2212.8%22%20x2%3D%229.6%22%20y2%3D%2211.4%22/%3E%0A%3Cline%20x1%3D%22-1.6%22%20y1%3D%2210.6%22%20x2%3D%221.4%22%20y2%3D%2213.6%22/%3E%0A%3Cline%20x1%3D%221.1%22%20y1%3D%2221.9%22%20x2%3D%22-0.6%22%20y2%3D%2225.7%22/%3E%0A%3Cline%20x1%3D%226.7%22%20y1%3D%2225.7%22%20x2%3D%223.3%22%20y2%3D%2228.4%22/%3E%0A%3Cline%20x1%3D%221.3%22%20y1%3D%224.6%22%20x2%3D%226%22%20y2%3D%226.7%22/%3E%0A%3Cline%20x1%3D%226.6%22%20y1%3D%229.2%22%20x2%3D%222.5%22%20y2%3D%2210.4%22/%3E%0A%3Cline%20x1%3D%2213.2%22%20y1%3D%224.6%22%20x2%3D%2211.9%22%20y2%3D%228.7%22/%3E%0A%3Cline%20x1%3D%2218.6%22%20y1%3D%2229.4%22%20x2%3D%2214.5%22%20y2%3D%2230.8%22/%3E%0A%3Cline%20x1%3D%2226%22%20y1%3D%222.6%22%20x2%3D%2222.8%22%20y2%3D%22-1.5%22/%3E%0A%3Cline%20x1%3D%2235.4%22%20y1%3D%2238.6%22%20x2%3D%2238%22%20y2%3D%2242%22/%3E%0A%3Cline%20x1%3D%2231.8%22%20y1%3D%2236.9%22%20x2%3D%2230.6%22%20y2%3D%2241%22/%3E%0A%3Cline%20x1%3D%2212.3%22%20y1%3D%2241.3%22%20x2%3D%2213.6%22%20y2%3D%2237.3%22/%3E%0A%3Cline%20x1%3D%2226%22%20y1%3D%2242.6%22%20x2%3D%2222.8%22%20y2%3D%2238.5%22/%3E%0A%3Cline%20x1%3D%221.3%22%20y1%3D%22-2.5%22%20x2%3D%222.9%22%20y2%3D%221.5%22/%3E%0A%3Cline%20x1%3D%2212.3%22%20y1%3D%221.3%22%20x2%3D%2213.6%22%20y2%3D%22-2.7%22/%3E%0A%3Cline%20x1%3D%2220.2%22%20y1%3D%223.2%22%20x2%3D%2216.6%22%20y2%3D%220.6%22/%3E%0A%3Cline%20x1%3D%2242.3%22%20y1%3D%2231.9%22%20x2%3D%2238.9%22%20y2%3D%2234.5%22/%3E%0A%3Cline%20x1%3D%2238.4%22%20y1%3D%2210.6%22%20x2%3D%2241.4%22%20y2%3D%2213.6%22/%3E%0A%3Cline%20x1%3D%2241.1%22%20y1%3D%2221.9%22%20x2%3D%2239.4%22%20y2%3D%2225.7%22/%3E%0A%3C/svg%3E"); */}
  background-color: #fff3eb;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23ffd4b9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% calc(100%-10vw), 50% 100%, 0 calc(100%-10vw));
    -webkit-clip-path: polygon(0% 10vw, 50% 0%, 100% 10vw, 100% 80%, 50% 100%, 0 80%);
    clip-path: url("#newsletter-shape");
  }
`

const NewsletterSVG = () =>
  <svg width="0" height="0">
    <defs>
    	<clipPath id="newsletter-shape" clipPathUnits="objectBoundingBox">
    	  <polygon points="0 0.2, 0.5 0, 1 0.2, 1 0.8, 0.5 1, 0 0.8" />
    	</clipPath>
    </defs>
  </svg>

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.theme.margins.nm};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const NewsletterField = styled.input`
  box-sizing: border-box;
  border: 3px solid ${props => props.theme.colors.veryLightGrey};
  margin-right: 3px;
  padding: 0 10px;
  font-size: ${props => props.theme.fontSizes.nm};
  height: 50px;
  flex-grow: 1;
  outline: none;
  &:focus {
    border: 3px solid ${props => props.theme.colors.primary};
  }
  @media only screen and (max-width: 600px) {
    width:100%;
    margin-bottom: ${props => props.theme.margins.sm};
    &:nth-child(2) {
      margin-bottom: ${props => props.theme.margins.md};
    }
  }
`

const NewsletterButton = styled.input`
  box-sizing: border-box;
  height: 50px;
  flex-grow: 1;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: ${props => props.theme.weights.bold};
  color: ${props => props.theme.colors.primary};
  background: none;
  border: 3px solid ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primaryHover};
    border: 3px solid ${props => props.theme.colors.primaryHover};
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
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

const Newsletter = () =>
  <NewsletterContainer>
    <div id='intercom-launcher'></div>
    <NewsletterWrapper>
      <FluidContainer>
        <ContainerSmall>
          <Row>
            <Cell xs={12}>
              <Title margin='md' bold center>
                Can't Join This Time?
              </Title>

              <Text paddingBottom='md' inlineBlock>
                You can still be part of Indie Dojo!
                Sign up for our newsletter to know about <b>upcoming bootcamps</b>,
                be notified of <b>live streams and hangouts</b>,
                and get access to an <b>exclusive eBook</b>.
              </Text>

            </Cell>
          </Row>

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

        </ContainerSmall>
      </FluidContainer>

    </NewsletterWrapper>

    <NewsletterSVG />
  </NewsletterContainer>


export default Newsletter
