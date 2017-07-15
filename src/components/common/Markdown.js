import React from 'react';
import styled from 'styled-components';

export const MarkdownWrapper= styled.div`
  h1, h2 {
    color: ${props => props.theme.colors.text};
    line-height: 1.65;
    font-weight: ${props => props.theme.weights.bold};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.lg };
    margin-bottom: ${props => props.theme.margins.lg};
  }

  h2, h3, h4 {
    margin-top: ${props => props.theme.margins.nm};
    font-size: ${props => props.theme.fontSizes.nm};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.md};
  }

  p {
    font-size: ${props => props.theme.fontSizes.nm};
    line-height: 1.65;
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
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    margin-bottom: ${props => props.theme.margins.lg}
  }

  ol {
    margin-bottom: ${props => props.theme.margins.lg}
  }

  ul li, ol li {
    font-size: ${props => props.theme.fontSizes.nm};
    color: ${props => props.theme.colors.text};
    line-height: 1.65;
    padding-left: ${props => props.theme.margins.lg};
  }
  li:before {
    content: "";
  }

  blockquote {
    margin-top: ${props => props.theme.margins.lg};
    margin-bottom: ${props => props.theme.margins.xl};
    margin-left: ${props => props.isMobile ? '1rem' : '3rem'};
    margin-right: ${props => props.isMobile ? '1rem' : '3rem'};
    font-style: italic;
    background: ${props => props.theme.colors.veryLight};
    padding: ${props => props.theme.margins.lg};
  }

  blockquote p {
    font-size: ${props => props.theme.fontSizes.nm};
    font-weight: ${props => props.theme.weights.normal};
    color: ${props => props.theme.colors.text};
    font-style: italic;
    padding-bottom: ${props => props.theme.margins.sm};
    line-height: 1.55;
    opacity: 0.65;
  }

  img {
    width: 100%;
    margin-top: ${props => props.theme.margins.lg};
  }

  iframe {
    width: 100%;
    margin-top: ${props => props.theme.margins.lg};
  }
  video {
    width: 100%;
  }
`
