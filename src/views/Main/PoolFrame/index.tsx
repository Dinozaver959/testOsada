import React, { useState } from "react";
import Wallet from "component/Wallet";
import CreatePair from "component/CreatePair";
import AddsLiquidity from "component/AddLiquidity";

import {
  PoolFrame,
  PoolFrameSection,
  PoolAddSectionGradient,
  PoolAddSection,
  PoolAddButtons,
  PoolButton,
  WalletConnectNotice,
  PoolImport,
  ExitPoolItem,
  LiquidityItem,
  LiquidityIcons,
  IconFrom,
  IconTo,
  LiquidityTitle,
  DropBoxIcon,
  LiquidityDetail,
  FromDetail,
  IconFromDetail,
  TitleFromDetail,
  ToDetail,
  IconToDetail,
  TitleToDetail,
  LiquidityDetailBorder,
  LiquidityDetailButtons,
  PoolShare,
  LiquidityDetailButtonsArea,
  RemoveLiquidity,
  AddLiquidity,
  PercentToRemove,
  PercentToRemoveBorder,
  PercentToRemoveTitle,
  EnterPercentBtn,
  EnterPercentBtnBorder,
  SamePercentWhiteBtn,
  SamePercentWhiteBtnBorder,
  PercentButtons,
  MediumBorder,
  TokenReceive,
  ReceiveDetail,
  ReceiveDetailBorder,
  ReceiveToken,
  ReceiveToken1,
  ReceiveToken2,
  ReceiveDetailAmount,
  ApproveToken,
  ApproveTokenName,
  ApproveTokenNameBorder,
  ConfirmTransaction,
  ConfirmTransactionBorder,
  ApprovingTokenName,
  ApprovingTokenNameBorder,
  SamePercentActiveBtnBorder,
  ConfirmTransactionContainer,
  ConfirmTransactionClose,
  ConfirmTransactionFrame,
  ConfirmTransactionFrameBorder,
  ConfirmTransactionFrameTitle,
  ConfirmTransactionFrameContent,
  ConfirmTransactionFrameContentBorder,
  WaitIcon,
  SwapDetailWait,
  SwapDetailConfirm,
  CreatePairFrame,
  CreatePairFrameBorder,
  CreatePairFrameHeader,
  CreatePairBackIcon,
  CreatePariTitle,
  SwapFrameHeaderSetting,
  SwapFrameHeaderSettingBorder,
  CreatePairFrameDescription,
  SettingImg,
  SwapFrameToken,
  SellTokenArea,
  BuyTokenArea,
  SellTokenAreaText,
  SellTokenAreaTextBalance,
  SellTokenAreaValue,
  TokenSwitch,
  ArrowImg,
  BuyTokenAreaText,
  BuyTokenAreaTextBalance,
  BuyTokenAreaValue,
  TokenBalance,
  TokenName,
  TokenIcon,
  TokenDetailName,
  Omission,
  Original,
  TokenDropdown,
  PoolConnectWallet,
} from "./PoolFrame.style";

const PoolFrameContainer = () => {
  const [isShowPool, setShowPool] = useState(false);
  const [isLiquidityDetail, setiquidityDetail] = useState(false);
  const [isPercentToRemove, setPercentToRemove] = useState(false);
  const [isSingleApprove, setSingleApprove] = useState(false);
  const [isApproveToken, setApproveToken] = useState(false);
  const [isApproveTokenMore, setApproveTokenMore] = useState(false);
  const [isConfirmTransactionWait, setConfirmTransactionWait] = useState(false);
  const [isShowPairFrame, setShowPairFrame] = useState(false);
  const [isShowWallet, setShowWallet] = useState(false);
  const [isShowCreatePair, setShowCreatePair] = useState(false);
  const [isLiquidityPage, showLiquidityPage] = useState(false);
  const showPoolItem = () => {
    setShowPool(true);
  };
  const addLiquidity = () => {
    setPercentToRemove(true);
  };
  const approveToken = () => {
    setSingleApprove(true);
    setApproveTokenMore(false);
  };
  const showPairItem = () => {
    setShowPairFrame(true);
  };
  return (
    <PoolFrame>
      {!isLiquidityPage ? (
        !isShowPairFrame ? (
          !isConfirmTransactionWait ? (
            !isPercentToRemove ? (
              <PoolFrameSection>
                <PoolAddSectionGradient></PoolAddSectionGradient>
                <PoolAddSection>
                  <PoolAddButtons>
                    <PoolButton onClick={() => showPoolItem()}>
                      Add liquidity
                    </PoolButton>
                    <PoolButton onClick={() => showPairItem()}>
                      Create a pair
                    </PoolButton>
                  </PoolAddButtons>
                  {!isShowPool ? (
                    <WalletConnectNotice>
                      Please connect your wallet to see/manage your pools
                    </WalletConnectNotice>
                  ) : (
                    <ExitPoolItem>
                      <LiquidityItem>
                        <LiquidityIcons>
                          <IconFrom
                            src="img/BigETHToken.svg"
                            alt=""
                            draggable={false}
                          ></IconFrom>
                          <IconTo
                            src="img/BigUSDTToken.svg"
                            alt=""
                            draggable={false}
                          ></IconTo>
                          <LiquidityTitle>ETH-USDT</LiquidityTitle>
                        </LiquidityIcons>
                        <DropBoxIcon
                          src="img/SelectArrow.svg"
                          alt=""
                          draggable={false}
                          onClick={() => setiquidityDetail(!isLiquidityDetail)}
                        ></DropBoxIcon>
                      </LiquidityItem>
                      {isLiquidityDetail ? (
                        <LiquidityDetail>
                          <FromDetail>
                            <IconFromDetail
                              src="img/BigETHToken.svg"
                              alt=""
                              draggable={false}
                            ></IconFromDetail>
                            <TitleFromDetail>0.005 ETH</TitleFromDetail>
                          </FromDetail>
                          <ToDetail>
                            <IconToDetail
                              src="img/BigUSDTToken.svg"
                              alt=""
                              draggable={false}
                            ></IconToDetail>
                            <TitleToDetail>2 USDT</TitleToDetail>
                          </ToDetail>
                          <LiquidityDetailBorder></LiquidityDetailBorder>
                          <LiquidityDetailButtons>
                            <PoolShare>Pool share : 100%</PoolShare>
                            <LiquidityDetailButtonsArea>
                              <RemoveLiquidity>
                                Remove liquidity
                              </RemoveLiquidity>
                              <AddLiquidity onClick={() => addLiquidity()}>
                                <span>Add liquidity</span>
                              </AddLiquidity>
                            </LiquidityDetailButtonsArea>
                          </LiquidityDetailButtons>
                        </LiquidityDetail>
                      ) : (
                        ""
                      )}
                    </ExitPoolItem>
                  )}
                  <PoolImport>
                    Can’t find your pool?
                    <label
                      style={{
                        color: "#3190FF",
                        marginLeft: "5px",
                        cursor: "pointer",
                      }}
                    >
                      import it.
                    </label>
                  </PoolImport>
                </PoolAddSection>
              </PoolFrameSection>
            ) : (
              <PercentToRemove>
                <PercentToRemoveBorder>
                  <PercentToRemoveTitle>Percent to remove</PercentToRemoveTitle>
                  <PercentButtons>
                    <EnterPercentBtn>
                      <EnterPercentBtnBorder>Enter %</EnterPercentBtnBorder>
                    </EnterPercentBtn>
                    {!isSingleApprove ? (
                      <SamePercentWhiteBtn onClick={() => approveToken()}>
                        <SamePercentWhiteBtnBorder>
                          25%
                        </SamePercentWhiteBtnBorder>
                      </SamePercentWhiteBtn>
                    ) : (
                      <SamePercentWhiteBtn>
                        <SamePercentActiveBtnBorder>
                          25%
                        </SamePercentActiveBtnBorder>
                      </SamePercentWhiteBtn>
                    )}
                    <SamePercentWhiteBtn
                      onClick={() => showLiquidityPage(true)}
                    >
                      <SamePercentWhiteBtnBorder>50%</SamePercentWhiteBtnBorder>
                    </SamePercentWhiteBtn>
                    <SamePercentWhiteBtn>
                      <SamePercentWhiteBtnBorder>
                        100%
                      </SamePercentWhiteBtnBorder>
                    </SamePercentWhiteBtn>
                  </PercentButtons>
                  <MediumBorder></MediumBorder>
                  <TokenReceive>You will receive :</TokenReceive>
                  <ReceiveDetail>
                    <ReceiveDetailBorder>
                      <ReceiveToken>
                        <ReceiveToken1
                          src="img/BigUSDTToken.svg"
                          alt=""
                          draggable={false}
                        ></ReceiveToken1>
                        <ReceiveToken2
                          src="img/BigUSDCToken.svg"
                          alt=""
                          draggable={false}
                        ></ReceiveToken2>
                      </ReceiveToken>
                      <ReceiveDetailAmount>
                        110 USDT + 110 USDC
                      </ReceiveDetailAmount>
                    </ReceiveDetailBorder>
                  </ReceiveDetail>
                  <ApproveToken>
                    {!isSingleApprove ? (
                      !isApproveToken ? (
                        <ApproveTokenName onClick={() => setApproveToken(true)}>
                          <ApproveTokenNameBorder>
                            Approve USDT
                          </ApproveTokenNameBorder>
                        </ApproveTokenName>
                      ) : (
                        <ApprovingTokenName>
                          <ApprovingTokenNameBorder>
                            Approving USDT
                          </ApprovingTokenNameBorder>
                        </ApprovingTokenName>
                      )
                    ) : (
                      ""
                    )}
                    {!isSingleApprove ? (
                      <div style={{ width: "100px" }}></div>
                    ) : (
                      ""
                    )}
                    {!isApproveTokenMore ? (
                      <ApproveTokenName
                        onClick={() => setApproveTokenMore(true)}
                      >
                        <ApproveTokenNameBorder>
                          Approve USDC
                        </ApproveTokenNameBorder>
                      </ApproveTokenName>
                    ) : (
                      <ApprovingTokenName>
                        <ApprovingTokenNameBorder>
                          Approving USDC
                        </ApprovingTokenNameBorder>
                      </ApprovingTokenName>
                    )}
                  </ApproveToken>
                  <ConfirmTransaction
                    onClick={() => setConfirmTransactionWait(true)}
                  >
                    <ConfirmTransactionBorder>
                      Confirm Transaction
                    </ConfirmTransactionBorder>
                  </ConfirmTransaction>
                </PercentToRemoveBorder>
              </PercentToRemove>
            )
          ) : (
            <ConfirmTransactionContainer>
              <ConfirmTransactionClose
                src="img/close.png"
                alt=""
                draggable={false}
                onClick={() => setConfirmTransactionWait(false)}
              ></ConfirmTransactionClose>
              <ConfirmTransactionFrame>
                <ConfirmTransactionFrameBorder>
                  <ConfirmTransactionFrameTitle>
                    Confirm Transaction
                  </ConfirmTransactionFrameTitle>
                  <ConfirmTransactionFrameContent>
                    <ConfirmTransactionFrameContentBorder>
                      <WaitIcon
                        src="img/Wait.svg"
                        alt=""
                        draggable={false}
                      ></WaitIcon>
                      <SwapDetailWait>
                        Removing 0.1 ETH + 170 USDT
                      </SwapDetailWait>
                      <SwapDetailConfirm>
                        Please confirm this transaction
                        <br /> in your MetaMask wallet.
                      </SwapDetailConfirm>
                    </ConfirmTransactionFrameContentBorder>
                  </ConfirmTransactionFrameContent>
                </ConfirmTransactionFrameBorder>
              </ConfirmTransactionFrame>
            </ConfirmTransactionContainer>
          )
        ) : (
          <CreatePairFrame>
            {!isShowWallet ? (
              <CreatePairFrameBorder>
                <CreatePairFrameHeader>
                  <CreatePairBackIcon
                    src="img/Back.svg"
                    alt=""
                    draggable={false}
                    onClick={() => setShowPairFrame(false)}
                  ></CreatePairBackIcon>
                  <CreatePariTitle>Create a pair</CreatePariTitle>
                  <SwapFrameHeaderSetting>
                    <SwapFrameHeaderSettingBorder>
                      <SettingImg
                        src="img/setting.png"
                        alt=""
                        draggable={false}
                      />
                    </SwapFrameHeaderSettingBorder>
                  </SwapFrameHeaderSetting>
                </CreatePairFrameHeader>
                <CreatePairFrameDescription>
                  The ratio of token you add will set the price of this <br />
                  pool.
                </CreatePairFrameDescription>
                <SwapFrameToken>
                  <SellTokenArea>
                    <SellTokenAreaText>
                      {/* <SellTokenAreaTextDesc>You sell</SellTokenAreaTextDesc> */}
                      <SellTokenAreaTextBalance>
                        Balance: 999
                      </SellTokenAreaTextBalance>
                    </SellTokenAreaText>
                    <SellTokenAreaValue>
                      <TokenBalance>0.00</TokenBalance>
                      <TokenName>
                        <TokenIcon
                          src="img/TokenUSDT.png"
                          alt=""
                          draggable={false}
                        />
                        <TokenDetailName>
                          <Omission>USDT</Omission>
                          <Original>Tether USD</Original>
                        </TokenDetailName>
                        <TokenDropdown
                          src="img/SelectArrow.png"
                          alt=""
                          draggable={false}
                        />
                      </TokenName>
                    </SellTokenAreaValue>
                  </SellTokenArea>
                  <TokenSwitch>
                    <ArrowImg src="img/Plus.svg" alt="" draggable={false} />
                  </TokenSwitch>
                  <BuyTokenArea>
                    <BuyTokenAreaText>
                      {/* <BuyTokenAreaTextDesc>You Buy</BuyTokenAreaTextDesc> */}
                      <BuyTokenAreaTextBalance>
                        Balance: 999
                      </BuyTokenAreaTextBalance>
                    </BuyTokenAreaText>
                    <BuyTokenAreaValue>
                      <TokenBalance>0.00</TokenBalance>
                      <TokenName>
                        <TokenIcon
                          src="img/TokenUSDC.png"
                          alt=""
                          draggable={false}
                        />
                        <TokenDetailName>
                          <Omission>USDC</Omission>
                          <Original>USD coin</Original>
                        </TokenDetailName>
                        <TokenDropdown
                          src="img/SelectArrow.png"
                          alt=""
                          draggable={false}
                        />
                      </TokenName>
                    </BuyTokenAreaValue>
                  </BuyTokenArea>
                </SwapFrameToken>
                <PoolConnectWallet onClick={() => setShowWallet(true)}>
                  Connect Wallet
                </PoolConnectWallet>
              </CreatePairFrameBorder>
            ) : (
              <CreatePairFrameBorder>
                {!isShowCreatePair ? (
                  <Wallet
                    setShowWallet={setShowWallet}
                    setShowCreatePair={setShowCreatePair}
                  />
                ) : (
                  <CreatePair
                    setShowPairFrame={setShowPairFrame}
                    setShowCreatePair={setShowCreatePair}
                  />
                )}
              </CreatePairFrameBorder>
            )}
          </CreatePairFrame>
        )
      ) : (
        <CreatePairFrame>
          <CreatePairFrameBorder>
            <AddsLiquidity />
          </CreatePairFrameBorder>
        </CreatePairFrame>
      )}
    </PoolFrame>
  );
};
export default PoolFrameContainer;
