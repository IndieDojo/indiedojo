import { injectGlobal } from "styled-components";

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Zilla Slab';
    src: url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,400i,700,700i');
  }

  body, html, * {
    font-family: 'Zilla Slab', helvetica, sans-serif;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }

  body, html {
    margin: 0;
    font-size: 16px;
  }

  a {
    color: #F56911;
    font-size: inherit;
    transition: color 0.1s ease-in;
    text-decoration: none;
    cursor: pointer;
    &:visited {
      text-decoration: none;
      color: ${props => props.theme.colors.link};
    }
    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`