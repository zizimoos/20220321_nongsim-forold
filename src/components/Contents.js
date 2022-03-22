import React from "react";
import styled from "styled-components";
import araImage from "../assets/restmb_allidxmake.jpg";
import blockchain from "../assets/blockchain.png";
import nft from "../assets/nft.png";
import latelier from "../assets/latelier.png";

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
  font-size: 50px;
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
  height: 600px;
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
  width: 900px;
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
  width: 220px;
  height: 400px;
  margin: 10px;
  li {
    padding-right: 10px;
    margin-left: -15px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
  }
`;

function Contents(props) {
  return (
    <Container>
      <Title>INTRO</Title>
      <Description>
        <ul>
          <li>1994년 IT기업으로서 창업 SI사업 영위</li>
          <li>
            2002년 멑티미디어 사업부를 신설하고 국내 최초 만화 일간지 "데일지
            줌" 창간 및 라뜰리에(L’atelier) 프로젝트 등 IT 기술을 기반으로
            미디어 컨텐츠 사업을 추진
          </li>
          <li>
            2021년 그 동안 축적한 경험과 노하우, 새로운 맨파워 확보를 통해
            메타버스 사업을 본격적으로 추진
          </li>
        </ul>
      </Description>
      <ContextBox>
        <ItemBox>
          <Item>
            <ul>
              <li>게임개발 & 운영 노하우</li>
              <li>게임엔진개발 / 플랫폼 구축</li>
              <li>퍼블리싱 / 운영</li>
              <br></br>
              <br></br>
            </ul>
            <img src={araImage} alt="ara" width="100%" />
          </Item>
          <Item>
            <ul>
              <li>블록체인 & 암호화폐</li>
              <li>암호화폐거래소 개발 운영</li>
              <li>메타버스플랫폼 토큰 발행 운영</li>
              <br></br>
            </ul>
            <img src={blockchain} alt="blockchain" width="100%" />
          </Item>
          <Item>
            <ul>
              <li>NFT 자체 IP 보유</li>
              <li>자체 보유 IP 활용 NFT 거래 사이트</li>
              <li>테마마크 콘텐츠 MINTING</li>
            </ul>
            <img src={nft} alt="nft" width="100%" />
          </Item>
          <Item>
            <ul>
              <li>콘텐츠 기획력</li>
              <li>아라온라인, 마법삼국지, 테디베어, 라뜨리에</li>
              <li>게임 및 테마파크 콘텐츠 기획력 보유</li>
            </ul>
            <img src={latelier} alt="latelier" width="100%" />
          </Item>
        </ItemBox>
      </ContextBox>
    </Container>
  );
}

export default Contents;
