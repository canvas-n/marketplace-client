import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputMD from "../Common/InputMD";
import ButtonMD from "../Common/ButtonMD";
import Link from "next/link";
import { pre_400, pre_600, pre_700 } from "../../../fonts";

import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";

const NFTDetailOffer = ({ setClose }) => {
  const router = useRouter();
  const path = router.pathname;

  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);

  const [tab, setTab] = useState("user");

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[70px] py-[50px] md:py-[90px] w-[95%] md:w-[670px] relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>

        <div className=" block">
          <div
            className={`${pre_700.className} w-full text-left mb-[35px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
          >
            가격 제안
          </div>
          <div className="flex justify-center items-center mb-[25px]">
            <span
              className={`${pre_700.className} w-[100px] md:w-[140px] inline-block text-[15px]`}
            >
              창작자 로열티
            </span>
            <input type="text" className="w-[180px] h-[40px] mr-[15px] " />
            <span
              className={`${pre_700.className} w-[30px] inline-block text-[15px]`}
            >
              %
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span
              className={`${pre_700.className} w-[100px] md:w-[140px] inline-block text-[15px]`}
            >
              제안가
            </span>
            <input type="text" className="w-[180px] h-[40px] mr-[15px]" />
            <span
              className={`${pre_700.className} w-[30px] inline-block text-[15px]`}
            >
              ETH
            </span>
          </div>
          <div className="justify-center mt-[65px] flex">
            <ButtonMD
              text="취소"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] mr-[20px] md:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
            />
            <ButtonMD
              text="가격제안"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] bg-[#F1BA58]"
            />
          </div>
        </div>
        <div className="hidden">
          <div
            className={`${pre_700.className} w-full text-left mb-[35px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
          >
            지갑 연결
          </div>
          <div className="text-center my-[77px]">
            <p className="text-[16px] md:text-[18px] leading-[30px]">
              지갑 연결이 필요한 서비스입니다.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[30px]">
              지갑을 연결 하시겠습니까?
            </p>
          </div>
          <div className="justify-center mt-[65px] flex">
            <ButtonMD
              text="취소"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] mr-[20px] md:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
            />
            <ButtonMD
              text="지갑 연결"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] bg-[#F1BA58]"
            />
          </div>
        </div>
        <div className="hidden">
          <div
            className={`${pre_700.className} w-full text-left mb-[35px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
          >
            런치패드 종료
          </div>
          <div className="text-center my-[60px]">
            <p className="text-[16px] md:text-[18px] leading-[30px]">
              런치패드 민팅이 종료 되었습니다.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[30px]">
              남은 물량을 처리 할 방법을 선택해주세요.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[30px]">
              민팅 포기 시 다시 재 민팅이 불가합니다.
            </p>
          </div>
          <div className="justify-center mt-[65px] flex">
            <ButtonMD
              text="남은 물량 민팅 포기"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] mr-[20px] md:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
            />
            <ButtonMD
              text="남은 물량 전체 민팅"
              style="w-[49%] md:w-[200px] h-[45px] rounded-[27px] text-white text-[15px] bg-[#F1BA58]"
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

export default NFTDetailOffer;
