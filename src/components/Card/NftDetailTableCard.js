//05NFT 랭킹
import React, { useState } from "react";
import moment from "moment";
import Layout from "../../components/Layout";

import { pre_300, pre_600, pre_700 } from "../../../fonts";

import Image from "next/image";
import IconEth from "../../../public/images/eth.svg";
import { changeComma } from "@/lib/common";
const NftDetailTableCard = ({ type, title, history, exchangeData }) => {
  const [krwPrice, setKrwPrice] = useState(
    (
      parseFloat(history?.amount_ceth) * parseFloat(exchangeData?.coin_krw)
    ).toFixed(4),
  );
  return (
    <table className="w-full table-fixed border-b border-[#DADADA] whitespace-nowrap">
      <tbody>
        <tr>
          <td className="w-[200px] xl:w-[250px] py-[20px]">
            {type == "offers" ? (
              <p className={`text-[15px] mb-[5px] ${pre_700.className}`}>
                2023.05.22 <span className={`text-[#959595]`}>15:29</span>
              </p>
            ) : (
              <p className={`text-[15px] mb-[5px] ${pre_700.className}`}>
                {moment(history.buy_dttm).format("YYYY.MM.DD")}
              </p>
            )}

            {type !== "offers" && (
              <p className="text-[10px] ">
                <span className="text-[#959595] mr-[15px]">{title}</span>
                <span>{history?.sell_addr.substring(0, 15) + "..."}</span>
              </p>
            )}
          </td>
          {(type == "sales" || type == "transfers") && (
            <td className="w-[200px] py-[20px]">
              <p>&nbsp;</p>
              <p className="text-[10px] ">
                <span className="text-[#959595] mr-[15px]">To</span>
                <span>{history?.buy_addr.substring(0, 15) + "..."}</span>
              </p>
            </td>
          )}
          <td className="text-right py-[20px]">
            <IconEth className="w-[21px] mr-[7px] inline-block" />
            <span
              className={`text-[15px] text-black mr-[10px] ${pre_700.className}`}
            >
              {history?.amount_ceth} cETH
            </span>
          </td>
          {type == "offers" && (
            <td className="text-right">
              <p
                className={`text-[15px] ${pre_700.className} ml-[125px] mr-[30px] inline-block`}
              >
                asdfz***
              </p>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default NftDetailTableCard;
