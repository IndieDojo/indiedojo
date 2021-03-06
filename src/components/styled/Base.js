import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-link";

// Base Components:
//
//   Title components:
//     MainTitle - h1
//     Title - h2
//     Subtitle - h3
//
//   MainTitle, Title, Subtitle properties:
//     color: any color from Theme, eg. <Title color='primary'>...</Title>
//     margin: adds margin at the bottom of the title (values: 0, sm, nm, md, lg, xl, xxl, xxxl)
//     marginRight: same as margin
//     inline: Boolean, if added Title gets inline-block property
//     bold: Boolean, adds font-weight 700
//     superBold: Boolean, adds font-weight 800
//     black: Boolean, adds font-weight 900
//     size: font-size(values: xs, sm, nm, md, lg, xl, xxl, xxxl )
//     lineHeight: changes line height, default: 1.25;
//     center: Boolean, centers text
//     uppercase: Boolean
//     capitalize: Boolean
//
//   Text properties (p)
//     inlineBlock: Boolean, displays as inline-block
//     lineHeight: changes lineHeight, eg. '1.25', default: '1.5'
//     fontSize: font-size(values: xs, sm, nm, md, lg, xl, xxl, xxxl )
//     bold: Boolean
//     paddingBottom, paddingTop: (values: 0, sm, nm, md, lg, xl, xxl, xxxl)
//
//    Card properties
//      padding: (values: xs, sm, nm, md, lg, xl, xxl, xxxl )
//      color: background color from the Theme
//
//   Background - div to change the... background color,
//     properties: color (any from the Theme)
//
//   WithPadding - div to add same padding at the top and bottom of the element
//     properties: padding (values: 0, sm, nm, md, lg, xl, xxl, xxxl)
//
//   LinkTo - a tag,
//     properties:
//       inherit: Boolean, inherits font size;


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
  font-size: ${props => !!props.size ? props.theme.fontSizes.regular[props.size] : props.theme.fontSizes.regular.lg};
  text-transform: ${ props => {
    if (props.capitalize) return 'capitalize';
    if (props.uppercase) return 'uppercase';
    return 'none';
  }};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.25};
  text-align: ${props => props.center ? "center" : "auto"};
  text-shadow: ${props => props.shadow ? '0 0 10px rgba(0,0,0,1)' : 'none'};
  @media (max-width: 700px) {
    line-height: 1.25;
  }
  text-decoration: ${props => props.lineThrough ? 'line-through' : 'none'};
  @media only screen and (max-width: 900px) {
    font-size: ${props => !!props.size ? props.theme.fontSizes.medium[props.size] : props.theme.fontSizes.medium.lg};
  }
  @media only screen and (max-width: 700px) {
    font-size: ${props => !!props.size ? props.theme.fontSizes.mobile[props.size] : props.theme.fontSizes.mobile.lg};
  }
`;

export const Title = MainTitle.withComponent("h2");
const H3 = MainTitle.withComponent('h3');
export const Subtitle = H3.extend`
  font-size: ${props => !!props.size ? props.theme.fontSizes[props.size] : props.theme.fontSizes.md};
`

export const Text = styled.div`
  display: ${props => props.inlineBlock ? "inline-block" : "inline"};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.5};
  font-size: ${props =>
  !!props.fontSize
    ? props.theme.fontSizes.regular[props.fontSize]
    : props.theme.fontSizes.regular.nm};
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
  p{
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 900px) {
    font-size: ${props => !!props.size ? props.theme.fontSizes.medium[props.size] : props.theme.fontSizes.medium.nm};
  }
  @media only screen and (max-width: 700px) {
    font-size: ${props => !!props.size ? props.theme.fontSizes.mobile[props.size] : props.theme.fontSizes.mobile.nm};
  }
`;

export const WithPadding = styled.div`
  width: 100%;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  padding: ${props => !!props.padding ? props.theme.margins[props.padding] : props.theme.margins.lg};
  background: ${props => !!props.color ? props.theme.colors[props.color] : props.theme.colors.transparent };
`

export const LinkTo = styled.a`
  color: ${props => props.theme.colors.link};
  font-size: ${props => props.inherit ? 'inherit' : '1em'};
  transition: color 0.1s ease-in;
  text-decoration: none;
  cursor: pointer;
  &:visited {
    text-decoration: none;
    color: ${props => props.theme.colors.link};
  }
  &:hover {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
  }
  @media only screen and (min-width: 48em ) {
    font-size: ${props => props.inherit ? 'inherit' : '1.15em'};
  }
  @media only screen and (min-width: 64em ) {
    font-size: ${props => props.inherit ? 'inherit' : '1.25em'};
  }
`;
