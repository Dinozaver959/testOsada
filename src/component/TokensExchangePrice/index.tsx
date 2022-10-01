import React from "react";
import { useRouter } from "next/router";
import {
  TokensExchangePriceFrame,
  TokensExchangePriceFrameBorder,
  TokenPrice,
  TokenName,
} from "./TokensExchangePrice.style";

const TokensExchangePrice = (props) => {
  const router = useRouter();
  return (
    <TokensExchangePriceFrame>
      <TokensExchangePriceFrameBorder>
        <TokenPrice>{props.tokenPrice}</TokenPrice>
        <TokenName>{props.tokensName}</TokenName>
      </TokensExchangePriceFrameBorder>
    </TokensExchangePriceFrame>
  );
};
export default TokensExchangePrice;
