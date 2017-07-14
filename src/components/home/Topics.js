import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../grid/Grid';
import { WithPadding, Subtitle, Title, Text } from "../components/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../components/Icons";

const TopicsWrapper = styled.div`
  svg{
    height: 100px;
    width: 100px;
    margin: 0 auto 20px auto;
    display: block;
  }
`

const AllTopics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Topic = styled.div`
  width: 25%;
  svg{
    width: 100%;
    max-width: 100px;
    margin: 0 auto;
    display: block;
  }
`
const TopicList = styled.ul`
  display: inline-block;
  align-self: center;
  list-style-type: none;
  margin-bottom: ${props => props.theme.margins.xl}
`

const TopicItem = styled.li`
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.sm};
`

const Topics = ({ isMobile }) =>
  <TopicsWrapper>
    <WithPadding padding='xxl'>
      <Title margin={isMobile ? "xl" : "xxl"} bold center>
        What You'll Learn
      </Title>
      <Row>
        <Cell xs={12} sm={6} md={3} center>
          <Lightbulb/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Idea</Subtitle>
          <TopicList>
            <TopicItem>Find a need</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>VaTopicItemdate your idea</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={3} center>
          <Palette/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Design</Subtitle>
          <TopicList>
            <TopicItem>Build a prototype</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>Learn the basics of UX</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={3} center>
          <Cog/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm'  center bold>Coding</Subtitle>
          <TopicList>
            <TopicItem>Evaluate technologies</TopicItem>
            <TopicItem>Reuse existing resources</TopicItem>
            <TopicItem>Understand the basics</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={3} center>
          <Megaphone/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Marketing</Subtitle>
          <TopicList>
            <TopicItem>Find an audience</TopicItem>
            <TopicItem>Set up marketing channels</TopicItem>
            <TopicItem>Create a launch plan</TopicItem>
          </TopicList>
        </Cell>
      </Row>
    </WithPadding>
  </TopicsWrapper>

// const Newsletter = props =>
//   <WithPadding padding='xxl'>
//     <Subtitle size='lg' margin='lg' center bold>What You'll Learn</Subtitle>
//     <TopicsWrapper>
//       <Topics>
//         <Topic>
//           <Lightbulb/>
//           <Subtitle size='md' center bold>Idea</Subtitle>
//           <TopicList>
//             <TopicItem>Find a need</TopicItem>
//             <TopicItem>Define a MVP</TopicItem>
//             <TopicItem>VaTopicItemdate your idea</TopicItem>
//           </TopicList>
//         </Topic>
//         <Topic>
//           <Palette/>
//           <Subtitle size='md' center bold>Design</Subtitle>
//           <TopicList>
//             <TopicItem>Build a prototype</TopicItem>
//             <TopicItem>Define a MVP</TopicItem>
//             <TopicItem>Learn the basics of UX</TopicItem>
//           </TopicList>
//         </Topic>
//         <Topic>
//           <Cog/>
//           <Subtitle size='md' center bold>Coding</Subtitle>
//           <TopicList>
//             <TopicItem>Evaluate technologies</TopicItem>
//             <TopicItem>Reuse existing resources</TopicItem>
//             <TopicItem>Understand the basics</TopicItem>
//           </TopicList>
//         </Topic>
//         <Topic>
//           <Megaphone/>
//           <Subtitle size='md' center bold>Marketing</Subtitle>
//           <TopicList>
//             <TopicItem>Find an audience</TopicItem>
//             <TopicItem>Set up marketing channels</TopicItem>
//             <TopicItem>Create a launch plan</TopicItem>
//           </TopicList>
//         </Topic>
//       </Topics>
//     </TopicsWrapper>
//   </WithPadding>

export default Topics
