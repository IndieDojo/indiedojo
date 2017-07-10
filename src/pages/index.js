import React from "react";
import styled from "styled-components";
import {Header} from "../components/header/Header.js";
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }
`;

const Title = styled.h1`
  color: tomato;
`;

export default () => (
  <div>
    <Header />
    <Title>Hey</Title>
  </div>
);
