import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import ReactGA from 'react-ga';

import idTheme from "../components/styled/Theme";
import "../components/styled/Global";
import WebsiteHead from "../components/home/WebsiteHead";
import Footer from "../components/home/Footer";

class Layout extends Component {

  componentDidMount() {
    ReactGA.initialize( "UA-8858797-9" );
    ReactGA.pageview(location.pathname);

    // Intercom script
    const intercom_script = (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/xpwec2ck';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    const pixel_script = !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '355243404895316'); // Insert your pixel ID here.
      fbq('track', 'PageView');

    // Intercom app index
    window.intercomSettings = {
      app_id: "xpwec2ck"
    };

    // Add Intercom script
    let script1 = document.createElement("script");
    script1.src = intercom_script;
    script1.async = true;
    document.body.appendChild(script1);

    //Add Pixel
    let script2 = document.createElement("script");
    script2.src = pixel_script;
    script2.async = true;
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div>
        <WebsiteHead />
        <ThemeProvider theme={idTheme}>
          <div>
            {this.props.children({...this.props, ...this.state})}
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default Layout;
