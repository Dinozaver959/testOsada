import React, { useState } from "react";
import { useRouter } from "next/router";
import TokenValue from "component/TokenValue";
import TokenMove from "component/TokenMove";
import ApproveToken from "component/ApproveToken";
import CreatePairButton from "component/CreatePairButton";
import ConfirmTransaction from "component/ConfirmTransaction";

import {
  CreatePairFrame,
  CreatePairFrameHeader,
  CreatePairFrameHeaderBackIcon,
  CreatePairFrameHeaderTitle,
  CreatePairFrameHeaderSetting,
  CreatePairFrameHeaderSettingBorder,
  CreatePairFrameHeaderSettingImg,
  CreatePairFrameDescription,
  ApproveTokenSection,
} from "./CreatePair.style";

const CreatePair = (props) => {
  const router = useRouter();
  const [isApproveToken, setApproveToken] = useState(false);
  const [isApprovingToken, setApprovingToken] = useState(false);
  const [isShowWait, setShowWait] = useState(false);
  const setBackFrame = () => {
    props.setShowPairFrame(false);
    props.setShowCreatePair(false);
  };
  return (
    <CreatePairFrame>
      {!isShowWait ? (
        <div>
          <CreatePairFrameHeader>
            <CreatePairFrameHeaderBackIcon
              src="img/Back.svg"
              alt=""
              draggable={false}
              onClick={() => setBackFrame()}
            ></CreatePairFrameHeaderBackIcon>
            <CreatePairFrameHeaderTitle>
              Create a pair
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
          <CreatePairFrameDescription>
            The ratio of token you add will set the price of this <br />
            pool.
          </CreatePairFrameDescription>
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
          {!isApproveToken ? (
            <ApproveTokenSection>
              <ApproveToken
                tokenName="Approve USDT"
                setApproveToken={setApproveToken}
              />
              <ApproveToken
                tokenName="Approve USDC"
                setApproveToken={setApproveToken}
              />
            </ApproveTokenSection>
          ) : !isApprovingToken ? (
            <ApproveTokenSection onClick={() => setApprovingToken(true)}>
              <ApproveToken
                tokenName="Approve USDT"
                setApproveToken={setApproveToken}
              />
            </ApproveTokenSection>
          ) : (
            <CreatePairButton
              buttonName="Approving USDT"
              setShowWait={setShowWait}
            />
          )}
          <div style={{ marginBottom: "40px" }}>
            <CreatePairButton
              buttonName="Create pair"
              setShowWait={setShowWait}
            />
          </div>
        </div>
      ) : (
        <ConfirmTransaction setShowWait={setShowWait} />
      )}
    </CreatePairFrame>
  );
};
export default CreatePair;
