import React, { Component } from 'react';
import styled from 'styled-components';
import { FluidContainer, Container, Row, Cell } from '../styled/Grid';
import { Background, WithPadding, Card, Subtitle, Title, Text } from "../styled/Base";
import { Idea, Design, Code, Marketing } from "../styled/Icons";
import { Cross } from "../styled/Patterns";
import topicsData from "../../../data/topics.yaml";
import Program from '../program/Program';

const TopicsWrapper = styled.div`
  background: rgba(20,13,8,1);
`



const TopicList = styled.ul`
  margin: 0;
  align-self: center;
  list-style-type: none;
  padding: 0;
`

const TopicItem = styled.li`
  font-size: 18px;
  padding-bottom: ${props => props.theme.margins.sm};
  text-align: center;
`

const Image = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 900px;
  left: 0;
  top: 0;
  // clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
  // clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 66%, 50% 100%, 0 66%);
  // clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 100%, 0 100%);
  // clip-path: polygon(0% 500px, 50% 0%, 100% 500px, 100% 100%, 0 100%);
  background-color: rgba(20,13,8,1);
  background-image: url('/yuki-yoshida-104560.jpg');
  background-image: url('/oskar-krawczyk-172854-b.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% -30px;
`;

const ImageCover = Cross.extend`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(rgba(20,13,8,0) 50%, rgba(20,13,8,1) 90%);
`

const TopicsIcon = styled.img`
  width: 100px;
`

const TopCover = styled.div`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 300px;
  top: -1px;
  left: 0;
  z-index: 10;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 2px, 0% 100%, 0% 0%);
`


const BottomCover = styled.div`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: -1px;
  left: 0;
  z-index: 10;
  clip-path: polygon(0% 100%, 0% 0%, 50% 100%, 100% 0%, 100% 100%);
`

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,1);
  margin-bottom: ${props => props.theme.margins.xl};
`

const Topic = ({days, image, title, items}) =>
  <TopicWrapper>
    <Background color='veryLightGrey'>
      <Subtitle lineHeight='2' bold center>{days}</Subtitle>
    </Background>

    <Card padding='lg' backgroun='white' center>
      <TopicsIcon src={image}/>
      <Subtitle lineHeight='2' size='md' margin='sm' center bold>{title}</Subtitle>
      <TopicList>
        {items.map((item, index) => <TopicItem key={index}>{item}</TopicItem>)}
      </TopicList>
    </Card>
  </TopicWrapper>

const Topics = ({ isMobile }) =>
  <TopicsWrapper>

    {/* <Image>
      <ImageCover/>
    </Image> */}

    <FluidContainer>
      <Container>
        <Title color='transparentWhite' margin={isMobile ? "xl" : "xxl"} bold center>What You'll Learn</Title>

        <Row>
          {topicsData.map((topic, index) => (
            <Cell key={index} xs={12} sm={6} md={3}>
              <Topic {...topic}/>
            </Cell>
          ))}
        </Row>

        <Program/>

      </Container>

    </FluidContainer>

    <TopCover/>

    <BottomCover/>

  </TopicsWrapper>

export default Topics
