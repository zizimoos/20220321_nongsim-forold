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
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
const Title = styled.div`
  font-size: 80px;
`;

function HightLight(props) {
  return (
    <Container>
      <Title>감사합니다.</Title>
    </Container>
  );
}

export default HightLight;
