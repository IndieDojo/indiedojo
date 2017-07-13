import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-link";

export const Title = styled.h1`
  color: ${props =>
  props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  margin-bottom: ${props =>
  props.margin ? props.theme.margins[props.margin] : 0};
  margin-right: ${props =>
  !!props.marginRight ? props.theme.margins[props.marginRight] : 0};
  display: ${props => props.inline ? "inline-block" : "block"};
  font-weight: ${props => {
    if (props.black) return props.theme.weights.black;
    if (props.superbold ) return props.theme.weights.superbold;
    if (props.bold) return props.theme.weights.bold;
    return props.theme.weights.normal;
  }};
  font-size: ${props => props.theme.fontSizes.nm};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.5};
  text-align: ${props => props.center ? 'center' : 'auto'};
`;

export const XxxlTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.xxxl};
`;


export const XxlTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.xxl};
`;

export const XlTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const LgTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.lg};
`;

export const MdTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.md};
`;

export const NmTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.nm};
`;

export const SmTitle = Title.extend`
  font-size: ${props => props.theme.fontSizes.sm};
  margin-right: ${props => props.theme.margins.sm};
`;

export const H1 = Title;
export const H1Xxxl = XxxlTitle;
export const H1Xxl = XxlTitle;
export const H1Xl = XlTitle;
export const H1Lg = LgTitle;
export const H1Md = MdTitle;
export const H1Nm = NmTitle;
export const H1Sm = SmTitle;

export const H2 = Title.withComponent("h2");
export const H2Xxl = XxlTitle.withComponent("h2");
export const H2Xl = XlTitle.withComponent("h2");
export const H2Lg = LgTitle.withComponent("h2");
export const H2Md = MdTitle.withComponent("h2");
export const H2Nm = NmTitle.withComponent("h2");
export const H2Sm = SmTitle.withComponent("h2");

export const H3 = Title.withComponent("h3");
export const H3Xxl = XxlTitle.withComponent("h3");
export const H3Xl = XlTitle.withComponent("h3");
export const H3Lg = LgTitle.withComponent("h3");
export const H3Md = MdTitle.withComponent("h3");
export const H3Nm = NmTitle.withComponent("h3");
export const H3Sm = SmTitle.withComponent("h3");

export const H4 = Title.withComponent("h4");
export const H4Xxl = XxlTitle.withComponent("h4");
export const H4Xl = XlTitle.withComponent("h4");
export const H4Lg = LgTitle.withComponent("h4");
export const H4Md = MdTitle.withComponent("h4");
export const H4Nm = NmTitle.withComponent("h4");
export const H4Sm = SmTitle.withComponent("h4");

export const Text = styled.p`
  display: ${props => props.inlineBlock ? "inline-block" : "inline"};
  line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.5};
  font-size: ${props => !!props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.nm};
  font-weight: ${props => props.bold ? props.theme.weights.bold : props.theme.weights.normal};
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  padding-top: ${props => !!props.paddingTop ? props.theme.margins[props.paddingTop] : props.theme.margins.md};
  padding-bottom: ${props => !!props.paddingBottom ? props.theme.margins[props.paddingBottom] : props.theme.margins.md};

  Link {
    font-size: ${props => !!props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes.nm} !important;
    color: ${props => !!props.theme.colors.primary} !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;


export const Image = styled.img`
  display: inline-block;
`;

export const ClickableImage = props => (
  <img
    src={props.src}
    alt={props.alt || ""}
    data-index={props.dataIndex}
    data-name={props.dataName}
    onClick={props.onClick}
    data-imgurl={props.imgUrl}
  />
);

export const ImageRound = styled.img`
  box-sizing: border-box;
  width: 100%;
  max-width: 200px;
  border: 5px solid ${props =>
  props.color ? props.theme.colors[props.color] : "none"};
  border-radius: 50%;
`;

export const ImageRoundSmall = styled(ImageRound)`
  width: 60px;
  height: 60px;
  float: left;
  margin-right: ${props => props.theme.margins.md};
`;

export const WithPadding = styled.div`
  padding: ${props => !!props.padding ? props.theme.margins[props.padding] : props.theme.margins.lg} 0;
`;

export const Background = styled.div`
  width: 100%;
  background: ${props => !!props.color ? props.theme.colors[props.color] : props.theme.colors.transparent};
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 120px;
  padding: 8px 17px;
  background: ${props =>
  props.inactive
    ? props.theme.colors.inactive
    : props.theme.colors[props.color]};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.nm};
  outline: none;
  border: 4px solid ${props => props.theme.colors.text};
  cursor: ${props => props.inactive ? "normal" : "pointer"};
  transition: all 0.2s ease-in;
  border-radius: ${props => props.theme.radius.sm};
  &:hover {
    background: ${props =>
  props.inactive
    ? props.theme.colors.inactive
    : props.theme.colors[`darken${props.color}`]};
  }
`;

const LinkStyled = styled.span`
  a {
    display: ${props => props.block ? "block" : "inline"};
    font-size: ${props =>
      !!props.fontSize
        ? props.theme.fontSizes[props.fontSize]
        : props.theme.fontSizes.nm};
    font-family: ${props =>
      !!props.serif
        ? props.theme.fontFamily.serif
        : props.theme.fontFamily.sansSerif};
    font-weight: ${props => props.bold ? "bold" : "normal"};
    line-height: ${props => !!props.lineHeight ? props.lineHeight : 1.5};
    text-decoration: ${props => !!props.noDecoration ? "none" : "underline"};
    color: ${props =>
      !!props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
        &:hover {
    color: ${props =>
      !!props.hoverColor
        ? props.theme.colors[props.hoverColor]
        : props.theme.colors.primary};
    cursor: pointer;
    text-decoration: ${props =>
      props.noDecorationOnHover ? "none" : "underline"};
    };
    margin-bottom: ${props => !!props.margin ? props.theme.margins[props.margin] : '0'};
  }
`;

export const LinkTo = (
  {
    to,
    color,
    hoverColor,
    noDecoration,
    noDecorationOnHover,
    lineHeight,
    children,
    margin,
    fontSize,
    bold,
    serif,
    block = false
  }
) => (
  <LinkStyled
    color={color}
    hoverColor={hoverColor}
    noDecoration={noDecoration}
    noDecorationOnHover={noDecorationOnHover}
    margin={margin}
    lineHeight={lineHeight}
    fontSize={fontSize}
    bold={bold}
    block={block}
    serif={serif}
  >
    <Link to={to}>
      {children}
    </Link>
  </LinkStyled>
);

export const ReadMore = styled.a`
  font-size: ${props => props.theme.fontSizes.nm};
  color: black;
  line-height: 4rem;
  text-decoration: ${props => props.noDecoration ? 'none' : 'underline'};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.link};
  }
`;

export const Card = styled.div`
  display: block;
  background: ${props =>
  props.background
    ? props.theme.colors[props.background]
    : "rgba(255,255,255, 0)"};
  padding: ${props => props.padding ? props.theme.margins[props.padding] : 0};
  margin-top: ${props =>
  props.marginTop ? props.theme.margins[props.marginTop] : 0};
  margin-bottom: ${props =>
  props.marginBottom ? props.theme.margins[props.marginBottom] : 0};
  border-radius: ${props =>
  !!props.radius ? props.theme.radius[props.radius] : 0};
  box-shadow: ${props => !!props.shadow ? `0 3px 10px rgba(0,0,0,0.14)` : 0};
  border-radius: ${props => {
    if (!!props.radius) {
      return props.theme.radius[props.radius];
    } else {
      return 0;
    }
  }};
`;
