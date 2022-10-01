import styled from "styled-components";

export const JoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const SurpriseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  padding: 1px;
  margin: 50px 0 30px 0;
`;
export const SwapFrame = styled.div`
  width: 691px;
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #15121c 10%, #120d1d 40%, #0a021c 80%);
  border-radius: 14px;
  @media screen and (max-width: 950px) {
    width: 600px;
  }
`;
export const SwapFrameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const SwapFrameHeaderTitle = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 40px;
  color: #ffffff;
`;
export const SwapFrameHeaderSetting = styled.div`
  width: 50px;
  height: 45.71px;
  cursor: pointer;
  margin: 30px 40px;
  background: linear-gradient(130deg, #c08ddb 20%, #bb72f0 30%, #6541c6 90%);
  padding: 1px;
  border-radius: 14px;
`;
export const SwapFrameHeaderSettingBorder = styled.div`
  background: linear-gradient(90deg, #110132 10%, #190c35 40%, #1b0f34 80%);
  border-radius: 14px;
  width: 50px;
  height: 45.71px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SettingImg = styled.img`
  width: 30px;
`;

export const SwapFrameToken = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SellTokenArea = styled.div`
  @media screen and (max-width: 950px) {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const BuyTokenArea = styled.div`
  @media screen and (max-width: 950px) {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SellTokenAreaText = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const BuyTokenAreaText = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const SellTokenAreaTextDesc = styled.div`
  margin: 0 40px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: #9e9e9e;
  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;
export const BuyTokenAreaTextDesc = styled.div`
  margin: 0 40px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: #9e9e9e;
  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;
export const SellTokenAreaTextBalance = styled.div`
  margin: 0 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;
export const BuyTokenAreaTextBalance = styled.div`
  margin: 0 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    margin: 0;
  }
`;
export const SellTokenAreaValue = styled.div`
  width: 609px;
  height: 99px;
  margin: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    linear-gradient(90deg, #c08ddb 10%, #bb72f0 60%, #8b5afd 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const BuyTokenAreaValue = styled.div`
  width: 609px;
  height: 99px;
  margin: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    linear-gradient(90deg, #c08ddb 10%, #bb72f0 60%, #8b5afd 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const TokenSwitch = styled.div`
  cursor: pointer;
  width: 53px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  position: relative;
  border-radius: 20px;
  /* background-color: #311e49; */
  background: linear-gradient(265deg, #301d47 10%, #2b1442 40%, #26083b 80%);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 0.1rem; /* тут padding замість border-width */
    background: linear-gradient(120deg, #e1a1f0 0%, #8155ff 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      /* [1] */ linear-gradient(#fff 0 0); /* [2] */
    -webkit-mask-composite: xor; /* [3] для підтримки браузерів */
    mask-composite: exclude; /* [3] */
  }
`;
export const ArrowImg = styled.img`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwapStatistics = styled.div`
  width: 609px;
  height: 67px;
  margin: 20px 0 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    linear-gradient(90deg, #86828e 10%, #50418d 60%, #44248c 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SwapConnectWallet = styled.div`
  margin-bottom: 30px;
  width: 607px;
  height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: linear-gradient(
    270deg,
    rgba(215, 56, 255, 0.8) 0%,
    rgba(120, 133, 255, 0.792) 23.96%,
    rgba(146, 79, 255, 0.8) 67.71%,
    rgba(175, 27, 255, 0.8) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const TokenBalance = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 15px;
`;
export const TokenName = styled.div`
  width: 202px;
  height: 69px;
  background: radial-gradient(
        circle at 100% 100%,
        #18063b 0,
        #18063b 8px,
        transparent 8px
      )
      0% 0%/9px 9px no-repeat,
    radial-gradient(circle at 0 100%, #18063b 0, #18063b 8px, transparent 8px)
      100% 0%/9px 9px no-repeat,
    radial-gradient(circle at 100% 0, #18063b 0, #18063b 8px, transparent 8px)
      0% 100%/9px 9px no-repeat,
    radial-gradient(circle at 0 0, #18063b 0, #18063b 8px, transparent 8px) 100%
      100%/9px 9px no-repeat,
    linear-gradient(#18063b, #18063b) 50% 50% / calc(100% - 2px)
      calc(100% - 18px) no-repeat,
    linear-gradient(#18063b, #18063b) 50% 50% / calc(100% - 18px)
      calc(100% - 2px) no-repeat,
    linear-gradient(270deg, #22256c 0%, #281955 37%, #1c2055 64%, #311e59 100%);
  border-radius: 9px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TokenIcon = styled.img`
  width: 40px;
  margin: 15px 7px;
`;
export const TokenDetailName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Omission = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const Original = styled.div`
  font-family: "Inter";
  font-style: normal;
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
export const SwapDetail = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin: 15px;
  color: #ffffff;
`;
export const SwapDetailDropdown = styled.img`
  margin: 20px;
  cursor: pointer;
`;
export const SwapFrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WalletDialogFrame = styled.div`
  position: relative;
  width: 663px;
  height: 280px;
  margin: 95px 0 350px 0;
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  border-radius: 14px;
  padding: 1px;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const WalletDialogFrameBorder = styled.div`
  width: 663px;
  height: 280px;
  background: linear-gradient(90deg, #15121c 10%, #120d1d 40%, #0a021c 80%);
  border-radius: 14px;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const WalletDialogHeader = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WalletDialogHeaderText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const WalletDialogHeaderClose = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const WalletDialogButtons = styled.div`
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TransactionDialogButtons = styled.div`
  border-top: 1px solid #de9fff;
  height: 80%;
`;
export const WalletMetamask = styled.div`
  margin-top: 220px;
  background: linear-gradient(90deg, #ffd597 20%, #ffc266 60%, #ffa24b 90%);
  border-radius: 9px;
  padding: 1px;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const WalletMetamaskBorder = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 609px;
  border-radius: 9px;
  background: linear-gradient(150deg, #231a35 10%, #110230 60%, #0e012a 80%);
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
export const WalletMetamaskText = styled.div`
  width: 172px;
  height: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 25px 18px;
`;
export const WalletMetamaskIcon = styled.img`
  margin: 25px 18px;
`;
export const SwapNeedButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const SwapApprove = styled.div`
  margin: 40px 0 20px 0;
  width: 607px;
  height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: linear-gradient(
    270deg,
    rgba(215, 56, 255, 0.8) 0%,
    rgba(120, 133, 255, 0.792) 23.96%,
    rgba(146, 79, 255, 0.8) 67.71%,
    rgba(175, 27, 255, 0.8) 100%
  );
  border-radius: 9px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SwapToken = styled.div`
  cursor: pointer;
  width: 607px;
  height: 91px;
  margin-bottom: 30px;
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: linear-gradient(
      270deg,
      rgba(215, 56, 255, 0.8) 0%,
      rgba(9, 34, 255, 0.632) 35.57%,
      rgba(27, 228, 255, 0.712) 100%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
  }
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const SwapTokenArea = styled.div`
  width: 608px;
  height: 445px;
  padding: 1px;
  background: linear-gradient(100deg, #b49ee3 20%, #4a305f 50%, #4d1fb1 90%);
  margin-left: -30px;
  @media screen and (max-width: 950px) {
    width: 568px;
    /* position: absolute; */
  }
`;
export const SwapTokenAreaBorder = styled.div`
  width: 608px;
  height: 445px;
  /* background: rgb(16, 3, 41); */
  background: linear-gradient(130deg, #1e1433 20%, #170934 50%, #11022f 90%);
  @media screen and (max-width: 950px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SwapApproveSuccess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 404px;
  height: 139px;
  right: 190px;
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 13px,
        transparent 13px
      )
      0% 0%/14px 14px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 13px, transparent 13px)
      100% 0%/14px 14px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 13px, transparent 13px)
      0% 100%/14px 14px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 13px, transparent 13px)
      100% 100%/14px 14px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 2px)
      calc(100% - 28px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 28px)
      calc(100% - 2px) no-repeat,
    linear-gradient(
      146deg,
      #ffffff 0%,
      #d380ff 9%,
      #de9fff 18%,
      #e2abff 28%,
      #dfa3ff 38%,
      #8155ff 100%
    );
  border-radius: 14px;
  @media screen and (max-width: 1900px) {
    right: auto;
    left: auto;
  }
`;
export const SwapApproveHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const ApproveCheckIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;
export const ApproveToken = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 10px;
`;
export const SwapApproveLink = styled.div`
  margin: 10px 0 0 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #cf46ff;
`;
export const SwapTokenListBoard = styled.div`
  width: 550px;
  padding: 0 30px;
  height: 700px;
  background: #0a021b;
  border-radius: 20px 20px 0px 0px;
  margin: 30px 0 30px 0;

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
    linear-gradient(90deg, #b49ee3 60%, #4d1fb1 100%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 85%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SwapTokenListBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 0;
`;
export const SwapTokenListBoardHeaderTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const SwapTokenListBoardHeaderClose = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const SwapTokenListBorder = styled.div`
  border: 1px solid rgba(158, 158, 158, 0.5);
`;
export const TokenTransactionDetailBorder = styled.div`
  border: 1px solid rgba(158, 158, 158, 0.5);
  margin: 23px 17px;
`;
export const SwapTokenFindThing = styled.input`
  height: 81px;
  margin-top: 24px;
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  color: #8b8b8b;

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
    linear-gradient(175deg, #c892f1 15%, #703de0 45%, #5329af 95%);
  border-radius: 9px;
`;
export const SwapTokenListDetail = styled.div``;
export const SwapTokenListDetailHeader = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const SwapTokenListDetailHeaderName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
export const SwapTokenListDetailHeaderBalance = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
export const SwapTokenListDetailBorder = styled.div`
  background: linear-gradient(
    270deg,
    rgba(184, 0, 144, 0.712) 0%,
    rgba(236, 31, 243, 0.632) 35.57%,
    rgba(255, 255, 255, 0.8) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  height: 1px;
  margin: 10px -29px 0 -29px;
`;
export const SwapTokenValueList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  cursor: pointer;
`;
export const SwapTokenNameField = styled.div`
  display: flex;
`;
export const SwapTokenBalanceField = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export const SwapTokenNameFieldIcon = styled.img`
  width: 45px;
`;
export const SwapTokenNameFieldDetail = styled.div`
  margin-left: 13px;
`;
export const SwapTokenBigName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const SwapTokenExtensionName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #766c8b;
`;
export const SwapTokenValueListBorder = styled.div`
  background: linear-gradient(
    270deg,
    rgba(13, 1, 56, 0.712) 0%,
    #310d75 45%,
    rgba(232, 188, 250, 0.8) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 1px;
  margin-left: 30px;
`;
export const SwapFrameConfirmHeader = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 35px 0 37px 0;
  display: flex;
  justify-content: center;
`;
export const SwapConfirmTransaction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SwapConfirmTransactionDetail = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  width: 609px;
  height: 225px;
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
    linear-gradient(270deg, #7e40ff 14%, #a4a7ff 34%, #ffffff 54%, #ffffff 73%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SwapGetToken = styled.div``;
export const SwapTransactionFee = styled.div``;

export const TokenCalcConfirm = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #ffffff;
  margin: 0 17px 23px 17px;
`;
export const TokenExpectedOutput = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TokenExpectedOutputBalance = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const TokenTransactionDetail = styled.div`
  margin: 10px 17px;
`;
export const TokenExpectedOutputText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #9e9e9e;
`;

export const TokenGetResult = styled.div`
  font-family: "Inter";
  width: 609px;
  margin-top: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
    font-size: 21px;
  }
`;
export const SwapConfirmTransactionBtn = styled.div`
  background: linear-gradient(
    270deg,
    rgba(215, 56, 255, 0.8) 0%,
    rgba(9, 34, 255, 0.632) 35.57%,
    rgba(27, 228, 255, 0.712) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  width: 607px;
  height: 91px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  margin: 36px 0 26px 0;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SwapFee = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  margin-left: 3px;
  margin-top: 13px;

  color: rgba(66, 255, 0, 0.7);
`;
export const SwapTransactionSetting = styled.div`
  position: relative;
  width: 685px;
  height: 500px;
  margin: 2px 0 260px 0;
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 13px,
        transparent 13px
      )
      0% 0%/14px 14px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 13px, transparent 13px)
      100% 0%/14px 14px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 13px, transparent 13px)
      0% 100%/14px 14px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 13px, transparent 13px)
      100% 100%/14px 14px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 2px)
      calc(100% - 28px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 28px)
      calc(100% - 2px) no-repeat,
    linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);

  border-radius: 14px;
  @media screen and (max-width: 950px) {
    width: 91%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const SpillageTolerance = styled.div`
  margin: 28px 22px;
`;
export const SpillageToleranceTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const SpillageToleranceItems = styled.div`
  display: flex;
`;
export const EnterPercent = styled.div`
  width: 125px;
  height: 48.66px;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  background: linear-gradient(
    135deg,
    #918d99 5%,
    #716e9a 30%,
    #584d97 50%,
    #503598 70%,
    #4e2d9a 100%
  );
`;
export const EnterPercentBorder = styled.div`
  width: 125px;
  height: 48.66px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #272038 5%, #19093d 30%, #110232 100%);
`;
export const EnterMinutes = styled.div`
  width: 246px;
  height: 48.66px;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  background: linear-gradient(
    135deg,
    #918d99 5%,
    #716e9a 30%,
    #584d97 50%,
    #503598 70%,
    #4e2d9a 100%
  );
`;
export const EnterMinutesBorder = styled.div`
  border-radius: 10px;
  width: 246px;
  height: 48.66px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #272038 5%, #19093d 30%, #110232 100%);
`;
export const AnotherSame = styled.div`
  cursor: pointer;
  width: 103px;
  height: 48.66px;
  margin-top: 20px;
  margin-left: 15px;
  position: relative;
  background: #32176a;
  border-radius: 10px;
  padding: 1px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 0.05rem; /* тут padding замість border-width */
    background: linear-gradient(130deg, #fff 3%, #e2abff 10%, #430ec9 85%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      /* [1] */ linear-gradient(#fff 0 0); /* [2] */
    -webkit-mask-composite: xor; /* [3] для підтримки браузерів */
    mask-composite: exclude; /* [3] */
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const TitleQuestion = styled.img`
  margin-left: 6px;
  margin-top: 3px;
`;
export const TransactionDeadline = styled.div`
  margin: 52px 22px;
`;
export const ToggleExpertMode = styled.div`
  margin: 45px 22px;
  display: flex;
  justify-content: space-between;
`;
export const ConfirmTransactionClose = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const ConfirmTransactionContainer = styled.div`
  width: 636px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const ConfirmTransactionFrame = styled.div`
  width: 100%;
  margin: 150px 0 280px 0;
  border-radius: 14px;
  padding: 1px;
  background: linear-gradient(
    90deg,
    #ffffff 20%,
    #e7b9ff 30%,
    #ef40ff 70%,
    #9d1db5 100%
  );
`;
export const ConfirmTransactionFrameBorder = styled.div`
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(135deg, #2c243e 30%, #19093d 70%, #110232 100%); */
  /* background-color: #0f0522; */
  background: linear-gradient(135deg, #191520 5%, #0c0321 30%, #080119 100%);
`;
export const ConfirmTransactionFrameTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  margin: 22px 20px;

  color: #ffffff;
  width: 596px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const ConfirmTransactionFrameContent = styled.div`
  width: 596px;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    #ffffff 20%,
    #e7b9ff 30%,
    #ef40ff 70%,
    #9d1db5 100%
  );
  border-radius: 14px;
  padding: 1px;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const ConfirmTransactionFrameContentBorder = styled.div`
  width: 596px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 950px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  background: linear-gradient(135deg, #2c243e 5%, #19093d 30%, #110232 100%);
`;
export const WaitIcon = styled.img`
  margin-top: 26px;
`;
export const SwapDetailWait = styled.div`
  font-family: "Inter";
  font-style: normal;
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
  width: 463px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 15px 0 20px 0;
  color: #969696;
`;
