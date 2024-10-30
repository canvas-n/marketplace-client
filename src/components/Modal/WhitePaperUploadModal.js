import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputMD from "../Common/InputMD";
import ButtonMD from "../Common/ButtonMD";
import Link from "next/link";
import { pre_400, pre_600, pre_700 } from "../../../fonts";

import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";

// 번

const WhitePaperUploadModal = ({ setClose }) => {
  const router = useRouter();
  const path = router.pathname;

  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);

  const [tab, setTab] = useState("user");

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[70px] py-[50px] sm:py-[90px] w-[95%] md:w-[670px] relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>

        <div className=" block">
          <div
            className={`${pre_700.className} w-full text-left mb-[40px] sm:mb-[75px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
          >
            백서 등록
          </div>
          <div className="sm:flex justify-center items-center">
            <span
              className={`${pre_700.className} w-[50px] block sm:inline-block text-[15px]`}
            >
              주소
            </span>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="w-full shrink-1 sm:w-[310px] h-[40px] mr-[5px] sm:mr-[10px]"
              />
              <ButtonMD
                text="취소"
                style="w-[100px] sm:w-[110px] h-[40px] text-white text-[14px] sm:text-[15px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
              />
            </div>
          </div>
          <div className="text-center mt-[50px] sm:mt-[90px] ">
            <ButtonMD
              text="취소"
              style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] mr-[20px] ms:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
            />
            <ButtonMD
              text="등록"
              style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]"
            />
          </div>
        </div>
        {alertPopupShow && (
          <AlertModal setClose={setAlertPopupShow} msg={msg} type={"error"} />
        )}
      </div>
    </div>
  );
};

export default WhitePaperUploadModal;
