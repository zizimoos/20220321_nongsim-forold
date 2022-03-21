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
  background-color: tomato;
`;
const ItemBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  width: 400px;
  height: 600px;
  margin: 10px;
  background-color: gray;
`;

function NewProject3(props) {
  return (
    <Container>
      <h1>NewProject3</h1>
      <ItemBox>
        <Item></Item>
        <Item></Item>
      </ItemBox>
    </Container>
  );
}

export default NewProject3;
