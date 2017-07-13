import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link';
import { FluidContainer, ContainerSmall, Row, Cell } from "../grid/Grid";
import { Background, WithPadding, Subtitle, LinkTo } from "../components/Base";

const SocialThings = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const SocialItem = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.transparentWhite50};
  margin-top: ${props => props.theme.margins.xl};
  margin-bottom: ${props => props.theme.margins.xl};
`;

const Footer = () => (
  <Background color="black">
    <WithPadding padding='xxl'>

      <FluidContainer>
        <ContainerSmall>

          <Row>
            <Cell xs={12} center>
              <Subtitle size='nm' margin='lg' color='transparentWhite75'>Find us on</Subtitle>
              <SocialThings>
                <SocialItem><LinkTo inherit href='https://twitter.com/indiedojoco'>Twitter</LinkTo></SocialItem>
                <SocialItem><LinkTo inherit href='https://www.facebook.com/indiedojoco'>Facebook</LinkTo></SocialItem>
                <SocialItem><LinkTo inherit href='https://www.instagram.com/indiedojo/'>Instagram</LinkTo></SocialItem>
                <SocialItem><LinkTo inherit  href='https://medium.com/indiedojo'>Medium</LinkTo></SocialItem>
              </SocialThings>
            </Cell>

            <Divider />

            <Cell xs={12} center>
              <Subtitle size='sm' marginRight='xl' inline>
                <Link to='/terms-and-conditions'>Terms and Conditions</Link>
              </Subtitle>
              <Subtitle size='sm' inline>
                <Link to='/code-of-conduct'>Code of Conduct</Link>
              </Subtitle>
            </Cell>

            <WithPadding padding='xl'/>

            <Cell xs={12} center>
              <Subtitle size='xs' color='transparentWhite50'>
                Built by Sacha Greif and Maciej Nowakowski with <LinkTo inherit href='https://www.gatsbyjs.org/'>Gatsby</LinkTo>.
              </Subtitle>
            </Cell>
          </Row>

        </ContainerSmall>
      </FluidContainer>

    </WithPadding>
  </Background>
);

export default Footer;
