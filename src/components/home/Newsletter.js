import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, H2Lg } from '../components/Base';

const NewsletterWrapper = styled.div`
`



const Newsletter = props =>
  <NewsletterWrapper>
    Join the dojo
    Sign up for our newsletter and get access to a free eBook

    Color Theory for Startups
    Through 9 short case studies, learn how leading companies
    use color to establish their brand and reinforce their messaging. 

    <img src="/color-theory-for-startups.png"/>
  </NewsletterWrapper>

export default Newsletter
