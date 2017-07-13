import React, { Component } from 'react';
import { FluidContainer, ContainerSmall } from '../grid/Grid'
import { WithPadding, Title, Text } from '../components/Base';

const WhatIsIt = () =>
  <ContainerSmall>
    <WithPadding padding='xxl'>
      <Title marginRight='md' bold inline>Indie Dojo</Title>
      <Text fontSize='md'>is a one-week bootcamp, that will give you a detailed, step-by-step guide, how to move from a blank page to the launch-ready web product.</Text>
    </WithPadding>
  </ContainerSmall>

export default WhatIsIt
