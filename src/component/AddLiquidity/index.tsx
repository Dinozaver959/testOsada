import React, { useState } from "react";
import { useRouter } from "next/router";
import TokenValue from "component/TokenValue";
import TokenMove from "component/TokenMove";
import TokensExchangePrice from "component/TokensExchangePrice";

import {
  CreatePairFrame,
  CreatePairFrameHeader,
  CreatePairFrameHeaderBackIcon,
  CreatePairFrameHeaderTitle,
  CreatePairFrameHeaderSetting,
  CreatePairFrameHeaderSettingBorder,
  CreatePairFrameHeaderSettingImg,
  TokenExchangeValue,
  ConnectWallet,
  ConnectWalletBorder,
  ConfirmTransactionFrame,
  ConfirmTransactionFrameHeader,
  BackIcon,
  ConfirmTransactionFrameHeaderTitle,
  ConfirmTransactionFrameBorder,
  ReceiveToken,
  ReceiveTokenTitle,
  ReceiveTOkenDetail,
  TokenIcons,
  TokenIcon1,
  TokenIcon2,
  TokenAmount,
  TokenRealValue,
  TokenRealName,
  RateDetail,
  RateTitle,
  RateValue,
  RateBorder,
  DepositedDetail,
  DepositedName,
  DepositedValue,
  OutputText,
  ConfirmTransactionBtn,
  ConfirmTransactionBtnBorder,
} from "./AddLiquidity.style";

const CreatePair = () => {
  const router = useRouter();
  const [isShowTransaction, setConfirmTransaction] = useState(false);

  return (
    <CreatePairFrame>
      {!isShowTransaction ? (
        <div>
          <CreatePairFrameHeader>
            <CreatePairFrameHeaderBackIcon
              src="img/Back.svg"
              alt=""
              draggable={false}
            ></CreatePairFrameHeaderBackIcon>
            <CreatePairFrameHeaderTitle>
              Add liquidity
            </CreatePairFrameHeaderTitle>
            <CreatePairFrameHeaderSetting>
              <CreatePairFrameHeaderSettingBorder>
                <CreatePairFrameHeaderSettingImg
                  src="img/setting.png"
                  alt=""
                  draggable={false}
                />
              </CreatePairFrameHeaderSettingBorder>
            </CreatePairFrameHeaderSetting>
          </CreatePairFrameHeader>
          <TokenValue
            tokenIcon="img/TokenUSDT.png"
            tokenShortName="USDT"
            tokenLongName="Tether USD"
          />
          <TokenMove moveIcon="img/Plus.svg" />
          <TokenValue
            tokenIcon="img/TokenUSDC.png"
            tokenShortName="USDC"
            tokenLongName="USD Coin"
          />
          <TokenExchangeValue>
            <TokensExchangePrice
              tokenPrice="1700.4"
              tokensName="USDT per ETH"
            />
            <TokensExchangePrice
              tokenPrice="0.00006"
              tokensName="ETH per USDT"
            />
            <TokensExchangePrice tokenPrice="20%" tokensName="Share of Pool" />
          </TokenExchangeValue>
          <ConnectWallet
            style={{ marginBottom: "25px" }}
            onClick={() => setConfirmTransaction(true)}
          >
            <ConnectWalletBorder>Connect Wallet</ConnectWalletBorder>
          </ConnectWallet>
        </div>
      ) : (
        <ConfirmTransactionFrame>
          <ConfirmTransactionFrameHeader>
            <BackIcon src="img/Back.svg" alt="" draggable={false}></BackIcon>
            <ConfirmTransactionFrameHeaderTitle>
              Confirm transaction
            </ConfirmTransactionFrameHeaderTitle>
            <div></div>
          </ConfirmTransactionFrameHeader>
          <ConfirmTransactionFrameBorder></ConfirmTransactionFrameBorder>
          <ReceiveToken>
            <ReceiveTokenTitle>You will receive</ReceiveTokenTitle>
            <ReceiveTOkenDetail>
              <TokenIcons>
                <TokenIcon1
                  src="img/BigUSDTToken.svg"
                  alt=""
                  draggable={false}
                ></TokenIcon1>
                <TokenIcon2
                  src="img/BigUSDCToken.svg"
                  alt=""
                  draggable={false}
                ></TokenIcon2>
              </TokenIcons>
              <TokenAmount>
                <TokenRealValue>0.00000000000000007324</TokenRealValue>
                <TokenRealName>USDT + USDC Pool Tokens</TokenRealName>
              </TokenAmount>
            </ReceiveTOkenDetail>
          </ReceiveToken>
          <ConfirmTransactionFrameBorder></ConfirmTransactionFrameBorder>
          <RateDetail>
            <RateTitle>Rates</RateTitle>
            <RateValue>
              <div></div>
              <div>0.98 USDC = 0.99 USDT</div>
            </RateValue>
            <RateValue style={{ marginTop: "12px", marginBottom: "30px" }}>
              <div></div>
              <div>0.99 USDT = 0.98 USDC</div>
            </RateValue>
            <RateBorder></RateBorder>
            <DepositedDetail>
              <DepositedName>USDT Deposited</DepositedName>
              <DepositedValue>190 USDT</DepositedValue>
            </DepositedDetail>
            <DepositedDetail>
              <DepositedName>USDC Deposited</DepositedName>
              <DepositedValue>189.99 USDC</DepositedValue>
            </DepositedDetail>
            <DepositedDetail>
              <DepositedName>Share of Pool</DepositedName>
              <DepositedValue>20%</DepositedValue>
            </DepositedDetail>
          </RateDetail>
          <OutputText>
            The output is estimated. In case the price changed by 0.5% your
            transaction will be cancelled.
          </OutputText>
          <ConfirmTransactionBtn>
            <ConfirmTransactionBtnBorder>
              Confirm Transaction
            </ConfirmTransactionBtnBorder>
          </ConfirmTransactionBtn>
        </ConfirmTransactionFrame>
      )}
    </CreatePairFrame>
  );
};
export default CreatePair;
