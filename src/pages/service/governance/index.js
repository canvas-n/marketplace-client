import React, {useState} from "react"
import {pre_400, pre_700} from "../../../../fonts"

import Image from "next/image"
import Layout from "../../../components/Layout/index"
import PageTitle from "../../../components/Common/PageTitle"
import ButtonMD from "../../../components/Common/ButtonMD"
import InputMD from "../../../components/Common/InputMD"
import Link from "next/link";

const GovernanceHome = () => {
    const [tab, setTab] = useState('governance');
    const [type, setType] = useState('ing');
    const [history, setHistory] = useState(true);
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
                    <div className="w-full mb-[70px] lg:mb-[150px]">
                        <div className="text-center mb-[50px] md:mb-[70px]">
                            <Image className="inline-block mb-[35px] w-[150px] md:w-[288px]"  src={require("../../../../public/images/logo_vertical.png")}/>
                            <p className={`text-[18px] md:text-[20px] ${pre_700.className} mb-[10px] md:mb-[20px]`}>Canvas N 거버넌스</p>
                            <p className={`text-[18px] md:text-[20px] text-[#959595] mb-[20px]`}><span>구성원</span><span className="ml-[35px]">1,234 명</span></p>
                        </div>
                        { history == true ?
                            <div className="w-full bg-[rgba(235,235,235,0.5)] md:h-[400px] rounded-[10px] border border-[#B8B8B8] flex justify-center items-center p-[30px] md:px-[50px]">
                                <div>
                                    <div className="mb-[15px] md:mb-[35px]">
                                        { type == 'ing' ?
                                            <span className={`text-center leading-[30px] inline-block text-[15px] text-white w-[80px] h-[30px] rounded-[27px] bg-[#F1BA58]`}>진행 중</span>
                                            :
                                            <span className={`text-center leading-[30px] inline-block text-[15px] text-white w-[80px] h-[30px] rounded-[27px] bg-[#959595]`}>종료</span>
                                        }

                                    </div>
                                    <div className="mb-[25px] md:mb-[55px]">
                                        <p className={`${pre_700.className} mb-[15px] md:mb-[35px] text-[20px]`}>캔버스 엔의 건승을 기원합니다!</p>
                                        <p className={`text-[15px] mb-[20px] sm:pl-[100px] md:pl-[130px] relative`}>
                                            <span className={`block sm:absolute top-0 left-0 ${pre_700.className}`}>Summary</span>
                                            <span>제안 내용 간단히 미리보기 제안 내용 간단히 미리보기 제안 내용 간단히 미리보기 제안 내용 간단히 미리보기</span>
                                        </p>
                                        <p className='text-[15px] sm:pl-[100px] md:pl-[130px] relative'>
                                            <span className={`block sm:absolute top-0 left-0 ${pre_700.className}`}>투표 기간</span>
                                            <span>2023.07.17 ~ 2023.07.27</span>
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <Link href="/service/governance/id">
                                             <ButtonMD text="자세히 보기" style="w-[150px] h-[40px] rounded-[27px] text-white text-[15px] bg-[#F1BA58] shadow-[0_2px_3px_rgba(149,149,149,0.4)]"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="w-full bg-[rgba(235,235,235,0.5)] md:h-[400px] rounded-[10px] border border-[#B8B8B8] flex justify-center items-center p-[30px] md:px-[50px]">
                                <div className="text-center">
                                    <h2 className={`${pre_700.className} text-[18px] md:text-[20px] mb-[30px] md:mb-[85px]`}>제안 내역이 없습니다.</h2>
                                     <ButtonMD text="자세히 보기" style="w-[150px] h-[40px] rounded-[27px] text-white text-[15px] bg-[#F1BA58] shadow-[0_2px_3px_rgba(149,149,149,0.4)]"/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default GovernanceHome;