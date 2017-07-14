import React, { Component } from "react";
import styled from "styled-components";
import { Row, Cell } from "../grid/Grid";
import { WithPadding, Title, Subtitle, Text } from "../components/Base";
import faqs from '../../../data/faq.yaml';
import Markdown from 'react-remarkable';

const Faq = ({q, a}) =>
  <WithPadding padding='md'>
    <Subtitle bold>{q}</Subtitle>
    <Text><Markdown>{a}</Markdown></Text>
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
          <Faq {...faq} key={faq.q}/>
        ))}
      </Cell>
    </Row>
  </WithPadding>
);

export default Faqs;
