import React from "react";
import styled from "styled-components";
import latelier from "../assets/latelier.png";
import zoom from "../assets/zoom.jpg";
import bible from "../assets/bible.jpg";
import oldProject from "../assets/oldProject.png";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
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
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 80vw;
    height: 100%;
    font-size: 20px;
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
  border: 2px solid LightSlateGray;
  background-color: gray;
  background-image: url(${oldProject});
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
  border: 2px solid LightSlateGray;
  background-color: gray;
  background-image: url(${zoom});
  background-size: cover;
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
  border: 2px solid LightSlateGray;
  background-image: url(${latelier});
  background-size: cover;
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
  border: 2px solid LightSlateGray;
  background-color: gray;
  background-image: url(${bible});
  background-size: cover;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    flex-direction: column;
  }
`;
const Bar = styled.div`
  width: 90%;
  height: 1px;
  margin-top: -150px;
  margin-bottom: 30px;
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
  width: 1px;
  height: 47px;
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
  padding-right: 20px;
  border: 2px dashed LightSlateGray;
  border-radius: 10px;
`;
const HistoryDescriptionItemUl = styled.ul``;
const HistoryDescriptionItemLi = styled.li`
  padding: 3px;
`;

function History(props) {
  return (
    <Container>
      <ContextBox>
        <Title>History</Title>
        <Description>
          1994??? IT??????????????? ???????????? IT ???????????? ??????????????? ?????? ????????? ??????
          ????????? ???????????? ????????? ???????????? ????????? ??????????????? ???????????? ????????????.
        </Description>
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
                1994 : ?????? ??????
              </HistoryDescriptionItemLi>
              <br></br>
              <div>?????? ??????</div>
              <br></br>
              <HistoryDescriptionItemLi>
                SYSTEM MANAGEMENT
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                SYSTEM INTEGRATON
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                NETWORK MANAGEMENT
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                WIRELESS DATA COMM
              </HistoryDescriptionItemLi>
            </HistoryDescriptionItemUl>
          </HistoryDescriptionItem>
          <HistoryDescriptionItem>
            <ul>
              <HistoryDescriptionItemLi>
                2001 : MULTI MEDIA ?????? ??????
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2001 : ?????? CES ?????? [???????????? CHARACTOLOGY ?????????]
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2002 : ??????????????? ????????? ??????
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                2004 : ?????? ???????????????(????????????) ??????
              </HistoryDescriptionItemLi>
            </ul>
          </HistoryDescriptionItem>
          <HistoryDescriptionItem>
            <ul>
              <HistoryDescriptionItemLi>
                2021 : ???????????? ?????? ??????
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>(???) ?????? M&A</HistoryDescriptionItemLi>
              <br></br>
              <div>?????? ??????</div>
              <br></br>
              <HistoryDescriptionItemLi>
                ???????????? ??? ????????? ????????????
              </HistoryDescriptionItemLi>
              <HistoryDescriptionItemLi>
                ???????????? ??????????????? ????????? ??????
              </HistoryDescriptionItemLi>
            </ul>
          </HistoryDescriptionItem>
        </HistoryDescriptionBox>
      </ContextBox>
    </Container>
  );
}

export default History;
