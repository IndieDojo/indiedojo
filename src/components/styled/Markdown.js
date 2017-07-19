import React from 'react';
import styled from 'styled-components';

export const MarkdownWrapper= styled.div`
  h1, h2, h3, h4 {
    color: ${props => props.theme.colors.text};
    line-height: 2;
    font-weight: ${props => props.theme.weights.bold};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.lg };
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.md};
  }

  h3, h4 {
    font-size: ${props => props.theme.fontSizes.nm};
  }

  p {
    font-size: ${props => props.theme.fontSizes.nm};
    line-height: 1.5;
    padding-bottom: ${props => props.theme.margins.lg};
    color: ${props => props.theme.colors.text};
    margin-top: ${props => props.theme.margins.sm};
    &:last-of-type {
      padding-bottom: 0;
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
    list-style: none;
    margin-bottom: ${props => props.theme.margins.lg}
  }

  ul li, ol li {
    font-size: ${props => props.theme.fontSizes.nm};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    padding-left: ${props => props.theme.margins.lg};
  }
  li:before {
    content: "";
  }

  img, iframe, video {
    width: 100%;
    margin: ${props => props.theme.margins.lg} 0;
  }
`
