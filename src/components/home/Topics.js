import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, H2Lg, H3Nm } from '../components/Base';
import { FluidContainer, Container, Row, Cell } from "../grid/Grid";
import { WithPadding, H1 } from "../components/Base";
import { Lightbulb, Megaphone, Cog, Palette } from "../components/Icons";

const TopicsWrapper = styled.div`
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
  font-size: 24px;
  text-align: center;
`

const TopicList = styled.ul`
  
`

const Newsletter = props =>
  <FluidContainer>
    <Container>
      <WithPadding padding='xxl'>
        <TopicsWrapper>
          <Topic>
            <Lightbulb/>
            <TopicHeading>Idea</TopicHeading>
            <TopicList>
              <li>Find a need</li>
              <li>Define a MVP</li>
              <li>Validate your idea</li>
            </TopicList>
          </Topic>
          <Topic>
            <Palette/>
            <TopicHeading>Design</TopicHeading>
            <TopicList>
              <li>Build a prototype</li>
              <li>Create a brand</li>
              <li>Learn the basics of UX</li>
            </TopicList>
          </Topic>
          <Topic>
            <Cog/>
            <TopicHeading>Coding</TopicHeading>
            <TopicList>
              <li>Evaluate technologies</li>
              <li>Reuse existing resources</li>
              <li>Understand the basics</li>
            </TopicList>
          </Topic>
          <Topic>
            <Megaphone/>
            <TopicHeading>Marketing</TopicHeading>
            <TopicList>
              <li>Find an audience</li>
              <li>Set up marketing channels</li>
              <li>Create a launch plan</li>
            </TopicList>
          </Topic>
        </TopicsWrapper>
      </WithPadding>
    </Container>
  </FluidContainer>

export default Newsletter
