import React, { Component } from 'react';
import { FluidContainer, ContainerSmall } from '../grid/Grid'
import { WithPadding, H1Md, Text } from '../components/Base';

const WhatIsIt = () =>
  <FluidContainer>
    <ContainerSmall>
      <WithPadding padding='xxl'>
        <H1Md marginRight='sm' bold inline>Indie Dojo</H1Md>
        <Text fontSize='md'>is a one-week long camp, that will give you a detailed, step-by-step guide, how to move from a blank page to the launch-ready web product.</Text>
      </WithPadding>
    </ContainerSmall>
  </FluidContainer>

export default WhatIsIt
