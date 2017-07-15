import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";

import ProgramHeader from './ProgramHeader'
import { ProgramButton } from "../styled/Buttons";
import { program } from "../../../data/detailedProgram";

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;



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

const ProgramDayBlock = ({ dayBlock, isMobile, mainColor, secondColor }) => (
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
      <Container>
        <WithPadding padding="xxl">
          <Row>
            <Cell xs={12} center>
              <Title margin={isMobile ? "lg" : "xl"} bold center>
                Program
              </Title>
            </Cell>

            <Cell xs={12} center>
            <ProgramHeader
              headers={this.getHeaders(program)}
              activeIndex={this.state.isProgramVisible ? this.state.activeIndex : undefined}
              onClick={this.state.isProgramVisible ? this.onHeaderTabClick : this.onProgramButtonClick}
              isMobile={isMobile}
              isProgramVisible={this.state.isProgramVisible}
              mainColor={mainColor}
            />

            {this.state.isProgramVisible &&
              <ProgramDayBlock
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
      </Container>
    );
  }
}

export default CourseProgram;
