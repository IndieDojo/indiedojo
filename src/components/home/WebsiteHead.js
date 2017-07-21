import React from 'react';
import Helmet from 'react-helmet';

const WebsiteHead = () =>
  <Helmet>
    <title>Indie Dojo - a one-week bootcamp for indie hackers</title>
    <meta name='description' content="Indie Dojo is a one-week bootcamp that will give you a step-by-step blueprint for moving from a blank page to a launch-ready web product"/>
    <link rel="canonical" href="http://indiedojo.co" />
    <link rel="shortcut icon" href="/favicon.png" />

    <html itemscope itemtype="http://schema.org/Event"/>

    {/* Schema.org markup for Google+ */}
    <meta itemprop="name" content="Indie Dojo - a one-week bootcamp for indie hackers"/>
    <meta itemprop="description" content="Indie Dojo is a one-week bootcamp that will give you a step-by-step blueprint for moving from a blank page to a launch-ready web product"/>
    <meta itemprop="image" content="http://indiedojo/indie-dojo-social.jpg"/>

    {/* Twitter Card data */}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@indiedojoco"/>
    <meta name="twitter:title" content="Indie Dojo - a one-week bootcamp for indie hackers"/>
    <meta name="twitter:description" content="Indie Dojo is a one-week bootcamp that will give you a step-by-step blueprint for moving from a blank page to a launch-ready web product"/>
    <meta name="twitter:creator" content="@indiedojoco"/>

    {/* Twitter summary card with large image must be at least 280x150px */}
    <meta name="twitter:image:src" content="http://indiedojo/indie-dojo-social.jpg"/>

    {/* Open Graph data */}
    <meta property="og:title" content="Indie Dojo - a one-week bootcamp for indie hackers" />
    <meta property="og:type" content="event" />
    <meta property="og:url" content="http://www.indiedojo.club/" />
    <meta property="og:image" content="http://indiedojo/indie-dojo-social.jpg" />
    <meta property="og:description" content="Indie Dojo is a one-week bootcamp that will give you a step-by-step blueprint for moving from a blank page to a launch-ready web product" />
    <meta property="og:site_name" content="Indie Dojo" />
    <meta property="fb:admins" content="1483954624984668" />

    <meta property="og:type" content="event" />
  </Helmet>

export default WebsiteHead;
