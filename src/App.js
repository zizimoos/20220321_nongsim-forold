import Contents from "./components/Contents";
import styled from "styled-components";
import History from "./components/History";
import Teams from "./components/Teams";
import Technology1 from "./components/Technology1";
import Technology2 from "./components/Technology2";
import Portfolio1 from "./components/Portfolio1";
import Portfolio2 from "./components/Portfolio2";
import Portfolio3 from "./components/Portfolio3";
import Portfolio4 from "./components/Portfolio4";
import Portfolio5 from "./components/Portfolio5";
import Portfolio6 from "./components/Portfolio6";
import NewProject1 from "./components/NewProject1";
import NewProject2 from "./components/NewProject2";
import NewProject3 from "./components/NewProject3";
import EstimatedIncom1 from "./components/EstimatedIncom1";
import EstimatedIncom2 from "./components/EstimatedIncom2";
import HightLight from "./components/HightLight";

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
      <Contents></Contents>
      <History></History>
      <Teams></Teams>
      <Technology1></Technology1>
      <Technology2></Technology2>
      <Portfolio1></Portfolio1>
      <Portfolio2></Portfolio2>
      <Portfolio3></Portfolio3>
      <Portfolio4></Portfolio4>
      <Portfolio5></Portfolio5>
      <Portfolio6></Portfolio6>
      <NewProject1></NewProject1>
      <NewProject2></NewProject2>
      <NewProject3></NewProject3>
      <EstimatedIncom1></EstimatedIncom1>
      <EstimatedIncom2></EstimatedIncom2>
      <HightLight></HightLight>
    </Container>
  );
}

export default App;
