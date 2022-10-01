import React from "react";
import { useRouter } from "next/router";
import {
  TokenMoveFrame,
  TokenMoveIcon,
  TokenMoveFrameBorder,
} from "./TokenMove.style";

const TokenMove = (props) => {
  const router = useRouter();
  return (
    <TokenMoveFrame>
      <TokenMoveFrameBorder>
        <TokenMoveIcon src={props.moveIcon} alt="" draggable={false} />
      </TokenMoveFrameBorder>
    </TokenMoveFrame>
  );
};
export default TokenMove;
