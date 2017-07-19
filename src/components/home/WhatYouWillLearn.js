import React from "react";
import styled from "styled-components";

import { Container, Row, Cell } from "../styled/Grid";
import { Background, WithPadding, Card, Subtitle, Title } from "../styled/Base";
import { Idea, Design, Code, Marketing } from "../styled/Icons";
import topicsData from "../../../data/topics.yaml";
import Program from "../program/Program";

const TopicWrapper = styled.div`
  background: rgba(255,255,255,1);
  margin-bottom: ${props => props.theme.margins.xl};
`;

const TopicsIcon = styled.img`
  width: 100px;
`;

const TopicList = styled.ul`
  margin: 0;
  align-self: center;
  list-style-type: none;
  padding: 0;
`;

const TopicItem = styled.li`
  font-size: 18px;
  padding-bottom: ${props => props.theme.margins.sm};
  text-align: center;
`;

// Topic Item - displays a single day
const Topic = ({ days, image, title, items }) => (
  <TopicWrapper>
    <Background color="veryLightGrey">
      <Subtitle lineHeight="2" bold center>{days}</Subtitle>
    </Background>

    <Card padding="lg" backgroun="white" center>
      <TopicsIcon src={image} />
      <Subtitle lineHeight="2" size="md" margin="sm" center bold>
        {title}
      </Subtitle>
      <TopicList>
        {items.map((item, index) => <TopicItem key={index}>{item}</TopicItem>)}
      </TopicList>
    </Card>
  </TopicWrapper>
);

const TopicsWrapper = styled.div`
  position: relative;
  margin-top: -1px; // because of the roundings css creates sometimes a 1px gap between triangle and the 'rest' picture; this guarantees gap is never visible;
  background: linear-gradient(rgba(20,13,8,0) 0%, ${props =>
  props.theme.colors.brown} 25vw), url('/rest.jpg');
  background-size: 100vw;
  background-repeat: no-repeat;
`;

const TopTriangle = styled.div`
  width: 100%;
  height: 20vw;
  clip-path: polygon(50% 0%, 100% 20vw, 0% 20vw);
  -webkit-clip-path: polygon(50% 0%, 100% 20vw, 0% 20vw);
  clip-path: url("#top-shape");
  background: url('/top-triangle.jpg');
  background-size: 100vw;
`;

const TopTriangleSVG = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="top-shape" clipPathUnits="objectBoundingBox">
        <polygon points="0.5 0, 1 1, 0 1" />
      </clipPath>
    </defs>
  </svg>
);

const BottomTriangle = styled.div`
  width: 100%;
  height: 20vw;
  clip-path: polygon(0% 0%, 100% 0, 50% 20vw);
  -webkit-clip-path: polygon(0% 0%, 100% 0, 50% 20vw);
  clip-path: url("#bottom-shape");
  background: rgba(20,13,8,1);
  margin-top: -1px; // because of the roundings css creates sometimes a 1px gap between triangle and the 'rest' picture; this guarantees gap is never visible;
`;

const BottomTriangleSVG = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="bottom-shape" clipPathUnits="objectBoundingBox">
        <polygon points="0 0, 1 0, 0.5 1" />
      </clipPath>
    </defs>
  </svg>
);

// Topics - Row of Topics + Full expandable program
// TopTriangle exists because the SVG uses the percentages for cutting out the path
// And the height of the container is variable. So cutting off the top part makes it
// height-independent
// TopTriangleSVG and BottomTriangleSVG is a clip-path fix for Firefox
const WhatYouWillLearn = () => (
  <div>
    <TopTriangleSVG />
    <TopTriangle />

    <TopicsWrapper>
      <Container>
        <Title margin="lg" color="transparentWhite" shadow bold center>
          What You'll Learn
        </Title>
        <Row>
          {topicsData.map((topic, index) => (
            <Cell key={index} xs={12} sm={6} md={3}>
              <Topic {...topic} />
            </Cell>
          ))}
        </Row>

        <Program />
      </Container>
    </TopicsWrapper>
    <BottomTriangle />
    <BottomTriangleSVG />
  </div>
);

export default WhatYouWillLearn;
