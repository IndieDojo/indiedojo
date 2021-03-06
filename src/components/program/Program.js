import React, { Component } from "react";
import styled from "styled-components";
import { Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";

import ProgramHeader from "./ProgramHeader";
import ProgramDayBlock from "./ProgramDayBlock";
import { program } from "../../../data/detailedProgram";
import { BookingButton } from "../styled/Buttons";

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgramButton = BookingButton.extend`
  margin-top: ${props => props.theme.margins.xl};
`;

const ProgramContainer = styled.div`
  width: 100%;
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
    return (
      <ProgramWrapper>

        <ProgramButton light onClick={this.onProgramButtonClick}>
          {this.state.isProgramVisible ? "Hide Program" : "View Full Program"}
        </ProgramButton>

        {this.state.isProgramVisible &&
          <WithPadding padding={this.state.isProgramVisible ? "xxl" : "md"}>
            <ProgramContainer>

              <ProgramHeader
                headers={this.getHeaders(program)}
                activeIndex={
                  this.state.isProgramVisible
                    ? this.state.activeIndex
                    : undefined
                }
                onClick={
                  this.state.isProgramVisible
                    ? this.onHeaderTabClick
                    : this.onProgramButtonClick
                }
                isProgramVisible={this.state.isProgramVisible}
              />
              <ProgramDayBlock dayBlock={program[this.state.activeIndex]} />

            </ProgramContainer>
          </WithPadding>}

      </ProgramWrapper>
    );
  }
}

export default CourseProgram;
