import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoginModal from "./LoginModal";
import CloseIcon from "../../../public/images/btn_close.svg";
import {pre_400, pre_600} from "../../../fonts";
import Paginations from "../../components/Common/Paginations";
import ButtonMD from "../../components/Common/ButtonMD";

const AttendanceCheckModal = ({ setClose }) => {
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);
    const total_cnt = 20;
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
        <div className="bg-black bg-opacity-50 backdrop-blur-sm w-full h-full fixed z-[100] top-0 left-0 shadow-sm">
            <div className="bg-white relative px-[40px] pb-[40px] pt-[50px] w-[795px] h-auto top-[50%] m-auto translate-y-[-50%]" >
                <div className="absolute top-[10px] right-[10px]">
                    <CloseIcon
                        onClick={() => setClose(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div className={`text-center leading-[30px] ${pre_600.className}`}>
                    <p className="text-[24px]">5월 출석체크</p>
                    <p className={`text-[15px] text-[#ABAFBE]  ${pre_400.className}`}>출석체크 기간 2023.05.01 ~ 05.31</p>
                </div>
                <div className="mt-[20px] text-[15px]">
                    <table className={`w-full ${pre_400.className} text-center text-[15px] text-[#000000]`}>
                        <tbody>
                        <tr className="border-b border-[#DCDDE6]">
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>1
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>2
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>3</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>4</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>5</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>6</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>7</td>
                        </tr>
                        <tr className="border-b border-[#DCDDE6]">
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>8
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>9
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>10</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>11</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>12</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>13</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>14</td>
                        </tr>
                        <tr className="border-b border-[#DCDDE6]">
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>15
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>16
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>17</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>18</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>19</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>20</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>21</td>
                        </tr>
                        <tr className="border-b border-[#DCDDE6]">
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>22
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>23
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>24</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>25</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>26</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>27</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>28</td>
                        </tr>
                        <tr className="border-b border-[#DCDDE6]">
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>29
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>30
                                <span className="w-[50px] h-[50px] inline-block bg-[#F1BA58] rounded-[50%] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <i className="far fa-check text-white text-[35px] leading-[50px]"></i>
                                </span>
                            </td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}>31</td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}></td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}></td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}></td>
                            <td className={`w-[103px] h-[93px] border border-[#DCDDE6] p-[10px] align-top text-left relative`}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AttendanceCheckModal;