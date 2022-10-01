import styled from "styled-components";

export const WalletDialogFrame = styled.div`
  width: 663px;
  height: 280px;
  margin: 0 auto 0 auto;
  background: linear-gradient(90deg, #c08ddb 20%, #bb72f0 60%, #6541c6 90%);
  border-radius: 14px;
  padding: 1px;
  margin: 120px auto 400px auto;
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
  :hover {
    div {
      color: #ffc266;
    }
  }
`;
export const WalletMetamaskText = styled.div`
  width: 172px;
  height: 50px;
  font-family: "Inter";
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
