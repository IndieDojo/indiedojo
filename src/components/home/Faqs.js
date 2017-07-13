import React, { Component } from "react";
import styled from "styled-components";
import { Row, Cell } from "../grid/Grid";
import { WithPadding, Title, Subtitle, Text } from "../components/Base";

const faqs = [
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

const Faq = ({question, answer}) =>
  <WithPadding padding='md'>
    <Subtitle bold>{question}</Subtitle>
    <Text>{answer}</Text>
  </WithPadding>

const Faqs = ({ isMobile }) => (
  <WithPadding padding="xl">
    <Row>
      <Cell xs={12} center>
        <Title lineHeight="2" margin='lg' bold center>
          FAQs
        </Title>
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        { faqs.map( faq => (
          <Faq {...faq} key={faq.question}/>
        ))}
      </Cell>
    </Row>
  </WithPadding>
);

export default Faqs;
