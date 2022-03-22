import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
`;

const Title = styled.div`
  font-size: 80px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  width: 800px;
  height: 600px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Portfolio1(props) {
  return (
    <Container>
      <Title>Portfolio 1.</Title>
      <Description>
        라뜰리에 동대문 현대시티 아울렛 ('17.4 ~ '20.4): 19c 말 고흐, 고갱 등
        인상주의 화가들의 작품과 인물을 현실공간에 재현 하여 호평을 받은
        프로젝트입니다. 해당 프로젝트는 중국 북경('19.11')및 중경('20.9)에
        수출되었습니다.
      </Description>
      <ContextBox>
        <ItemBox>
          <Item>
            <ReactPlayer url="https://youtu.be/wthal-uDTXc" />
          </Item>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Portfolio1;
