import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: oldlace;
`;
const Title = styled.div`
  font-size: 80px;
`;
const ItemBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 800px;
  height: 200px;
  margin: 10px;
  background-color: gray;
  @media (max-width: 768px) {
    width: 350px;
  }
`;

function HightLight(props) {
  return (
    <Container>
      <Title>감사합니다.</Title>
    </Container>
  );
}

export default HightLight;
