import React from 'react';
import styled from 'styled-components';

import { Row, Cell } from '../styled/Grid'
import { Card, H2 } from './Base'

const ErrorMessage = styled.h3`
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes.nm};
  margin-bottom: ${props => props.theme.margins.md};
  padding-left: ${props => props.theme.margins.lg};
  color: ${props => props.theme.colors.accent};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ValidationErrors = ({ errors }) => (
  <div>
    { !!errors && !!errors.length &&
      <Card
        background="veryLight"
        radius="lg"
        padding="lg"
        marginBottom="lg"
        marginTop="lg"
      >
        <Row>
          <Cell xs={12} center>
            <Subtitle size='nm' color="accent" bold>Ups, there are some errors.</Subtitle>
          </Cell>

          {errors.map(error => (
            <Cell xs={12} key={error} center>
              <ErrorMessage>{error}</ErrorMessage>
            </Cell>
          ))}

        </Row>
      </Card>
    }
  </div>
);

export default ValidationErrors
