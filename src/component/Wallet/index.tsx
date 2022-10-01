import React from "react";
import { useRouter } from "next/router";
import {
  WalletDialogFrame,
  WalletDialogFrameBorder,
  WalletDialogHeader,
  WalletDialogHeaderText,
  WalletDialogHeaderClose,
  WalletDialogButtons,
  WalletMetamask,
  WalletMetamaskBorder,
  WalletMetamaskText,
  WalletMetamaskIcon,
} from "./Wallet.style";

const Wallet = (props) => {
  const router = useRouter();
  return (
    <WalletDialogFrame>
      <WalletDialogFrameBorder>
        <WalletDialogHeader>
          <WalletDialogHeaderText>Connect Wallet</WalletDialogHeaderText>
          <WalletDialogHeaderClose
            src="img/close.png"
            alt=""
            draggable={false}
            onClick={() => props.setShowWallet(false)}
          ></WalletDialogHeaderClose>
        </WalletDialogHeader>
        <WalletDialogButtons>
          <WalletMetamask onClick={() => props.setShowCreatePair(true)}>
            <WalletMetamaskBorder>
              <WalletMetamaskText>MetaMask</WalletMetamaskText>
              <WalletMetamaskIcon
                src="img/metamask.png"
                alt=""
                draggable={false}
              ></WalletMetamaskIcon>
            </WalletMetamaskBorder>
          </WalletMetamask>
        </WalletDialogButtons>
      </WalletDialogFrameBorder>
    </WalletDialogFrame>
  );
};
export default Wallet;
