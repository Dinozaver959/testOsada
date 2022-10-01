import styled from "styled-components";

export const ToggleContainer = styled.div`
  background: rgb(181, 191, 245);
  background: linear-gradient(150deg, #dff9ff 10%, #d8a0ff 20%, #fed9f6 80%);
  border-radius: 9px;
  padding: 1px;
  margin-top: 30px;
`;

export const ToggleButtons = styled.div`
  display: flex;
  width: 380px;
  height: 53px;
  background: rgb(181, 191, 245);
  background: linear-gradient(150deg, #121536 10%, #020910 60%, #131435 80%);
  border-radius: 9px;
  @media screen and (max-width: 950px) {
    width: 330px;
    height: 45px;
  }
`;

export const UnSelectedState = styled.div`
  cursor: pointer;
  width: 190px;
  height: 53px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.3s;
  /* :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 0px 10px 10px rgba(255, 255, 255, 0.09);
  } */
  @media screen and (max-width: 950px) {
    width: 330px;
    height: 45px;
    font-size: 23px;
  }
`;

export const SelectedState = styled.div`
  width: 190px;
  height: 53px;
  background: linear-gradient(
    270.23deg,
    rgba(255, 77, 195, 0.7) 0.2%,
    rgba(123, 120, 255, 0.609) 99.81%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  border-right: 1px solid #dff9ff;
  border-left: 1px solid #dff9ff;
  @media screen and (max-width: 950px) {
    width: 330px;
    height: 45px;
    font-size: 23px;
  }
`;
