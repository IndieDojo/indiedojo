import React, { Component } from 'react';
import { WithPadding, Title, Text, LinkTo } from '../styled/Base';
import { ContainerSmall } from '../styled/Grid';
import styled from 'styled-components';

const AboutWrapper = styled.div`
position: relative;
`

const AboutContents = ContainerSmall.extend`
  position: relative;
  z-index: 10;
`

const WhatIsIt = () =>
  <AboutWrapper>
    <AboutContents>
      <WithPadding padding='xxl'>
        <Title margin='md' bold center>
          About
        </Title>
        <Text fontSize='md' inlineBlock>
          <b>Indie Dojo</b> is a one-week bootcamp, that will give you a detailed, step-by-step guide on how to move from a blank page to a launch-ready web product.
        </Text>
        <Text fontSize='md' inlineBlock>
          You will learn from a team of <LinkTo inherit href='#trainers'>trainers</LinkTo> that built, bootstrapped, and launched their own <b>successful projects</b> on the web.
        </Text>
      </WithPadding>
    </AboutContents>
  </AboutWrapper>

export default WhatIsIt
