import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import ReactGA from 'react-ga';

import { getTheme } from "../components/styled/Theme";
import "../components/styled/Global";
import WebsiteHead from "../components/home/WebsiteHead";
import Footer from "../components/home/Footer";

ReactGA.initialize("UA-8858797-9");

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// Some css theme params depend on window width.
class Layout extends Component {
  // constructor( props ) {
  //   super( props );
  //   this.logPageView = this.logPageView.bind( this );
  //   this.changeRoute = this.changeRoute.bind( this );
  // }

  state = { windowWidth: 0 };

  // changeRoute() {
  //   this.logPageView();
  //   window.scrollTo(0, 0);
  // }
  //
  // logPageView() {
  //   ReactGA.set({ page: window.location.pathname });
  //   ReactGA.pageview(window.location.pathname);
  // }

  componentDidMount() {
    ReactGA.pageview(location.pathname);
    const intercom_script = (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/xpwec2ck';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

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
    // let addthis_script = document.createElement("script");
    // addthis_script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-596e2fe819e85d88";
    // addthis_script.async = true;
    // document.body.appendChild(addthis_script);

    this.setState({ windowWidth: window.innerWidth });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    // ReactGA.initialize( "UA-8858797-9" );
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

export default Layout;
