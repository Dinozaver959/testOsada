import React from "react";
import { useRouter } from "next/router";
import {
  TokenValueFrame,
  TokenValueFrameLabel,
  TokenValueFrameLabelText,
  TokenValueFrameBox,
  TokenValueFrameBoxBorder,
  TokenBalance,
  TokenName,
  TokenNameBorder,
  TokenIcon,
  TokenDetailName,
  TokenShortName,
  TokenLongName,
  TokenDropdown,
} from "./TokenValue.style";

const TokenValue = (props) => {
  const router = useRouter();
  return (
    <TokenValueFrame>
      <TokenValueFrameLabel>
        <TokenValueFrameLabelText>Balance: 999</TokenValueFrameLabelText>
      </TokenValueFrameLabel>
      <TokenValueFrameBox>
        <TokenValueFrameBoxBorder>
          <TokenBalance>0.00</TokenBalance>
          <TokenName>
            <TokenNameBorder>
              <TokenIcon src={props.tokenIcon} alt="" draggable={false} />
              <TokenDetailName>
                <TokenShortName>{props.tokenShortName}</TokenShortName>
                <TokenLongName>{props.tokenLongName}</TokenLongName>
              </TokenDetailName>
              <TokenDropdown
                src="img/SelectArrow.png"
                alt=""
                draggable={false}
              />
            </TokenNameBorder>
          </TokenName>
        </TokenValueFrameBoxBorder>
      </TokenValueFrameBox>
    </TokenValueFrame>
  );
};
export default TokenValue;
