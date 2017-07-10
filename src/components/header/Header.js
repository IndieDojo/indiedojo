import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0, 1);
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo>Indie Dojo</Logo>
    <Menu />
  </HeaderWrapper>
);
