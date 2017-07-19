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
//     mainColor: String, one of the colors from Theme.js, eg. "primary". Used for background of active Header cell,
//     onClick: Function, pass if you want to change the activity status of the program,

// If the cell is 'active' (selected) it will get `mainColor` background
const HeaderCell = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  text-align: center;
  background: ${props =>
  props.active ? "rgba(245,105,17, 0.9)" : "rgba(245,105,17, 0.1)"};
  padding: ${props => props.theme.margins.md};
  cursor: ${props => props.active ? "normal" : "pointer"};
  transition: all 0.2s ease-out;
  overflow: hidden;
  &:hover {
    background: ${props =>
  props.active ? "rgba(245,105,17, 0.9)" : "rgba(245,105,17, 0.17)"};
  }
  @media only screen and (max-width: 600px) {
    border-bottom: 2px solid ${props => props.theme.colors.brown};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.colors.transparent};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProgramHeader = (
  { headers, activeIndex, isProgramVisible, onClick, mainColor }
) => (
  <HeaderWrapper>
    {headers.map((header, index) => (
      <HeaderCell
        key={index}
        active={index === activeIndex}
        data-index={index}
        isProgramVisible={isProgramVisible}
        onClick={onClick}
      >
        <Subtitle
          size="nm"
          lineHeight="1"
          color={index === activeIndex ? "white" : "link"}
          margin="md"
        >
          {header.day}
        </Subtitle>
        <Subtitle
          size="nm"
          lineHeight="1"
          color={index === activeIndex ? "white" : "link"}
          bold
        >
          {header.topic}
        </Subtitle>
      </HeaderCell>
    ))}
  </HeaderWrapper>
);

export default ProgramHeader;
