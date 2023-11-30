import styled from "styled-components";
import React, { useEffect, useState } from "react";

import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 10px;
  flex-direction: column;
`;

const Homecomponent = (props) => {
  return (
    <Container>
      <OverViewComponent />
      <TransactionComponent />
    </Container>
  );
};
export default Homecomponent;
