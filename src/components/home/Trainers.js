import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../grid/Grid';
import { WithPadding, Background, H1Xl, H1Md, H2, Text } from '../components/Base'

const ProfileImage = styled.div`
  display: inline-block;
  width: ${props => props.isMobile ? '50vw' : '200px'};
  height: ${props => props.isMobile ? '50vw' : '200px'};
  background-image: url(https://s3-eu-west-1.amazonaws.com/codecamps/website/sacha.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.white};
  -webkit-filter: grayscale(100%);
  filter: gray;
`

const Link = styled.a`
  color: black;
  font-weight: bold;
  font-size: 1em;
  transition: color 0.1s ease-in;
  &:hover {
    color: ${props => props.theme.colors.light};
  }
  @media only screen and (min-width: 48em ) {
    font-size: 1.15rem;
  }
  @media only screen and (min-width: 64em ) {
    font-size: 1.25
  }
`

const TrainerInfo = ({name, title}) =>
  <div>
    <H1Md bold>{name}</H1Md>
    <H2 color='lightGrey'>{title}</H2>
  </div>

const Bio = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 0 ${props => props.theme.margins.lg};
`

const SachaBio = () =>
  <Bio>
    <Text>
      Sacha is a developer, designer and entrepreneur. Originally from Paris, France but these days he live in Osaka,
      Japan. He is an author of <Link href='http://vulcanjs.org/'>Vulcan.js</Link> full-stack app framework,
      co-authored <Link href='https://www.discovermeteor.com/'>Discover Meteor</Link> book and created the biggest survey on the <Link href='http://stateofjs.com/'>State of Javascript</Link>.
    </Text>
  </Bio>

const JulianBio = () =>
  <Bio>
    <Text>
      Julian is a founder, engineer and entrepreneur. Originally from Paris, France but these days he live in Osaka,
      Japan. He is an author of Vulcan.js full-stack app framework, co-authored Discover Meteor book and created the biggest survey on the State of Javascript.
    </Text>
  </Bio>

const MaciejBio = () =>
  <Bio>
    <Text>
      Maciej is a founder, engineer and entrepreneur. Originally from Paris, France but these days he live in Osaka,
      Japan. He is an author of Vulcan.js full-stack app framework, co-authored Discover Meteor book and created the biggest survey on the State of Javascript.
    </Text>
  </Bio>

const Trainers = ({isMobile}) => (
  <FluidContainer>
    <Background color='veryLight'>
      <Container>
        <WithPadding padding='xxl'>
          <Row>
            <Cell xs={12} center>
              <H1Xl lineHeight="2" margin={isMobile ? "lg" : "xl"} bold center>
                Organisers
              </H1Xl>
            </Cell>
            <Cell xs={12} sm={6} center>
              <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/website/sacha.jpg' isMobile={isMobile}/>
              <TrainerInfo name='Sacha Greif' title="Developer, designer and entrepreneur"/>
              <SachaBio />
            </Cell>

            <Cell xs={12} sm={6} center>
              <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/_julian.jpg' isMobile={isMobile}/>
              <TrainerInfo name='Julian Shapiro' title="Founder, engineer and etrepreneur"/>
              <JulianBio />
            </Cell>
            <Cell xs={12} sm={6} smOffset={3} center>
              <WithPadding padding='xl'>
                <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/_julian.jpg' isMobile={isMobile}/>
                <TrainerInfo name='Maciej Nowakowski' title="Developer, trader and etrepreneur"/>
                <MaciejBio />
              </WithPadding>
            </Cell>
          </Row>
        </WithPadding>
      </Container>
    </Background>
  </FluidContainer>
);

export default Trainers;
