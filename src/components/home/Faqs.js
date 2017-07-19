import React from "react";
import { ContainerSmall, Row, Cell } from "../styled/Grid";
import { WithPadding, Title, Subtitle, Text } from "../styled/Base";
import faqs from "../../../data/faq.yaml";
import Markdown from "react-remarkable";
import { MarkdownWrapper } from "../styled/Markdown";

const Faq = ({ q, a }) => (
  <WithPadding padding="md">
    <Subtitle bold center margin="lg">{q}</Subtitle>
    <Text>
      <MarkdownWrapper>
        <Markdown>{a}</Markdown>
      </MarkdownWrapper>
    </Text>
  </WithPadding>
);

const Faqs = () => (
  <ContainerSmall>
    <div id="included" />
    <WithPadding padding="xl">
      <Row>
        <Cell xs={12} center>
          <Title margin="md" bold center>
            FAQs
          </Title>
        </Cell>
      </Row>
      <Row>
        <Cell xs={12}>
          {faqs.map(faq => <Faq {...faq} key={faq.q} />)}
        </Cell>
      </Row>
    </WithPadding>
  </ContainerSmall>
);

export default Faqs;
