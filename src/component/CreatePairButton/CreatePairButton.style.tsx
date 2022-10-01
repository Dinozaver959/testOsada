import styled from "styled-components";

export const CreatePairButtonFrame = styled.div`
  width: 606px;
  height: 91px;
  margin: 27px auto 0 auto;
  border-radius: 9px;
  cursor: pointer;
  background: linear-gradient(90deg, #848386 10%, #b8b3c5 40%);
  padding: 1px;
  :hover {
    background: linear-gradient(
      130deg,
      #9e84e7 10%,
      #908c9c 30%,
      #94012c 60%,
      #908c9c 90%,
      #9e84e7 100%
    );
  }
  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;
export const CreatePairButtonFrameBorder = styled.div`
  width: 606px;
  height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: linear-gradient(90deg, #0d1731 10%, #0b072e 40%, #1b062d 100%);
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  :hover {
    background: linear-gradient(
      100deg,
      #670f95 10%,
      #6e0265 20%,
      #480e6e 40%,
      #301575 60%,
      #191d7c 75%,
      #a02ccb 100%
    );
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
