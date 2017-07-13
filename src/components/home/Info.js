import React, { Component } from "react";
import { WithPadding, Title} from "../components/Base";
import { Row, Cell } from '../grid/Grid';
import styled from "styled-components";

const items = [
  "You are determined to become independent and to setup your web-based business",
  "You have an idea, and don't know where to start,",
  "You feel overwhelmed with what it takes to make it reality,",
  "You want to meet other determined indie founders,",
  "You can't focus at home and want to spend a week with other project-builders."
];

const List = styled.ul`
  list-style: disc;
  padding-left: ${props => props.theme.margins.lg};
`;

const Item = styled.li`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.md};
`;

const IsItForMe = () => (
  <WithPadding padding="xxl">
    <Title margin="md" bold>It's for you if:</Title>
    <List>
      {items.map((item, index) => <Item key={index}>{item}</Item>)}
    </List>
  </WithPadding>
);

export default IsItForMe;
