import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { getTheme } from "../components/Theme";
import PropTypes from 'prop-types';
import Footer from "../components/home/Footer";

import WebsiteHead from '../components/home/WebsiteHead'

// import '../components/main.css'

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Zilla Slab';
    src: url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,400i,700,700i');
  }

  body, html, *, li {
    font-family: 'Zilla Slab', helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }

  body, html {
    margin: 0;
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
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  }


`;

// Some css theme params depend on window width.
class Layout extends Component {
  constructor() {
    super()
    this.state = {
      windowWidth: 0,
      isMobile: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  };

  getChildContext() {
    return {
      isMobile: this.state.isMobile,
      windowWidth: this.state.windowWidth
    };
  }

  render() {
    const component = React.cloneElement(this.props.children(), {
      isMobile: this.state.isMobile,
      windowWidth: this.state.windowWidth
    });

    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>

          <WebsiteHead />

          {component}

          <Footer />

        </div>
      </ThemeProvider>
    );
  }
}

Layout.childContextTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool,
};

export default Layout;
