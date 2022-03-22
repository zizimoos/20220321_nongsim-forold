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
  background-color: lightgray;
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

function Portfolio2(props) {
  return (
    <Container>
      <ContextBox>
        <Title>Portfolio 2.</Title>
        <Description>
          신개념 아트랙티브(ARTACTIVE) 테마파크 L’ATELIEUR는 사진찍기 좋은
          장소로 SNS에서 인기몰이를 하였으며, 입장객 55만명 매출액 92억 원을
          기록하여 대표적인 성공사례로 손꼽히고 있습니다.
        </Description>

        <ItemBox>
          <Item>
            <ReactPlayer url="https://youtu.be/uB3mOZJPns0" />
          </Item>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Portfolio2;
