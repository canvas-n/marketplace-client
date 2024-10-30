//04NFT 컬렉션
import React, {useState} from "react";

import Layout from "../../components/Layout";
import PageTitle from "../../components/Common/PageTitle";
import ButtonMD from "../../components/Common/ButtonMD";
import InputMD from "../../components/Common/InputMD";
import CollectionCard from "../../components/Card/CollectionCard";
import Paginations from "../../components/Common/Paginations";

import {pre_300, pre_600, pre_800} from "../../../fonts";
import IconFilter from "../../../public/images/icon_filter.svg";
import IconDownArrow from "../../../public/images/icon_down_arrow.svg";
import IconTopArrow from "../../../public/images/icon_top_arrow.svg";
import IconCategoryArtOn from "../../../public/images/icon_category_art_b.svg";
import IconCategoryArtOff from "../../../public/images/icon_category_art_g.svg";
import IconCategoryPfpOn from "../../../public/images/icon_category_pfp_b.svg";
import IconCategoryPfpOff from "../../../public/images/icon_category_pfp_g.svg";
import IconCategoryPhotoOn from "../../../public/images/icon_category_photo_b.svg";
import IconCategoryPhotoOff from "../../../public/images/icon_category_photo_g.svg";
import IconCategoryEtcOn from "../../../public/images/icon_category_etc_b.svg";
import IconCategoryEtcOff from "../../../public/images/icon_category_etc_g.svg";
import IconSearch from "../../../public/images/icon_search.svg";
import Image from "next/image";


const Collection = () => {
    const [tab, setTab] = useState('all');
    const [category, setCategory] = useState('CategoryArt');
    const [filter, setFilter] = useState(false);
    const [page, setPage] = useState(1);

    const filterOpen = () => {
        if (filter) {
            setFilter(false)
        } else {
            setFilter(true)
        }
    }
    return (
        <Layout path="/">
            <PageTitle title="컬렉션" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                    <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                </div>
                {/*<div className="mx-[20px]">
                    <div className="relative lg:flex lg:justify-between mb-[40px] lg:border-b lg:border-[#959595]">
                        <div className="flex border-b border-[#959595] lg:border-0">
                            <div
                                className={`mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px]  ${
                                    tab === "all" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("all")}
                            >
                                전체
                            </div>
                            <div
                                className={`mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "art" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("art")}
                            >
                                아트
                            </div>
                            <div
                                className={`mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "pfp" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("pfp")}
                            >
                                PFP
                            </div>
                            <div
                                className={`mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "photo" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("photo")}
                            >
                                사진
                            </div>
                            <div
                                className={`mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "etc" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("etc")}
                            >
                                기타
                            </div>
                        </div>
                        <div className="text-right mt-[20px] lg:mt-0">
                            <select className="long" name="" id="">
                                <option value="">거래량 많은 순</option>
                                <option value="">거래량 많은 순</option>
                                <option value="">거래량 많은 순</option>
                            </select>
                        </div>
                    </div>
                      필터 시작
                    <div className="relative">
                        <div className="flex w-full sm:w-[300px] justify-between mb-[20px]"  onClick={() => filterOpen()}>
                            <div>
                                <IconFilter className="w-[18px] inline-block mr-[20px]"/>
                                <span>필터</span>
                            </div>
                            <IconDownArrow className="w-[11px]"/>
                        </div>
                        {filter == true &&
                            <div className="w-[300px] mr-[115px] absolute top-[40px] left-0 hidden lg:block">
                                <div className="border-y border-[#DADADA] py-[30px]">
                                    <div className="flex justify-between mb-[50px]">
                                        <p className={`text-[15px] text-black ${pre_600.className}`}>가격 범위</p>
                                        <IconTopArrow className="w-[11px]" />
                                    </div>
                                    <div className="flex justify-between mb-[10px]">
                                        <div className="relative w-[135px]">
                                            <InputMD style={`w-full h-[30px] border border-[#DADADA] rounded-[15px] placeholder:text-[12px] leading-[30px] ${pre_800.className}`} placeholder="0.00" />
                                            <span className={`absolute right-[25px] top-[6px] text-[12px] text-[#959595] ${pre_800.className}`}>ETH</span>
                                        </div>
                                        <span className={`text-[20px] ${pre_800.className}`}>~</span>
                                        <div className="relative w-[135px]">
                                            <InputMD style={`w-full h-[30px] border border-[#DADADA] rounded-[15px] placeholder:text-[12px] leading-[30px] ${pre_800.className}`} placeholder="0.00" />
                                            <span className={`absolute right-[25px] top-[6px] text-[12px] ${pre_800.className}`}>ETH</span>
                                        </div>
                                    </div>
                                    <ButtonMD text="검색" style="w-full h-[30px] bg-[#EBEBEB] rounded-[15px] text-[15px] text-[#959595]" />
                                </div>
                                <div className={`border-b border-[#DADADA] py-[30px] ${pre_600.className}`}>
                                    <div className="flex justify-between mb-[50px]">
                                        <p className={`text-[15px] text-black `}>판매 형태</p>
                                        <IconTopArrow className="w-[11px]" />
                                    </div>
                                    <div className="pl-[10px] text-[13px]">
                                        <p className="flex justify-between mb-[20px]"><span>판매 중</span><span>14,773</span></p>
                                        <p className="flex justify-between mb-[20px] text-[#959595]"><span>판매 예정</span><span>14,773</span></p>
                                        <p className="flex justify-between text-[#959595]"><span>판매 종료</span><span>14,773</span></p>
                                    </div>
                                </div>
                                <div className={`border-b border-[#DADADA] py-[30px] ${pre_600.className}`}>
                                    <div className="flex justify-between mb-[50px]">
                                        <p className={`text-[15px] text-black `}>카테고리</p>
                                        <IconTopArrow className="w-[11px]" />
                                    </div>
                                    <div className="text-[13px]">
                                        <div className="flex justify-between">
                                            <div
                                                className={`mr-[50px] mb-[20px] text-[13px] ${
                                                    category === "CategoryArt" ? "text-black font-bold" : "text-[#959595]"
                                                }`}
                                                onClick={() => setCategory("CategoryArt")}
                                            >
                                                {category === "CategoryArt" ?
                                                    (
                                                        <IconCategoryArtOn className="w-[21px] inline-block mr-[60px]" />
                                                    ) : (
                                                        <IconCategoryArtOff className="w-[21px] inline-block mr-[60px]" />
                                                    )
                                                }
                                                <span>아트</span>
                                            </div>
                                            <p className={`text-[13px] ${
                                                category === "CategoryArt" ? "text-black font-bold" : "text-[#959595]"
                                            }`}>643</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className={`mr-[50px] mb-[20px] text-[13px] ${
                                                    category === "CategoryPfp" ? "text-black font-bold" : "text-[#959595]"
                                                }`}
                                                onClick={() => setCategory("CategoryPfp")}
                                            >
                                                {category === "CategoryPfp" ?
                                                    (
                                                        <IconCategoryPfpOn className="w-[21px] inline-block mr-[60px]" />
                                                    ) : (
                                                        <IconCategoryPfpOff className="w-[21px] inline-block mr-[60px]" />
                                                    )
                                                }
                                                <span>PFP</span>
                                            </div>
                                            <p className={`text-[13px] ${
                                                category === "CategoryPfp" ? "text-black font-bold" : "text-[#959595]"
                                            }`}>643</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className={`mr-[50px] mb-[20px] text-[13px] ${
                                                    category === "CategoryPhoto" ? "text-black font-bold" : "text-[#959595]"
                                                }`}
                                                onClick={() => setCategory("CategoryPhoto")}
                                            >
                                                {category === "CategoryPhoto" ?
                                                    (
                                                        <IconCategoryPhotoOn className="w-[21px] inline-block mr-[60px]" />
                                                    ) : (
                                                        <IconCategoryPhotoOff className="w-[21px] inline-block mr-[60px]" />
                                                    )
                                                }
                                                <span>사진</span>
                                            </div>
                                            <p className={`text-[13px] ${
                                                category === "CategoryPhoto" ? "text-black font-bold" : "text-[#959595]"
                                            }`}>643</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div
                                                className={`mr-[50px] text-[13px] ${
                                                    category === "CategoryEtc" ? "text-black font-bold" : "text-[#959595]"
                                                }`}
                                                onClick={() => setCategory("CategoryEtc")}
                                            >
                                                {category === "CategoryEtc" ?
                                                    (
                                                        <IconCategoryEtcOn className="w-[21px] inline-block mr-[60px]" />
                                                    ) : (
                                                        <IconCategoryEtcOff className="w-[21px] inline-block mr-[60px]" />
                                                    )
                                                }
                                                <span>기타</span>
                                            </div>
                                            <p className={`text-[13px] ${
                                                category === "CategoryEtc" ? "text-black font-bold" : "text-[#959595]"
                                            }`}>643</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`pt-[30px] ${pre_600.className}`}>
                                    <div className="flex justify-between mb-[20px]">
                                        <p className={`text-[15px] text-black `}>컬렉션</p>
                                        <IconTopArrow className="w-[11px]" />
                                    </div>
                                    <div className="text-[13px]">
                                        <div className="relative mb-[15px]">
                                            <InputMD style="w-full h-[30px] shadow-[0_2px_5px_rgba(149,149,149,0.4)] rounded-[15px] border-none" />
                                            <IconSearch className="w-[17px] absolute left-[10px] top-[6px]"/>
                                        </div>
                                        <div className="flex justify-between items-center mb-[15px]">
                                            <div className="flex items-center">
                                                <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                                                    <Image src={require("../../../public/images/team_2.png")}/>
                                                </div>
                                                <span className="text-black">Gutter Rats</span>
                                            </div>
                                            <span className="text-black">42</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-[15px]">
                                            <div className="flex items-center">
                                                <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                                                    <Image src={require("../../../public/images/team_2.png")}/>
                                                </div>
                                                <span className="text-[#959595]">Gutter Rats</span>
                                            </div>
                                            <span className="text-[#959595]">42</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-[15px]">
                                            <div className="flex items-center">
                                                <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                                                    <Image src={require("../../../public/images/team_2.png")}/>
                                                </div>
                                                <span className="text-[#959595]">Gutter Rats</span>
                                            </div>
                                            <span className="text-[#959595]">42</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                      필터 끝
                    {tab === "all" && (
                        <div className={`mb-[150px] ${filter == true ? "lg:pl-[31%] xl:pl-[25%]" : "pl-0"}`}>
                            <div className={`${filter == true ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-[20px] 2xl:gap-x-[65px]" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-[40px] 2xl:gap-x-[65px]"} grid`}>
                                <CollectionCard style="mb-[80px]"/>
                                <CollectionCard style="mb-[80px]"/>
                                <CollectionCard style="mb-[80px]"/>
                                <CollectionCard style="mb-[80px]"/>
                            </div>
                            <Paginations style="mt-[20px]" />
                        </div>
                    )}
                </div>*/}
            </div>
        </Layout>
    )
}

export default Collection;