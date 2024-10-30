import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import { pre_400, pre_700 } from "../../../fonts";
import InputMD from "../../components/Common/InputMD";
import ButtonMD from "../../components/Common/ButtonMD";

// 번역

const StakingDetail = ({ setClose }) => {
  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[70px] py-[50px] sm:py-[90px] w-[95%] md:w-[670px] relative">
        <div className="absolute top-[15px] right-[15px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
        <div className="w-full">
          <div className="text-[16px] md:text-[18px] lg:text-[20px] font-bold  border-b border-black pb-[15px] mt-[10px]">
            <div>스테이킹 상품 상세정보</div>
          </div>
          <div className="md:px-[40px] ">
            <div className="py-[40px] sm:py-[65px] border-b border-[#959595]">
              <div className="sm:flex items-center mb-[30px]">
                <div
                  className={`text-[14px] sm:text-[15px] w-[135px] shrink-0 ${pre_700.className}`}
                >
                  만기일
                </div>
                <div className="w-full md:max-w-[250px] ">
                  <InputMD
                    style="w-full shrink-1 h-[40px] placeholder:text-[#959595]"
                    placeholder="년 / 월 / 일"
                  />
                </div>
              </div>
              <div className="sm:flex items-center mb-[30px] ">
                <div
                  className={`text-[14px] sm:text-[15px] w-[135px] shrink-0 ${pre_700.className}`}
                >
                  스테이킹 수량
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-[90%] md:w-full md:max-w-[250px]">
                    <InputMD
                      style="w-full shrink-1 h-[40px] placeholder:text-[#959595]"
                      placeholder="수량을 입력 해주세요."
                    />
                  </div>
                  <p
                    className={`${pre_700.className} text-[14px] sm:text-[15px]`}
                  >
                    GLR
                  </p>
                </div>
              </div>
              <div className="sm:flex items-center">
                <div
                  className={`text-[14px] sm:text-[15px] w-[135px] shrink-0 ${pre_700.className}`}
                >
                  보상률
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-[90%] md::w-full md:max-w-[250px] ">
                    <InputMD
                      style="w-full shrink-1 h-[40px] placeholder:text-[#959595]"
                      placeholder="자동 입력"
                    />
                  </div>
                  <p
                    className={`${pre_700.className} text-[14px] sm:text-[15px]`}
                  >
                    %
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-[40px] sm:pt-[55px] pb-[50px] sm:pb-[75px] ">
              <div className="sm:flex items-center mb-[20px]">
                <div
                  className={`text-[15px] w-[135px] shrink-0 ${pre_700.className}`}
                >
                  만기 시 예상 수익
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-[90%] md:w-full md:max-w-[250px]">
                    <InputMD
                      style="w-full shrink-1 h-[40px] placeholder:text-[#959595]"
                      placeholder="자동 계산 후 입력"
                    />
                  </div>
                  <p className={`${pre_700.className} text-[15px]`}>GLR</p>
                </div>
              </div>
              <p className="text-[#959595] text-[11px]">
                만기 시 예상 수익은 입력하신 신청수량을 현재 시점의 연 추정
                보상률 기준으로 계산한 참고용 값으로, 실제 수익은 예상치와 다를
                수 있습니다.
              </p>
            </div>
            <div>
              <ButtonMD
                text="취소"
                style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] text-white text-[14px] sm:text-[15px] bg-[#959595] mr-[20px]"
              />
              <ButtonMD
                text="가입"
                style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingDetail;
