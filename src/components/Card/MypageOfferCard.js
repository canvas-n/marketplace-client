//05NFT 랭킹
import React, { useState } from "react";
import ButtonMD from "../../components/Common/ButtonMD";

import { pre_300, pre_600, pre_700 } from "../../../fonts";

import Image from "next/image";
import IconEth from "../../../public/images/eth.svg";
import SuggestOfferModal from "../../components/Modal/SuggestOfferModal";
const MypageOfferCard = () => {
  const [suggestOfferModal, setSuggestOfferModal] = useState(false);
  return (
    <>
      <table className="min-w-[800px] w-full table-fixed my-[20px] text-[15px]">
        <tbody>
          <tr>
            <td className="w-[70px] lg:w-[120px]">
              <div
                className="w-[70px] lg:w-[120px] h-[70px] lg:h-[120px]"
                style={{
                  background: `url(/images/artist.svg) no-repeat center center`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </td>
            <td className="pl-[20px] lg:pl-[40px] text-[15px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
              지남이의 비너스 NFT #0001
            </td>
            <td className="w-[250px] text-center">
              <IconEth className="w-[20px] mr-[10px] inline-block " />
              <p className={`${pre_700.className} align-baseline inline-block`}>
                0.025 ETH
                <span
                  className={`${pre_300.className} text-[10px] align-top text-[#959595] ml-[10px] leading-[18px]`}
                >
                  (2,000,000 원)
                </span>
              </p>
            </td>
            <td className="w-[120px] text-center">3건</td>
            <td className="w-[120px]">
              <ButtonMD
                onClick={() => setSuggestOfferModal(true)}
                text="상세보기"
                style="w-[120px] h-[30px] shadow-[0_2px_3px_rgba(149,149,149,0.4)] bg-[#EBEBEB] rounded-[27px] text-[#959595]"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {suggestOfferModal && (
        <SuggestOfferModal setClose={setSuggestOfferModal} />
      )}
    </>
  );
};

export default MypageOfferCard;
