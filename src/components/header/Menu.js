import React, { Component } from "react";
import styled from "styled-components";

const MenuWrapper = styled.ul`

`;

const Item = styled.li`
  color: blue;
`

export const Menu = () =>
  <MenuWrapper>
    <Item>About</Item>
  </MenuWrapper>
