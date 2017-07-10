import React, { Component } from "react";
import styled from "styled-components";

const MenuWrapper = styled.ul`

`;

const Item = styled.li`
  color: ${props => props.theme.colors.tomato};
`

export const Menu = () =>
  <MenuWrapper>
    <Item>About</Item>
  </MenuWrapper>
