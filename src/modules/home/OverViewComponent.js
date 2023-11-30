import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: colunn;
  align-items: center;
  margin: 18px;
  font-family: Montserrat;
  width: 100%;
`;
const BalanceBox = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const AddTransactioncontainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const AddTransactionView = () => {
  return (
    <AddTransactioncontainer>
      <input placeholder="Amount" />
      <input placeholder="description" />
    </AddTransactioncontainer>
  );
};

const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(true);
  return (
    <Container>
      <BalanceBox>
        Balance: $15000
        <AddTransaction>{isAddTxnVisible ? "Cancel" : "ADD"}</AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && <AddTransactionView />}
    </Container>
  );
};

export default OverViewComponent;
