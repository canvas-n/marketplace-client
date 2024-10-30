//05NFT 랭킹
import React, { useEffect, useState } from "react";
import ButtonMD from "../../components/Common/ButtonMD";
import GoodsSaleModal from "../../components/Modal/GoodsSaleModal";

import { pre_300, pre_600, pre_700 } from "../../../fonts";

import Image from "next/image";
import IconEth from "../../../public/images/eth.svg";
const Web3 = require("web3");
const ethers = require("ethers");
import { useSellNft } from "@/react-query/hooks/nft";
import Link from "next/link";
import { useUser } from "@/react-query/hooks/user";
import AlertModal from "@/components/Modal/AlertModal";

import OrderCancelModal from "@/components/Modal/OrderCancelModal";
const MypageOwnerCard = ({ type, nft, refetch }) => {
  const [goodsSaleModal, setGoodsSaleModal] = useState(false);
  const [cancelSaleModal, setCancelSaleModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(
    nft?.img_src ||
      nft?.image?.cachedUrl ||
      nft?.image?.originalUrl ||
      nft?.image?.pngUrl ||
      nft?.image?.thumbnailUrl ||
      require("/public/images/forbbiden.png"),
  );
  const { user } = useUser();
  const { sellNftToken } = useSellNft();

  useEffect(() => {
    setImgUrl(
      nft?.img_src ||
        nft?.image?.cachedUrl ||
        nft?.image?.originalUrl ||
        nft?.image?.pngUrl ||
        nft?.image?.thumbnailUrl ||
        require("/public/images/forbbiden.png"),
    );
  }, [nft]);
  const approveSell = async (amount, date, category, description) => {
    if (parseFloat(amount) <= 0) {
      alert("판매 가격을 입력해 주세요.");
      return;
    }

    if (!description) {
      alert("상품 설명을 입력해 주세요.");
      return;
    }

    if (!window?.ethereum) console.error("No wallet found!");
    else {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.BrowserProvider(window?.ethereum);
      const signer = await provider?.getSigner();

      const tokenURIABI = JSON.parse(process.env.NFT_ABI);

      const web3 = new Web3(window?.ethereum);
      const tokenContract = new web3.eth.Contract(
        tokenURIABI,
        nft?.contract?.address,
      );

      const isApproved = await tokenContract.methods
        .isApprovedForAll(user?.wallet_addr, process.env.NFT_MASTER_ADDRESS)
        .call();

      let tx;
      if (!isApproved) {
        const encoded = await tokenContract.methods
          .setApprovalForAll(process.env.NFT_MASTER_ADDRESS, true)
          .encodeABI();

        tx = await signer.sendTransaction({
          to: nft?.contract?.address, // Required except during contract publications.
          from: user?.wallet_addr, // must match user's active address.
          value: "0x0", // Only required to send ether to the recipient from the initiating external account.
          data: encoded, // Optional, but used for defining smart contract creation and interaction.
        });
        console.log("tx", tx);
      }

      //setTxSent('Transaction initiated! Tx hash: ' + tx.hash);
      // 여기서 hook 호출 useSellNft

      const { success, msg, data } = await sellNftToken({
        amount,
        date,
        category,
        description,
        nft,
        txid: tx?.hash || "already exist",
      });

      if (success) {
        await refetch();
        setGoodsSaleModal(false);
      } else {
        alert(msg);
      }
    }
  };

  return (
    <div className="w-full rounded-[10px] shadow-[0_2px_3px_rgba(149,149,149,0.4)] mb-[80px]">
      <div className="w-full pb-[100%] rounded-[10px_10px_0_0] relative overflow-hidden">
        <Link
          href={
            nft?.sell_status
              ? `/nft/${nft?.contract?.address ? nft?.contract?.address : nft?.contract}/${nft?.tokenId ? nft?.tokenId : nft?.token_id}`
              : "#"
          }
        >
          <Image
            className="absolute top-0 left-0"
            alt={"nft image"}
            src={imgUrl}
            fill
            onError={(e) =>
              setImgUrl(`${process.env.CLIENT_URL}/images/forbbiden.png`)
            }
          />
        </Link>
      </div>
      <div className="px-[20px] py-[25px]">
        <p
          className={`${pre_700.className} text-[#4D5E80] text-[15px] mb-[10px] overflow-ellipsis whitespace-nowrap overflow-hidden`}
        >
          {nft?.name}
        </p>
        {/*{ type == "mypage" &&
                    <div className={`flex pb-[20px] border-b border-[#707070]  items-center`}>
                        <div className="w-[20px] h-[20px] mr-[10px] rounded-[50%]" style={{background:`url(/images/artist.jpg) no-repeat center center`, backgroundSize:`cover`}}></div>
                        <p className="text-[11px] text-[#6B7A99]">@monicalel</p>
                    </div>
                }*/}
        {type == "liked" && (
          <div className={`flex items-center`}>
            <p className="text-[15px] font-bold text-[#4D5E80]">
              {nft?.nft_name}
            </p>
          </div>
        )}
        {type == "sell" && (
          <div
            className={`flex  justify-between items-center pb-[10px] border-b border-[#707070] text-[14px] `}
          >
            <p className="text-[#959595]">판매가</p>
            <p className={`${pre_700.className}`}>0.18ETH</p>
          </div>
        )}

        {(type == "mypage" || type == "sell") && (
          <div className="mt-[20px]">
           {/* <p>{type}</p>
            <p className={`overflow-hidden text-ellipsis whitespace-nowrap`}>
              {nft?.contract?.address}
            </p>
            <p>{nft?.tokenId}</p>*/}

            <ButtonMD
              onClick={
                nft?.sell_status === "N"
                  ? () => setCancelSaleModal(true)
                  : () => setGoodsSaleModal(true)
              }
              text={nft?.sell_status === "N" ? "판매 취소" : `판매 등록`}
              style={`w-full rounded-[27px] shadow-[0_2px_3px_rgba(149,149,149,0.4)] h-[30px] text-[15px] ${
                nft?.sell_status === "N"
                  ? "bg-[#DADADA]"
                  : "bg-[#000000] text-white"
              }`}
            />
          </div>
        )}
      </div>
      {goodsSaleModal && (
        <GoodsSaleModal
          setClose={setGoodsSaleModal}
          approveSell={approveSell}
        />
      )}
      {cancelSaleModal && (
        <OrderCancelModal
          setClose={setCancelSaleModal}
          contractAddr={nft?.contract?.address}
          tokenId={nft?.tokenId}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MypageOwnerCard;
