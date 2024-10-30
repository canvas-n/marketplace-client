import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputMD from "../Common/InputMD";
import ButtonMD from "../Common/ButtonMD";
import Link from "next/link";
import { pre_400, pre_600, pre_700 } from "../../../fonts";

import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";

// 번역

const GoodsSaleModal = ({ setClose, approveSell }) => {
  const router = useRouter();
  const path = router.pathname;

  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);
  const [date, setDate] = useState("30");
  const [category, setCategory] = useState("art");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const checkAmount = (e) => {
    let inputValue = e.target.value;
    const first = inputValue.slice(0, 2);
    const firstZero = inputValue.slice(0, 1);
    const secondsZero = inputValue.slice(1, 2);

    if (first == '00') {
     inputValue = inputValue.slice(0, -1);
    }

    if (firstZero == "0" && ( secondsZero && secondsZero != "." )) {
      inputValue = inputValue.slice(1);
    }

    let rtn = /^\d*\.?\d{0,4}$/.test(inputValue);
    if (!rtn) {
      setAmount(inputValue.slice(0, -1));
      return;
    }

    setAmount(inputValue);
  }

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
        <div
          className={`${pre_700.className} w-full text-left mb-[35px] text-[16px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`}
        >
          상품 판매 등록
        </div>
        <div>
          <div className="sm:flex w-full sm:w-[450px] mx-auto items-center mb-[15px] sm:mb-[30px]">
            <span
              className={`${pre_700.className} w-[80px] block sm:inline-block text-[14px] sm:text-[15px]`}
            >
              가격
            </span>
            <div>
              <input
                type="number"
                className="w-[80%] sm:w-[90px] h-[40px] mr-[15px] "
                value={amount}
                onChange={checkAmount}
              />
              <span
                className={`${pre_700.className} w-[30px] inline-block text-[14px] sm:text-[15px]`}
              >
                cETH
              </span>
            </div>
          </div>
          <div className="sm:flex sm:w-[450px] mx-auto items-center mb-[15px] sm:mb-[30px] w-full">
            <span
              className={`${pre_700.className} w-[80px] block sm:inline-block text-[14px] sm:text-[15px] shrink-0`}
            >
              판매 기간
            </span>
            <ButtonMD
              onClick={() => setDate("30")}
              text="30일"
              style={`${
                date == "30"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }
                        shrink-1 w-[25%] h-[40px] text-[13px] border-y border-y-[#707070] border-x border-x-[#707070]`}
            />
            <ButtonMD
              onClick={() => setDate("60")}
              text="60일"
              style={`${
                date == "60"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }
                        shrink-1 w-[25%] h-[40px] text-[13px] border-y border-y-[#707070] border-r border-r-[#707070]`}
            />
            <ButtonMD
              onClick={() => setDate("90")}
              text="90일"
              style={`${
                date == "90"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }
                        shrink-1 w-[25%] h-[40px] text-[13px] border-y border-y-[#707070] border-r border-r-[#707070]`}
            />
            <ButtonMD
              onClick={() => setDate("infinity")}
              text="무기한"
              style={`${
                date == "infinity"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }
                        shrink-1 w-[25%] h-[40px] text-[13px] border-y border-y-[#707070] border-r border-r-[#707070]`}
            />
          </div>
          <div className="sm:flex sm:w-[450px] mx-auto items-center mb-[15px] sm:mb-[30px] w-full">
            <span
              className={`${pre_700.className} w-[80px] block sm:inline-block text-[14px] sm:text-[15px] shrink-0`}
            >
              카테고리
            </span>
            <ButtonMD
              onClick={() => setCategory("art")}
              text="아트"
              style={`shrink-1 w-[25%] h-[40px] text-[13px] bg-[#EBEBEB] border-y border-y-[#707070] border-x border-x-[#707070] ${
                category == "art"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }`}
            />
            <ButtonMD
              onClick={() => setCategory("pfp")}
              text="PFP"
              style={`shrink-1 w-[25%] h-[40px] text-[13px] bg-[#EBEBEB] border-y border-y-[#707070] border-r border-r-[#707070] ${
                category == "pfp"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }`}
            />
            <ButtonMD
              onClick={() => setCategory("pho")}
              text="사진"
              style={`shrink-1 w-[25%] h-[40px] text-[13px] bg-[#EBEBEB] border-y border-y-[#707070] border-r border-r-[#707070] ${
                category == "pho"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }`}
            />
            <ButtonMD
              onClick={() => setCategory("etc")}
              text="기타"
              style={`shrink-1 w-[25%] h-[40px] text-[13px] bg-[#EBEBEB] border-y border-y-[#707070] border-r border-r-[#707070] ${
                category == "etc"
                  ? "bg-[#F1BA58] text-white"
                  : "bg-[#EBEBEB] text-black"
              }`}
            />
          </div>
          <div className="sm:flex w-full sm:w-[450px] mx-auto items-top">
            <span
              className={`${pre_700.className} w-[80px] inline-block text-[15px] shrink-0`}
            >
              상품 설명
            </span>
            <textarea
              name=""
              id=""
              className="w-full h-[100px] sm:h-[150px] shrink-1 resize-none"
              placeholder="작품에 대한 설명을 입력해 주세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center mt-[50px] sm:mt-[100px]">
            <ButtonMD
              onClick={() => setClose(false)}
              text="취소"
              style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] mr-[20px] sm:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
            />
            <ButtonMD
              text="판매등록"
              style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]"
              onClick={() => approveSell(amount, date, category, description)}
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

export default GoodsSaleModal;
