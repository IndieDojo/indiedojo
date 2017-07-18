import React, { Component } from "react";
import styled from "styled-components";
import { ContainerSmall, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";
import faqs from '../../../data/faq.yaml';
import Markdown from 'react-remarkable';

const Faq = ({q, a}) =>
  <WithPadding padding='md'>
    <Subtitle bold center margin='lg'>{q}</Subtitle>
    <Text><Markdown>{a}</Markdown></Text>
  </WithPadding>

const Faqs = ({ isMobile }) => (
  <ContainerSmall>
    <div id='included'></div>
    <WithPadding padding="xl">
      <Row>
        <Cell xs={12} center>
          <Title margin='md' bold center>
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
  </ContainerSmall>
);

export default Faqs;
