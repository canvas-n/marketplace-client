//05NFT 랭킹
import React, {useState} from "react";

import Layout from "../../components/Layout";
import PageTitle from "../../components/Common/PageTitle";
import ButtonMD from "../../components/Common/ButtonMD";
import InputMD from "../../components/Common/InputMD";
import RankingCard from "../../components/Card/RankingCard";
import RankingTableCard from "../../components/Card/RankingTableCard";
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

const Ranking = () => {
    const [tab, setTab] = useState('NFTRanking');
    const [category, setCategory] = useState('CategoryArt');
    const [page, setPage] = useState(1);
    return (
        <Layout path="/">
            <PageTitle title="랭킹" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mx-[20px]">
                    <div className="relative lg:flex lg:justify-between mb-[80px] lg:border-b lg:border-[#959595]">
                        <div className="flex border-b border-[#959595] lg:border-0">
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px]  ${
                                    tab === "NFTRanking" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("NFTRanking")}
                            >
                                NFT 랭킹
                            </div>
                            <div
                                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                                    tab === "CollectionRanking" ? "border-b-[4px] border-black text-black font-bold" : "text-[#959595]"
                                }`}
                                onClick={() => setTab("CollectionRanking")}
                            >
                                컬렉션 랭킹
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
                    <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                        <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                    </div>
                    {/*{tab === "NFTRanking" && (
                        <div className="mb-[80px] lg:mb-[150px] ">
                            <div className="overflow-auto whitespace-nowrap  height_scroll pb-[90px] px-[5px] mb-[80px] lg:mb-[150px]">
                                <div className="flex ">
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                </div>
                            </div>
                            <div className=" overflow-auto height_scroll pb-[50px]">
                                <table className={`min-w-[1350px] w-full text-[20px] text-black table-fixed text-center ${pre_600.className}`}>
                                    <tbody>
                                        <tr>
                                            <td className="w-[60px] py-[20px] text-left">순위</td>
                                            <td className="py-[20px]">제목/컬렉션</td>
                                            <td className="w-[130px] py-[20px]">크리에이터</td>
                                            <td className="w-[150px] py-[20px]">거래량</td>
                                            <td className="w-[130px] py-[20px]">거래 횟수</td>
                                            <td className="w-[130px] py-[20px]">에디션 수</td>
                                            <td className="w-[130px] py-[20px]">홀더 수</td>
                                            <td className="w-[150px] py-[20px]">최저가</td>
                                            <td className="w-[150px] py-[20px] text-right">최고가</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <RankingTableCard />
                                <RankingTableCard />
                                <RankingTableCard />
                                <RankingTableCard />
                            </div>
                        </div>
                    )}
                    {tab === "CollectionRanking" && (
                        <div className="mb-[80px] lg:mb-[150px]">
                            <div className="overflow-auto whitespace-nowrap  height_scroll pb-[90px] px-[5px] mb-[80px] lg:mb-[150px]">
                                <div className="flex">
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                    <RankingCard style="mr-[61px] last:mr-0"/>
                                </div>
                            </div>
                            <div className=" overflow-auto height_scroll pb-[50px]">
                                <table className={`min-w-[1350px] w-full text-[20px] text-black table-fixed text-center ${pre_600.className}`}>
                                    <tbody>
                                    <tr>
                                        <td className="w-[60px] py-[20px] text-left">순위</td>
                                        <td className="py-[20px]">제목/컬렉션</td>
                                        <td className="w-[130px] py-[20px]">크리에이터</td>
                                        <td className="w-[150px] py-[20px]">거래량</td>
                                        <td className="w-[130px] py-[20px]">거래 횟수</td>
                                        <td className="w-[130px] py-[20px]">에디션 수</td>
                                        <td className="w-[130px] py-[20px]">홀더 수</td>
                                        <td className="w-[150px] py-[20px]">최저가</td>
                                        <td className="w-[150px] py-[20px] text-right">최고가</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <RankingTableCard />
                                <RankingTableCard />
                                <RankingTableCard />
                                <RankingTableCard />
                            </div>
                        </div>
                    )}*/}
                </div>
            </div>
        </Layout>
    )
}

export default Ranking;