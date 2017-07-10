import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { FluidContainer, Container } from '../components/grid/Grid'
import { Header } from "../components/header/Header";
import { getTheme } from "../components/Theme";
import {H1} from '../components/components/Base'

import Jumbo from "../components/home/Jumbo";
import WhatIsIt from '../components/home/WhatIsIt';
import Learning from '../components/home/Learning';

// Sets global css
injectGlobal`
  @font-face {
    src: url('https://fonts.googleapis.com/css?family=Raleway:400,700,800,900');
  }

  body, html, * {
    margin: 0;
    font-family: 'Raleway';
  }
`;

// Some css theme params depend on window width.
class Index extends Component {
  state = {
    windowWidth: 0
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <=600
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  onWindowResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  };

  render() {
    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>
          <FluidContainer>
            <Jumbo isMobile={this.state.isMobile} windowWidth={this.state.windowWidth}/>
            <WhatIsIt />
            <Learning />
          </FluidContainer>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index
