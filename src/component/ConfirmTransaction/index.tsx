import React from "react";
import { useRouter } from "next/router";
import {
  ConfirmTransactionFrame,
  ConfirmTransactionFrameHeader,
  ConfirmTransactionClose,
  ConfirmTransactionMain,
  ConfirmTransactionMainBorder,
  ConfirmTransactionFrameTitle,
  ConfirmTransactionFrameContent,
  ConfirmTransactionFrameContentBorder,
  WaitIcon,
  SwapDetailWait,
  SwapDetailConfirm,
} from "./ConfirmTransaction.style";

const ConfirmTransaction = (props) => {
  const router = useRouter();
  return (
    <ConfirmTransactionFrame>
      <ConfirmTransactionFrameHeader>
        <ConfirmTransactionClose
          src="img/close.png"
          alt=""
          draggable={false}
          onClick={() => props.setShowWait(false)}
        ></ConfirmTransactionClose>
      </ConfirmTransactionFrameHeader>
      <ConfirmTransactionMain>
        <ConfirmTransactionMainBorder>
          <ConfirmTransactionFrameTitle>
            Confirm Transaction
          </ConfirmTransactionFrameTitle>
          <ConfirmTransactionFrameContent>
            <ConfirmTransactionFrameContentBorder>
              <WaitIcon src="img/Wait.svg" alt="" draggable={false}></WaitIcon>
              <SwapDetailWait>Removing 0.1 ETH + 170 USDT</SwapDetailWait>
              <SwapDetailConfirm>
                Please confirm this transaction
                <br /> in your MetaMask wallet.
              </SwapDetailConfirm>
            </ConfirmTransactionFrameContentBorder>
          </ConfirmTransactionFrameContent>
        </ConfirmTransactionMainBorder>
      </ConfirmTransactionMain>
    </ConfirmTransactionFrame>
  );
};
export default ConfirmTransaction;
