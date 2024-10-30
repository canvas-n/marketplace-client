import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {pre_400, pre_800} from "../../../fonts";
import {useSignOut} from "../../react-query/hooks/auth";
import { useRouter } from "next/router";
import { SyncLoader } from "react-spinners";


const OfferCancelModal = ({ setClose, btnOfferCancel, state, seq }) => {
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

    const startCancel = () => {
        if (!state || !seq) {
            return;
        }
        btnOfferCancel(state, seq);
    }

    return (
        <div className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}>
            <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[33px] sm:pb-[50px] w-[95%] sm:w-[500px] min-h-[230px] relative">
                <>
                    <div className="absolute top-[10px] right-[10px]">
                        <CloseIcon
                            onClick={() => setClose(false)}
                            className="cursor-pointer w-[20px] h-[20px]"
                        />
                    </div>
                    <div className={`w-full text-center text-[16px] pt-[50px] ${pre_400.className}`}>
                        <>
                            <p>가격제안을 취소하시겠습니까?</p>
                        </>
                    </div>
                    <div className="mt-[60px]">
                        <div
                            className="bg-black w-[190px] h-[50px] text-center m-auto leading-[50px] text-white text-[16px] rounded-[3px] cursor-pointer"
                            onClick={startCancel}
                        >
                            제안 취소하기
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}

export default OfferCancelModal;