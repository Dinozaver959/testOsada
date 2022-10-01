import React from "react";
import { useRouter } from "next/router";
import {
  ApproveTokenFrame,
  ApproveTokenFrameBorder,
} from "./ApproveToken.style";

const ApproveToken = (props) => {
  const router = useRouter();
  return (
    <ApproveTokenFrame
      style={{ marginLeft: "25px", marginRight: "25px" }}
      onClick={() => props.setApproveToken(true)}
    >
      <ApproveTokenFrameBorder>{props.tokenName}</ApproveTokenFrameBorder>
    </ApproveTokenFrame>
  );
};
export default ApproveToken;
