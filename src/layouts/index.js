import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../components/styled/Theme";
import "../components/styled/Global";
import WebsiteHead from "../components/home/WebsiteHead";
import Footer from "../components/home/Footer";
import intercom_script from "../../data/intercom_script";

// Some css theme params depend on window width.
class Layout extends Component {
  state = { windowWidth: 0 };

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);

    //Intercom app index
    window.intercomSettings = {
      app_id: "xpwec2ck"
    };

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

    this.setState({ windowWidth: window.innerWidth });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const component = React.cloneElement(this.props.children(), {});

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

export default Layout;
