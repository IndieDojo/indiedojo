import React, { Component } from "react";
import styled from "styled-components";
import { FluidContainer, ContainerSmall, Row, Cell } from "../grid/Grid";
import { WithPadding, H1Xl, H2Md, Text } from "../components/Base";

const faqs = [
  {
    question: "Why do you organise the bootcamp in two places (Kyoto and Bali)?",
    answer: "One of the most important apspects when launching a project is A/B testing. We don't know which place you prefer. That's why we A/B test it."
  },
  {
    question: "Will I learn to code?",
    answer: "No. This is not a coding bootcamp, and a single week (much less a single day!) is not enough time to learn to code. Instead, we’ll try and guide you in the right direction if you do want to learn to code, and give you pointers on how to work with developers if you’d rather not. "
  },
  {
    question: "Will I learn to design?",
    answer: "Again, no. You will learn the basics of design, branding, and UX, but it will be up to you to dive deeper in that field if you’re interested. "
  },
  {
    question: "How many people will attend a bootcamp?",
    answer: "We limited the number of places to only 20. This size guarantees best integration and still..."
  },
];

const FaqWrapper = styled.div`
  margin-bottom: ${props => props.theme.margins.lg};
  &:nth-child(even) {
    background: ${props => props.theme.colors.veryLight};
  }
`

const Faq = ({question, answer}) =>
  <Cell xs={12}>
    <FaqWrapper>
      <H2Md bold>{question}</H2Md>
      <Text>{answer}</Text>
    </FaqWrapper>
  </Cell>

const Faqs = ({ isMobile }) => (
  <FluidContainer>
    <ContainerSmall>
      <WithPadding padding="xl">
        <Row>
          <Cell xs={12} center>
            <H1Xl lineHeight="2" margin='lg' bold center>
              FAQs
            </H1Xl>
          </Cell>
        </Row>
        <Row>
          { faqs.map( faq => (
            <Faq {...faq} key={faq.question}/>
          ))}
        </Row>
      </WithPadding>
    </ContainerSmall>
  </FluidContainer>
);

export default Faqs;
