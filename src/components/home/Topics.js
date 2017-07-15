import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid';
import { WithPadding, Subtitle, Title, Text } from "../styled/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../styled/Icons";
import { Container } from "../styled/Grid";
import { Cross } from '../styled/Patterns';

const Background = styled.div`
`

const TopicsWrapper = Cross.extend`
  background-color: #F56911;
  padding: 100px 0 100px 0;
  position: relative;
  svg{
    height: 100px;
    width: 100px;
    margin: 0 auto 20px auto;
    display: block;
  }
`

const TopicsImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 700px;
  top: 150px;
  left: 100px;
  border: 10px solid #f6f9e5;
`

const TopicsContent = styled.div`
  background: white;
  width: 600px;
  padding: 30px;
  position: relative;
  z-index: 2;
  left: 600px;
  box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.2);
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
  margin-bottom: ${props => props.theme.margins.xl};
  padding: 0;
`

const TopicItem = styled.li`
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.sm};
`

const Topics = ({ isMobile }) =>
  <TopicsWrapper>
    <TopicsImage src="/pawel-nolbert-310974.jpg"/>
    <TopicsContent>
      <Title margin={isMobile ? "xl" : "xxl"} bold center>
        What You'll Learn
      </Title>
      <Row>
        <Cell xs={12} sm={6} md={6} center>
          <Lightbulb/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Idea</Subtitle>
          <TopicList>
            <TopicItem>Find a need</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>Evaluate your idea</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={6} center>
          <Palette/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm' center bold>Design</Subtitle>
          <TopicList>
            <TopicItem>Build a prototype</TopicItem>
            <TopicItem>Define a MVP</TopicItem>
            <TopicItem>Learn the basics of UX</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={6} center>
          <Cog/>
          <WithPadding padding='sm'></WithPadding>
          <Subtitle size='md' margin='sm'  center bold>Coding</Subtitle>
          <TopicList>
            <TopicItem>Evaluate technologies</TopicItem>
            <TopicItem>Reuse existing resources</TopicItem>
            <TopicItem>Understand the basics</TopicItem>
          </TopicList>
        </Cell>
        <Cell xs={12} sm={6} md={6} center>
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
    </TopicsContent>
  </TopicsWrapper>

export default Topics
