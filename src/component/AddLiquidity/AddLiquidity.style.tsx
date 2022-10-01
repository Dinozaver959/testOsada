import styled from "styled-components";

export const CreatePairFrame = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
`;
export const CreatePairFrameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 27px 35px 40px 35px;
`;
export const CreatePairFrameHeaderBackIcon = styled.img`
  cursor: pointer;
`;
export const CreatePairFrameHeaderTitle = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const ConnectWallet = styled.div`
  width: 100%;
  height: 91px;
  padding: 1px;
  border-radius: 9px;
  margin: 27px auto 0 auto;
  width: 608px;

  background: linear-gradient(
    290deg,
    #bbb7cf 0%,
    #ad6cd6 70%,
    #ffffff 85.71%,
    #bbb7cf 95%
  );
  @media screen and (max-width: 950px) {
    width: 540px;
  }
`;
export const ConnectWalletBorder = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    270deg,
    rgba(205, 25, 250, 0.8) 0%,
    rgba(120, 133, 255, 0.792) 23.96%,
    rgba(146, 79, 255, 0.8) 55%,
    #8d1fd5 85%
  );

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
`;
export const CreatePairFrameHeaderSetting = styled.div`
  width: 50px;
  height: 45.71px;
  cursor: pointer;
  background: linear-gradient(130deg, #c08ddb 20%, #bb72f0 30%, #6541c6 90%);
  padding: 1px;
  border-radius: 14px;
`;
export const CreatePairFrameHeaderSettingBorder = styled.div`
  background: linear-gradient(90deg, #110132 10%, #190c35 40%, #1b0f34 80%);
  border-radius: 14px;
  width: 50px;
  height: 45.71px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CreatePairFrameHeaderSettingImg = styled.img`
  width: 30px;
`;
export const TokenExchangeValue = styled.div`
  display: flex;
  justify-content: space-between;
  width: 612px;
  margin: 0 auto 0 auto;
  @media screen and (max-width: 950px) {
    width: 540px;
  }
`;
export const ConfirmTransactionFrame = styled.div`
  padding: 18px;
  position: relative;
`;
export const ConfirmTransactionFrameHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BackIcon = styled.img``;
export const ConfirmTransactionFrameHeaderTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
export const ConfirmTransactionFrameBorder = styled.div`
  background: linear-gradient(130deg, #f3ecf7 5%, #bb72f0 30%, #6541c6 90%);
  height: 1px;
  position: absolute;
  width: 692px;
  left: 0;
  margin-top: 18px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const ReceiveToken = styled.div`
  margin-top: 35px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const ReceiveTokenTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const ReceiveTOkenDetail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 950px) {
    margin-top: 10px;
  }
`;
export const TokenIcons = styled.div`
  display: flex;
`;
export const TokenIcon1 = styled.img`
  @media screen and (max-width: 950px) {
    width: 45px;
  }
`;
export const TokenIcon2 = styled.img`
  margin-left: -25px;
  @media screen and (max-width: 950px) {
    width: 45px;
  }
`;
export const TokenAmount = styled.div`
  margin-left: 5px;
`;
export const TokenRealValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;

  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 33px;
  }
`;
export const TokenRealName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 22px;
  }
`;
export const RateDetail = styled.div`
  width: 649px;
  height: 313px;
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 8px,
        transparent 8px
      )
      0% 0%/9px 9px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 8px, transparent 8px)
      100% 0%/9px 9px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 8px, transparent 8px)
      0% 100%/9px 9px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 8px, transparent 8px) 100%
      100%/9px 9px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 2px)
      calc(100% - 18px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 18px)
      calc(100% - 2px) no-repeat,
    linear-gradient(130deg, #626263 5%, #bb72f0 30%, #382470 90%);
  margin-top: 70px;
  border-radius: 9px;
  padding: 1px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const RateTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 28px 0 2px 18px;
`;
export const RateValue = styled.div`
  margin: 15px 20px 0 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 22px;
  }
`;
export const RateBorder = styled.div`
  border: 1px solid rgba(158, 158, 158, 0.5);
`;
export const DepositedDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 20px 18px;
`;
export const DepositedName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const DepositedValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ffffff;
`;
export const OutputText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 43px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 20px;
  }
`;
export const ConfirmTransactionBtn = styled.div`
  cursor: pointer;
  width: 607px;
  height: 91px;
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 8px,
        transparent 8px
      )
      0% 0%/9px 9px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 8px, transparent 8px)
      100% 0%/9px 9px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 8px, transparent 8px)
      0% 100%/9px 9px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 8px, transparent 8px) 100%
      100%/9px 9px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 2px)
      calc(100% - 18px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 18px)
      calc(100% - 2px) no-repeat,
    linear-gradient(
      340deg,
      #ffffff 3%,
      #f57def 5%,
      #ff001f 40%,
      #ff007a 50%,
      #f57def 100%
    );
  border-radius: 9px;
  padding: 1px;
  margin: 35px auto 0 auto;
  margin-bottom: 25px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const ConfirmTransactionBtnBorder = styled.div`
  background: linear-gradient(90deg, #15121c 10%, #120d1d 40%, #0a021c 80%);
  width: 607px;
  height: 91px;
  border-radius: 9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  :hover {
    background: linear-gradient(95deg, #1aa1c3 10%, #0c28b5 60%, #9b2dd2 100%);
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
