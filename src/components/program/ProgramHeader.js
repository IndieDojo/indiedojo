import React from "react";
import styled from "styled-components";
import { Subtitle } from "../styled/Base";

// Program Header - displays a set a row of cells with day of the week and topic.
//
//   arguments:
//     headers - an array
//       [
//         {
//           day: 'Monday',
//           topic: 'Intro'
//         },
//         {...}
//       ]
//     activeIndex: Number, indecates a position of active header
//     isProgramVisible: Boolean, if set to false, header will be displayed in light grey indicating inactive header,
//     isMobile: Boolean, for styling purposes,
//     mainColor: String, one of the colors from Theme.js, eg. "primary". Used for background of active Header cell,
//     onClick: Function, pass if you want to change the activity status of the program,


// If the cell is 'active' (selected) it will get `mainColor` background
const HeaderCell = styled.div`
  flex-grow: 1;
  text-align: center;
  background: ${props =>
  props.active
    ? props.theme.colors[props.mainColor]
    : props.theme.colors.veryLight};
  border-bottom: ${props => props.isMobile ? "1px solid white" : "0"};
  padding: ${props => props.theme.margins.md};
  cursor: ${props => props.active ? "normal" : "pointer"};
  transition: all 0.2s ease-out;
  overflow: hidden;
  &:hover {
    background: ${props => {
      if (!props.isProgramVisible) return props.theme.colors.veryLight;
      return props.active ? props.mainColor : props.theme.colors.veryLightHover;
    }};
  }
`;


// If isMobile displays program header as column; if not as row
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  background: ${props => props.theme.colors.transparent};
`;

const ProgramHeader = (
  { headers, activeIndex, isProgramVisible, onClick, isMobile, mainColor }
) => (
  <HeaderWrapper isMobile={isMobile}>
    {headers.map((header, index) => (
      <HeaderCell
        key={header.topic}
        active={index === activeIndex}
        data-index={index}
        mainColor={mainColor}
        isMobile={isMobile}
        isProgramVisible={isProgramVisible}
        onClick={onClick}
      >
        <Subtitle
          size="nm"
          lineHeight="1"
          color={index === activeIndex ? "white" : "mainColor"}
          margin="md"
        >
          {header.day}
        </Subtitle>
        <Subtitle
          size="nm"
          lineHeight="1"
          color={index === activeIndex ? "white" : "mainColor"}
          bold
        >
          {header.topic}
        </Subtitle>
      </HeaderCell>
    ))}
  </HeaderWrapper>
);

export default ProgramHeader;
