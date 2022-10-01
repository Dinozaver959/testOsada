import styled from "styled-components";

export const TokensExchangePriceFrame = styled.div`
  width: 198px;
  height: 95px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  background: linear-gradient(90deg, #c08ddb 10%, #bb72f0 60%, #8b5afd 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 170px;
  }
`;
export const TokensExchangePriceFrameBorder = styled.div`
  width: 198px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #080216;
  border-radius: 9px;
`;
export const TokenPrice = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 30px;
  }
`;
export const TokenName = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  @media screen and (max-width: 950px) {
    font-size: 18px;
  }
`;
