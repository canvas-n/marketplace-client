import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import { pre_400 } from "../../../fonts";
import { useUser } from "../../react-query/hooks/user";
// 번역

import { useAgreeList } from "../../react-query/hooks/etc";

const PersonalModal = ({ setClose, setPayAgree }) => {
  const { service, privacy, privacy_supply, privacy_term } = useAgreeList();

  const { user } = useUser();

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

  const btnAgree = () => {
    setClose(false);
    setPayAgree(true);
  };

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[40px] pt-[60px] pb-[40px] w-[95%] lg:w-[930px] relative ">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>

        <div className="w-full">
          <div className="mt-5">
            <div className="text-md font-medium">개인정보제공 동의</div>
          </div>
          <div className="mt-2.5 border-b border-b-gray-350"></div>
          <div className="mt-2.5 text-[15px] lg:h-[450px] h-[200px] overflow-auto width_scroll">
            {privacy_supply?.agr_content_kor.split("\n").map((line, idx) => {
              return (
                <span key={`privacy_supply_${idx}`}>
                  {" "}
                  {line} <br />
                </span>
              );
            })}
          </div>
          <div className="mt-[60px]">
            <div
              onClick={btnAgree}
              className="bg-black w-[190px] h-[50px] text-center m-auto leading-[50px] text-white text-[16px] rounded-[3px] cursor-pointer"
            >
              동의합니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalModal;
