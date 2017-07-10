import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "../components/header/Header.js";
import { injectGlobal } from "styled-components";
import { getTheme } from "../components/Theme";

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Poppins', arial;
    src: url('https://fonts.googleapis.com/css?family=Poppins:400,700');
  }

  body, html, * {
    margin: 0;
  }
`;

const Title = styled.h1`
  color: tomato;
`;

// Some css theme params depend on window width.
class Index extends Component {
  state = {
    windowWidth: 0
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.setState({windowWidth: window.innerWidth});
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  onWindowResize = () => {
    this.setState({windowWidth: window.innerWidth});
  };

  render() {
    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>
          <Header />
          <Title>Hey</Title>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index
