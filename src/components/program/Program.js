import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";

import ProgramHeader from './ProgramHeader'
import ProgramDayBlock from './ProgramDayBlock'
import { program } from "../../../data/detailedProgram";
import { BookingButton } from "../styled/Buttons";

const ProgramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgramButton = BookingButton.extend`
  display: block;
  position: relative;
  z-index: 10;
  margin-top: ${props => props.theme.margins.xl};
`

const ProgramContent = Cell.extend`
  background: rgba(255,255,255,0.05);
  margin-bottom: 250px;
`

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
      <ProgramWrapper>

        <ProgramButton light onClick={this.onProgramButtonClick}>
          {this.state.isProgramVisible ? "Hide Program" : "View Full Program"}
        </ProgramButton>

        <Container>
          <WithPadding padding="xxl">
            <Row>

            {this.state.isProgramVisible ?
              <ProgramContent xs={12} center>
                <ProgramHeader
                  headers={this.getHeaders(program)}
                  activeIndex={this.state.isProgramVisible ? this.state.activeIndex : undefined}
                  onClick={this.state.isProgramVisible ? this.onHeaderTabClick : this.onProgramButtonClick}
                  isMobile={isMobile}
                  isProgramVisible={this.state.isProgramVisible}
                  mainColor={mainColor}
                />
                <ProgramDayBlock
                  dayBlock={program[this.state.activeIndex]}
                  isMobile={isMobile}
                  mainColor={mainColor}
                  secondColor={secondColor}
                />}
              </ProgramContent>
             : null}
            </Row>
          </WithPadding>
        </Container>

      </ProgramWrapper>
    );
  }
}

export default CourseProgram;
