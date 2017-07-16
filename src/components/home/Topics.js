import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid';
import { WithPadding, Subtitle, Title, Text } from "../styled/Base";
import { Idea, Design, Code, Marketing } from "../styled/Icons";
import { Container } from "../styled/Grid";
import { Cross } from "../styled/Patterns";
import { BookingButton } from "../styled/Buttons";
import topicsData from "../../../data/topics.yaml";

const Background = styled.div`
  // background: linear-gradient(#ef4040,#F56911);
`

const TopicsWrapper = styled.div`
  position: relative;
`

const TopicsContent = Container.extend`
// width: 50%;
// margin-left: 200px;
  height: 120vh;

  position: relative;
  z-index: 10;
  top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TopicsRow = Row.extend`
  margin-bottom: 40px;
`

const TopicTitle = Title.extend`
  margin-bottom: 40px;
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
  width: calc(85%/4);
  margin-right: 5%;
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
  height: 100%;
  left: 0;
  top: 0;
  // clip-path: polygon(0% 100%, 50% 50%, 100% 100%);
  clip-path: polygon(0% 33%, 50% 0%, 100% 33%, 100% 66%, 50% 100%, 0 66%);
  background-image: url('/yuki-yoshida-104560.jpg');
  background-image: url('/oskar-krawczyk-172854-b.jpg');
  background-size: cover;
  background-position: 50% 0%;
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
  width: 60%;
  margin: 0 auto;
`

const FullProgramButton = BookingButton.extend`
  display: block;
  position: relative;
  z-index: 10;
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
    {/*<Image src="/35836232345_d90bfef2f6_b.jpg"/>*/}
    <Image>
      <ImageCover/>
    </Image>

    <TopicsContent>

      <TopicTitle margin={isMobile ? "xl" : "xxl"} bold center>What You'll Learn</TopicTitle>

      <TopicsRow>
        {topicsData.map(topic => <Topic {...topic}/>)}
      </TopicsRow>

      <FullProgramButton light>View Full Program</FullProgramButton>

    </TopicsContent>

  </TopicsWrapper>

export default Topics
