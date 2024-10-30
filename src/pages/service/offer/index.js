import React, {useState} from "react"
import {pre_400, pre_700} from "../../../../fonts"

import Image from "next/image"
import Layout from "../../../components/Layout/index"
import PageTitle from "../../../components/Common/PageTitle"
import ButtonMD from "../../../components/Common/ButtonMD"
import InputMD from "../../../components/Common/InputMD"
import Link from "next/link";
const OfferHome = () => {
    const [tab, setTab] = useState('governance');
    const [type, setType] = useState('ing');
    return(
        <Layout path="/">
            <PageTitle type="signup" title="거버넌스" />
            <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
                <div className="mx-[20px]">
                    <div className="flex border-b border-[#959595] mb-[40px] md:mb-[80px]">
                        <Link href="/service/governance">
                            <div className={`${pre_400.className} text-[#959595] mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} >
                                거버넌스
                            </div>
                        </Link>
                        <Link href="/service/offer">
                            <div className={`${pre_700.className} border-black border-b-[4px] mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} >
                                제안하기
                            </div>
                        </Link>
                    </div>
                    <div className="mb-[100px] md:mb-[150px]">
                        <div className={`pb-[10px] md:pb-[20px] text-[16px] md:text-[18px] lg:text-[20px] border-b border-[#959595] mb-[30px] ${pre_700.className}`}>
                            제안 개요
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">주제</div>
                            <div className="w-full shrink-1"><InputMD style="w-full h-[45px] placeholder:text-[#959595]" placeholder="투표 주제 / 제목 입력"/></div>
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">투표 시작</div>
                            <div className="w-full shrink-1 text-[#959595]">
                                <div className="flex mb-[5px]">
                                    <select className="w-[33.33333%] sm:w-[110px] h-[45px] mr-[5px] sm:mr-[10px]">
                                        <option value="">2023년</option>
                                    </select>
                                    <select className="w-[33.33333%] sm:w-[95px] h-[45px] mr-[5px] sm:mr-[10px]">
                                        <option value="">01월</option>
                                    </select>
                                    <select className="w-[33.33333%] sm:w-[95px] h-[45px] sm:mr-[30px]">
                                        <option value="">01일</option>
                                    </select>
                                    <div className="flex">
                                        <select className="w-[50%] sm:w-[95px] h-[45px] mr-[5px] sm:mr-[10px]">
                                            <option value="">00시</option>
                                        </select>
                                        <select className="w-[50%] sm:w-[95px] h-[45px]">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">투표 종료</div>
                            <div className="w-full shrink-1 text-[#959595]">
                                <div className="flex mb-[5px]">
                                    <select className="w-[33.33333%] sm:w-[110px] h-[45px] mr-[5px] sm:mr-[10px]">
                                        <option value="">2023년</option>
                                    </select>
                                    <select className="w-[33.33333%] sm:w-[95px] h-[45px] mr-[5px] sm:mr-[10px]">
                                        <option value="">01월</option>
                                    </select>
                                    <select className="w-[33.33333%] sm:w-[95px] h-[45px] sm:mr-[30px]">
                                        <option value="">01일</option>
                                    </select>
                                    <div className="flex">
                                        <select className="w-[50%] sm:w-[95px] h-[45px] mr-[5px] sm:mr-[10px]">
                                            <option value="">00시</option>
                                        </select>
                                        <select className="w-[50%] sm:w-[95px] h-[45px]">
                                            <option value="">00분</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">Summary</div>
                            <div className="w-full shrink-1"><InputMD style="w-full h-[45px] placeholder:text-[#959595]" placeholder="투표 주제 / 제목 입력"/></div>
                        </div>
                        <div className="md:flex items-start mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">Abstract</div>
                            <div className="w-full shrink-1"><textarea name="" id="" className="w-full h-[200px] resize-none placeholder:text-[#959595]" placeholder="제안 내용에 대한 세부 설명"></textarea></div>
                        </div>
                        <div className="md:flex items-start mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">Motivation</div>
                            <div className="w-full shrink-1"><textarea name="" id="" className="w-full h-[200px] resize-none placeholder:text-[#959595]" placeholder="제안 배경 설명 입력"></textarea></div>
                        </div>
                    </div>
                    <div className="mb-[70px] md:mb-[100px]">
                        <div className={`pb-[10px] md:pb-[20px] text-[16px] md:text-[18px] lg:text-[20px] border-b border-[#959595] mb-[30px] ${pre_700.className}`}>
                            투표 타입
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">YES</div>
                            <div className="w-full shrink-1"><InputMD style="w-full h-[45px] placeholder:text-[#959595]" placeholder="투표 안건 문구 삽입"/></div>
                        </div>
                        <div className="md:flex items-center mb-[25px]">
                            <div className="w-[170px] lg:w-[275px] shrink-0 text-[16px] md:text-[18px] lg:text-[20px]">NO</div>
                            <div className="w-full shrink-1"><InputMD style="w-full h-[45px] placeholder:text-[#959595]" placeholder="투표 안건 문구 삽입"/></div>
                        </div>
                    </div>
                    <div className="flex md:block mb-[70px] md:mb-[150px] text-center">
                        <ButtonMD text="취소" style="w-[50%] md:w-[325px] h-[45px] md:h-[55px] rounded-[27px] text-[16px] md:text-[18px] lg:text-[20px] text-white shadow-[0_3px_6px_rgba(0,0,0,0.16)] bg-[#959595] mr-[10px] md:mr-[20px] lg:mr-[40px]"/>
                        <ButtonMD text="등록" style="w-[50%] md:w-[325px] h-[45px] md:h-[55px] rounded-[27px] text-[16px] md:text-[18px] lg:text-[20px] text-white shadow-[0_3px_6px_rgba(0,0,0,0.16)] bg-[#F1BA58]" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default OfferHome;