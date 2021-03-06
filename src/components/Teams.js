import React from "react";
import styled from "styled-components";
import henry from "../assets/henryPhoto.png";
import shwan from "../assets/shwan.png";
import kksoo from "../assets/kksoo.png";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 50px;
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
const ContextBox = styled.div`
  width: 1000px;
  height: 100%;
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
const Title = styled.div`
  font-size: 80px;
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
const Item1 = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${shwan});
  background-size: cover;
  border: solid 2px lightgray;
`;
const Item2 = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${henry});
  border: solid 2px lightgray;
`;
const Item3 = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${kksoo});
  background-size: cover;
  border: solid 2px lightgray;
`;
const ItemDescription = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px;
  li {
    margin-bottom: 3px;
  }
`;

function Teams(props) {
  return (
    <Container>
      <ContextBox>
        <Title>Meet Our Team</Title>
        <ItemBox>
          <div>
            <Item2></Item2>
            <ItemDescription>
              <div>CTO 남형석</div>
              <ul>
                <li>BORABIT BLOCKCHAIN 거래소</li>
                <li>EZEN Entertainmet mmorpg 건틀렛</li>
                <li>NC soft 리니지포에버, 길드워즈</li>
                <li>NC soft 북경 R & D center head</li>
                <li>LG 계전</li>
                <li>경북대학교 전자공학 학사</li>
              </ul>
            </ItemDescription>
          </div>
          <div>
            <Item3></Item3>
            <ItemDescription>
              <div>CCO 김근수</div>
              <ul>
                <li>동대문 라뜰리에 프로젝트 총괄</li>
                <li>(주) 맥키스컴퍼니 기술연구소장</li>
                <li>씨앤애드 전시실장</li>
                <li>홍익대학교 미대 석사</li>
              </ul>
            </ItemDescription>
          </div>
          <div>
            <Item1></Item1>
            <ItemDescription>
              <div>COO 김성환</div>
              <ul>
                <li>한솔 넥스지 신사업개발팀장</li>
                <li>중앙일보 중앙 M & B 마케팅 팀장</li>
                <li>영화지 무비위크, 스크린 COO </li>
                <li>폴란드 바르샤바 대학교 석사 </li>
              </ul>
            </ItemDescription>
          </div>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Teams;
