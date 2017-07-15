import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Cell } from '../styled/Grid';
import { WithPadding, Subtitle, Title, Text } from "../styled/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../styled/Icons";
import { Container } from "../styled/Grid";

const Background = styled.div`
  background: linear-gradient(#ef4040,#F56911);
`

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
  margin-bottom: ${props => props.theme.margins.xl};
  padding: 0;
`

const TopicItem = styled.li`
  color: ${props => props.theme.colors.transparentWhite};
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.sm};
`

const Topics = ({ isMobile }) =>
  <Background color='primary'>
    <Container>
      <TopicsWrapper>
        <WithPadding padding='xxl'>
          <Title color='transparentWhite' margin={isMobile ? "xl" : "xxl"} bold center>
            What You'll Learn
          </Title>
          <Row>
            <Cell xs={12} sm={6} md={3} center>
              <Lightbulb/>
              <WithPadding padding='sm'></WithPadding>
              <Subtitle color='transparentWhite' size='md' margin='sm' center bold>Idea</Subtitle>
              <TopicList>
                <TopicItem>Find a need</TopicItem>
                <TopicItem>Define a MVP</TopicItem>
                <TopicItem>Evaluate your idea</TopicItem>
              </TopicList>
            </Cell>
            <Cell xs={12} sm={6} md={3} center>
              <Palette/>
              <WithPadding padding='sm'></WithPadding>
              <Subtitle color='transparentWhite' size='md' margin='sm' center bold>Design</Subtitle>
              <TopicList>
                <TopicItem>Build a prototype</TopicItem>
                <TopicItem>Define a MVP</TopicItem>
                <TopicItem>Learn the basics of UX</TopicItem>
              </TopicList>
            </Cell>
            <Cell xs={12} sm={6} md={3} center>
              <Cog/>
              <WithPadding padding='sm'></WithPadding>
              <Subtitle  color='transparentWhite' size='md' margin='sm'  center bold>Coding</Subtitle>
              <TopicList>
                <TopicItem>Evaluate technologies</TopicItem>
                <TopicItem>Reuse existing resources</TopicItem>
                <TopicItem>Understand the basics</TopicItem>
              </TopicList>
            </Cell>
            <Cell xs={12} sm={6} md={3} center>
              <Megaphone/>
              <WithPadding padding='sm'></WithPadding>
              <Subtitle  color='transparentWhite' size='md' margin='sm' center bold>Marketing</Subtitle>
              <TopicList>
                <TopicItem>Find an audience</TopicItem>
                <TopicItem>Set up marketing channels</TopicItem>
                <TopicItem>Create a launch plan</TopicItem>
              </TopicList>
            </Cell>
          </Row>
        </WithPadding>
      </TopicsWrapper>
    </Container>
  </Background>

export default Topics
