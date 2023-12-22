import React from "react";
import {
  ContentSolution,
  AutoScrollHeader1,
  AutoScrollHeader2,
  Navbar,
  OurServices,
} from "./Components/Layout";
import {
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
  head7,
  head8,
  sec1,
  sec2,
  sec3,
  sec4,
  sec5,
  sec6,
  sec7,
  sec8,
  sec9,
} from "./assets/images";

const App = () => {
  const images = [head1, head2, head3, head4, head5, head6, head7, head8];
  const images2 = [sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9];
  return (
    <div>
      <Navbar />
      <AutoScrollHeader1 images={images} title="Featured in" />
      <AutoScrollHeader2 images={images2} title="Featured in" />
      <ContentSolution />
      <OurServices />
    </div>
  );
};

export default App;
