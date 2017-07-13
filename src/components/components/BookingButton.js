import React, { Component } from 'react';
import styled from 'styled-components';

export const BookingButton = styled.a`
  display: inline-block;
  margin-top: ${props => props.theme.margins.lg};
  padding: 0 ${props => props.theme.margins.xl};
  box-sizing: border-box;
  line-height: 50px;
  height: 50px;
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.colors.transparentWhite75};
  background: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: ${props => props.theme.weights.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${props => props.theme.colors.accentHover};
    color: ${props => props.theme.colors.transparentWhite};
  }
`
