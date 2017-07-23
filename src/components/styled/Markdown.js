import React from 'react';
import styled from 'styled-components';

export const MarkdownWrapper= styled.div`
  h1, h2, h3, h4 {
    color: ${props => props.theme.colors.text};
    line-height: 2;
    font-weight: ${props => props.theme.weights.bold};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.regular.lg };
    @media only screen and (max-width: 900px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.medium[props.size] : props.theme.fontSizes.medium.lg};
    }
    @media only screen and (max-width: 700px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.mobile[props.size] : props.theme.fontSizes.mobile.lg};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.regular.md};
    @media only screen and (max-width: 900px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.medium[props.size] : props.theme.fontSizes.medium.md};
    }
    @media only screen and (max-width: 700px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.mobile[props.size] : props.theme.fontSizes.mobile.md};
    }
  }

  h3, h4 {
    font-size: ${props => props.theme.fontSizes.regular.nm};
    @media only screen and (max-width: 900px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.medium[props.size] : props.theme.fontSizes.medium.nm};
    }
    @media only screen and (max-width: 700px) {
      font-size: ${props => !!props.size ? props.theme.fontSizes.mobile[props.size] : props.theme.fontSizes.mobile.nm};
    }
  }

  p {
    font-size: ${props => props.theme.fontSizes.regular.nm};
    line-height: 1.5;
    padding-bottom: ${props => props.theme.margins.lg};
    color: ${props => props.theme.colors.text};
    margin-top: ${props => props.theme.margins.sm};
    &:last-of-type {
      padding-bottom: 0;
    }
    @media only screen and (max-width: 900px) {
      font-size: ${props => props.theme.fontSizes.medium.nm};
    }
    @media only screen and (max-width: 700px) {
      font-size: ${props => props.theme.fontSizes.mobile.nm};
    }
  }

  a {
    line-height: 1.5;
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    &:visited {
      color: ${props => props.theme.colors.link};
    }
    &:hover {
      color: ${props => props.theme.colors.linkHover};
      text-decoration: underline;
    }
  }

  ul, ol {
    ${''/* list-style: none; */}
    margin-bottom: ${props => props.theme.margins.lg}
  }

  ul li, ol li {
    font-size: ${props => props.theme.fontSizes.nm};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    @media only screen and (max-width: 900px) {
      font-size: ${props => props.theme.fontSizes.medium.nm};
    }
    @media only screen and (max-width: 700px) {
      font-size: ${props => props.theme.fontSizes.mobile.nm};
    }
  }
  li:before {
    content: disc;
  }

  img, iframe, video {
    width: 100%;
    margin: ${props => props.theme.margins.lg} 0;
  }
`
