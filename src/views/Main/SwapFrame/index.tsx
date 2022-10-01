import React, { useState } from "react";
import Toggle from "./Toggle.component";

import {
  JoinContainer,
  SurpriseContainer,
  SwapFrame,
  SwapFrameHeader,
  SwapFrameHeaderTitle,
  SwapFrameHeaderSetting,
  SettingImg,
  SwapFrameToken,
  SellTokenArea,
  BuyTokenArea,
  SellTokenAreaText,
  SellTokenAreaTextDesc,
  SellTokenAreaTextBalance,
  SellTokenAreaValue,
  TokenSwitch,
  ArrowImg,
  BuyTokenAreaText,
  BuyTokenAreaTextDesc,
  BuyTokenAreaTextBalance,
  BuyTokenAreaValue,
  SwapStatistics,
  SwapConnectWallet,
  TokenBalance,
  TokenName,
  TokenIcon,
  TokenDetailName,
  Omission,
  Original,
  TokenDropdown,
  SwapDetail,
  SwapDetailDropdown,
  SwapFrameContainer,
  WalletDialogFrame,
  WalletDialogHeader,
  WalletDialogHeaderText,
  WalletDialogHeaderClose,
  WalletDialogButtons,
  WalletMetamask,
  WalletMetamaskText,
  WalletMetamaskIcon,
  SwapNeedButtons,
  SwapApprove,
  SwapToken,
  SwapApproveSuccess,
  SwapApproveHeader,
  ApproveCheckIcon,
  ApproveToken,
  SwapApproveLink,
  SwapTokenListBoard,
  SwapTokenListBoardHeader,
  SwapTokenListBoardHeaderTitle,
  SwapTokenListBoardHeaderClose,
  SwapTokenListBorder,
  SwapTokenFindThing,
  SwapTokenListDetail,
  SwapTokenListDetailHeader,
  SwapTokenListDetailHeaderName,
  SwapTokenListDetailHeaderBalance,
  SwapTokenListDetailBorder,
  SwapTokenValueList,
  SwapTokenNameField,
  SwapTokenBalanceField,
  SwapTokenNameFieldIcon,
  SwapTokenNameFieldDetail,
  SwapTokenBigName,
  SwapTokenExtensionName,
  SwapTokenValueListBorder,
  SwapFrameConfirmHeader,
  SwapConfirmTransaction,
  SwapConfirmTransactionDetail,
  SwapGetToken,
  SwapTransactionFee,
  TokenCalcConfirm,
  TokenExpectedOutput,
  TokenExpectedOutputBalance,
  TokenTransactionDetail,
  TokenExpectedOutputText,
  TokenTransactionDetailBorder,
  TokenGetResult,
  SwapConfirmTransactionBtn,
  SwapFee,
  SwapTransactionSetting,
  SpillageTolerance,
  SpillageToleranceTitle,
  SpillageToleranceItems,
  EnterPercent,
  EnterMinutes,
  TransactionDialogButtons,
  AnotherSame,
  TitleQuestion,
  TransactionDeadline,
  ToggleExpertMode,
  ConfirmTransactionClose,
  ConfirmTransactionContainer,
  ConfirmTransactionFrame,
  ConfirmTransactionFrameTitle,
  ConfirmTransactionFrameContent,
  WaitIcon,
  SwapDetailWait,
  SwapDetailConfirm,
  SwapTokenArea,
  SwapFrameHeaderSettingBorder,
  WalletDialogFrameBorder,
  WalletMetamaskBorder,
  SwapTokenAreaBorder,
  ConfirmTransactionFrameBorder,
  ConfirmTransactionFrameContentBorder,
  EnterMinutesBorder,
  EnterPercentBorder,
} from "./SwapFrame.style";
const JoinPart = () => {
  const [isShowWallet, setShowWallet] = useState(false);
  const [isMetaMask, setMetaMask] = useState(false);
  const [isApprove, setApprove] = useState(false);
  const [isTokenList, setShowTokenList] = useState(false);
  const [isShowSwapBoard, setShowSwapBoard] = useState(false);
  const [isOpenTransactionSetting, setOpenTransactionSetting] = useState(false);
  const [isShowConfirmTransactionWait, setShowConfirmTransactionWait] =
    useState(false);
  const [isPage, setPage] = useState(true);
  const OpenWalletDialog = () => {
    setShowWallet(true);
  };
  const CloseWalletDialog = () => {
    setShowWallet(false);
  };
  const OpenMetaMask = () => {
    setMetaMask(true);
    setShowWallet(false);
  };
  const OpenApprove = () => {
    setApprove(true);
  };
  const OpenTokenList = () => {
    setShowTokenList(true);
  };
  const CloseTokenListDialog = () => {
    setShowTokenList(false);
  };
  const OpenSwapToken = () => {
    setShowSwapBoard(true);
  };
  const OpenTransactionSetting = () => {
    setOpenTransactionSetting(true);
  };
  const CloseTransactionSetting = () => {
    setOpenTransactionSetting(false);
  };
  const ShowConfirmTransactionWait = () => {
    setShowConfirmTransactionWait(true);
  };
  const ShowConfirmTransactionWaitClose = () => {
    setShowConfirmTransactionWait(false);
  };
  return (
    <JoinContainer>
      <SurpriseContainer>
        <SwapFrame>
          {!isShowConfirmTransactionWait ? (
            !isShowWallet ? (
              !isTokenList ? (
                <SwapFrameContainer>
                  {!isShowSwapBoard ? (
                    <SwapFrameHeader>
                      <SwapFrameHeaderTitle>Swap</SwapFrameHeaderTitle>
                      <SwapFrameHeaderSetting>
                        <SwapFrameHeaderSettingBorder>
                          <SettingImg
                            src="img/setting.png"
                            alt=""
                            draggable={false}
                          />
                        </SwapFrameHeaderSettingBorder>
                      </SwapFrameHeaderSetting>
                    </SwapFrameHeader>
                  ) : !isOpenTransactionSetting ? (
                    <SwapConfirmTransaction>
                      <SwapFrameConfirmHeader>
                        Confirm transaction
                      </SwapFrameConfirmHeader>
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
                            onClick={() => OpenTokenList()}
                          />
                        </TokenName>
                      </SellTokenAreaValue>
                      <TokenSwitch>
                        <ArrowImg
                          src="img/arrow.png"
                          alt=""
                          draggable={false}
                        />
                      </TokenSwitch>
                      <BuyTokenAreaValue>
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
                            onClick={() => OpenTokenList()}
                          />
                        </TokenName>
                      </BuyTokenAreaValue>
                      <SwapConfirmTransactionDetail>
                        <SwapGetToken>
                          <TokenCalcConfirm>
                            0.99 USDT = 1 USDC ($1)
                          </TokenCalcConfirm>
                          <TokenTransactionDetail>
                            <TokenExpectedOutput>
                              <TokenExpectedOutputText>
                                Expected Output
                              </TokenExpectedOutputText>
                              <TokenExpectedOutputBalance>
                                0.98 USDC
                              </TokenExpectedOutputBalance>
                            </TokenExpectedOutput>
                          </TokenTransactionDetail>
                          <TokenTransactionDetail>
                            <TokenExpectedOutput>
                              <TokenExpectedOutputText>
                                Price impact
                              </TokenExpectedOutputText>
                              <TokenExpectedOutputBalance
                                style={{ color: "#49E400" }}
                              >
                                -0.09%
                              </TokenExpectedOutputBalance>
                            </TokenExpectedOutput>
                          </TokenTransactionDetail>
                          <TokenTransactionDetailBorder></TokenTransactionDetailBorder>
                          <TokenTransactionDetail>
                            <TokenExpectedOutput>
                              <TokenExpectedOutputText>
                                Minimum received after slippage
                              </TokenExpectedOutputText>
                              <TokenExpectedOutputBalance>
                                0.89 USDT
                              </TokenExpectedOutputBalance>
                            </TokenExpectedOutput>
                          </TokenTransactionDetail>
                          <TokenTransactionDetail>
                            <TokenExpectedOutput>
                              <TokenExpectedOutputText>
                                Liquidity provider fee
                              </TokenExpectedOutputText>
                              <TokenExpectedOutputBalance>
                                0.0057 USDT
                              </TokenExpectedOutputBalance>
                            </TokenExpectedOutput>
                          </TokenTransactionDetail>
                        </SwapGetToken>
                        <SwapTransactionFee></SwapTransactionFee>
                      </SwapConfirmTransactionDetail>
                      <TokenGetResult>
                        You will receive at least 0.89 USDT or the transaction
                        will be{" "}
                        <label style={{ color: "#FF0000" }}>cancelled</label>.
                      </TokenGetResult>
                      <SwapConfirmTransactionBtn
                        onClick={() => OpenTransactionSetting()}
                      >
                        Confirm Transaction
                      </SwapConfirmTransactionBtn>
                    </SwapConfirmTransaction>
                  ) : (
                    <SwapTransactionSetting>
                      <WalletDialogHeader>
                        <WalletDialogHeaderText>
                          Transaction settings
                        </WalletDialogHeaderText>
                        <WalletDialogHeaderClose
                          src="img/close.png"
                          alt=""
                          draggable={false}
                          onClick={() => CloseTransactionSetting()}
                        ></WalletDialogHeaderClose>
                      </WalletDialogHeader>
                      <TransactionDialogButtons>
                        <SpillageTolerance>
                          <SpillageToleranceTitle>
                            Spillage tolerance
                            <TitleQuestion
                              src="img/Question.svg"
                              alt=""
                              draggable={false}
                            ></TitleQuestion>
                          </SpillageToleranceTitle>
                          <SpillageToleranceItems>
                            <EnterPercent>
                              <EnterPercentBorder>
                                Enter
                                <label
                                  style={{
                                    marginLeft: "15px",
                                    color: "white",
                                    cursor: "pointer",
                                  }}
                                >
                                  %
                                </label>
                              </EnterPercentBorder>
                            </EnterPercent>
                            <AnotherSame>
                              <span>Auto</span>
                            </AnotherSame>
                            <AnotherSame>
                              <span>0.5%</span>
                            </AnotherSame>
                            <AnotherSame>
                              <span>1%</span>
                            </AnotherSame>
                            <AnotherSame>
                              <span>5%</span>
                            </AnotherSame>
                          </SpillageToleranceItems>
                        </SpillageTolerance>

                        <TransactionDeadline>
                          <SpillageToleranceTitle>
                            Transaction deadline
                            <TitleQuestion
                              src="img/Question.svg"
                              alt=""
                              draggable={false}
                            ></TitleQuestion>
                          </SpillageToleranceTitle>
                          <SpillageToleranceItems>
                            <EnterMinutes
                              onClick={() => ShowConfirmTransactionWait()}
                            >
                              <EnterMinutesBorder>
                                Enter
                                <label
                                  style={{
                                    marginLeft: "15px",
                                    color: "white",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => ShowConfirmTransactionWait()}
                                >
                                  Minutes
                                </label>
                              </EnterMinutesBorder>
                            </EnterMinutes>
                            <AnotherSame>60s</AnotherSame>
                            <AnotherSame>5mn</AnotherSame>
                            <AnotherSame>15mn</AnotherSame>
                          </SpillageToleranceItems>
                        </TransactionDeadline>

                        <ToggleExpertMode>
                          <SpillageToleranceTitle>
                            Toggle expert mode
                            <TitleQuestion
                              src="img/Question.svg"
                              alt=""
                              draggable={false}
                            ></TitleQuestion>
                          </SpillageToleranceTitle>
                          <Toggle />
                        </ToggleExpertMode>
                      </TransactionDialogButtons>
                    </SwapTransactionSetting>
                  )}
                  {!isShowSwapBoard ? (
                    <SwapFrameToken>
                      <SellTokenArea>
                        <SellTokenAreaText>
                          <SellTokenAreaTextDesc>
                            You sell
                          </SellTokenAreaTextDesc>
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
                              onClick={() => OpenTokenList()}
                            />
                          </TokenName>
                        </SellTokenAreaValue>
                      </SellTokenArea>
                      <TokenSwitch>
                        <ArrowImg
                          src="img/arrow.png"
                          alt=""
                          draggable={false}
                        />
                      </TokenSwitch>
                      <BuyTokenArea>
                        <BuyTokenAreaText>
                          <BuyTokenAreaTextDesc>You Buy</BuyTokenAreaTextDesc>
                          <BuyTokenAreaTextBalance>
                            Balance: 999
                          </BuyTokenAreaTextBalance>
                        </BuyTokenAreaText>
                        <BuyTokenAreaValue>
                          <TokenBalance>
                            0.00
                            <SwapFee>(-0.09%)</SwapFee>
                          </TokenBalance>
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
                              onClick={() => OpenTokenList()}
                            />
                          </TokenName>
                        </BuyTokenAreaValue>
                      </BuyTokenArea>
                      <SwapStatistics>
                        <SwapDetail>0.99 USDT = 1 USDC ($1)</SwapDetail>
                        <SwapDetailDropdown
                          src="img/SelectArrow.png"
                          alt=""
                          draggable={false}
                        />
                      </SwapStatistics>
                      {!isMetaMask ? (
                        <SwapConnectWallet onClick={() => OpenWalletDialog()}>
                          Connect Wallet
                        </SwapConnectWallet>
                      ) : (
                        <SwapNeedButtons>
                          {!isApprove ? (
                            <SwapApprove onClick={() => OpenApprove()}>
                              {!isApprove
                                ? "Approve USDT"
                                : "Approving USDT..."}
                            </SwapApprove>
                          ) : (
                            ""
                          )}
                          <SwapToken onClick={() => OpenSwapToken()}>
                            Swap
                          </SwapToken>
                        </SwapNeedButtons>
                      )}
                    </SwapFrameToken>
                  ) : (
                    ""
                  )}
                </SwapFrameContainer>
              ) : (
                <SwapTokenListBoard>
                  <SwapTokenListBoardHeader>
                    <SwapTokenListBoardHeaderTitle>
                      Select a token
                    </SwapTokenListBoardHeaderTitle>
                    <SwapTokenListBoardHeaderClose
                      src="img/close.png"
                      alt=""
                      draggable={false}
                      onClick={() => CloseTokenListDialog()}
                    ></SwapTokenListBoardHeaderClose>
                  </SwapTokenListBoardHeader>
                  <SwapTokenListBorder></SwapTokenListBorder>
                  <SwapTokenFindThing placeholder="Find a token by name or address"></SwapTokenFindThing>
                  <SwapTokenListDetail>
                    <SwapTokenListDetailHeader>
                      <SwapTokenListDetailHeaderName>
                        Token name
                      </SwapTokenListDetailHeaderName>
                      <SwapTokenListDetailHeaderBalance>
                        Balance
                      </SwapTokenListDetailHeaderBalance>
                    </SwapTokenListDetailHeader>
                    <SwapTokenListDetailBorder></SwapTokenListDetailBorder>
                    <SwapTokenArea>
                      <SwapTokenAreaBorder>
                        <SwapTokenValueList>
                          <SwapTokenNameField>
                            <SwapTokenNameFieldIcon
                              src="img/Ethereum.png"
                              alt=""
                              draggable={false}
                            ></SwapTokenNameFieldIcon>
                            <SwapTokenNameFieldDetail>
                              <SwapTokenBigName>ETH</SwapTokenBigName>
                              <SwapTokenExtensionName>
                                Ethereum
                              </SwapTokenExtensionName>
                            </SwapTokenNameFieldDetail>
                          </SwapTokenNameField>
                          <SwapTokenBalanceField>0.45</SwapTokenBalanceField>
                        </SwapTokenValueList>
                        <SwapTokenValueListBorder></SwapTokenValueListBorder>
                        <SwapTokenValueList>
                          <SwapTokenNameField>
                            <SwapTokenNameFieldIcon
                              src="img/Fantom.png"
                              alt=""
                              draggable={false}
                            ></SwapTokenNameFieldIcon>
                            <SwapTokenNameFieldDetail>
                              <SwapTokenBigName>Fantom</SwapTokenBigName>
                              <SwapTokenExtensionName>
                                Fantom
                              </SwapTokenExtensionName>
                            </SwapTokenNameFieldDetail>
                          </SwapTokenNameField>
                          <SwapTokenBalanceField>1234</SwapTokenBalanceField>
                        </SwapTokenValueList>
                        <SwapTokenValueListBorder></SwapTokenValueListBorder>
                      </SwapTokenAreaBorder>
                    </SwapTokenArea>
                  </SwapTokenListDetail>
                </SwapTokenListBoard>
              )
            ) : (
              <WalletDialogFrame>
                <WalletDialogFrameBorder>
                  <WalletDialogHeader>
                    <WalletDialogHeaderText>
                      Connect Wallet
                    </WalletDialogHeaderText>
                    <WalletDialogHeaderClose
                      src="img/close.png"
                      alt=""
                      draggable={false}
                      onClick={() => CloseWalletDialog()}
                    ></WalletDialogHeaderClose>
                  </WalletDialogHeader>
                  <WalletDialogButtons>
                    <WalletMetamask onClick={() => OpenMetaMask()}>
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
            )
          ) : (
            <ConfirmTransactionContainer>
              <ConfirmTransactionClose
                src="img/close.png"
                alt=""
                draggable={false}
                onClick={() => ShowConfirmTransactionWaitClose()}
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
                        Swapping 0.1 ETH for 170 USDT
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
          )}
        </SwapFrame>
        {isApprove ? (
          !isShowSwapBoard ? (
            <SwapApproveSuccess>
              <SwapApproveHeader>
                <ApproveCheckIcon
                  src="img/ApproveCheck.png"
                  alt=""
                  draggable={false}
                ></ApproveCheckIcon>
                <ApproveToken>Approve USDT</ApproveToken>
              </SwapApproveHeader>
              <SwapApproveLink>View on the explorer 🔗</SwapApproveLink>
            </SwapApproveSuccess>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </SurpriseContainer>
    </JoinContainer>
  );
};
export default JoinPart;
