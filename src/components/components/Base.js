import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-link";

export const MainTitle = styled.h1`
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  margin-bottom: ${props =>
  props.margin ? props.theme.margins[props.margin] : 0};
  margin-right: ${props =>
  !!props.marginRight ? props.theme.margins[props.marginRight] : 0};
  display: ${props => props.inline ? "inline-block" : "block"};
  font-weight: ${props => {
    if (props.black) return props.theme.weights.black;
    if (props.superbold) return props.theme.weights.superbold;
    if (props.bold) return props.theme.weights.bold;
    return props.theme.weights.normal;
  }};
  font-size: ${props => !!props.size ? props.theme.fontSizes[props.size] : props.theme.fontSizes.lg};
  text-transform: ${ props => {
    if (props.capitalize) return 'capitalize';
    if (props.uppercase) return 'uppercase';
    return 'none';
  }};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : '1.25'};
  text-align: ${props => props.center ? "center" : "auto"};
`;

export const Title = MainTitle.withComponent("h2");
const H3 = MainTitle.withComponent('h3');
export const Subtitle = H3.extend`
  font-size: ${props => !!props.size ? props.theme.fontSizes[props.size] : props.theme.fontSizes.md};
`

export const Text = styled.p`
  display: ${props => props.inlineBlock ? "inline-block" : "inline"};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.5};
  font-size: ${props =>
  !!props.fontSize
    ? props.theme.fontSizes[props.fontSize]
    : props.theme.fontSizes.nm};
  font-weight: ${props =>
  props.bold ? props.theme.weights.bold : props.theme.weights.normal};
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  padding-top: ${props =>
  !!props.paddingTop
    ? props.theme.margins[props.paddingTop]
    : props.theme.margins.md};
  padding-bottom: ${props =>
  !!props.paddingBottom
    ? props.theme.margins[props.paddingBottom]
    : props.theme.margins.md};

  Link {
    font-size: ${props =>
  !!props.fontSize
    ? props.theme.fontSizes[props.fontSize]
    : props.theme.fontSizes.nm} !important;
    color: ${props => !!props.theme.colors.primary} !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const WithPadding = styled.div`
  padding: ${props =>
  !!props.padding
    ? props.theme.margins[props.padding]
    : props.theme.margins.lg} 0;
`;

export const Background = styled.div`
  width: 100%;
  background: ${props =>
  !!props.color
    ? props.theme.colors[props.color]
    : props.theme.colors.transparent};
`;

export const ReadMore = styled.a`
  font-size: ${props => props.theme.fontSizes.nm};
  color: black;
  line-height: 4rem;
  text-decoration: ${props => props.noDecoration ? "none" : "underline"};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.link};
  }
`;
