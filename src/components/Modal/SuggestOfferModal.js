import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputMD from "../Common/InputMD";
import ButtonMD from "../Common/ButtonMD";
import Link from "next/link";
import { pre_400, pre_600, pre_700 } from "../../../fonts";
import Paginations from "../../components/Common/Paginations";
import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";

const SuggestOfferModal = ({ setClose }) => {
  const router = useRouter();
  const path = router.pathname;

  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);

  const [date, setDate] = useState("30");
  const [category, setCategory] = useState("art");

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] md:px-[70px] py-[50px] sm:py-[90px] w-[95%] lg:w-[950px] relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
        <div
          className={`${pre_700.className} w-full text-left mb-[35px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
        >
          제안 내역
        </div>
        <div className="border border-[#707070] mb-[20px] overflow-auto">
          <table
            className={`min-w-[570px] table-fixed w-full bg-[#DADADA] text-[15px] ${pre_700.className}`}
          >
            <tbody>
              <tr>
                <td className="w-[60px] text-center py-[10px]">No.</td>
                <td className="py-[10px] pl-[20px]">제안자</td>
                <td className="text-right pr-[10px] w-[100px] py-[10px]">
                  제안금액
                </td>
                <td className="w-[100px] lg:w-[200px] text-center py-[10px]">
                  날짜
                </td>
                <td className="w-[200px] text-center py-[10px]">상태</td>
              </tr>
            </tbody>
          </table>
          <table className={`min-w-[570px] table-fixed w-full text-[15px]`}>
            <tbody>
              <tr>
                <td className="w-[60px] text-center py-[13px]">5</td>
                <td className="py-[13px] pl-[20px]">sine3c2</td>
                <td className="pr-[10px] text-right w-[100px] py-[13px]">
                  1 ETH
                </td>
                <td className="w-[100px] lg:w-[200px] text-center py-[13px]">
                  <span className="block lg:inline-block text-[#959595] lg:mr-[15px]">
                    2023.07.05
                  </span>
                  <span className="block lg:inline-block">17:00:01</span>
                </td>
                <td className="w-[200px] text-center py-[13px]">
                  <ButtonMD
                    text="수락"
                    style="w-[80px] h-[35px] text-[13px] text-white mr-[10px] bg-[#F1BA58]"
                  />
                  <ButtonMD
                    text="거절"
                    style="w-[80px] h-[35px] text-[13px] text-white bg-[#959595]"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Paginations style="mt-[80px] " />
        {alertPopupShow && (
          <AlertModal setClose={setAlertPopupShow} msg={msg} type={"error"} />
        )}
      </div>
    </div>
  );
};

export default SuggestOfferModal;
