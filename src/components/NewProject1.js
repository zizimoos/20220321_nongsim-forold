import React from "react";
import styled from "styled-components";
import bible from "../assets/bible.jpg";
import perspective from "../assets/perspective.png";
import emersive from "../assets/emersiveShot.png";

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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 400px;
  height: 600px;
  margin: 10px;
  li {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    width: 350px;
    flex-direction: column;
  }
`;

function NewProject1(props) {
  return (
    <Container>
      <Title>NewProject 1.</Title>
      <Description>
        ㈜메타스텝은 가톨릭 평화방송과 공동사업으로 메타버스 더 바이블
        프로젝트를 진행중입니다. 라틀리에(L’atelier) 프로젝트 성공을 기반으로
        하여, 전세계적인 베스트셀러인 ‘성경＇을 모티브로 홀로그램, AI
        Interactive 기술 등 첨단 IT 기술을 접목하여 오프라인 공간에서 메타버스
        체험을 통해 감동을 선사할 예정입니다.
      </Description>
      <ContextBox>
        <ItemBox>
          <Item>
            <div style={{ fontSize: "25px" }}>메타버스 '더 바이블'</div>
            <ul>
              <li>주 관 : ㈜메타스텝 가톨릭 평화방송 </li>
              <li>장 소 : 서울 명동성당(계성여고) 혹은 제주도 이시돌 목장</li>
              <li>규 모 : 약 300py</li>
              <li>사업비 : 약 35억 원(순제작비 기준)</li>
              <li>사업기간 : 1년 단위 (1차 2022년11월~2023년12월)</li>
              <li>
                형 식 : Walkthrough Immersive Experience ( 전시체험+뮤지컬 ){" "}
              </li>
              <li>
                내 용 : 예수 탄생, 사역, 빌라도의 심문 이후 예수님께서 십자가에
                못박혀 돌아가시고 부활, 승천하시기 까지 4개 막으로 구성된 실감형
                콘텐츠 직접체험.
              </li>
            </ul>
            <div>
              <img src={bible} alt="bible" width="100%" />
            </div>
          </Item>
          <Item>
            <div>내 용 요 약</div>
            <br></br>
            <div>
              기원 전 1,400년 경부터 기원 후 100년에 걸쳐 구약과 신약의 기록을
              바탕으로 충실하게 재현한 성경 속 공간을 체험하고, 성경 속 인물들과
              직접 대화를 나누며 사건의 현장에 직접 참여하여 체험합니다.{" "}
            </div>
            <br></br>
            <div>
              <img src={perspective} alt="perspective" width="100%" />
            </div>
            <br></br>
            <div>ZONE : 출애굽 & 홍해의 기적</div>
            <br></br>
            <div>
              <img src={emersive} alt="perspective" width="100%" />
            </div>
            <div>대형 미디어 월을 통해 갈라지는 홍해 사이를 건너는 체험.</div>
          </Item>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default NewProject1;
