import React, { Component } from 'react';
import Markdown from 'react-remarkable';

import { FluidContainer, ContainerSmall, Row, Cell } from '../components/grid/Grid';
import { WithPadding } from '../components/common/Base'
import { MarkdownWrapper } from '../components/common/Markdown'
import { COC } from '../../data/COC'
import Footer from "../components/home/Footer";
import { Logo } from '../components/common/Logo'

// Some css theme params depend on window width.
class CodeOfConduct extends Component {

  render() {
    return (
      <div>
        <FluidContainer>
          <ContainerSmall>
            <WithPadding padding='xxxl'>
              <Row>
                <Cell xs={12} center>
                  <Logo margin='xxl' isMobile={this.props.isMobile}/>
                </Cell>
              </Row>
              <MarkdownWrapper isMobile={this.props.isMobile}>
                <Markdown source={COC}/>
              </MarkdownWrapper>
            </WithPadding>
          </ContainerSmall>
        </FluidContainer>
        <Footer />
      </div>
    );
  }
}

export default CodeOfConduct;
