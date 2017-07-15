import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../components/grid/Grid";
import { Background, WithPadding, H1 } from "../components/common/Base";

import Jumbo from "../components/home/Jumbo";
import Topics from "../components/home/Topics";
import Newsletter from "../components/home/Newsletter";
import WhatIsIt from "../components/home/WhatIsIt";
import Info from "../components/home/Info";
import Program from "../components/home/Program";

import Trainers from "../components/home/Trainers";
import Faqs from "../components/home/Faqs";
import Subscribe from "../components/home/Subscribe";
import Booking from "../components/home/Booking";
import BookingBlock from "../components/home/BookingBlock";
import Footer from "../components/home/Footer";
import PropTypes from "prop-types";
import WebsiteHead from '../components/home/WebsiteHead'


// Some css theme params depend on window width.
class Index extends Component {

  render() {
    return (
        <div>

          <FluidContainer>
            <Jumbo
              isMobile={this.context.isMobile}
              windowWidth={this.context.windowWidth}
            />

            <ContainerSmall>
              <WhatIsIt />
            </ContainerSmall>
          </FluidContainer>

          <FluidContainer>
            <Background color='primary'>
              <Container>
                <Topics isMobile={this.context.isMobile}/>
              </Container>
            </Background>

            <Container>
              <Program isMobile={this.context.isMobile} />
            </Container>

            <Background color='veryLight'>
              <div id='trainers'></div>
              <Container>
                <Trainers isMobile={this.context.isMobile} />
              </Container>
            </Background>

            <ContainerSmall>
              <BookingBlock isMobile={this.context.isMobile} />
            </ContainerSmall>

            <Background color='veryLight'>
              <ContainerSmall>
                <Newsletter isMobile={this.context.isMobile}/>
              </ContainerSmall>
            </Background>

            <ContainerSmall>
              <Faqs isMobile={this.context.isMobile} />
            </ContainerSmall>

          </FluidContainer>

        </div>
    );
  }
}

Index.contextTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool
};

export default Index;
