import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";

import ProgramHeader from './ProgramHeader'
import ProgramDayBlock from './ProgramDayBlock'
import { ProgramButton } from "../styled/Buttons";
import { program } from "../../../data/detailedProgram";

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
    const { isMobile, mainColor, secondColor } = this.props;

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
