//05NFT 랭킹
import React, {useState} from "react";

import Layout from "../../components/Layout";
import ButtonMD from "../../components/Common/ButtonMD";

import {pre_300, pre_600, pre_700} from "../../../fonts";

import Image from "next/image";
import IconEth from "../../../public/images/eth.svg"
const StakingHistoryCard = ({type, title}) => {
    return (
        <table className="text-[14px] md:text-[15px] w-full table-fixed  text-center ">
            <tbody>
            <tr>
                <td className={`${pre_700.className} py-[30px] text-left overflow-ellipsis overflow-hidden whitespace-nowrap`}>30 DAY : 갤러리코인(GLR) 스테이킹 30D</td>
                <td className="w-[150px] py-[30px]">345 GLR</td>
                <td className="w-[120px] py-[30px]">5.1 %</td>
                <td className="w-[120px] py-[30px]">2023.10.13</td>
                <td className="w-[120px] py-[30px]">5.1 %</td>
                <td className="w-[100px] py-[30px]"><ButtonMD text="해지" style="w-[100px] h-[40px] text-white text-[15px] bg-[#F1BA58] rounded-[27px] shadow-[0_2px_3px_#95959566]"/></td>
            </tr>
            </tbody>
        </table>
    )
}

export default StakingHistoryCard;