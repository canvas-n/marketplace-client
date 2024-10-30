//05NFT 랭킹
import React, { useState } from "react";
import moment from "moment/moment";

import Layout from "../../components/Layout";
import ButtonMD from "../../components/Common/ButtonMD";

import { pre_300, pre_600, pre_700 } from "../../../fonts";

import Image from "next/image";
import IconEth from "../../../public/images/eth.svg";
const SwapHistoryCard = ({ swap }) => {
  const status = (status) => {
    if (status === "W") {
      return "대기중";
    } else if (status === "S") {
      return "완료";
    } else {
      return "실패";
    }
  };

  const btnTxid = () => {
    const txid = swap?.txid;
    let link = process.env.TXID_URL + txid;
    window.open(link, "_blank");
  };

  return (
    <table className="text-[14px] md:text-[15px] w-full table-fixed  text-center ">
      <tbody>
        <tr>
          <td
            onClick={btnTxid}
            className={`${pre_700.className} cursor-pointer text-left overflow-ellipsis overflow-hidden whitespace-nowrap`}
          >
            {swap?.txid}
          </td>
          <td className="w-[150px] py-[30px] text-center">
            {swap?.swap_status == "S"
              ? `${parseFloat(swap?.from_amount).toFixed(4)} ${
                  swap?.from_symbol === "CETH" ? "cETH" : "ETH"
                }`
              : "-"}
          </td>
          <td className="w-[120px] py-[30px] text-center">
            {swap?.swap_status == "S"
              ? `${parseFloat(swap?.to_amount).toFixed(4)} ${swap?.from_symbol === "CETH" ? "ETH" : "cETH"}`
              : "-"}{" "}
          </td>
          <td className="w-[120px] py-[30px] text-center">
            {status(swap?.swap_status)}
          </td>
          <td className="w-[100px] py-[30px] text-center">
            {moment(swap?.ins_dttm).format("YYYY.MM.DD")}
          </td>
          <td className="w-[100px] py-[30px] text-center">
            {swap?.swap_status == "S"
              ? moment(swap?.upt_dttm).format("YYYY.MM.DD")
              : "-"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SwapHistoryCard;
