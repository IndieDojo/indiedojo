import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../components/styled/Grid";
import { Background, WithPadding, H1 } from "../components/styled/Base";

import Jumbo from "../components/home/Jumbo";
import Topics from "../components/home/Topics";
import Newsletter from "../components/home/Newsletter";
import WhatIsIt from "../components/home/WhatIsIt";
import Info from "../components/home/Info";
import Program from "../components/program/Program";

import Trainers from "../components/home/Trainers";
import Faqs from "../components/home/Faqs";
import Subscribe from "../components/home/Subscribe";
import Booking from "../components/home/Booking";
import BookingBlock from "../components/home/BookingBlock";
import Footer from "../components/home/Footer";
import PropTypes from "prop-types";
import WebsiteHead from '../components/home/WebsiteHead'


// Some css theme params depend on window width.
const Index = (props, { isMobile }) =>
  <FluidContainer>

    <Jumbo isMobile={isMobile}/>

    <WhatIsIt />

    <Topics isMobile={isMobile}/>

    {/*<Program isMobile={isMobile} mainColor='primary' secondColor='primaryHover'/>*/}

    <Trainers isMobile={isMobile} />

    <BookingBlock isMobile={isMobile} />

    <Newsletter isMobile={isMobile}/>

    <Faqs isMobile={isMobile} />

  </FluidContainer>


Index.contextTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool
};

export default Index;
