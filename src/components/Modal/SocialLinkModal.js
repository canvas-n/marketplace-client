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


const SocialLinkModal = ({ setClose }) => {
    const router = useRouter();
    const path = router.pathname;


    const [msg, setMsg] = useState("");
    const [alertPopupShow, setAlertPopupShow] = useState(false);

    const [tab, setTab] = useState("user");


    return (
        <div  className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}>

            <div className="bg-white px-[20px] sm:px-[70px] py-[50px] sm:py-[90px] w-[95%] md:w-[670px] relative">
                <div className="absolute top-[10px] right-[10px]">
                    <CloseIcon
                        onClick={() => setClose(false)}
                        className="cursor-pointer w-[20px] h-[20px]"
                    />
                </div>
                <div className={`${pre_700.className} w-full text-left mb-[35px] text-[18px] sm:text-[18px] leading-[18px] text-black border-b border-black pb-[15px]`} >
                    소셜 링크 등록
                </div>
                <div className="mt-[40px] sm:mt-[75px] ">
                    <div className="sm:flex justify-center items-center">
                        <span className={`${pre_700.className} w-[50px] inline-block text-[14px] sm:text-[15px]`}>주소</span>
                        <input type="text" className="w-full sm:w-[380px] h-[40px] mr-[15px]"/>
                    </div>
                    <div className="text-center mt-[50px] sm:mt-[90px]">
                        <ButtonMD text="취소" style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] mr-[20px] sm:mr-[40px] bg-[#959595] shadow-[0_3px_6px_rgba(0,0,0,0.16)]" />
                        <ButtonMD text="등록" style="w-[45%] sm:w-[200px] h-[45px] rounded-[27px] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]"  />
                    </div>
                </div>
                { alertPopupShow &&
                    <AlertModal setClose={setAlertPopupShow} msg={msg} type={'error'}/>
                }
            </div>
        </div>
    );
};

export default SocialLinkModal;
