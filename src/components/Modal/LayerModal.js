import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { pre_400, pre_300, pre_800, poppins_800 } from "../../../fonts";

// 번역

import Image from "next/image";

const LayerModal = ({ setClose }) => {
  const router = useRouter();
  //const { t } = useTranslation();

  const handleClose = () => {
    const today = new Date();
    const saveDay = today.getDate();

    setClose(false);
    localStorage.setItem("hidePopup", saveDay);
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-[#f1f2f4] relative w-[95%] sm:w-[500px]">
        <div className={`px-[20px] pt-[30px] sm:pt-[50px] pb-[40px] `}>
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          <p
            className={`${poppins_800.className} text-[23px] sm:text-[25px] lg:text[30px] text-center`}
          >
            Rental of Space
          </p>
          <p
            className={`${pre_400.className} text-[16px] sm:text-[18px] lg:text[20px] text-center`}
          >
            캔버스N의 특별한 공간에서 함께 하세요.
          </p>
          <div className="sm:mb-[10px]">
            <Image
              src={require("/public/images/layer.png")}
              alt={"layer"}
              className="max-w-[100%] max-h-[100%] w-auto translate-x-[-50%] left-[50%] relative"
            />
          </div>
        </div>

        <div
          className={`w-full bg-[#ce3843] sm:w-[500px] text-white flex items-center`}
        >
          <span
            onClick={handleClose}
            className={`${pre_300.className} cursor-pointer inline-block w-[50%] text-[15px] sm:text-[16px] h-[50px] leading-[50px] text-center layer_pop_after relative`}
          >
            오늘 하루 보지않기
          </span>
          <Link
            className={`${pre_300.className} cursor-pointer inline-block w-[50%] text-center text-[15px] sm:text-[16px]`}
            href={"http://www.canvasn.net/rental"}
            target={"_blank"}
          >
            갤러리 대관 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayerModal;
