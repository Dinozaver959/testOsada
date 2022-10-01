import styled from "styled-components";

export const TokenValueFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export const TokenValueFrameLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const TokenValueFrameLabelText = styled.div`
  margin: 0 40px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;
export const TokenValueFrameBox = styled.div`
  width: 608px;
  height: 98px;
  margin: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  background: linear-gradient(90deg, #c08ddb 10%, #bb72f0 60%, #8b5afd 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const TokenValueFrameBoxBorder = styled.div`
  width: 608px;
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #080216;
  border-radius: 9px;
`;
export const TokenBalance = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 15px;
`;
export const TokenName = styled.div`
  width: 201px;
  height: 68px;
  border-radius: 9px;
  margin: 15px;
  padding: 1px;
  background: linear-gradient(
    270deg,
    #22256c 0%,
    #281955 37%,
    #1c2055 64%,
    #311e59 100%
  );
`;
export const TokenNameBorder = styled.div`
  width: 201px;
  height: 68px;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(140deg, #1b122f 10%, #10022d 60%, #0d0127 80%);
`;
export const TokenIcon = styled.img`
  width: 40px;
  margin: 15px 7px;
`;
export const TokenDetailName = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TokenShortName = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const TokenLongName = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const TokenDropdown = styled.img`
  margin: 15px 7px;
  cursor: pointer;
`;
