import styled from "styled-components";

export const ConfirmTransactionFrame = styled.div`
  border-radius: 14px;
  padding: 30px 27px 0 27px;
  background-color: #000000;
`;
export const ConfirmTransactionFrameHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ConfirmTransactionClose = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const ConfirmTransactionMain = styled.div`
  border-radius: 14px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px 0 150px 0;
  background: linear-gradient(
    90deg,
    #ffffff 20%,
    #e7b9ff 30%,
    #ef40ff 70%,
    #9d1db5 100%
  );
`;
export const ConfirmTransactionMainBorder = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #191520 5%, #0c0321 30%, #080119 100%);
  border-radius: 14px;
`;
export const ConfirmTransactionFrameTitle = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  margin: 22px 20px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ConfirmTransactionFrameContent = styled.div`
  width: 596px;
  background: linear-gradient(
    90deg,
    #ffffff 20%,
    #e7b9ff 30%,
    #ef40ff 70%,
    #9d1db5 100%
  );
  border-radius: 14px;
  padding: 1px;
  margin: 0 auto 30px auto;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ConfirmTransactionFrameContentBorder = styled.div`
  width: 596px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #2c243e 5%, #19093d 30%, #110232 100%);
  @media screen and (max-width: 950px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const WaitIcon = styled.img`
  margin-top: 26px;
`;
export const SwapDetailWait = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  margin-top: 50px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 28px;
  }
`;
export const SwapDetailConfirm = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 15px 0 20px 0;
  color: #969696;
`;
