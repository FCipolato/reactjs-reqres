import React from "react";

import { Link } from "react-router-dom";

import { StyledSection, StyledP } from "./styles";

const NotFound = () => (
  <StyledSection>
    <StyledP>
      <Link to="/">Go to Home</Link>
    </StyledP>
  </StyledSection>
);

export default NotFound;
