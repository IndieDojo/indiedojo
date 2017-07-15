import React from 'react';
import styled from 'styled-components';

export const Logo = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: ${props => props.isMobile ? '100px' : '12vw'};
  width: ${props => props.isMobile ? '100px' : '12vw'};
  background-image: ${props => props.light ? `url('/indiedojo-white.png')` : `url('/indiedojo.png')` };
  background-size: contain;
  background-repeat: no-repeat;
  
`
