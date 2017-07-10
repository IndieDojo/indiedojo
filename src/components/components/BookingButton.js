import React, { Component } from 'react';
import styled from 'styled-components';

export const BookingButton = styled.a`
  margin-top: ${props => props.theme.margins.xl};
  display: inline-block;
  padding: ${props => props.theme.margins.md} ${props => props.theme.margins.lg};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.md};
  border: 5px solid ${props => props.theme.colors.accent};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.transparentWhite};
  }
`
