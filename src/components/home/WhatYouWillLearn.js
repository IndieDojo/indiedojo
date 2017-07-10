import React, { Component } from 'react';
import { FluidContainer, ContainerSmall } from '../grid/Grid'
import { WithPadding, H1Md, H2Md, Text, Button } from '../components/Base';
import styled from 'styled-components';

const items = [
  "Validate your idea, iterate and find a product market fit,",
  "Define your MVP and build a prototype,",
  "Brand your product and design it,",
  "Build your MVP,",
  "Onboard users and let the world discover your product."
]

const List = styled.ul`
  list-style: disc;
`

const Item = styled.li`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.md};
`


const IsItForMe = () =>
  <WithPadding padding='xxl'>
    <H1Md color='text' margin='md' superbold>You will learn how to:</H1Md>
    <List>
      { items.map( (item, index) => <Item key={index}>{item}</Item>)}
    </List>
  </WithPadding>

export default IsItForMe
