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
export const CreatePairFrameDescription = styled.div`
  width: 652px;
  height: 110px;
  border: 0.5px solid #ffffff;
  border-radius: 14px;
  background: linear-gradient(165deg, #262035 10%, #160734 40%, #10012f 80%);
  margin: 0 auto 0 auto;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 950px) {
    width: 90%;
    font-size: 20px;
  }
`;
export const ApproveTokenSection = styled.div`
  display: flex;
  width: 658px;
  margin: 27px auto 0 auto;
  @media screen and (max-width: 950px) {
    width: 590px;
  }
`;
