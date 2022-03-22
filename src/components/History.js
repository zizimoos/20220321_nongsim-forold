import React from "react";
import styled from "styled-components";
import latelier from "../assets/latelier.png";
import zoom from "../assets/zoom.jpg";
import bible from "../assets/bible.jpg";
import oldProject from "../assets/oldProject.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
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
  width: 90%;
  height: 100%;
  margin-bottom: 200px;
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
const Item1 = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${oldProject});
  background-size: cover;
  border: solid 2px lightgray;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;
const Item2 = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${zoom});
  background-size: cover;
  border: solid 2px lightgray;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;
const Item3 = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${latelier});
  background-size: cover;
  border: solid 2px lightgray;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;
const Item4 = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 100px;
  background-color: gray;
  background-image: url(${bible});
  background-size: cover;
  border: solid 2px lightgray;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;
const Bar = styled.div`
  width: 90%;
  height: 3px;
  margin-top: -200px;
  background-color: gray;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Spot1 = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  top: -3px;
  left: 80px;
  border-radius: 5px;
  border: solid 1px white;
  background-color: red;
  z-index: 2;
`;
const Spot2 = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  top: -12px;
  left: 400px;
  border-radius: 5px;
  border: solid 1px white;
  background-color: red;
  z-index: 1;
`;
const Spot3 = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  top: -22px;
  left: 720px;
  border-radius: 5px;
  border: solid 1px white;
  background-color: red;
  z-index: 1;
`;
const VerticalBar = styled.div`
  width: 2px;
  height: 40px;
  position: relative;
  top: 8px;
  left: 3px;
  background-color: gray;
`;
const HistoryDescriptionBox = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const HistoryDescriptionItem = styled.div`
  width: 250px;
  height: 300px;
  margin-bottom: 50px;
`;
const HistoryDescriptionItemUl = styled.ul``;
const HistoryDescriptionItemLi = styled.li`
  padding: 3px;
`;

function History(props) {
  return (
    <Container>
      <Title>History</Title>
      <Description>
        1994년 IT기업으로서 시작하여 IT 기술력과 멀티미디어 사업 역량을 갖춘
        회사로 성장하여 왔으며 메타버스 사업을 본격적으로 추진하고 있습니다.
      </Description>
      <ContextBox>
        <ItemBox>
          <Item1></Item1>
          <Item2></Item2>
          <Item3></Item3>
          <Item4></Item4>
        </ItemBox>
        <Bar>
          <Spot1>
            <VerticalBar></VerticalBar>
          </Spot1>
          <Spot2>
            <VerticalBar></VerticalBar>
          </Spot2>
          <Spot3>
            <VerticalBar></VerticalBar>
          </Spot3>
        </Bar>
        <HistoryDescriptionBox>
          <HistoryDescriptionItem>
            <HistoryDescriptionItemUl>
              <HistoryDescriptionItemLi>
                1994 : 법인 설립
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                1995 : 한국전자통신연구원 [한국어 음성합성 기술]
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                1996 : 대한상공회의소 인트라넷 구축
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                1997 : 한국전자통신 연구원 [3차원을 이용한 가상대학]
              </HistoryDescriptionItemLi>
            </HistoryDescriptionItemUl>
          </HistoryDescriptionItem>
          <HistoryDescriptionItem>
            <ul>
              <HistoryDescriptionItemLi>
                2001 : 미국 CES 참가 [세계최초 CHARACTOLOGY 서비스]
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2002 : 멀티미디어 사업부 신설
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2003 : 'X-File 안중근 전 (울산전쟁기념관)
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2004 : 최초 만화일간지(데일리줌) 창간
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2008 : 살아있는 미술관 (잠실종합운동장)
              </HistoryDescriptionItemLi>
            </ul>
          </HistoryDescriptionItem>
          <HistoryDescriptionItem>
            <ul>
              <HistoryDescriptionItemLi>
                2017 : 라뜰리에(L'ATELIER)전시회 총괄 기획
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2019 : 라뜰리에 베이징 (L'ATELIER BEIJING WF CENTRAL)
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2020 : 중국 중한 산업원 MOU (인터렉티브 스포츠 파크)
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2021 : 메타버스 사업 법인 설립 주)메타스텝
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2022 : 메타스텝 더 바이블 프로젝트
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2022 : 메타스텝 가상오피스 플랫폼 구축
              </HistoryDescriptionItemLi>
            </ul>
          </HistoryDescriptionItem>
        </HistoryDescriptionBox>
      </ContextBox>
    </Container>
  );
}

export default History;
