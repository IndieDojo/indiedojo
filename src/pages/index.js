import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import { FluidContainer, Container, Row, Cell } from "../components/grid/Grid";
import { Header } from "../components/header/Header";
import { getTheme } from "../components/Theme";
import { WithPadding, H1 } from "../components/components/Base";

import Jumbo from "../components/home/Jumbo";
import WhatIsIt from "../components/home/WhatIsIt";
import Info from "../components/home/Info";
import Program from "../components/home/Program";
import WhatYouWillLearn from "../components/home/WhatYouWillLearn";
import Trainers from "../components/home/Trainers";
import Faqs from "../components/home/Faqs";
import Subscribe from "../components/home/Subscribe";
import Booking from "../components/home/Booking";

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Raleway', arial;
    src: url('https://fonts.googleapis.com/css?family=Raleway:400,700,800,900');
  }

  body, html, *, li {
    margin: 0;
    font-family: 'Raleway', arial;
    font-size: 16px;
  }
`;

// Some css theme params depend on window width.
class Index extends Component {
  state = {
    windowWidth: 0
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

  render() {
    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>
          <FluidContainer>
            <Jumbo
              isMobile={this.state.isMobile}
              windowWidth={this.state.windowWidth}
            />
            <Subscribe isMobile={this.state.isMobile} />
            <WhatIsIt />
          </FluidContainer>

          <Info isMobile={this.state.isMobile} />
          <Program isMobile={this.state.isMobile} />
          <Trainers isMobile={this.state.isMobile} />

          <FluidContainer>
            <Container>
              <WithPadding padding="xl">
                <Booking isMobile={this.state.isMobile} />
              </WithPadding>
            </Container>
          </FluidContainer>

          <Subscribe isMobile={this.state.isMobile} />
          <Faqs isMobile={this.state.isMobile} />
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
