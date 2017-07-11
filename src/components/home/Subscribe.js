import React, { Component } from "react";
import styled from "styled-components";
import { FluidContainer, Container, Row, Cell } from "../grid/Grid";
import { WithPadding, H1Md, H2Md,H3Md,  Button, Text } from "../components/Base";
import StyledInput from "../components/Forms";
import ValidationErrors from "../components/ValidationErrors";

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const SubscribeButton = styled.button`
  display: inline-block;
  padding: 0 ${props => props.theme.margins.xl};
  box-sizing: border-box;
  height: 60px;
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.theme.colors.transparent};
  border: 5px solid ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.md};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  outline: none;
  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.transparentWhite};
    border: 5px solid ${props => props.theme.colors.accent};
  }
`;

const SubscribedCard = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.veryLightGrey};
  padding: ${props => props.theme.margins.lg};
  border-radius: ${ props => props.theme.radius.md};
  border: 5px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row"};
`;

const JustSubscribed = () => (
  <Row>
    <Cell xs={12} sm={8} smOffset={4} md={6} mdOffset={3} center>
      <SubscribedCard>
        <H3Md bold>
          Thanks for subscribing!
        </H3Md>
      </SubscribedCard>
    </Cell>
  </Row>
);

class Subscribe extends Component {
  state = {
    email: "",
    name: "",
    validationErrors: [],
    justSubscribed: false
  };

  onChange = e => {
    this.setState({ [e.target.dataset.name]: e.target.value });

    if (!!this.state.validationErrors.length) {
      this.setState({
        validationErrors: []
      });
    }
  };

  onSubscribe = e => {
    e.preventDefault();
    //Validate
    let newErrors = [];
    if (this.state.name === "") {
      newErrors = [...newErrors, "Tell us your name, please."];
    }

    if (this.state.email === "") {
      newErrors = [...newErrors, "Email can't be blank."];
    }

    if (this.state.email !== "" && !emailPattern.test(this.state.email)) {
      newErrors = [...newErrors, "Enter correct email, please."];
    }

    this.setState({ validationErrors: newErrors });

    if (!newErrors.length) {
      const subscriber = {
        email_address: this.state.email.trim().toLowerCase(),
        status: "subscribed",
        merge_fields: {
          FNAME: this.state.name,
          LNAME: ""
        }
      };

      this.setState({ justSubscribed: true, email: '',  name: ''});

      console.log(`subsriber`, subscriber);

      // createSubscriber.call({ subscriber }, (error, result ) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     this.setState({ justSubscribed: true, email: "", name: "" });
      //   }
      // })
    }
  };

  renderJustSubscribed = () => {
    setTimeout(() => this.setState({ justSubscribed: false }), 3500);
    return <JustSubscribed />;
  };

  render() {
    const { isMobile } = this.props;
    return (
      <FluidContainer>
        <WithPadding padding="xl">
          <Container>
            {this.state.justSubscribed
              ? this.renderJustSubscribed()
              : <Row>
                  <Cell xs={12} center>
                    <H1Md color="text" lineHeight="2" superbold>
                      Join our online chat and watch the event online
                    </H1Md>

                  </Cell>
                  <Cell xs={12} md={8} mdOffset={2} center>
                    <Form isMobile={isMobile} onSubmit={this.onSubscribe}>
                      <StyledInput
                        data-name="name"
                        onChange={this.onChange}
                        placeholder="Your name"
                        value={this.state.name}
                        isMobile={isMobile}
                        margin="0"
                      />
                      <StyledInput
                        data-name="email"
                        onChange={this.onChange}
                        placeholder="your@email.com"
                        value={this.state.email}
                        isMobile={isMobile}
                        margin="0"
                      />

                      <SubscribeButton onClick={this.onSubscribe} type="submit">
                        Subscribe
                      </SubscribeButton>
                    </Form>

                    {!!this.state.validationErrors.length &&
                      <ValidationErrors
                        errors={this.state.validationErrors}
                        background="superLightGrey"
                        center
                      />}
                  </Cell>
                </Row>}
          </Container>
        </WithPadding>
      </FluidContainer>
    );
  }
}

export default Subscribe;
