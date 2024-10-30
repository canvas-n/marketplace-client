import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {pre_400, pre_600, pre_800} from "../../../fonts";
import {useSignOut} from "../../react-query/hooks/auth";
import { useRouter } from "next/router";
import { SyncLoader } from "react-spinners";
import {calculateOnePercent, changeComma} from "../../lib/common";


const OrderConfModal = ({ setClose, point }) => {
    const router = useRouter();

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
        <div className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}>
            <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[33px] sm:pb-[50px] w-[95%] sm:w-[500px] min-h-[390px] relative">
                <div className="absolute top-[10px] right-[10px]">
                    <CloseIcon
                        onClick={() => setClose(false)}
                        className="cursor-pointer w-[20px] h-[20px]"
                    />
                </div>
                <div className={`w-full text-center text-[18px] pt-[30px] pb-[60px] ${pre_800.className} border-b border-[#C8C9D6]`}>
                    <p>구매확정이 완료되었습니다.</p>
                </div>
                <div className="mb-[50px]">
                    <div className="text-[15px] pt-[20px]">
                        <div className={`mb-[20px] ${pre_600.className}`}>
                            <span className="text-[14px] lg:text-[15px] w-[105px] inline-block">총 적립포인트</span>
                            <span className="text-[14px] lg:text-[15px] inline-block float-right">{ changeComma(point) } P</span>
                        </div>
                        <div>
                            <span className="text-[14px] lg:text-[15px] text-[#ABAFBE] w-[105px] inline-block">- 기본적립</span>
                            <span className="text-[14px] lg:text-[15px] text-[#ABAFBE] inline-block float-right">{ changeComma(point) } P</span>
                        </div>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div
                        className="bg-black w-[190px] h-[50px] text-center m-auto leading-[50px] text-white text-[16px] rounded-[3px] cursor-pointer"
                        onClick={() => setClose(false)}
                    >
                        확인
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderConfModal;