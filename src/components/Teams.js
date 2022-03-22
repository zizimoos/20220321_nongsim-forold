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
  background-color: white;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 80px;
`;
const ContextBox = styled.div`
  width: 1000px;
  height: 800px;
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
  li {
    margin-bottom: 3px;
  }
`;

function Teams(props) {
  return (
    <Container>
      <Title>meet Our Team</Title>
      <ContextBox>
        <ItemBox>
          <div>
            <Item></Item>
            <ItemDescription>
              <div>COO 김성한</div>
              <ul>
                <li>한솔 넥스지 신사업개발팀장</li>
                <li>중앙일보 중앙 M & B 마케팅 팀장</li>
                <li>영화지 무비워크, 스트린 COO </li>
                <li>폴란드 바르샤바 대햑교 석사 </li>
              </ul>
            </ItemDescription>
          </div>
          <div>
            <Item></Item>
            <ItemDescription>
              <div>CTO 남형석</div>
              <ul>
                <li>LG 계전</li>
                <li>NC soft 리니지포에버</li>
                <li>NC soft 길드워즈</li>
                <li>NC soft 북경 R & D center head</li>
                <li>EZEN Entertainmet mmorpg 건틀렛</li>
                <li>BORABIT BLOCKCHAIN 거래소</li>
              </ul>
            </ItemDescription>
          </div>
          <div>
            <Item></Item>
            <ItemDescription>
              <div>CCO 김근수</div>
              <ul>
                <li>동대문 라뜰리에 프로젝트 총괄</li>
                <li>(주) 맥키스컴퍼니 기술연구소장</li>
                <li>씨앤애드 전시실정</li>
                <li>홍익대학교 미대 석사</li>
              </ul>
            </ItemDescription>
          </div>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Teams;
