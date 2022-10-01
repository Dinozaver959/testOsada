import styled from "styled-components";

export const PoolFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
`;

export const PoolFrameSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const PoolAddSectionGradient = styled.div`
  width: 90%;
  height: 800px;
  margin-top: 50px;
  border-radius: 14px; /*1*/
  border: 1px solid transparent; /*2*/
  background: linear-gradient(45deg, #e2abff, #c56cf5, #430ae8) border-box; /*3*/
  -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; /*5'*/
  mask-composite: exclude; /*5*/
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
export const PoolAddSection = styled.div`
  width: 90%;
  height: 700px;
  margin-top: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const PoolAddButtons = styled.div`
  display: flex;
  justify-content: center;
`;
export const PoolButton = styled.div`
  width: 245px;
  height: 62px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
        circle at 100% 100%,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0) 13px,
        transparent 13px
      )
      0% 0%/14px 14px no-repeat,
    radial-gradient(
        circle at 0 100%,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0) 13px,
        transparent 13px
      )
      100% 0%/14px 14px no-repeat,
    radial-gradient(
        circle at 100% 0,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0) 13px,
        transparent 13px
      )
      0% 100%/14px 14px no-repeat,
    radial-gradient(
        circle at 0 0,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0) 13px,
        transparent 13px
      )
      100% 100%/14px 14px no-repeat,
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)) 50% 50% /
      calc(100% - 2px) calc(100% - 28px) no-repeat,
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)) 50% 50% /
      calc(100% - 28px) calc(100% - 2px) no-repeat,
    linear-gradient(
      90deg,
      rgba(180, 56, 139, 0.7) 0.2%,
      rgba(123, 120, 255, 0.609) 99.81%
    );
  border-radius: 14px;
  border: 1px solid #f4eff5d3;
  margin: 0 17px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(0, 0, 0, 0.322);
  }
  @media screen and (max-width: 950px) {
    width: 180px;
    height: 50px;
    font-size: 25px;
  }
`;
export const WalletConnectNotice = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #9e9e9e;
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
`;
export const PoolImport = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #ffffff;
  justify-content: center;
  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
`;
export const ExitPoolItem = styled.div`
  width: 988px;
  height: 615px;
  border: 1px solid #684da0ed;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  border-radius: 14px;
  margin: 40px 0;
  background-image: linear-gradient(
    160deg,
    rgba(88, 41, 189, 0.548) 1.28%,
    rgba(84, 4, 255, 0.178) 54.39%
  );
  @media screen and (max-width: 1200px) {
    width: 800px;
  }
  @media screen and (max-width: 950px) {
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    width: 600px;
  }
  @media screen and (max-width: 700px) {
    width: 530px;
  }
`;

export const LiquidityItem = styled.div`
  width: 720px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9e82d8eb;
  padding: 15px;
  border-radius: 14px;
  margin: 10px 0 0 0;
  background-image: linear-gradient(
    160deg,
    rgba(88, 41, 189, 0.548) 1.28%,
    rgba(84, 4, 255, 0.178) 54.39%
  );
  @media screen and (max-width: 1200px) {
    width: 650px;
  }
  @media screen and (max-width: 950px) {
    width: 570px;
  }
  @media screen and (max-width: 800px) {
    width: 450px;
  }
`;
export const LiquidityIcons = styled.div`
  display: flex;
`;
export const IconFrom = styled.img`
  width: 80px;
  @media screen and (max-width: 1200px) {
    width: 70px;
  }
`;
export const IconTo = styled.img`
  width: 80px;
  margin-left: -40px;
  @media screen and (max-width: 1200px) {
    width: 70px;
  }
`;
export const LiquidityTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
`;
export const DropBoxIcon = styled.img`
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 35px;
  }
`;
export const LiquidityDetail = styled.div`
  width: 750px;
  margin-top: -15px;
  border: 1px solid #9e82d8eb;
  border-top: none;
  padding: 30px 0 0 0;
  color: white;
  @media screen and (max-width: 1200px) {
    width: 680px;
  }
  @media screen and (max-width: 950px) {
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 480px;
  }
`;
export const FromDetail = styled.div`
  display: flex;
`;
export const IconFromDetail = styled.img`
  margin-left: 15px;
  @media screen and (max-width: 1200px) {
    width: 40px;
  }
`;
export const TitleFromDetail = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
`;

export const ToDetail = styled.div`
  display: flex;
  margin-top: 15px;
`;
export const IconToDetail = styled.img`
  margin-left: 15px;
  @media screen and (max-width: 1200px) {
    width: 40px;
  }
`;
export const TitleToDetail = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
`;
export const LiquidityDetailBorder = styled.div`
  width: 100%;
  left: 0;
  background: linear-gradient(
    270deg,
    rgb(162, 0, 255) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  height: 1px;
  margin-top: 20px;
`;
export const LiquidityDetailButtons = styled.div`
  display: flex;
  height: 100px;
  margin: 0 15px;
  justify-content: space-between;
`;
export const PoolShare = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #979797;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;
export const LiquidityDetailButtonsArea = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
export const RemoveLiquidity = styled.div`
  width: 186px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(215, 56, 255, 0.1) 0%,
    rgba(9, 34, 255, 0.079) 35.57%,
    rgba(27, 228, 255, 0.089) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  border: 1px solid grey;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  cursor: pointer;
  color: #a8a8a8;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(78, 78, 78, 0.25),
      inset 0px 10px 10px rgba(99, 99, 99, 0.322);
  }
  @media screen and (max-width: 1200px) {
    width: 170px;
    height: 45px;
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    width: 140px;
    height: 35px;
    font-size: 15px;
  }
`;
export const AddLiquidity = styled.div`
  width: 186px;
  height: 51px;
  background: rgb(181, 191, 245);
  background: linear-gradient(
    150deg,
    rgba(181, 191, 245, 1) 12%,
    rgba(172, 143, 253, 1) 26%,
    rgba(255, 0, 31, 1) 48%,
    rgba(255, 0, 122, 1) 66%,
    rgba(235, 227, 255, 1) 99%
  );
  border-radius: 9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  padding: 1px;
  color: #ffffff;
  margin-left: 15px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    text-align: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      #661c79 5%,
      rgba(29, 43, 161, 1) 25%,
      rgba(29, 43, 161, 1) 75%,
      #324ece 95%
    );
  }
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(0, 0, 0, 0.322);
  }
  @media screen and (max-width: 1200px) {
    width: 170px;
    height: 45px;
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    width: 140px;
    height: 35px;
    font-size: 15px;
    margin-left: 0;
    margin-top: 6px;
  }
`;
export const PercentToRemove = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  padding: 1px;
  margin: 50px 0 30px 0;
`;
export const PercentToRemoveBorder = styled.div`
  width: 691px;
  background: linear-gradient(90deg, #15121c 10%, #120d1d 40%, #0a021c 80%);
  border-radius: 14px;
  @media screen and (max-width: 950px) {
    width: 600px;
  }
`;
export const PercentToRemoveTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 25px;
`;
export const EnterPercentBtn = styled.div`
  width: 132px;
  height: 58px;
  cursor: pointer;
  padding: 1px;
  border-radius: 14px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.5);
  background: linear-gradient(90deg, #daa1f9 5%, #a668f8 50%, #8054fe 70%);
  @media screen and (max-width: 950px) {
    width: 110px;
  }
`;
export const EnterPercentBtnBorder = styled.div`
  width: 132px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    #2c295c 20%,
    #1f215b 40%,
    #1a1c5a 60%,
    #1f215b 80%,
    #2c295c 100%
  );
  @media screen and (max-width: 950px) {
    width: 110px;
  }
`;

export const SamePercentWhiteBtn = styled.div`
  width: 132px;
  height: 58px;
  cursor: pointer;
  padding: 1px;
  border-radius: 14px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: white;
  margin-left: 25px;
  background: linear-gradient(90deg, #daa1f9 5%, #a668f8 50%, #8054fe 70%);
  @media screen and (max-width: 950px) {
    width: 110px;
  }
`;
export const SamePercentWhiteBtnBorder = styled.div`
  width: 132px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    #2c295c 10%,
    #1f215b 20%,
    #1a1c5a 50%,
    #1f215b 80%,
    #2c295c 100%
  );
  @media screen and (max-width: 950px) {
    width: 110px;
  }
`;
export const SamePercentActiveBtnBorder = styled.div`
  width: 132px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(100deg, #765997 3%, #801752 55%, #731889 90%);
  @media screen and (max-width: 950px) {
    width: 110px;
  }
`;
export const PercentButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 25px auto;
  width: 100%;
  @media screen and (max-width: 950px) {
    width: 80%;
  }
`;
export const MediumBorder = styled.div`
  border: 2px solid white;
  margin-bottom: 25px;
  @media screen and (max-width: 950px) {
    border: 1px solid white;
  }
`;
export const TokenReceive = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;
export const ReceiveDetail = styled.div`
  width: 607px;
  height: 130px;
  padding: 1px;
  border-radius: 9px;
  background: linear-gradient(20deg, #7c7b8b 10%, #5a5d98 40%, #523c99 80%);
  margin: 25px auto 35px auto;
  @media screen and (max-width: 950px) {
    width: 550px;
    height: 120px;
  }
`;
export const ReceiveDetailBorder = styled.div`
  width: 607px;
  height: 130px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #2a2451 5%, #211d4f 50%, #291e51 70%);
  @media screen and (max-width: 950px) {
    width: 550px;
    height: 120px;
  }
`;
export const ReceiveToken = styled.div``;
export const ReceiveToken1 = styled.img``;
export const ReceiveToken2 = styled.img`
  margin-left: -15px;
`;
export const ReceiveDetailAmount = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  margin-left: 38px;
  color: #ffffff;
`;
export const ApproveToken = styled.div`
  width: 607px;
  display: flex;
  justify-content: space-between;
  margin: 35px auto 35px auto;
  @media screen and (max-width: 950px) {
    width: 550px;
  }
`;
export const ApproveTokenName = styled.div`
  /* width: 278px; */
  width: 100%;
  height: 91px;
  padding: 1px;
  border-radius: 9px;
  background: linear-gradient(
    290deg,
    #bbb7cf 0%,
    #ad6cd6 70%,
    #ffffff 85.71%,
    #bbb7cf 95%
  );
`;
export const ApproveTokenNameBorder = styled.div`
  /* width: 278px; */
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
export const ApprovingTokenName = styled.div`
  width: 100%;
  height: 91px;
  padding: 1px;
  border-radius: 9px;
  background: linear-gradient(90deg, #878885 0%, #9c9ca1 70%, #bcb7cd 85.71%);
`;
export const ApprovingTokenNameBorder = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    95deg,
    #182844 0%,
    #111a43 23.96%,
    #101443 55%,
    #1e1345 85%
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
export const ConfirmTransaction = styled.div`
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
  margin: 0 auto 0 auto;
  margin-bottom: 45px;
  @media screen and (max-width: 950px) {
    width: 550px;
  }
`;
export const ConfirmTransactionBorder = styled.div`
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
    width: 550px;
  }
`;

export const ConfirmTransactionContainer = styled.div`
  width: 636px;
  padding: 25px;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: flex-end;
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
    width: 550px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const CreatePairFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  padding: 1px;
  margin: 50px 0 0 0;
`;
export const CreatePairFrameBorder = styled.div`
  width: 691px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg, #15121c 10%, #120d1d 40%, #0a021c 80%);
  border-radius: 14px;
  @media screen and (max-width: 950px) {
    width: 600px;
  }
`;
export const CreatePairFrameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 27px 35px 40px 35px;
`;
export const CreatePairBackIcon = styled.img`
  cursor: pointer;
`;
export const CreatePariTitle = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const ConfirmTransactionFrame = styled.div`
  width: 100%;
  margin: 120px 0 120px 0;
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
export const ConfirmTransactionClose = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const SwapFrameHeaderSetting = styled.div`
  width: 50px;
  height: 45.71px;
  cursor: pointer;
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
export const CreatePairFrameDescription = styled.div`
  width: 652px;
  height: 110px;
  padding: 1px;
  border: 0.5px solid #ffffff;
  border-radius: 14px;
  background: linear-gradient(165deg, #262035 10%, #160734 40%, #10012f 80%);
  margin: 0 auto 0 auto;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 950px) {
    width: 90%;
    font-size: 20px;
  }
`;

export const SwapFrameToken = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
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
  justify-content: flex-end;
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const BuyTokenAreaText = styled.div`
  display: flex;
  justify-content: flex-end;
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
export const ArrowImg = styled.img`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PoolConnectWallet = styled.div`
  margin: 50px auto 45px auto;
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
  }
`;
