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
  background-color: seashell;
`;
const Title = styled.div`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 10px;
  }
`;
const Description = styled.div`
  margin-top: 30px;
  font-size: 25px;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 80vw;
    height: 100%;
    font-size: 20px;
  }
`;

const ContextBox = styled.div`
  width: 1000px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
const ItemBox = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 400px;
  height: 600px;
  margin: 10px;
  background-color: gray;
  @media (max-width: 768px) {
    width: 350px;
    flex-direction: column;
  }
`;

function NewProject1(props) {
  return (
    <Container>
      <Title>NewProject1</Title>
      <Description></Description>
      <ContextBox>
        <ItemBox>
          <Item></Item>
          <Item></Item>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default NewProject1;
