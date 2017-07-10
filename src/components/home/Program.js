import React, { Component } from "react";
import { FluidContainer, Container, Row, Cell } from "/imports/ui/grid/Grid";
import {
  Background,
  WithPadding,
  MdTitle,
  H1Xl,
  H3Nm,
  P,
  MdText,
  FloatRight
} from "/imports/ui/Components";
import styled from "styled-components";
import { getFormattedDateDay, getFormattedDaysOfWeek } from "../helpers/date";



const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.i`
  color: ${props => props.theme.colors.primaryDark};
  transform: ${props => props.active ? "none" : "rotate(180deg)"};
  transform-origin: 50% 35%;
  transition: all 0.2s ease-out;
  cursor: pointer;
  padding-right: ${props => props.theme.margins.md};
  padding-left: ${props => props.theme.margins.md};
`;

const HeaderCell = styled.div`
  flex-grow: 1;
  text-align: center;
  background: ${props =>
  props.active
    ? props.mainColor
    : props.theme.colors.superLightGrey};
  border-bottom: ${props => props.isMobile ? '1px solid white' : '0'};
  padding: ${props => props.theme.margins.md};
  cursor: ${props => props.active ? "normal" : "pointer"};
  transition: all 0.2s ease-out;
  &:hover {
    background: ${props =>
      props.active
        ? props.mainColor
        : props.theme.colors.darkensuperLightGrey};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  background: ${props => props.theme.colors.superLightGrey};
`;

const Header = ({ headers, activeIndex, onClick, isMobile, mainColor }) => (
  <HeaderWrapper className="heade-wrapper" isMobile={isMobile}>
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
          color={index === activeIndex ? "transparent" : "primaryDark"}
          margin="sm"
          bold
        >
          {header.line1}
        </H3Nm>
        <H3Nm
          lineHeight="1"
          color={index === activeIndex ? "transparent" : "primaryDark"}
        >
          {header.line2}
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
    case "lab":
      return props.secondColor;
    case "fun":
      return props.theme.colors.accentPrimary;
    default:
      return props.theme.colors.lightGrey;
  }
}};
  background: ${props =>
  props.active ? props.theme.colors.superLightGrey : "transparent"}
  color: ${props => props.theme.colors.grey};
  transition: all 0.2s ease-out;
  cursor: ${props => props.withDescription ? "pointer" : ""};
  &:hover {
    background: ${props => props.theme.colors.superLightGrey};
  }
`;

const TimeBlockHeader = styled.div`
  display: flex;
  padding-top: ${props => props.theme.margins.md};
  padding-bottom: ${props => props.theme.margins.md};
  justify-content: space-between;
`;

const TimeCell = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row wrap"};
  align-items: center;
  justify-content: center;
  height: 100%;
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
        data-id={timeBlock._id}
        onClick={!!timeBlock.description ? this.onClick : null}
        type={timeBlock.type}
        active={this.state.active}
        withDescription={!!timeBlock.description}
        mainColor={mainColor}
        secondColor={secondColor}
      >
        <Row>
          <Cell xs={3}>
            <TimeCell isMobile={isMobile} className="time-cell">
              <H3Nm color='lightText'>{timeBlock.startTime}</H3Nm>
              {!isMobile && <H3Nm paddingLeft={isMobile ? "0" : "sm"} color='lightText'>-</H3Nm>}
              <H3Nm paddingLeft={isMobile ? "0" : "sm"} color='lightText'>{timeBlock.endTime}</H3Nm>
            </TimeCell>
          </Cell>

          <Cell xs={9}>
            <Row>
              <Cell xs={12}>
                <TimeBlockHeader>
                  <H3Nm color='primaryDark' margin='0' bold>
                    {timeBlock.title}
                  </H3Nm>
                  {!!timeBlock.description &&
                    timeBlock.description !== "" &&
                    <Icon
                      className="fa fa-chevron-up"
                      color="grey"
                      active={this.state.active}
                    />}
                </TimeBlockHeader>
              </Cell>
              {this.state.active &&
                <Cell xs={12}>
                  <WithPadding paddingRight='md' paddingBottom='md' paddingLeft='0' paddingTop='0'>
                    <P margin="md">{timeBlock.description}</P>
                  </WithPadding>
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
    {dayBlock.timeBlocks.map(timeBlock => (
      <TimeBlock
        key={timeBlock._id}
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

  getHeaders = () => {
    const { program, firstDay } = this.props;

    let currentDay = firstDay;

    return this.props.program.dayBlocks.map(block => ({
      line1: getFormattedDateDay({
        startDate: new Date(block.startDate),
        endDate: !!block.endDate
          ? new Date(block.endDate)
          : new Date(block.startDate)
      }),
      line2: getFormattedDaysOfWeek({
        startDate: new Date(block.startDate),
        endDate: !!block.endDate
          ? new Date(block.endDate)
          : new Date(block.startDate)
      })
    }));
  };

  onHeaderTabClick = e => {
    this.setState({ activeIndex: Number(e.currentTarget.dataset.index) });
  };

  render() {
    const { program, isMobile, mainColor, secondColor } = this.props;
    return (
      <Background color="white">
        <WithPadding padding={isMobile ? "xl" : "xxxl"}>
          <FluidContainer>
            <Container>

              <ProgramWrapper>

                <Row>
                  <Cell xs={12} center>
                    <H1Xl
                      color="primaryDark"
                      lineHeight="1"
                      margin={isMobile ? "lg" : "xl"}
                      bold
                      serif
                    >
                      Program
                    </H1Xl>
                  </Cell>
                </Row>

                <Header
                  headers={this.getHeaders()}
                  activeIndex={this.state.activeIndex}
                  onClick={this.onHeaderTabClick}
                  isMobile={isMobile}
                  mainColor={mainColor}
                  secondColor={secondColor}
                />

                {/* LIST OF TIMEBLOCKS */}
                {!!program.dayBlocks &&
                  !!program.dayBlocks.length &&
                  <DayBlock
                    dayBlock={program.dayBlocks[this.state.activeIndex]}
                    isMobile={isMobile}
                    mainColor={mainColor}
                    secondColor={secondColor}
                  />}
              </ProgramWrapper>

            </Container>
          </FluidContainer>
        </WithPadding>
      </Background>
    );
  }
}

export default CourseProgram;
