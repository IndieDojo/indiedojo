import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid';
import { WithPadding, Subtitle, Title, Text } from "../styled/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../styled/Icons";
import { Container } from "../styled/Grid";
import { Cross } from "../styled/Patterns";

const Background = styled.div`
  // background: linear-gradient(#ef4040,#F56911);
`

const TopicsWrapper = styled.div`
  position: relative;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TopicsContent = Container.extend`
// width: 50%;
// margin-left: 200px;
  position: relative;
  z-index: 10;
  top: -30px;
`

const AllTopics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopicTitle = Title.extend`
  margin-bottom: 20px;
  color: #333;
`

const Topic = styled.div`
  width: calc(85%/4);
  margin-right: 5%;
  background: rgba(255,255,255,1);
  padding: 20px;
  *{
    visibility: hidden;
  }
  svg{
    height: 100px;
    width: 100px;
    margin: 0 auto 20px auto;
    display: block;
    g{
      stroke: #333;
    }
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
  font-size: ${props => props.theme.fontSizes.nm};
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
  background-image: url('/oskar-krawczyk-172854.jpg');
  background-size: cover;
  background-position: 50% 0%;
`;

const TopicsPattern = Cross.extend`
  // background-color: #787894;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: none;
`

const Topics = ({ isMobile }) =>
  <TopicsWrapper>
    {/*<Image src="/35836232345_d90bfef2f6_b.jpg"/>*/}
    <Image>
      <TopicsPattern/>
    </Image>


    <TopicsContent>
      <TopicTitle margin={isMobile ? "xl" : "xxl"} bold center>
        What You'll Learn
      </TopicTitle>
      <Row>
        <Topic xs={12} sm={6} md={3} center>
          <Lightbulb/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Idea</Subtitle>
          <TopicList>
            <TopicItem>Find a need</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>Evaluate your idea</TopicItem>
          </TopicList>
        </Topic>
        <Topic xs={12} sm={6} md={3} center>
          <Palette/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Design</Subtitle>
          <TopicList>
            <TopicItem>Build a prototype</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>Learn the basics of UX</TopicItem>
          </TopicList>
        </Topic>
        <Topic xs={12} sm={6} md={3} center>
          <Cog/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm'  center bold>Coding</Subtitle>
          <TopicList>
            <TopicItem>Evaluate technologies</TopicItem>
            <TopicItem>Reuse existing resources</TopicItem>
            <TopicItem>Understand the basics</TopicItem>
          </TopicList>
        </Topic>
        <Topic xs={12} sm={6} md={3} center>
          <Megaphone/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Marketing</Subtitle>
          <TopicList>
            <TopicItem>Find an audience</TopicItem>
            <TopicItem>Set up marketing channels</TopicItem>
            <TopicItem>Create a launch plan</TopicItem>
          </TopicList>
        </Topic>
      </Row>
    </TopicsContent>
  </TopicsWrapper>

export default Topics
