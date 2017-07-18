import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { getTheme } from "../components/styled/Theme";
import PropTypes from 'prop-types';
import "../components/styled/Global";
import Footer from "../components/home/Footer";
import WebsiteHead from '../components/home/WebsiteHead'
import intercom_script from '../../data/intercom_script';

// Some css theme params depend on window width.
class Layout extends Component {
  state = {
    windowWidth: 0,
    isMobile: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    window.intercomSettings = {
      app_id: "xpwec2ck"
    };
    // window.Intercom('boot', {
    //    app_id: 'xpwec2ck',
    //    custom_launcher_selector: '#intercom-launcher'
    // });

    //Adds Intercom script
    let script1 = document.createElement("script");
    script1.src = intercom_script;
    script1.async = true;
    document.body.appendChild(script1);


    // Add AddThis script
    let addthis_script = document.createElement("script");
    addthis_script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-596e2fe819e85d88";
    addthis_script.async = true;
    document.body.appendChild(addthis_script);



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
