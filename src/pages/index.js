import React, { Component } from "react";
import { FluidContainer } from "../components/styled/Grid";

import Jumbo from "../components/home/Jumbo";
import WhatIsIt from "../components/home/WhatIsIt";
import WhatYouWillLearn from "../components/home/WhatYouWillLearn";
import Trainers from "../components/home/Trainers";
import BookingBlock from "../components/home/BookingBlock";
import Newsletter from "../components/home/Newsletter";
import Faqs from "../components/home/Faqs";

// Some css theme params depend on window width.
const Index = (props, { isMobile }) =>
  <FluidContainer>

    <Jumbo isMobile={isMobile}/>

    <WhatIsIt />

    <WhatYouWillLearn isMobile={isMobile}/>

    <Trainers isMobile={isMobile} />

    <BookingBlock isMobile={isMobile} />

    <Newsletter isMobile={isMobile}/>

    <Faqs isMobile={isMobile} />

  </FluidContainer>


Index.contextTypes = {
  windowWidth: PropTypes.number,
  isMobile: PropTypes.bool
};

export default Index;
