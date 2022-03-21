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
  background-color: silver;
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
  width: 200px;
  height: 200px;
  margin: 30px;
  border-radius: 100px;
  background-color: gray;
`;
const ItemDescription = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;
  background-color: gray;
`;

function Teams(props) {
  return (
    <Container>
      <h1>meet Our Team</h1>
      <ItemBox>
        <div>
          <Item></Item>
          <ItemDescription></ItemDescription>
        </div>
        <div>
          <Item></Item>
          <ItemDescription></ItemDescription>
        </div>
        <div>
          <Item></Item>
          <ItemDescription></ItemDescription>
        </div>
      </ItemBox>
    </Container>
  );
}

export default Teams;
