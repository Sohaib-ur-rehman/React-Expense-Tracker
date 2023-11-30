import styled from "styled-components";
import Homecomponent from "./modules/home";
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 10px;
  flex-direction: column;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

export default function App() {
  return (
    <Container>
      <Header>appjs Expense tracker</Header>
      <h1>home</h1>
      <Homecomponent />
    </Container>
  );
}
