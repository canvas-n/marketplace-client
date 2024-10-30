import React, { useEffect, useState } from "react";
import { pre_400, pre_700 } from "../../../fonts";

import Layout from "../../components/Layout/index";
import PageTitle from "../../components/Common/PageTitle";
import ButtonMD from "../../components/Common/ButtonMD";
import Paginations from "../../components/Common/Paginations";
import StakingHistoryCard from "../../components/Card/StakingHistoryCard";
import StakingDetail from "../../components/Modal/StakingDetail";
import Image from "next/image";
import { useUser } from "@/react-query/hooks/user";
import {
  useSwapCETH,
  useSwapHistoryList,
  useSwapInfo,
} from "@/react-query/hooks/swap";
import SwapHistoryCard from "@/components/Card/SwapHistoryCard";
import MypageOwnerCard from "@/components/Card/MypageOwnerCard";
import { useRouter } from "next/router";
import { useSignIn } from "@/react-query/hooks/auth";
const ethers = require("ethers");
const Web3 = require("web3");

const SwapPage = () => {
  const router = useRouter();
  const [popupShow, setPopupShow] = useState(false);
  const [tab, setTab] = useState("swap");
  const [ethAmount, setEthAmount] = useState(null);
  const [cethAmount, setCethAmount] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [address, setAddress] = useState("");
  const { signIn } = useSignIn();
  const [currency, setCurrency] = useState("ETH");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const { user, isUserRefetch } = useUser(address);
  const { swapInfo } = useSwapInfo();
  const { swapHistoryList, swapHistoryListCnt, swapListLoading } =
    useSwapHistoryList({
      limit,
      tab,
      pageParam: (page - 1) * limit,
      offset: (page - 1) * limit,
    });

  const { swapCETH } = useSwapCETH();

  useEffect(() => {
    (async () => {
      if (user?.wallet_addr) {
        const eth_balance = await window?.ethereum?.request({
          method: "eth_getBalance",
          params: [user?.wallet_addr, "latest"],
        });
        setEthBalance((parseInt(eth_balance) / 1000000000000000000).toFixed(4));
      } else {
        if (window?.ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          setAddress(accounts[0]);
        }
      }
    })();
  }, [currency, ethAmount, cethAmount, address, user]);

  useEffect(() => {
    (async () => {
      if (address && user?.wallet_addr !== address) {
        const chainId = await window?.ethereum?.request({
          method: "eth_chainId",
        });

        if (chainId !== process.env.CHAIN_ID) {
          await ethereum?.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: process.env.CHAIN_ID }],
          });
        }
        await signIn({ address });
      }
    })();
  }, [address, user]);

  useEffect(() => {
    const watch = () => {
      window?.ethereum?.on("accountsChanged", connectWallet);
      window?.ethereum?.on("connect", connectWallet);
      // window?.ethereum?.on("disconnect", disconnect);
    };

    watch(); // addEventListener 함수를 실행

    return () => {
      window?.ethereum?.removeListener("accountsChanged", connectWallet);
      window?.ethereum?.removeListener("connect", connectWallet);
      // window?.ethereum?.removeListener("disconnect", disconnect);
    };
  }, []);

  const connectWallet = async () => {
    // 2
    if (window?.ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];

      if (account) {
        setAddress(account);

        //router.reload();
      }
    }
  };

  const calculateCeth = (e) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setEthAmount("");
      setCethAmount("");
      return;
    }
    let rtn = /^\d*\.?\d{0,4}$/.test(inputValue);
    if (currency === "ETH") {
      if (!rtn) {
        setEthAmount(inputValue.slice(0, -inputValue.length));
        return;
      }

      if (inputValue > ethBalance) {
        alert("보유하신 eth 수량보다 큰 금액을 입력 하실 수 없습니다.");
        if ((ethBalance - 0.0001).toFixed(4) <= 0) {
          setEthAmount(0);
          setCethAmount(0);
          return;
        }
        setEthAmount((ethBalance - 0.0001).toFixed(4));
        setCethAmount(
          (parseFloat(ethBalance - 0.0001) * parseFloat(swapInfo)).toFixed(4),
        );
        return;
      }

      setEthAmount(e.target.value);
      setCethAmount(
        (parseFloat(e.target.value) * parseFloat(swapInfo)).toFixed(4),
      );
    } else {
      if (!rtn) {
        setCethAmount(inputValue.slice(0, -inputValue.length));
        return;
      }

      if (inputValue > parseFloat(user?.ceth_balance)) {
        alert("보유하신 cEth 수량보다 큰 금액을 입력 하실 수 없습니다.");

        if (parseFloat(user?.ceth_balance).toFixed(4) <= 0) {
          setEthAmount(0);
          setCethAmount(0);
          return;
        }

        setCethAmount(parseFloat(user?.ceth_balance).toFixed(4));
        setEthAmount(
          (parseFloat(user?.ceth_balance) / parseFloat(swapInfo)).toFixed(4),
        );
        return;
      }

      setCethAmount(e.target.value);
      setEthAmount(
        (parseFloat(e.target.value) / parseFloat(swapInfo)).toFixed(4),
      );
    }
  };

  const swapCETHInfo = async () => {
    if (currency === "ETH") {
      if (parseFloat(ethAmount) >= parseFloat(ethBalance)) {
        alert("보유하신 eth 이상으로 스왑하실 수 없습니다. (전송 수수료 포함)");
        return;
      }

      if (!ethAmount || parseFloat(ethAmount) < 0.001) {
        alert("최소 스왑수량은 0.001 입니다");
        setEthAmount("");
        setCethAmount("");
        return;
      }

      if (!window?.ethereum) console.error("No wallet found!");
      else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.BrowserProvider(window?.ethereum);
        const signer = await provider?.getSigner();

        const web3 = new Web3(window?.ethereum);

        let tx;
        let amount;

        amount = web3.utils.toBN(parseFloat(ethAmount) * 1000000000000000000);
        amount = web3.utils.toHex(amount);

        tx = await signer.sendTransaction({
          to: process.env.NFT_MASTER_ADDRESS, // Required except during contract publications.
          from: user?.wallet_addr, // must match user's active address.
          value: web3.utils.toHex(amount), // Only required to send ether to the recipient from the initiating external account.
        });

        const { result, data, msg } = await swapCETH({
          txid: tx.hash,
          symbol: currency,
          amount: parseFloat(ethAmount),
        });

        if (data) {
          setEthAmount("");
          setCethAmount("");
        }
      }
    } else {
      if (parseFloat(cethAmount) >= parseFloat(user?.ceth_balance)) {
        alert(
          "보유하신 cEth 이상으로 스왑하실 수 없습니다. (전송 수수료 포함)",
        );
        return;
      }

      if (!cethAmount || parseFloat(cethAmount) < 0.001) {
        alert("최소 스왑수량은 0.001 입니다");
        setEthAmount("");
        setCethAmount("");
        return;
      }

      // 반대스왑
      const { result, data, msg } = await swapCETH({
        txid: null,
        symbol: currency,
        amount: parseFloat(cethAmount),
      });

      console.log("result, data, msg", data?.affectedRows);

      if (data?.affectedRows > 0) {
        alert("스왑신청 완료");
        router.reload();
      }
    }
  };

  const changeCurrency = () => {
    setEthAmount("");
    setCethAmount("");
    currency === "ETH" ? setCurrency("CETH") : setCurrency("ETH");
  };
  return (
    <Layout path="/">
      <PageTitle type="signup" title="SWAP" />
      <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
        <div className="mx-[20px]">
          <div className="flex border-b border-[#959595] mb-[40px] md:mb-[60px]">
            <div
              className={`
                        ${
                          tab == "swap"
                            ? `${pre_700.className} border-black border-b-[4px] `
                            : `text-[#959595]`
                        }
                         mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`}
              onClick={() => setTab("swap")}
            >
              스왑하기
            </div>
            <div
              className={`
                        ${
                          tab == "history"
                            ? `${pre_700.className} border-black border-b-[4px] `
                            : `text-[#959595]`
                        }
                             mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`}
              onClick={() => setTab("history")}
            >
              스왑내역
            </div>
          </div>
          {tab == "swap" && (
            <div>
              <div className="mb-[40px] md:mb-[60px] flex justify-center items-center">
                <Image
                  className="mr-10"
                  src={require("/public/images/icon_metamask.png")}
                  alt={"metamask Icon"}
                />
                <div>{user?.wallet_addr}</div>
              </div>
              <div className="mb-[70px] md:mb-[150px]">
                <div className="p-[20px] sm:p-[50px] w-full bg-[rgba(235,235,235,0.5)] lg:h-[400px] rounded-[10px] border border-[#B8B8B8] flex flex-col justify-center items-center mb-[70px] md:mb-[100px]">
                  <div className="w-[100%] lg:w-[845px] text-sm2 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold grid grid-cols-1">
                        보유 ETH
                      </div>
                      <div className="grid grid-cols-1">{ethBalance}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold grid grid-cols-1">
                        보유 cETH
                      </div>
                      <div className="grid grid-cols-1">
                        {parseFloat(user?.ceth_balance).toFixed(4)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div className="mr-5 font-semibold grid grid-cols-1">
                        스왑신청
                      </div>
                      <div className=" ml-7">
                        <div className="flex items-center justify-between space-x-3">
                          {currency === "ETH" ? (
                            <input
                              type="text"
                              className="w-32"
                              placeholder="ETH"
                              min="0"
                              value={ethAmount}
                              onChange={calculateCeth}
                              onBlur={calculateCeth}
                            />
                          ) : (
                            <input
                              type="text"
                              className="w-32"
                              placeholder="cETH"
                              min="0"
                              value={cethAmount}
                              onChange={calculateCeth}
                              onBlur={calculateCeth}
                            />
                          )}
                          <Image
                            src={require("/public/images/icon_swap.png")}
                            alt={"icon swap"}
                            className="w-5 h-5 cursor-pointer"
                            onClick={changeCurrency}
                          />
                          {currency === "ETH" ? (
                            <input
                              type="text"
                              className="w-32"
                              placeholder="cETH"
                              min="0"
                              value={cethAmount}
                              disabled
                            />
                          ) : (
                            <input
                              type="text"
                              className="w-32"
                              placeholder="ETH"
                              min="0"
                              value={ethAmount}
                              disabled
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-[70px] sm:mt-[100px] pt-[30px]">
                      <ButtonMD
                        text="스왑"
                        style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]"
                        onClick={() => swapCETHInfo()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {tab == "history" && (
          <div className="px-[20px]">
            <div className="overflow-auto height_scroll">
              <table
                className={`min-w-[880px] text-[14px] md:text-[15px] w-full table-fixed border-b border-[#959595] text-center ${pre_700.className}`}
              >
                <tbody>
                  <tr>
                    <td className="pb-[10px]">TXID</td>
                    <td className="w-[150px] pb-[10px] text-center">
                      신청 수량
                    </td>
                    <td className="w-[120px] pb-[10px] text-center">
                      받은 수량
                    </td>
                    <td className="w-[120px] pb-[10px] text-center">상태</td>
                    <td className="w-[100px] pb-[10px] text-center">신청일</td>
                    <td className="w-[100px] pb-[10px] text-center">완료일</td>
                  </tr>
                </tbody>
              </table>
              {swapListLoading ? (
                <div className="my-[80px] flex justify-center items-center w-full">
                  Loading...
                </div>
              ) : swapHistoryList?.length > 0 ? (
                <div className="border-b border-[#959595] mb-[50px] min-w-[880px]">
                  {swapHistoryList?.map((v) => (
                    <SwapHistoryCard swap={v} />
                  ))}
                </div>
              ) : (
                <div className="my-[80px] flex justify-center items-center w-full">
                  스왑 내역이 없습니다.
                </div>
              )}
            </div>
            <div className="mt-[50px] mb-[70px] md:mb-[150px]">
              <Paginations
                style="mt-[20px] mb-[70px] lg:mb-[150px]"
                limit={limit}
                page={page}
                setPage={setPage}
                total={swapHistoryListCnt}
              />
            </div>
          </div>
        )}
      </div>
      {popupShow && <StakingDetail setClose={setPopupShow} />}
    </Layout>
  );
};
export default SwapPage;
