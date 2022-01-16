import React from 'react';

import {Wrapper} from "./Loader.styles";

const Loader = () => {
  return (
    <Wrapper>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Loader;