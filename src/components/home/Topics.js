import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, H2Lg, H3Nm } from '../components/Base';
import { FluidContainer, Container, Row, Cell } from "../grid/Grid";
import { WithPadding, Subtitle, Text } from "../components/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../components/Icons";

const TopicsWrapper = styled.div`

`

const Topics = styled.div`
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

const TopicHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  text-align: center;
`

const TopicList = styled.ul`

`

const TopicItem = styled.li`
  font-size: ${props => props.theme.fontSizes.nm};
  padding-bottom: ${props => props.theme.margins.sm};
`

const Newsletter = props =>
  <FluidContainer>
    <Container>
      <WithPadding padding='xxl'>
        <Subtitle size='lg' margin='lg' center bold>What You'll Learn</Subtitle>
        <TopicsWrapper>
          <Topics>
            <Topic>
              <Lightbulb/>
              <TopicHeading>Idea</TopicHeading>
              <TopicList>
                <TopicItem>Find a need</TopicItem>
                <TopicItem>Define a MVP</TopicItem>
                <TopicItem>VaTopicItemdate your idea</TopicItem>
              </TopicList>
            </Topic>
            <Topic>
              <Palette/>
              <TopicHeading>Design</TopicHeading>
              <TopicList>
                <TopicItem>Build a prototype</TopicItem>
                <TopicItem>Define a MVP</TopicItem>
                <TopicItem>Learn the basics of UX</TopicItem>
              </TopicList>
            </Topic>
            <Topic>
              <Cog/>
              <TopicHeading>Coding</TopicHeading>
              <TopicList>
                <TopicItem>Evaluate technologies</TopicItem>
                <TopicItem>Reuse existing resources</TopicItem>
                <TopicItem>Understand the basics</TopicItem>
              </TopicList>
            </Topic>
            <Topic>
              <Megaphone/>
              <TopicHeading>Marketing</TopicHeading>
              <TopicList>
                <TopicItem>Find an audience</TopicItem>
                <TopicItem>Set up marketing channels</TopicItem>
                <TopicItem>Create a launch plan</TopicItem>
              </TopicList>
            </Topic>
          </Topics>
        </TopicsWrapper>
      </WithPadding>
    </Container>
  </FluidContainer>

export default Newsletter
