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
  background-color: gainsboro;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 500px;
  height: 500px;
  margin: 10px;
  li {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const ItemVisual = styled.div`
  width: 500px;
  height: 500px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    ReactPlayer {
      width: 100vw;
    }
  }
`;

function Technology1(props) {
  return (
    <Container>
      <Title>Technology 1.</Title>
      <Description>
        라뜰리에 등 프로젝트를 통해서 AI LEARNING INTERACTIVE, MULTI-CHANNEL
        SYNCRO, HOLOGRAPHIC & CHROMA KEY 등 핵심 TECHNOLOGY를 보유하고 있습니다.
      </Description>
      <ContextBox>
        <ItemBox>
          <Item>
            <ul>
              <li>AI LEARNING</li>
              <li>다채널 동기화 기술</li>
              <li>FOIL TYPE PSEUDO HOLOGRAM</li>
              <li>CHROMAKEY</li>
              <br></br>
              <li>GAME DEV & SERVICE</li>
              <li>BLOCKCHAIN, 암호화폐 관련 기술</li>
              <li>자체 IP를 활용한 NFT BIZ MODEL</li>
              <br></br>
              <li>CONTENTS 기획력</li>
            </ul>
          </Item>
          <ItemVisual>
            <ReactPlayer url="https://youtu.be/6_N-_bfeTXE" width="500px" />
          </ItemVisual>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Technology1;
