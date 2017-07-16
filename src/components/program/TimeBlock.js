import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid'
import { Subtitle, Text } from '../styled/Base'

//  TimeBlock - displays one row in a Program
//    arguments:
//      timeBlock - Object, time element from '/data/detailedProgram'
//        eg.
//        {
//          title: "Finding a need",
//          description: "...", // optional
//          type: 'lecture',
//          time: '9:30-10:15'
//        }
//
//      isMobile - Boolean
//      mainColor - String, color from the Theme, eg. "primary"
//      secondColor - String, color from the Theme, eg. "accent"
//
//    state
//      active - Boolean, if true displays timeBlock.description


// Wraps TimeBlock adding borders depending on the timeBlock.type
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
    props.active ? props.theme.colors.veryLight : "transparent"};
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-out;
  cursor: ${props => props.withDescription ? "pointer" : ""};
  padding-bottom: ${props => props.active ? props.theme.margins.lg : "0"};
  &:hover {
    background: ${props => props.theme.colors.veryLightHover};
  }
`;

// Container for timeBlock.time
const TimeCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

// Container for timeBlock.tile
const TimeBlockHeader = styled.div`
  display: flex;
  padding-top: ${props => props.theme.margins.md};
  padding-bottom: ${props => props.theme.margins.md};
  justify-content: space-between;
`;

// Container for timeBlock.description
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
            <TimeCell>
              <Subtitle size="sm" color="white">{timeBlock.time}</Subtitle>
            </TimeCell>
          </Cell>

          <Cell xs={9}>
            <Row>
              <Cell xs={12}>
                <TimeBlockHeader>
                  <Subtitle size="nm" color="white" margin="0">
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

export default TimeBlock;
