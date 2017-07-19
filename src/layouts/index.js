import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { getTheme } from "../components/styled/Theme";
import PropTypes from 'prop-types';
import "../components/styled/Global";
import Footer from "../components/home/Footer";
import WebsiteHead from '../components/home/WebsiteHead'

// Some css theme params depend on window width.
class Layout extends Component {
  state = {
    windowWidth: 0,
    isMobile: false
  };

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
      isMobile: this.state.isMobile
    };
  }

  render() {

    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>

          <WebsiteHead />

          {this.props.children({...this.props, ...this.state})}

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
