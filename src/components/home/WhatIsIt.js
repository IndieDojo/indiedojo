import React, { Component } from 'react';
import { WithPadding, Title, Text, LinkTo } from '../styled/Base';
import { ContainerSmall } from '../styled/Grid';
import styled from 'styled-components';
import about from '../../../data/about.yaml';
import Markdown from 'react-remarkable';

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
          <Markdown>{about.content}</Markdown>
        </Text>
      </WithPadding>
    </AboutContents>
  </AboutWrapper>

export default WhatIsIt
