import React, { Component } from 'react';
import styled from 'styled-components';

// arguments:
//   variant - if 'jumbo', displays in 'white' on hover; otherwise: accentHover;
//
export const BookingButton = styled.a`
  display: inline-block;
  margin-top: ${props => props.theme.margins.lg};
  margin-bottom: ${props => props.theme.margins.lg};
  padding: 10px ${props => props.theme.margins.xl};
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${props => props.light ? 'white' : props.theme.colors.accent};
  color: ${props => props.light ? 'white' : props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.nm};
  font-weight: ${props => props.theme.weights.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  background: ${props => props.fill ? props.theme.colors.primary : 'transparent'};
  &:visited {
    color: ${props => props.light ? 'white' : props.theme.colors.primary };
  }
  &:hover {
    border-color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    color: ${props => props.variant === 'jumbo' ? props.theme.colors.transparentWhite : props.theme.colors.accentHover};
    text-decoration: none;
  }
`
