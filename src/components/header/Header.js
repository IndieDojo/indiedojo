import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,1);
  padding: 0 ${props => props.theme.margins.lg};
`;

const Logo = styled.h1`
  color: white;
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo>Indie Dojo</Logo>
  </HeaderWrapper>
);
