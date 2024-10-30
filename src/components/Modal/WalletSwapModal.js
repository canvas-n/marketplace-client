import CloseIcon from "../../../public/images/btn_close.svg";
import React, {useEffect, useState} from "react";
import {pre_300, pre_400, pre_700} from "../../../fonts";
import InputMD from "../../Components/Common/InputMD";
import ButtonMD from "../../Components/Common/ButtonMD";
import IconMetaMask from "../../../public/images/icon_metamask.svg";
import IconClone from "../../../public/images/icon_clone.svg";
import IconLeftRight from "../../../public/images/icon_leftright.svg";
import classNames from "classnames";


// 번역



const WalletSwapModal = ({ setClose }) => {

    const [innerWidth, setInnerWidth] = useState(
        typeof window !== 'undefined' ?  window.innerWidth : ''
    );
    const [mSellMenuRep, setMSellMenuRep] = useState(false);

    useEffect(() => {
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeListener);

        if (innerWidth < 600) {
            setMSellMenuRep(true);
        } else {
            setMSellMenuRep(false);
        }
    });


    return (
        <div className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}>
            <div className="bg-white px-[20px] sm:px-[70px] py-[50px] md:py-[90px] w-[95%] md:w-[670px] relative">
                <div className="absolute top-[15px] right-[15px]">
                    <CloseIcon
                        onClick={() => setClose(false)}
                        className="cursor-pointer w-[20px] h-[20px]"
                    />
                </div>
                <div className="w-full">
                    <div className="text-[16px] md:text-[18px] lg:text-[20px] font-bold border-b border-black pb-[20px] mt-[10px]">
                        <div className={classNames(mSellMenuRep ? `justify-between` : ``, `flex items-center`)}>
                            <IconMetaMask
                                className={classNames(mSellMenuRep ? `hidden` : `w-[40px] ml-[30px] mr-[30px] md:mr-[50px]`)}/>
                            <p className={classNames(mSellMenuRep ? `text-[15px]` : `text-[16px]` , `${pre_700.className}`)}>x903ui82318237LjkH0928...</p>
                            <p className={classNames(mSellMenuRep ? `w-[15px] mr-[50px]` : `w-[15px] ml-[80px] sm:ml-[140px]`)}><IconClone/></p>
                        </div>
                    </div>
                    <div className="md:px-[40px] ">
                        <div className="pt-[30px] border-b border-[#959595]">
                            <div className="sm:flex items-center mb-[30px]">
                                <div className={`text-[14px] sm:text-[15px] w-[90px] shrink-0 ${pre_700.className}`}>ETH</div>
                                <div className="flex items-center justify-between w-full">
                                     <div className="w-[90%] md:w-full md:max-w-[360px] "><InputMD style="w-full shrink-1 h-[40px] placeholder:text-[#959595]" placeholder="보유 수량 표시" /></div>
                                </div>
                            </div>
                            <div className="sm:flex items-center mb-[30px] ">
                                <div className={`text-[14px] sm:text-[15px] w-[90px] shrink-0 ${pre_700.className}`}>cETH</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-[90%] md:w-full md:max-w-[360px]"><InputMD style="w-full shrink-1 h-[40px] placeholder:text-[#959595]" placeholder="보유 수량 표시"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[30px] pb-[55px] ">
                            <div className="sm:flex items-center mb-[20px]">
                                <div className={`text-[15px] w-[90px] shrink-0 ${pre_700.className}`}>스왑 신청</div>
                                <div className="flex items-center justify-center justify-between w-full">
                                    <div className="md:max-w-[150px]"><InputMD style="w-[80%] md:w-full shrink-1 h-[40px] placeholder:text-[#959595] placeholder:text-[13px] placeholder:text-right placeholder:font-bold" placeholder="ETH" /></div>
                                    <IconLeftRight className="mr-[30px] md:mx-[20px] w-[30px] self-center"/>
                                    <div className="md:max-w-[150px]"><InputMD style="w-[80%] md:w-full shrink-1 h-[40px] placeholder:text-[#959595] placeholder:text-[13px] placeholder:text-right placeholder:font-bold" placeholder="cETH" /></div>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center" >
                            <ButtonMD text="취소" style="w-[100px] h-[31px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.29)] text-white text-[14px] sm:text-[15px] bg-[#959595] mr-[20px]"/>
                            <ButtonMD text="신청" style="w-[100px] h-[31px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.29)] text-white text-[14px] sm:text-[15px] bg-[#F1BA58]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletSwapModal;
