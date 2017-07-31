import React from "react";
import styled from "styled-components";
import { Container, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";
import trainersData from "../../../data/trainers.yaml";
import Markdown from "react-remarkable";
import { MarkdownWrapper } from '../styled/Markdown';

const ProfileImage = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-image: url("${props => props.imgUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.white};
  @media (max-width: 700px) {
    width: 50vw;
    height: 50vw;
  }
`;

const Bio = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 0 ${props => props.theme.margins.lg};
`;

const Trainer = ({ image, name, title, bio }) => (
  <Cell xs={12} sm={4} center>
    <WithPadding padding="lg">
      <ProfileImage imgUrl={image} />
      <div>
        <Subtitle bold>{name}</Subtitle>
        <Subtitle size="nm" margin="md" color="lightGrey">{title}</Subtitle>
      </div>
      <MarkdownWrapper>
        <Markdown>{bio}</Markdown>
      </MarkdownWrapper>
    </WithPadding>
  </Cell>
);

const InstructorsWrapper = styled.div`
  padding-bottom: ${props => props.theme.margins.xxxl};
`

const Instructors = () => (
  <InstructorsWrapper>
    <div id="trainers" />
    <Container>
      <WithPadding padding="xxl">
        <Row>
          <Cell xs={12} center>
            <Title size='xl' margin="md" bold center>
              Instructors
            </Title>
          </Cell>

          {trainersData.map((trainer, index) => (
            <Trainer key={index} {...trainer} />
          ))}

        </Row>
      </WithPadding>
    </Container>
  </InstructorsWrapper>
);

export default Instructors;
