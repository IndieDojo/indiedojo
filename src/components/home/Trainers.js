import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Cell } from '../styled/Grid';
import { WithPadding, Background, Title, Subtitle, Text, LinkTo } from '../styled/Base'
import trainersData from '../../../data/trainers.yaml';
import Markdown from 'react-remarkable';

const ProfileImage = styled.div`
  display: inline-block;
  width: ${props => props.isMobile ? '50vw' : '200px'};
  height: ${props => props.isMobile ? '50vw' : '200px'};
  background-image: url("${props => props.imgUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.white};
`

const Bio = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 0 ${props => props.theme.margins.lg};
`

const Trainer = ({image, name, title, bio}) =>
  <Cell xs={12} sm={4} center>
    <ProfileImage imgUrl={image}/>
    <div>
      <Subtitle bold>{name}</Subtitle>
      <Subtitle size='nm' margin='md' color='lightGrey'>{title}</Subtitle>
    </div>
    <Text><Markdown>{bio}</Markdown></Text>
  </Cell>

const Trainers = ({isMobile}) =>
<div>
  <div id='trainers'></div>
  <Container>
    <WithPadding padding='xxl'>
      <Row>
        <Cell xs={12} center>
          <Title margin='md' bold center>
            Instructors
          </Title>
        </Cell>

        {trainersData.map((trainer, index) => <Trainer key={index} {...trainer}/>)}

      </Row>
    </WithPadding>
  </Container>
</div>

export default Trainers;
