import React from "react";
import { useRouter } from "next/router";
import {
  HeaderPart,
  HeaderLogoImg,
  HeaderTools,
  HeaderText,
  HeaderConnectWallet,
  HeaderLearnMore,
  HeaderButtons,
} from "./Header.style";

const HeaderContainer = () => {
  const router = useRouter();
  return (
    <HeaderPart>
      <HeaderLogoImg
        src="favicon.png"
        alt=""
        draggable={false}
        onClick={() => router.push("/")}
      />
      <HeaderTools>
        <HeaderText>Bridge to Synapse 🔗</HeaderText>
        <HeaderButtons>
          <HeaderConnectWallet>Connect Wallet</HeaderConnectWallet>
          <HeaderLearnMore>• • •</HeaderLearnMore>
        </HeaderButtons>
      </HeaderTools>
    </HeaderPart>
  );
};
export default HeaderContainer;
