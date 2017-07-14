import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../grid/Grid';
import { WithPadding, Background, Title, Subtitle, Text, LinkTo } from '../components/Base'

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

const TrainerInfo = ({name, title}) =>
  <div>
    <Subtitle bold>{name}</Subtitle>
    <Subtitle size='nm' margin='md' color='lightGrey'>{title}</Subtitle>
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
      Japan. He is an author of <LinkTo inherit href='http://vulcanjs.org/'>Vulcan.js</LinkTo> full-stack app framework,
      co-authored <LinkTo inherit href='https://www.discovermeteor.com/'>Discover Meteor</LinkTo> book and created the biggest survey on the <LinkTo inherit href='http://stateofjs.com/'>State of Javascript</LinkTo>.
    </Text>
  </Bio>

const JulianBio = () =>
  <Bio>
    <Text>
      Julian founded NameLayer, a domain name company and sold it to Techstars.
      He is an author of <LinkTo inherit href='http://velocityjs.org/'>Velocity</LinkTo> — an open source library used by Samsung, Uber, WhatsApp, and thousands of others.
      Today he grows his new company <LinkTo inherit href='https://www.bellcurve.com/'>Bell Curve</LinkTo> and writes the best handbooks on <LinkTo inherit href='https://www.julian.com/'>Startup Growth, Becoming Smarter and Muscle Building</LinkTo>.
    </Text>
  </Bio>


const MaciejBio = () =>
  <Bio>
    <Text>
      Maciej is a developer, trader and entrepreneur. He was born in Poland but lives now in London. Maciej organises a coding bootcamps <LinkTo inherit href='https://www.codecamps.com'>in Flip Flops</LinkTo> and and works on his own
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
      <Cell xs={12} sm={4} center>
        <ProfileImage imgUrl='/sacha.jpg' isMobile={isMobile}/>
        <TrainerInfo name='Sacha Greif' title="Developer, designer and entrepreneur"/>
        <SachaBio />
      </Cell>

      <Cell xs={12} sm={4} center>
        <ProfileImage imgUrl='/batman.png' isMobile={isMobile}/>
        <TrainerInfo name='To be announced' title=""/>
        {/* <JulianBio /> */}
      </Cell>
      <Cell xs={12} sm={4} center>
        <ProfileImage imgUrl='/maciej.jpg' isMobile={isMobile}/>
        <TrainerInfo name='Maciej Nowakowski' title="Developer, trader and etrepreneur"/>
        <MaciejBio />
      </Cell>
    </Row>
  </WithPadding>

export default Trainers;
