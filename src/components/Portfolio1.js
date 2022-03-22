import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
`;
const ContextBox = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
  font-size: 25px;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 80vw;
    height: 100%;
    font-size: 20px;
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
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    ReactPlayer {
      width: 100vw;
    }
  }
`;

function Portfolio1(props) {
  return (
    <Container>
      <ContextBox>
        <Title>Portfolio</Title>
        <Description>
          라뜰리에(L’atelier)는 동대문 현대시티 아웃렛(’17.4 ~ ’20.4)에 19C 말
          고흐, 고갱 등 인상주의 화가들과 작품을 현실공간에 재현하여 호평을 받은
          프로젝트입니다. 신개념 아트랙티브(ARTACTIVE) 테마파크로서 사진찍기
          좋은 장소로 SNS에서 인기몰이를 하였으며, 입장객 55만명 매출액 92억
          원을 달성하여 제주도 ‘빛의 벙커’와 더불어 대표적인 흥행 프로젝트로
          손꼽히고 있습니다. 라뜰리에 프로젝트는 중국 北京 (’19.11) 및
          重慶(’20.9)에도 수출되었습니다.
        </Description>

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
