import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid';
import { WithPadding, Subtitle, Title, Text } from "../styled/Base";
import { Idea, Design, Code, Marketing } from "../styled/Icons";
import { Container } from "../styled/Grid";
import { Cross } from "../styled/Patterns";
import topicsData from "../../../data/topics.yaml";
import Program from '../program/Program';

const Background = styled.div`
  // background: linear-gradient(#ef4040,#F56911);
`

const TopicsWrapper = styled.div`
  position: relative;
  background: rgba(20,13,8,1);
`

const TopicsContent = Container.extend`
// width: 50%;
// margin-left: 200px;
  min-height: 120vh;

  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const TopicsRow = Row.extend`
  margin-bottom: 40px;
`

const TopicTitle = Title.extend`
  margin-top: 140px;
  margin-bottom: 90px;
  color: #fff;
  z-index: 10;
`

const TopicHeading = styled.h3`
  background: #F2EFEE;
  padding: 10px;
  text-align: center;
`

const TopicContent = styled.div`
  padding: 30px;
`

const TopicWrapper = styled.div`
  width: calc(91%/4);
  margin-right: 3%;
  background: rgba(255,255,255,1);
  svg{
    height: 100px;
    width: 100px;
    margin: 0 auto 20px auto;
    display: block;
  }
  &:last-child{
    margin-right: 0;
  }
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
  display: block;
  width: 80%;
  margin: 0 auto;
`

const TopCover = styled.div`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 300px;
  top: -1px;
  left: 0;
  z-index: 10;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 0%, 0% 100%, 0% 0%);
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

const Topic = ({days, image, title, items}) =>
  <TopicWrapper>
    <TopicHeading>{days}</TopicHeading>
    <TopicContent>
      <TopicsIcon src={image}/>
      <Subtitle size='md' margin='sm' center bold>{title}</Subtitle>
      <TopicList>
        {items.map(item => <TopicItem key={item}>{item}</TopicItem>)}
      </TopicList>
    </TopicContent>
  </TopicWrapper>

const Topics = ({ isMobile }) =>
  <TopicsWrapper>

    <Image>
      <ImageCover/>
    </Image>

    <TopicsContent>

      <TopicTitle margin={isMobile ? "xl" : "xxl"} bold center>What You'll Learn</TopicTitle>

      <TopicsRow>
        {topicsData.map(topic => <Topic {...topic}/>)}
      </TopicsRow>

      <Program/>

    </TopicsContent>
    
    <TopCover/>

    <BottomCover/>

  </TopicsWrapper>

export default Topics
