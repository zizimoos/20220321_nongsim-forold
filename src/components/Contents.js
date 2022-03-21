import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
const ItemBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 200px;
  height: 400px;
  margin: 10px;
  background-color: gray;
  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
  }
`;

function Contents(props) {
  return (
    <Container>
      <h1>INDEX</h1>
      <ItemBox>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </ItemBox>
    </Container>
  );
}

export default Contents;
