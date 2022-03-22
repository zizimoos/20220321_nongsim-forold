import Contents from "./components/Contents";
import styled from "styled-components";
import History from "./components/History";
import Teams from "./components/Teams";
import Technology1 from "./components/Technology1";
import Portfolio1 from "./components/Portfolio1";
import NewProject1 from "./components/NewProject1";
import HightLight from "./components/HightLight";
import Logo from "./components/Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

function App() {
  return (
    <Container>
      <Logo></Logo>
      <Contents></Contents>
      <History></History>
      <Teams></Teams>
      <Technology1></Technology1>
      <Portfolio1></Portfolio1>
      <NewProject1></NewProject1>
      <HightLight></HightLight>
    </Container>
  );
}

export default App;
