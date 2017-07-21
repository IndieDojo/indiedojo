import React, { Component } from 'react';
import Markdown from 'react-remarkable';

import { FluidContainer, ContainerSmall, Row, Cell } from '../components/styled/Grid';
import { WithPadding } from '../components/styled/Base'
import { MarkdownWrapper } from '../components/styled/Markdown'
import { TAC } from '../../data/TAC'
import Logo from '../components/styled/Logo'

// Some css theme params depend on window width.
class Tac extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <FluidContainer>
          <ContainerSmall>
            <WithPadding padding='xxxl'>
              <Row>
                <Cell xs={12} center>
                  <Logo src="/indiedojo-brown.png"/>
                </Cell>
              </Row>
              <MarkdownWrapper >
                <Markdown source={TAC}/>
              </MarkdownWrapper>
            </WithPadding>
          </ContainerSmall>
        </FluidContainer>
      </div>
    );
  }
}

export default Tac;
