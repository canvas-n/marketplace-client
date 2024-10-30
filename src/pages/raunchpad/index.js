//04NFT 컬렉션
import React, {useState} from "react";

import Layout from "../../components/Layout";
import PageTitle from "../../components/Common/PageTitle";
import ButtonMD from "../../components/Common/ButtonMD";
import InputMD from "../../components/Common/InputMD";
import RaunchCard from "../../components/Card/RaunchCard";
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


const RaunchpadHome = () => {
    const [tab, setTab] = useState('all');
    const [category, setCategory] = useState('CategoryArt');
    const [page, setPage] = useState(1);
    return (
        <Layout path="/">
            <PageTitle title="런치패드" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                    <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                </div>
               {/* <div className="mx-[20px]">
                    <div className="relative lg:flex lg:justify-between mb-[40px] lg:border-b lg:border-[#959595]">
                        <div className="flex border-b border-[#959595] lg:border-0">
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px]  ${
                                    tab === "all" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("all")}
                            >
                                전체
                            </div>
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "ing" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("ing")}
                            >
                                진행 중
                            </div>
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "wait" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("wait")}
                            >
                                진행 예정
                            </div>
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "end" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("end")}
                            >
                                진행 종료
                            </div>
                        </div>
                        <div className="text-right mt-[20px] lg:mt-0">
                            <select className="long cursor-pointer" name="" id="">
                                <option value="">거래량 많은 순</option>
                                <option value="">거래량 많은 순</option>
                                <option value="">거래량 많은 순</option>
                            </select>
                        </div>
                    </div>

                    {tab === "all" && (
                        <div className=" mb-[150px]">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[40px] 2xl:gap-x-[65px]">
                                <RaunchCard type="ing" style="mb-[80px]"/>
                                <RaunchCard type="ing" style="mb-[80px]"/>
                                <RaunchCard type="wait" style="mb-[80px]"/>
                                <RaunchCard type="wait" style="mb-[80px]"/>
                                <RaunchCard type="end" style="mb-[80px]"/>
                            </div>
                            <Paginations style="mt-[20px]" />
                        </div>
                    )}
                </div>*/}
            </div>
        </Layout>
    )
}

export default RaunchpadHome;