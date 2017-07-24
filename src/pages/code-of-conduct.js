import React, { Component } from 'react';
import Markdown from 'react-remarkable';

import { FluidContainer, ContainerSmall, Row, Cell } from '../components/styled/Grid';
import { WithPadding } from '../components/styled/Base'
import { MarkdownWrapper } from '../components/styled/Markdown'
import { COC } from '../../data/COC'
import Logo from '../components/styled/Logo'

class CodeOfConduct extends Component {

  render() {
    return (
      <div className='top'>
        <div id='top'></div>
        <FluidContainer>
          <ContainerSmall>
            <WithPadding padding='xxl'>
              <Row>
                <Cell xs={12} center>
                  <Logo src="tiny/indiedojo-brown.png"/>
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
