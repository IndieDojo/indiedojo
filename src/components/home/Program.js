import React, { Component } from "react";
import styled from "styled-components";
import { FluidContainer, Container, Row, Cell } from "../grid/Grid";
import {
  Background,
  WithPadding,
  MdTitle,
  H1Xl,
  H3Nm,
  P,
  MdText,
  FloatRight
} from "../components/Base";

import { program } from "./detailedProgram";

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderCell = styled.div`
  flex-grow: 1;
  text-align: center;
  background: ${props =>
  props.active ? props.mainColor : props.theme.colors.veryLight};
  border-bottom: ${props => props.isMobile ? "1px solid white" : "0"};
  padding: ${props => props.theme.margins.md};
  cursor: ${props => props.active ? "normal" : "pointer"};
  transition: all 0.2s ease-out;
  &:hover {
    background: ${props =>
      props.active ? props.mainColor : props.theme.colors.veryLightHover};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  background: ${props => props.theme.colors.transparent};
`;

const Header = ({ headers, activeIndex, onClick, isMobile, mainColor }) => (
  <HeaderWrapper isMobile={isMobile}>
    {headers.map((header, index) => (
      <HeaderCell
        key={index}
        active={index === activeIndex}
        data-index={index}
        onClick={onClick}
        mainColor={mainColor}
        isMobile={isMobile}
      >
        <H3Nm
          lineHeight="1"
          color={index === activeIndex ? "white" : "mainColor"}
          bold
        >
          {header}
        </H3Nm>
      </HeaderCell>
    ))}
  </HeaderWrapper>
);

const TimeBlockWrapper = styled.div`
  border-left: 7px solid ${props => {
    switch (props.type) {
      case "lecture":
        return props.mainColor;
      case "workshop":
      case "break":
        return 'light';
      default:
        return props.theme.colors.light;
    }
  }};
  background: ${props =>
    props.active ? props.theme.colors.veryLight : "transparent"}
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-out;
  cursor: ${props => props.withDescription ? "pointer" : ""};
  &:hover {
    background: ${props => props.theme.colors.veryLightHover};
  }
`;

const TimeCell = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TimeBlockHeader = styled.div`
  display: flex;
  padding-top: ${props => props.theme.margins.md};
  padding-bottom: ${props => props.theme.margins.md};
  justify-content: space-between;
`;

class TimeBlock extends Component {
  state = {
    active: false
  };

  onClick = e => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { timeBlock, isMobile, mainColor, secondColor } = this.props;

    return (
      <TimeBlockWrapper
        onClick={!!timeBlock.description ? this.onClick : null}
        type={timeBlock.type}
        active={this.state.active}
        withDescription={!!timeBlock.description}
        mainColor={mainColor}
      >
        <Row>
          <Cell xs={3}>
            <TimeCell isMobile={isMobile}>
              <H3Nm color='text'>{timeBlock.time}</H3Nm>
            </TimeCell>
          </Cell>

          <Cell xs={9}>
            <Row>
              <Cell xs={12}>
                <TimeBlockHeader>
                  <H3Nm color='text' margin='0' bold>
                    {timeBlock.title}
                  </H3Nm>
                </TimeBlockHeader>
              </Cell>
              {/* {this.state.active &&
                <Cell xs={12}>
                  <WithPadding paddingRight='md' paddingBottom='md' paddingLeft='0' paddingTop='0'>
                    <P margin="md">{timeBlock.description}</P>
                  </WithPadding>
                </Cell>} */}
            </Row>

          </Cell>

          <Cell />
        </Row>
      </TimeBlockWrapper>
    );
  }
}


const DayBlockWrapper = styled.div`
`;

const DayBlock = ({ dayBlock, isMobile, mainColor, secondColor }) => console.log('dayBlock', dayBlock) || (
  <DayBlockWrapper>
    {dayBlock.timeBlocks.map( ( timeBlock, index ) => (
      <TimeBlock
        key={index}
        timeBlock={timeBlock}
        isMobile={isMobile}
        mainColor={mainColor}
        secondColor={secondColor}
      />
    ))}
  </DayBlockWrapper>
);


class CourseProgram extends Component {
  state = {
    activeIndex: 0
  };

  getHeaders = (program) => {
    return program.map( item => item.day )
  };

  onHeaderTabClick = e => {
    this.setState({ activeIndex: Number(e.currentTarget.dataset.index) });
  };

  render() {
    const { isMobile } = this.props;
    const mainColor = "black";
    const secondColor = "light";

    return (
      <FluidContainer>
        <Container>
          <WithPadding padding="xl">

            <H1Xl lineHeight="2" margin={isMobile ? "lg" : "xl"} bold center>
              Program
            </H1Xl>

            <Header
              headers={this.getHeaders(program)}
              activeIndex={this.state.activeIndex}
              onClick={this.onHeaderTabClick}
              isMobile={isMobile}
              mainColor={mainColor}
            />

            <DayBlock
              dayBlock={program[this.state.activeIndex]}
              isMobile={isMobile}
              mainColor={mainColor}
              secondColor={secondColor}
            />

          </WithPadding>
        </Container>
      </FluidContainer>
    );
  }
}

export default CourseProgram;
