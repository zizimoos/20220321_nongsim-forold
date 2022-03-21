import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: gainsboro;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 80px;
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 30px;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 80vw;
    height: 100%;
    font-size: 20px;
  }
`;
const ContextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemBox = styled.div`
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px;
  border-radius: 100px;
  background-color: gray;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;

const Bar = styled.div`
  width: 70vw;
  height: 5px;

  background-color: gray;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HistoryDescriptionBox = styled.div`
  width: 80vw;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const HistoryDescriptionItem = styled.div`
  width: 250px;
  height: 250px;
  background-color: gray;
`;

function History(props) {
  return (
    <Container>
      <Title>History</Title>
      <Description>
        1994년 IT 기업으로 시작하여 기술력과 사업력을 갖춘 회사로 성장하여
        왔습니다.
      </Description>
      <ContextBox>
        <ItemBox>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemBox>
        <Bar></Bar>
        <HistoryDescriptionBox>
          <HistoryDescriptionItem></HistoryDescriptionItem>
          <HistoryDescriptionItem></HistoryDescriptionItem>
          <HistoryDescriptionItem></HistoryDescriptionItem>
        </HistoryDescriptionBox>
      </ContextBox>
    </Container>
  );
}

export default History;
