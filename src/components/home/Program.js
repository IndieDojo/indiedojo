import React, { Component } from "react";
import styled from "styled-components";
import { Row, Cell } from "../grid/Grid";
import { WithPadding, Title, Subtitle, Text } from "../components/Base";
import { BookingButton } from "../components/BookingButton";
import { program } from "./detailedProgram";

const ProgramButton = BookingButton.extend`
`;

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderCell = styled.div`
  flex-grow: 1;
  text-align: center;
  background: ${props =>
  props.active ? props.theme.colors[props.mainColor] : props.theme.colors.veryLight};
  border-bottom: ${props => props.isMobile ? "1px solid white" : "0"};
  padding: ${props => props.theme.margins.md};
  cursor: ${props => props.active ? "normal" : "pointer"};
  transition: all 0.2s ease-out;
  overflow: hidden;
  &:hover {
    background: ${props =>
      {
        if (!props.isProgramVisible ) return props.theme.colors.veryLight;
        return props.active ? props.mainColor : props.theme.colors.veryLightHover
      }
    };
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  background: ${props => props.theme.colors.transparent};
`;

const Header = ({ headers, activeIndex, onClick, isMobile, mainColor, isProgramVisible }) => (
  <HeaderWrapper isMobile={isMobile}>
    {headers.map((header, index) => (
      <HeaderCell
        key={index}
        active={index === activeIndex}
        data-index={index}
        onClick={onClick}
        mainColor={mainColor}
        isMobile={isMobile}
        isProgramVisible={isProgramVisible}
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

const TimeBlockWrapper = styled.div`
  border-left: 7px solid ${props => {
  switch (props.type) {
    case "lecture":
      return props.theme.colors[props.mainColor];
    case "workshop":
      return props.theme.colors[props.secondColor];
    case "break":
      return props.theme.colors.veryLightGrey;
    default:
      return props.theme.colors.light;
  }
}};
  border-right: 7px solid ${props => {
  switch (props.type) {
    case "lecture":
      return props.theme.colors[props.mainColor];
    case "workshop":
      return props.theme.colors[props.secondColor];
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
  padding-bottom: ${props => props.active ? props.theme.margins.lg : "0"};
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

const DescriptionWrapper = styled.div`
  padding-right: ${props => props.theme.margins.md};
`;

class TimeBlock extends Component {
  state = {
    active: false
  };

  onClick = e => {
    this.setState({ active: !this.state.active });
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
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
        secondColor={secondColor}
      >
        <Row>
          <Cell xs={3}>
            <TimeCell isMobile={isMobile}>
              <Subtitle size="sm" color="text">{timeBlock.time}</Subtitle>
            </TimeCell>
          </Cell>

          <Cell xs={9}>
            <Row>
              <Cell xs={12}>
                <TimeBlockHeader>
                  <Subtitle size="nm" color="text" margin="0" bold>
                    {timeBlock.title}
                  </Subtitle>
                </TimeBlockHeader>
              </Cell>
              {this.state.active &&
                <Cell xs={12}>
                  <DescriptionWrapper>
                    <Text>{timeBlock.description}</Text>
                  </DescriptionWrapper>
                </Cell>}
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

const DayBlock = ({ dayBlock, isMobile, mainColor, secondColor }) => (
  <DayBlockWrapper>
    {dayBlock.timeBlocks.map((timeBlock, index) => (
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
    activeIndex: 0,
    isProgramVisible: false
  };

  getHeaders = program => {
    return program.map(item => ({ day: item.day, topic: item.topic }));
  };

  onHeaderTabClick = e => {
    this.setState({ activeIndex: Number(e.currentTarget.dataset.index) });
  };

  onProgramButtonClick = e => {
    this.setState({
      isProgramVisible: this.state.isProgramVisible ? false : true
    });
  };

  render() {
    const { isMobile } = this.props;
    const mainColor = "primary";
    const secondColor="primaryHover"

    return (
      <WithPadding padding="xxl">
        <Row>
          <Cell xs={12} center>
            <Title margin={isMobile ? "lg" : "xl"} bold center>
              Program
            </Title>
          </Cell>

          <Cell xs={12} center>
          <Header
            headers={this.getHeaders(program)}
            activeIndex={this.state.isProgramVisible ? this.state.activeIndex : undefined}
            onClick={this.state.isProgramVisible ? this.onHeaderTabClick : this.onProgramButtonClick}
            isMobile={isMobile}
            isProgramVisible={this.state.isProgramVisible}
            mainColor={mainColor}
          />

          {this.state.isProgramVisible &&
            <DayBlock
              dayBlock={program[this.state.activeIndex]}
              isMobile={isMobile}
              mainColor={mainColor}
              secondColor={secondColor}
            />}
          <ProgramButton onClick={this.onProgramButtonClick}>
            {this.state.isProgramVisible ? "Hide program" : "Show full program"}
          </ProgramButton>
          </Cell>
        </Row>
      </WithPadding>
    );
  }
}

export default CourseProgram;
