import React, {useState} from "react"
import {pre_400, pre_700} from "../../../../fonts"

import Image from "next/image"
import Layout from "../../../components/Layout/index"
import PageTitle from "../../../components/Common/PageTitle"
import ButtonMD from "../../../components/Common/ButtonMD"
import InputMD from "../../../components/Common/InputMD"
import Link from "next/link";
import Paginations from "../../../components/Common/Paginations";
import IconUp from "../../../../public/images/icon_top_arrow.svg";
import IconDown from "../../../../public/images/icon_down_arrow.svg";

const GovernanceDetail = () => {
    const [tab, setTab] = useState('governance');
    const [type, setType] = useState('ing');
    const [info, setInfo] = useState(false)

    const InfoOpen = () => {
        if (info){
            setInfo(false)
        } else{
            setInfo(true)
        }
    }
    return(
        <Layout path="/">
            <PageTitle type="signup" title="거버넌스" />
            <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
                <div className="mx-[20px]">
                    <div className="flex border-b border-[#959595] mb-[40px] md:mb-[80px]">
                        <Link href="/service/governance">
                            <div className={`${pre_700.className}  border-black border-b-[4px] mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} >
                                거버넌스
                            </div>
                        </Link>
                        <Link href="/service/offer">
                            <div className={`${pre_400.className} text-[#959595] mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} >
                                제안하기
                            </div>
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="mb-[20px] md:mb-[30px]">
                            { type == 'ing' ?
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] text-white w-[65px] md:w-[80px] h-[25px] md:h-[30px] rounded-[27px] bg-[#F1BA58]`}>진행 중</span>
                                :
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] text-white w-[65px] md:w-[80px] h-[25px] md:h-[30px] rounded-[27px] bg-[#959595]`}>종료</span>
                            }
                            <h2 className={`text-[20px] md:text-[22px] lg:text-[25px] ${pre_700.className} mt-[20px] md:mt-[30px]`}>캔버스엔의 건승을 기원합니다!</h2>
                        </div>
                        <div className="pb-[30px] md:pb-[50px] mb-[30px] md:mb-[50px] border-b border-[#959595]">
                            <div className={`text-[20px] flex mb-[10px] md:mb-[20px] items-center`}>
                                <p className="w-[100px] md:w-[140px] text-[14px] md:text-[15px] text-[#959595]">제안자</p>
                                <p className={`${pre_700.className} text-[14px] md:text-[15px]`}><span className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-[50%] bg-[#FF1616] inline-block mr-[15px] align-middle"></span>지남이</p>
                            </div>
                            <div className={`text-[20px] flex items-center`}>
                                <p className="w-[100px] md:w-[140px] text-[14px] md:text-[15px] text-[#959595]">투표 종료</p>
                                <p className={`${pre_700.className} text-[14px] md:text-[15px]`}>2023.07.27 18:00</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-[50px] md:mb-[80px]">
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] w-[100px] md:w-[120px] h-[25px] md:h-[30px] rounded-[27px] bg-[#EBEBEB] mb-[10px] md:mb-[20px] ${pre_700.className}`}>Summary</span>
                                <p className='text-[14px] md:text-[15px] mb-[20px]'>제안 내용에 대한 간략한 설명 제안 내용에 대한 간략한 설명 제안 내용에 대한 간략한 설명 제안 내용에 대한 간략한 설명</p>
                            </div>
                            <div className="mb-[50px] md:mb-[80px]">
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] w-[100px] md:w-[120px] h-[25px] md:h-[30px] rounded-[27px] bg-[#EBEBEB] mb-[10px] md:mb-[20px] ${pre_700.className}`}>Abstract</span>
                                <p className={`text-[14px] md:text-[15px] mb-[20px] overflow-hidden ${info == true ? "h-auto" : "h-[100px] md:h-auto"}`}>제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명 제안 내용에 대한 세부 설명</p>
                                { info == true ?
                                    <div className={`block md:hidden border border-[#959595] text-center rounded-[5px] mb-[20px] mt-[20px]`} onClick={() => InfoOpen()}><IconUp className="w-[20px] inline-block" /></div>
                                    :
                                    <div className={`block md:hidden border border-[#959595] text-center rounded-[5px] mb-[20px] mt-[20px]`} onClick={() => InfoOpen()}><IconDown className="w-[20px] inline-block" /></div>
                                }
                            </div>
                            <div className="mb-[50px] md:mb-[80px]">
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] w-[100px] md:w-[120px] h-[25px] md:h-[30px] rounded-[27px] bg-[#EBEBEB] mb-[10px] md:mb-[20px] ${pre_700.className}`}>Vote type</span>
                                <div className="relative pl-[100px] md:pl-[140px] mb-[20px] md:mb-[30px]">
                                    <p className={`text-[14px] md:text-[15px] absolute top-0 left-0 ${pre_700.className}`}>1. YES</p>
                                    <p className='text-[14px] md:text-[15px] '>YES에 대한 문구 YES에 대한 문구 YES에 대한 문구 YES에 대한 문구 YES에 대한 문구 YES에 대한 문구</p>
                                </div>
                                <div className="relative pl-[100px] md:pl-[140px]">
                                    <p className={`text-[14px] md:text-[15px] absolute top-0 left-0 ${pre_700.className}`}>2. NO</p>
                                    <p className='text-[14px] md:text-[15px]'>NO에 대한 문구 NO에 대한 문구 NO에 대한 문구 NO에 대한 문구 NO에 대한 문구 NO에 대한 문구 NO에 대한 문구</p>
                                </div>
                            </div>
                            <div className="mb-[70px] md:mb-[100px]">
                                <span className={`text-center leading-[25px] md:leading-[30px] inline-block text-[13px] md:text-[15px] w-[100px] md:w-[120px] h-[25px] md:h-[30px] rounded-[27px] bg-[#EBEBEB] mb-[10px] md:mb-[20px] ${pre_700.className}`}>Motivation</span>
                                <p className='text-[14px] md:text-[15px] mb-[20px]'>제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유 제안을 하게 된 배경, 이유</p>
                            </div>
                            <div className="mb-[70px] md:mb-[100px]">
                                <p className={`text-[18px] md:text-[20px] ${pre_700.className} mb-[20px] md:mb-[30px]`}>투표</p>
                                <div className="flex mb-[20px]">
                                    <ButtonMD text="1. YES" style="w-[50%] h-[50px] md:h-[60px] text-white text-[16px] md:text-[20px] bg-[#F1BA58] mr-[15px]"/>
                                    <ButtonMD text="2. NO" style="w-[50%] h-[50px] md:h-[60px] text-white text-[16px] md:text-[20px] bg-[#DADADA]"/>
                                </div>
                                <ButtonMD text="투표하기" style={`w-full h-[50px] md:h-[60px] text-black text-[16px] md:text-[20px] border border-black ${pre_700.className}`}/>
                            </div>
                            <div className="mb-[70px] md:mb-[100px] pb-[70px] md:pb-[100px] border-b border-[#707070]">
                                <p className={`text-[18px] md:text-[20px] ${pre_700.className} mb-[30px]`}>실시간 결과</p>
                                <div className="mb-[30px]">
                                    <div className="flex justify-between mb-[10px]">
                                        <div className={`text-[18px] md:text-[20px] ${pre_700.className}`}>1. YES</div>
                                        <div className="flex items-center">
                                            <p className="text-[14px] md:text-[15px] mr-[80px] text-[#959595]"><span>1,548,875 </span><span className="ml-[10px]">명</span></p>
                                            <p><span className={`text-[18px] md:text-[20px] ${pre_700.className}`}>75.1</span><span className="text-[14px] md:text-[15px] text-[#959595] ml-[10px]">%</span></p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[15px] rounded-[8px] border border-[#E1E1E1] relative"><div className="bg-[#F1BA58] w-[60%] rounded-[8px] h-[15px] absolute top-[-1px] left-[-1px]"></div></div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-[10px]">
                                        <div className={`text-[18px] md:text-[20px] ${pre_700.className}`}>1. NO</div>
                                        <div className="flex items-center">
                                            <p className="text-[14px] md:text-[15px] mr-[80px] text-[#959595]"><span>1,548,875 </span><span className="ml-[10px]">명</span></p>
                                            <p><span className={`text-[18px] md:text-[20px] ${pre_700.className}`}>75.1</span><span className="text-[14px] md:text-[15px] text-[#959595] ml-[10px]">%</span></p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[15px] rounded-[8px] border border-[#E1E1E1] relative"><div className="bg-[#F1BA58] w-[60%] rounded-[8px] h-[15px] absolute top-[-1px] left-[-1px]"></div></div>
                                </div>
                            </div>
                            <div className="mb-[70px] lg:mb-[150px]">
                                <p className={`text-[18px] md:text-[20px] ${pre_700.className} mb-[20px] md:mb-[30px] align-middle`}>참여자
                                    <span className={`text-center leading-[30px] inline-block text-[13px] text-white w-[150px] h-[30px] rounded-[27px] bg-[#959595] mb-[20px] ml-[30px] ${pre_400.className}`}>
                                        <span className="mr-[20px]">총 참여자</span>
                                        <span>5,547 명</span>
                                    </span>
                                </p>
                                <div className="mb-[30px]">
                                    <div className="pb-[20px] border-b border-[#707070] mb-[70px] md:mb-[100px]">
                                       <table className={`table-fixed w-full text-[14px] md:text-[15px] ${pre_700.className} mb-[20px]`}>
                                           <tbody>
                                           <tr>
                                               <td className="pl-[10px] pb-[10px] border-b border-[#707070]">지갑주소</td>
                                               <td className="w-[110px] sm:w-[170px] md:w-[270px] pb-[10px] border-b border-[#707070]">투표권(GLR)</td>
                                               <td className="text-center w-[70px] sm:w-[120px] pb-[10px] border-b border-[#707070]">투표값</td>
                                           </tr>
                                           </tbody>
                                       </table>
                                        <table className={`table-fixed w-full text-[14px] md:text-[15px] `}>
                                           <tbody>
                                           <tr>
                                               <td className="py-[10px]">
                                                   <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-[50%] inline-block bg-[#F1BA58] mr-[5px] sm:mr-[15px] md:mr-[25px] align-middle"></div>
                                                   <span className="whitespace-nowrap overflow-ellipsis overflow-hidden inline-block w-[60%] md:w-[80%] align-middle">2as38729djxi182xj98a2y129873jzs86y87TJKYTV657zsm...</span>
                                               </td>
                                               <td className="w-[110px] sm:w-[170px] md:w-[270px] py-[10px]">214,874 GLR</td>
                                               <td className="text-center w-[70px] sm:w-[120px] py-[10px]">1. YES</td>
                                           </tr>
                                           </tbody>
                                       </table>
                                    </div>
                                    <Paginations />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default GovernanceDetail;