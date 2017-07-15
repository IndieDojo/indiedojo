import React, { Component } from 'react';
import { WithPadding, Title, Text, LinkTo } from '../styled/Base';
import { Container, ContainerSmall } from '../styled/Grid';
import styled from 'styled-components';
import { Topography } from '../styled/Patterns';

const AboutWrapper = Topography.extend`
  background-color: #cde665;
  // height: 100vh;
  padding: 100px 0 200px 0;
  position: relative;

`

const AboutImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 700px;
  top: 150px;
  left: 450px;
  border: 10px solid #f6f9e5;
`


const AboutContent = styled.div`
  background: white;
  width: 400px;
  padding: 30px;
  position: relative;
  z-index: 2;
  left: 100px;
  box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.2);
`

const WhatIsIt = () =>
  <AboutWrapper>
    <AboutImage src="/35369901331_6c8db0a80d_b.jpg"/>
    <AboutContent>
    <Title margin='md' bold center>
      About
    </Title>
    <Text fontSize='nm' inlineBlock>
      <b>Indie Dojo</b> is a one-week bootcamp, that will give you a detailed, step-by-step guide, how to move from a blank page to the launch-ready web product.
    </Text>
    <Text fonSize='nm' inlineBlock>
      You will learn from the team of <LinkTo inherit href='#trainers'>trainers</LinkTo> that build, bootstrap and launch their own <b>successful projects</b> on the web.
    </Text>
    </AboutContent>
  </AboutWrapper>

export default WhatIsIt
