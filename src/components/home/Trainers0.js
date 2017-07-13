import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../grid/Grid';
import { WithPadding, Background, Title, Subtitle, Text } from '../components/Base'

const ProfileImage = styled.div`
  display: inline-block;
  width: ${props => props.isMobile ? '50vw' : '200px'};
  height: ${props => props.isMobile ? '50vw' : '200px'};
  background-image: url("${props => props.imgUrl}");
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
    color: ${props => props.theme.colors.primary};
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
    <Subtitle bold>{name}</Subtitle>
    <Subtitle size='nm' color='lightGrey'>{title}</Subtitle>
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
      Maciej is a developer, trader, entrepreneur. He was born in Poland but lives now in London. Maciej organises a coding bootcamps <Link href='https://www.codecamps.com'>in Flip Flops</Link> and and works on his own
      projects. In his previous life, he's been a trader working in a city.
    </Text>
  </Bio>

const Trainers = ({isMobile}) =>
  <WithPadding padding='xxl'>
    <Row>
      <Cell xs={12} center>
        <Title margin={isMobile ? "lg" : "xl"} bold center>
          Our Team
        </Title>
      </Cell>
      <Cell xs={12} sm={6} center>
        <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/website/sacha.jpg' isMobile={isMobile}/>
        <TrainerInfo name='Sacha Greif' title="Developer, designer and entrepreneur"/>
        <SachaBio />
      </Cell>

      <Cell xs={12} sm={6} center>
        <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/julian.jpg' isMobile={isMobile}/>
        <TrainerInfo name='Julian Shapiro' title="Founder, engineer and etrepreneur"/>
        <JulianBio />
      </Cell>
      <Cell xs={12} sm={6} smOffset={3} center>
        <WithPadding padding='xl'>
          <ProfileImage imgUrl='https://s3-eu-west-1.amazonaws.com/codecamps/courses/IndieDojo/maciej.jpg' isMobile={isMobile}/>
          <TrainerInfo name='Maciej Nowakowski' title="Developer, trader and etrepreneur"/>
          <MaciejBio />
        </WithPadding>
      </Cell>
    </Row>
  </WithPadding>

export default Trainers;
