import React from "react";
import { FluidContainer } from "../components/styled/Grid";
import Jumbo from "../components/home/Jumbo";
import WhatIsIt from "../components/home/WhatIsIt";
import WhatYouWillLearn from "../components/home/WhatYouWillLearn";
import Trainers from "../components/home/Trainers";
import BookingBlock from "../components/home/BookingBlock";
import Newsletter from "../components/home/Newsletter";
import Faqs from "../components/home/Faqs";

const Index = () => (
  <FluidContainer>
    <Jumbo />
    <WhatIsIt />
    <WhatYouWillLearn />
    <Trainers />
    <BookingBlock />
    <Newsletter />
    <Faqs />
  </FluidContainer>
);

export default Index;
