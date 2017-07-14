import React, { Component } from 'react';
import { WithPadding, Title, Text } from '../components/Base';

const WhatIsIt = () =>
  <WithPadding padding='xxl'>
    <Title bold center>
      About
    </Title>
    <Text fontSize='nm'><b>Indie Dojo</b> is a one-week bootcamp, that will give you a detailed, step-by-step guide, how to move from a blank page to the launch-ready web product.</Text>
  </WithPadding>

export default WhatIsIt
