import React, { Component } from 'react';
import { WithPadding, Title, Text, LinkTo } from '../common/Base';

const WhatIsIt = () =>
  <WithPadding padding='xxl'>
    <Title margin='md' bold center>
      About
    </Title>
    <Text fontSize='nm' inlineBlock>
      <b>Indie Dojo</b> is a one-week bootcamp, that will give you a detailed, step-by-step guide, how to move from a blank page to the launch-ready web product.
    </Text>
    <Text fonSize='nm' inlineBlock>
      You will learn from the team of <LinkTo inherit href='#trainers'>trainers</LinkTo> that build, bootstrap and launch their own <b>successful projects</b> on the web.
    </Text>
  </WithPadding>

export default WhatIsIt
