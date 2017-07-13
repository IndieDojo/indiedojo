import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import { injectGlobal, ThemeProvider } from "styled-components";
import { getTheme } from "../components/Theme";

import WebsiteHead from '../components/home/WebsiteHead'

import { FluidContainer, ContainerSmall } from '../components/grid/Grid';
import { WithPadding } from '../components/components/Base'
import { MarkdownWrapper } from '../components/components/Markdown'
import { COC } from '../../static/COC'
import Footer from "../components/home/Footer";


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
`;

// Some css theme params depend on window width.
class CodeOfConduct extends Component {
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

  render() {
    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>
          <FluidContainer>
            <ContainerSmall>
              <WithPadding padding='xxxl'>
                <MarkdownWrapper isMobile={this.state.isMobile}>
                  <Markdown source={COC}/>
                </MarkdownWrapper>
              </WithPadding>
            </ContainerSmall>
          </FluidContainer>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default CodeOfConduct;
