import React, { Component } from "react";
import styled from "styled-components";
import { FluidContainer, Container, Row, Cell } from "../grid/Grid";
import {
  Background,
  WithPadding,
  Title,
  Subtitle,
  H3Sm,
  Text,
  MdText,
  FloatRight
} from "../components/Base";

import { BookingButton } from '../components/BookingButton'
import { program } from "./detailedProgram";

const ProgramButton = BookingButton.extend`
  background: ${props => props.theme.colors.veryLightGrey};
  color: ${props => props.theme.colors.text};
  &:hover {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.transparentWhite};
  }
`

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
  overflow: hidden;
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
        <Subtitle
          size='nm'
          lineHeight="1"
          color={index === activeIndex ? "white" : "mainColor"}
          margin='md'
        >
          {header.day}
        </Subtitle>
        <Subtitle
          size='nm'
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

const TimeBlockWrapper = styled.div`
  border-left: 7px solid ${props => {
    switch (props.type) {
      case "lecture":
        return props.mainColor;
      case "workshop":
        return props.theme.colors.lightGrey;
      case "break":
        return props.theme.colors.veryLightGrey;
      default:
        return props.theme.colors.light;
    }
  }};
  border-right: 7px solid ${props => {
    switch (props.type) {
      case "lecture":
        return props.mainColor;
      case "workshop":
        return props.theme.colors.lightGrey;
      case "break":
        return props.theme.colors.veryLightGrey;
      default:
        return props.theme.colors.light;
    }
  }};
  background: ${props =>
    props.active ? props.theme.colors.veryLight : "transparent"}
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-out;
  cursor: ${props => props.withDescription ? "pointer" : ""};
  padding-bottom: ${props => props.active ? props.theme.margins.lg : '0'};
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
  padding-left: 1rem;
  padding-right: 1rem;
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

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props ) {
      this.setState({ active: false });
    }
  }

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
              <Subtitle size='sm' color='text'>{timeBlock.time}</Subtitle>
            </TimeCell>
          </Cell>

          <Cell xs={9}>
            <Row>
              <Cell xs={12}>
                <TimeBlockHeader>
                  <Subtitle size='nm' color='text' margin='0' bold>
                    {timeBlock.title}
                  </Subtitle>
                </TimeBlockHeader>
              </Cell>
              {this.state.active &&
                <Cell xs={12}>
                  <DescriptionWrapper>
                    <Text>{timeBlock.description}</Text>
                  </DescriptionWrapper>
                </Cell>
              }
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

const DescriptionWrapper = styled.div`
  padding-right: ${props => props.theme.margins.md};
`

const DayBlock = ({ dayBlock, isMobile, mainColor }) => (
  <DayBlockWrapper>
    {dayBlock.timeBlocks.map( ( timeBlock, index ) => (
      <TimeBlock
        key={index}
        timeBlock={timeBlock}
        isMobile={isMobile}
        mainColor={mainColor}
      />
    ))}
  </DayBlockWrapper>
);


class CourseProgram extends Component {
  state = {
    activeIndex: 0,
    isProgramVisible: false
  };

  getHeaders = (program) => {
    return program.map( item => ({day: item.day, topic: item.topic}) )
  };

  onHeaderTabClick = e => {
    this.setState({ activeIndex: Number(e.currentTarget.dataset.index) });
  };

  onProgramButtonClick = e => {
    this.setState({isProgramVisible: this.state.isProgramVisible ? false : true });
  }

  render() {
    const { isMobile } = this.props;
    const mainColor = "black";
    const secondColor = "light";

    return (

          <WithPadding padding="xl">
            <Row>
              <Cell xs={12} center>
                <Title margin={isMobile ? "lg" : "xl"} bold center>
                  Program
                </Title>
              </Cell>
            </Row>

            <Header
              headers={this.getHeaders(program)}
              activeIndex={this.state.activeIndex}
              onClick={this.onHeaderTabClick}
              isMobile={isMobile}
              mainColor={mainColor}
            />

            { this.state.isProgramVisible &&
              <DayBlock
                dayBlock={program[this.state.activeIndex]}
                isMobile={isMobile}
                mainColor={mainColor}
              />}
            <ProgramButton onClick={this.onProgramButtonClick}>{this.state.isProgramVisible ? "Hide program" : "Show full program"}</ProgramButton>


          </WithPadding>

    );
  }
}

export default CourseProgram;
