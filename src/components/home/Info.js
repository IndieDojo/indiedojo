import React, { Component } from 'react';
import styled from 'styled-components';

import IsItForMe from './IsItForMe';
import WhatYouWillLearn from './WhatYouWillLearn'

const Panel = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
`

const Item = styled.div`
  box-sizing: border-box;
  width: ${props => props.isMobile ? '100%' : '50%'};
  background: ${props => props.theme.colors[props.background]};
  padding: 0 ${props => props.isMobile ? props.theme.margins.md : props.theme.margins.xl};
`

const Info = ({isMobile}) => console.log(`isMobile`, isMobile) || (
  <Panel isMobile={isMobile}>
    <Item background='black' isMobile={isMobile}>
      <IsItForMe />
    </Item>
    <Item background='veryLight' isMobile={isMobile}>
      <WhatYouWillLearn />
    </Item>
  </Panel>
)

export default Info;
