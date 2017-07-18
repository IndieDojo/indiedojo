import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { getTheme } from "../components/styled/Theme";
import PropTypes from 'prop-types';
import "../components/styled/Global";
import Footer from "../components/home/Footer";
import WebsiteHead from '../components/home/WebsiteHead'

import script_with_id from '../../data/intercom_id_script'
import script_intercom from '../../data/intercom_script';

// Some css theme params depend on window width.
class Layout extends Component {
  state = {
    windowWidth: 0,
    isMobile: false
  };

  componentWillMount() {
      let script1 = document.createElement("script");
      let script2 = document.createElement("script");

      script1.src = script_with_id;
      script1.async = true;
      script2.src = script_intercom;
      script2.async = true;
      document.body.appendChild(script1);
      document.body.appendChild(script2);
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
      isMobile: this.state.isMobile
    };
  }

  render() {
    const component = React.cloneElement(this.props.children(), {
      isMobile: this.state.isMobile
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
