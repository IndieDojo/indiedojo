import React, { Component } from "react";
import { WithPadding, H1Md, H1Lg, H2Md, Text } from "../components/Base";
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
`;

const Item = styled.li`
  color: white;
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.md};
`;

const IsItForMe = () => (
  <WithPadding padding="xxl">
    <H1Lg color="white" margin="md" superbold>It's for you if:</H1Lg>
    <List>
      {items.map((item, index) => <Item key={index}>{item}</Item>)}
    </List>
  </WithPadding>
);

export default IsItForMe;
