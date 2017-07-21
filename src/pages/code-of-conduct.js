import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import ReactGA from 'react-ga';

import { FluidContainer, ContainerSmall, Row, Cell } from '../components/styled/Grid';
import { WithPadding } from '../components/styled/Base'
import { MarkdownWrapper } from '../components/styled/Markdown'
import { COC } from '../../data/COC'
import Logo from '../components/styled/Logo'

// Some css theme params depend on window width.
class CodeOfConduct extends Component {

  componentDidMount() {
    ReactGA.pageview('/code-of-conduct');
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
              <MarkdownWrapper>
                <Markdown source={COC}/>
              </MarkdownWrapper>
            </WithPadding>
          </ContainerSmall>
        </FluidContainer>
      </div>
    );
  }
}

export default CodeOfConduct;
