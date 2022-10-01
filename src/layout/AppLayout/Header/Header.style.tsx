import styled from "styled-components";

export const HeaderPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
  z-index: -1;
  @media screen and (max-width: 720px) {
    align-items: center;
  }
`;
export const HeaderLogoImg = styled.img`
  margin-left: 80px;
  cursor: pointer;
  @media screen and (max-width: 950px) {
    width: 130px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 40px;
  }
`;
export const HeaderTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
  margin-top: 15px;
  @media screen and (max-width: 800px) {
    margin-right: 40px;
  }
  @media screen and (max-width: 720px) {
    display: block;
    margin-top: -15px;
  }
`;
export const HeaderButtons = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    margin-top: 7px;
  }
`;
export const HeaderText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #ffffff;
  @media screen and (max-width: 950px) {
    font-size: 22px;
  }
  @media screen and (max-width: 720px) {
    text-align: right;
    margin-bottom: 7px;
  }
`;
export const HeaderConnectWallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 202px;
  height: 54px;
  margin: 0 20px 0 30px;
  cursor: pointer;
  background: linear-gradient(
    260.55deg,
    rgba(123, 77, 255, 0.3) 9.48%,
    rgba(60, 67, 248, 0.3) 32%,
    rgba(86, 93, 255, 0.3) 56.48%,
    rgba(94, 78, 194, 0.3) 83.56%,
    rgba(183, 148, 255, 0.3) 109.48%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  //Gradient Borders
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 8px,
        transparent 8px
      )
      0% 0%/10px 10px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 8px, transparent 8px)
      100% 0%/10px 10px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 8px, transparent 8px)
      0% 100%/10px 10px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 8px, transparent 8px) 100%
      100%/10px 10px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 4px)
      calc(100% - 20px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 20px)
      calc(100% - 4px) no-repeat,
    linear-gradient(
      307deg,
      #430ae8 0%,
      #c354fe 86%,
      #ffffff 100%,
      #e2abff 100%,
      #de9fff 100%
    );
  border-radius: 9px;

  @media screen and (max-width: 950px) {
    width: 170px;
    height: 45px;
    font-size: 20px;
  }
`;
export const HeaderLearnMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 62px;
  height: 54px;
  cursor: pointer;
  background: linear-gradient(
    260.55deg,
    rgba(20, 7, 55, 0.1) 0%,
    rgba(18, 25, 183, 0.1) 22.52%,
    rgba(0, 5, 130, 0.1) 47%,
    rgba(94, 78, 194, 0.1) 74.08%,
    rgba(183, 148, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //Gradient Borders
  background: radial-gradient(
        circle at 100% 100%,
        #000000 0,
        #000000 8px,
        transparent 8px
      )
      0% 0%/10px 10px no-repeat,
    radial-gradient(circle at 0 100%, #000000 0, #000000 8px, transparent 8px)
      100% 0%/10px 10px no-repeat,
    radial-gradient(circle at 100% 0, #000000 0, #000000 8px, transparent 8px)
      0% 100%/10px 10px no-repeat,
    radial-gradient(circle at 0 0, #000000 0, #000000 8px, transparent 8px) 100%
      100%/10px 10px no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 4px)
      calc(100% - 20px) no-repeat,
    linear-gradient(#000000, #000000) 50% 50% / calc(100% - 20px)
      calc(100% - 4px) no-repeat,
    linear-gradient(307deg, #ffffff 0%, #dbceff 43%, #d78aff 95%);
  border-radius: 9px;

  @media screen and (max-width: 950px) {
    width: 50px;
    height: 45px;
    font-size: 15px;
  }
`;
