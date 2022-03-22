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
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
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
      <h1>meet Our Team</h1>
      <ContextBox>
        <ItemBox>
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
              <div>CTO 남형석</div>
              <ul>
                <li>LG 계전</li>
                <li>NC soft</li>
                <li>BORABIT BLOCKCHAIN 거래소</li>
              </ul>
            </ItemDescription>
          </div>
          <div>
            <Item></Item>
            <ItemDescription>
              <div>CTO 남형석</div>
              <ul>
                <li>LG 계전</li>
                <li>nc soft</li>
                <li>BORABIT BLOCKCHAIN 거래소</li>
              </ul>
            </ItemDescription>
          </div>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Teams;
