import { injectGlobal } from "styled-components";

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Zilla Slab';
    src: url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,700');
  }

  body, html, * {
    font-family: 'Zilla Slab', helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }

  body, html {
    font-size: 16px;
  }

  a {
    color: ${props => props.theme.colors.link};
    font-size: inherit;
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
  }
`
