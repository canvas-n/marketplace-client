//05NFT 랭킹
import React, {useState} from "react";

import Layout from "../../components/Layout";

import {pre_300, pre_600, pre_800} from "../../../fonts";

import Image from "next/image";

const RankingTableCard = () => {
    return (
        <table className={`min-w-[1350px] w-full text-[20px] text-black table-fixed text-center ${pre_300.className}`}>
            <tbody>
                <tr>
                    <td className="w-[60px] py-[20px] text-left">6</td>
                    <td className="py-[20px]">
                        <div className="flex items-center">
                            <div className="w-[87px] h-[87px] overflow-hidden flex justify-center items-center mr-[25px] rounded-[50%] shrink-0">
                                <Image src={require("../../../public/images/team_2.png")} />
                            </div>
                            <p className="inline-block text-ellipsis overflow-hidden whitespace-nowrap shrink-1">아무거나 컬렉션 아무거나 컬렉션</p>
                        </div>
                    </td>
                    <td className="w-[130px] py-[20px]">Asdfzxcv</td>
                    <td className="w-[150px] py-[20px]">1,450 ETH</td>
                    <td className="w-[130px] py-[20px]">180</td>
                    <td className="w-[130px] py-[20px]">100</td>
                    <td className="w-[130px] py-[20px]">100</td>
                    <td className="w-[150px] py-[20px]">0.123 ETH</td>
                    <td className="w-[150px] py-[20px] text-right">1,000 ETH</td>
                </tr>
            </tbody>
        </table>
    )
}

export default RankingTableCard;