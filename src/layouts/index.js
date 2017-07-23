import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import ReactGA from 'react-ga';

import idTheme from "../components/styled/Theme";
import "../components/styled/Global";
import WebsiteHead from "../components/home/WebsiteHead";
import Footer from "../components/home/Footer";

class Layout extends Component {

  componentDidMount() {
    ReactGA.pageview(location.pathname);

    // Intercom script
    const intercom_script = (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/xpwec2ck';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    // Intercom app index
    window.intercomSettings = {
      app_id: "xpwec2ck"
    };

    // Add Intercom script
    let script1 = document.createElement("script");
    script1.src = intercom_script;
    script1.async = true;
    document.body.appendChild(script1);
  }

  render() {
    ReactGA.initialize( "UA-8858797-9" );
    
    return (
      <ThemeProvider theme={idTheme}>
        <div>
          <WebsiteHead />

          {this.props.children({...this.props, ...this.state})}

          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
