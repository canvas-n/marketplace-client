//02NFT 마켓 플레이스
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  poppins_600,
  poppins_700,
  pre_600,
  pre_300,
  pre_800,
} from "../../../fonts";
import Image from "next/image";

import Layout from "../../components/Layout";
import PageTitle from "../../components/Common/PageTitle";
import ButtonMD from "../../components/Common/ButtonMD";
import InputMD from "../../components/Common/InputMD";
import NftCard from "../../components/Card/NftCard";
import Paginations from "../../components/Common/Paginations";

import IconFilter from "../../../public/images/icon_filter.svg";
import IconDownArrow from "../../../public/images/icon_down_arrow.svg";
import IconTopArrow from "../../../public/images/icon_top_arrow.svg";
import IconCategoryPhotoOn from "../../../public/images/icon_category_photo_b.svg";
import IconCategoryPhotoOff from "../../../public/images/icon_category_photo_g.svg";
import IconCategoryArtOn from "../../../public/images/icon_category_art_b.svg";
import IconCategoryArtOff from "../../../public/images/icon_category_art_g.svg";
import IconCategoryPfpOn from "../../../public/images/icon_category_pfp_b.svg";
import IconCategoryPfpOff from "../../../public/images/icon_category_pfp_g.svg";
import IconCategoryEtcOn from "../../../public/images/icon_category_etc_b.svg";
import IconCategoryEtcOff from "../../../public/images/icon_category_etc_g.svg";
import IconSearch from "../../../public/images/icon_search.svg";
import { useNfts } from "@/react-query/hooks/nft";
import { useUser } from "@/react-query/hooks/user";
import { useMarketNfts } from "@/react-query/hooks/market";
import { useRouter } from "next/router";

const MarketHome = () => {
  const router = useRouter();
  const [tab, setTab] = useState("ALL");
  const [filter, setFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [saleStatus, setSaleStatus] = useState("");
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(0);
  const [priceStartTxt, setPriceStartTxt] = useState("");
  const [priceEndTxt, setPriceEndTxt] = useState("");
  const [sort, setSort] = useState("new");
  const [search, setSearch] = useState("");

  const {
    marketNfts,
    marketNftsCnt,
    cnt_N,
    cnt_S,
    marketNftsLoading,
    refetch,
  } = useMarketNfts({
    search: "",
    category: tab === "ALL" ? "" : tab,
    sale: "",
    priceStart,
    priceEnd,
    sort,
    limit: 12,
    pageParam: (page - 1) * 12,
    sell_status: saleStatus,
    user_seq: null,
    except_mk_seq: null,
    router,
  });

  useEffect(() => {
    setPage(1);
  }, [tab]);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await refetch();
    })();
  }, [router, page]);

  useEffect(() => {
    if (priceStartTxt && priceEndTxt) {
      if (parseFloat(priceStartTxt) > 0 && parseFloat(priceEndTxt) > 0) {
        if (parseFloat(priceStartTxt) < parseFloat(priceEndTxt)) {
          setPriceStart(priceStartTxt);
          setPriceEnd(priceEndTxt);
        }
      }
    }
  }, [priceStartTxt, priceEndTxt]);

  const filterOpen = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  const calculateStart = (e) => {
    let inputValue = e.target.value;

    if (parseFloat(inputValue) < 0) {
      inputValue = "0";
    }

    if (inputValue.includes("e")) {
      inputValue = inputValue.replace("e", "");
    }

    if (inputValue.includes("-")) {
      inputValue = inputValue.replace("-", "");
    }

    const first = inputValue.slice(0, 2);
    const firstZero = inputValue.slice(0, 1);
    const secondsZero = inputValue.slice(1, 2);

    if (first == "00") {
      inputValue = inputValue.slice(0, -1);
    }

    if (firstZero == "-") {
      inputValue = inputValue.slice(1);
    }

    if (firstZero == "0" && secondsZero && secondsZero != ".") {
      inputValue = inputValue.slice(1);
    }

    let rtn = /^\d*\.?\d{0,4}$/.test(inputValue);
    if (!rtn) {
      setPriceStartTxt(inputValue.slice(0, -1));
      return;
    }

    setPriceStartTxt(inputValue);
  };

  const calculateEnd = (e) => {
    let inputValue = e.target.value;

    if (parseFloat(inputValue) < 0) {
      inputValue = "0";
    }

    if (inputValue.includes("e")) {
      inputValue = inputValue.replace("e", "");
    }

    if (inputValue.includes("-")) {
      inputValue = inputValue.replace("-", "");
    }

    const first = inputValue.slice(0, 2);
    const firstZero = inputValue.slice(0, 1);
    const secondsZero = inputValue.slice(1, 2);

    if (first == "00") {
      inputValue = inputValue.slice(0, -1);
    }

    if (firstZero == "-") {
      inputValue = inputValue.slice(1);
    }

    if (firstZero == "0" && secondsZero && secondsZero != ".") {
      inputValue = inputValue.slice(1);
    }

    let rtn = /^\d*\.?\d{0,4}$/.test(inputValue);
    if (!rtn) {
      setPriceEndTxt(inputValue.slice(0, -1));
      return;
    }

    setPriceEndTxt(inputValue);
  };

  return (
    <Layout path="/">
      <PageTitle title="마켓 플레이스" />
      <div className={`max-w-[1640px] mx-auto  ${pre_300.className}`}>
        <div className="mx-[20px]">
          <div className="relative lg:flex lg:justify-between mb-[40px] lg:border-b lg:border-[#959595]">
            <div className="flex border-b border-[#959595] lg:border-0">
              <div
                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px]  ${
                  tab === "ALL"
                    ? "border-b-[4px] border-black text-black font-bold"
                    : "text-[#959595]"
                }`}
                onClick={() => setTab("ALL")}
              >
                전체
              </div>
              <div
                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                  tab === "ART"
                    ? "border-b-[4px] border-black text-black font-bold"
                    : "text-[#959595]"
                }`}
                onClick={() => setTab("ART")}
              >
                아트
              </div>
              <div
                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                  tab === "PFP"
                    ? "border-b-[4px] border-black text-black font-bold"
                    : "text-[#959595]"
                }`}
                onClick={() => setTab("PFP")}
              >
                PFP
              </div>
              <div
                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                  tab === "PHO"
                    ? "border-b-[4px] border-black text-black font-bold"
                    : "text-[#959595]"
                }`}
                onClick={() => setTab("PHO")}
              >
                사진
              </div>
              <div
                className={`cursor-pointer mr-[25px] lg:mr-[50px] pb-[15px] lg:pb-[20px] text-[18px] lg:text-[20px] ${
                  tab === "ETC"
                    ? "border-b-[4px] border-black text-black font-bold"
                    : "text-[#959595]"
                }`}
                onClick={() => setTab("ETC")}
              >
                기타
              </div>
            </div>
            <div className="text-right mt-[20px] lg:mt-0">
              <select
                className="long cursor-pointer"
                name=""
                id=""
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="new">등록 순</option>
                <option value="like">좋아요 많은 순</option>
                <option value="high">가격 높은 순</option>
                <option value="low">가격 낮은 순</option>
              </select>
            </div>
          </div>
          {/*  필터 시작  */}
          <div className="relative cursor-pointer">
            <div
              className={classNames(
                marketNfts ? "" : "hidden",
                "flex w-full sm:w-[300px] justify-between mb-[20px]",
              )}
              onClick={() => filterOpen()}
            >
              <div>
                <IconFilter className="w-[18px] inline-block mr-[20px]" />
                <span>필터</span>
              </div>
              <IconDownArrow className="w-[11px]" />
            </div>
            {filter && (
              <div className="lg:w-[270px] xl:w-[300px]  absolute top-[40px] left-0 hidden lg:block">
                <div className="border-y border-[#DADADA] py-[30px]">
                  <div className="flex justify-between mb-[50px]">
                    <p
                      className={`text-[15px] text-black ${pre_600.className}`}
                    >
                      가격 범위
                    </p>
                    <IconTopArrow className="w-[11px]" />
                  </div>
                  <div className="flex justify-between mb-[10px]">
                    <div className="relative w-[135px]">
                      <input
                        pattern="\d*"
                        type="text"
                        className={`w-full h-[30px] border border-[#DADADA] rounded-[15px] placeholder:text-[12px] leading-[30px] ${pre_800.className}`}
                        placeholder="0.00"
                        min="0"
                        value={priceStartTxt}
                        onChange={calculateStart}
                      />
                      <span
                        className={`absolute right-[25px] top-[6px] text-[12px] text-[#959595] ${pre_800.className}`}
                      >
                        cETH
                      </span>
                    </div>
                    <span className={`text-[20px] ${pre_800.className}`}>
                      ~
                    </span>
                    <div className="relative w-[135px]">
                      <input
                        pattern="\d*"
                        type="text"
                        className={`w-full h-[30px] border border-[#DADADA] rounded-[15px] placeholder:text-[12px] leading-[30px] ${pre_800.className}`}
                        placeholder="0.00"
                        min="0"
                        value={priceEndTxt}
                        onChange={calculateEnd}
                      />
                      <span
                        className={`absolute right-[25px] top-[6px] text-[12px] ${pre_800.className}`}
                      >
                        cETH
                      </span>
                    </div>
                  </div>
                  {/* <ButtonMD
                    text="검색"
                    style="w-full h-[30px] bg-[#EBEBEB] rounded-[15px] text-[15px] text-[#959595]"
                  />*/}
                </div>
                <div
                  className={`border-b border-[#DADADA] py-[30px] ${pre_600.className}`}
                >
                  <div className="flex justify-between mb-[50px]">
                    <p className={`text-[15px] text-black `}>판매 형태</p>
                    <IconTopArrow className="w-[11px]" />
                  </div>
                  <div className={`pl-[10px] text-[13px] `}>
                    <p
                      className={`flex justify-between mb-[20px] ${saleStatus == "N" ? "" : "text-[#959595]"}`}
                      onClick={() => setSaleStatus("N")}
                    >
                      <span>판매 중</span>
                      <span>{cnt_N}</span>
                    </p>
                    {/*<p className="flex justify-between mb-[20px] text-[#959595]">
                      <span>판매 예정</span>
                      <span>14,773</span>
                    </p>*/}
                    {/*<p
                      className={`flex justify-between ${saleStatus == "S" ? "" : "text-[#959595]"}`}
                      onClick={() => setSaleStatus("S")}
                    >
                      <span>판매 종료</span>
                      <span>{cnt_S}</span>
                    </p>*/}
                  </div>
                </div>
                {/*<div
                  className={`border-b border-[#DADADA] py-[30px] ${pre_600.className}`}
                >
                  <div className="flex justify-between mb-[50px]">
                    <p className={`text-[15px] text-black `}>카테고리</p>
                    <IconTopArrow className="w-[11px]" />
                  </div>
                  <div className="text-[13px]">
                    <div className="flex justify-between">
                      <div
                        className={`mr-[50px] mb-[20px] text-[13px] ${
                          category === "ART"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                        onClick={() => setCategory("ART")}
                      >
                        {category === "ART" ? (
                          <IconCategoryArtOn className="w-[21px] inline-block mr-[60px]" />
                        ) : (
                          <IconCategoryArtOff className="w-[21px] inline-block mr-[60px]" />
                        )}
                        <span>아트</span>
                      </div>
                      <p
                        className={`text-[13px] ${
                          category === "ART"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                      >
                        643
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div
                        className={`mr-[50px] mb-[20px] text-[13px] ${
                          category === "CategoryPfp"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                        onClick={() => setCategory("CategoryPfp")}
                      >
                        {category === "CategoryPfp" ? (
                          <IconCategoryPfpOn className="w-[21px] inline-block mr-[60px]" />
                        ) : (
                          <IconCategoryPfpOff className="w-[21px] inline-block mr-[60px]" />
                        )}
                        <span>PFP</span>
                      </div>
                      <p
                        className={`text-[13px] ${
                          category === "CategoryPfp"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                      >
                        643
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div
                        className={`mr-[50px] mb-[20px] text-[13px] ${
                          category === "CategoryPhoto"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                        onClick={() => setCategory("CategoryPhoto")}
                      >
                        {category === "CategoryPhoto" ? (
                          <IconCategoryPhotoOn className="w-[21px] inline-block mr-[60px]" />
                        ) : (
                          <IconCategoryPhotoOff className="w-[21px] inline-block mr-[60px]" />
                        )}
                        <span>사진</span>
                      </div>
                      <p
                        className={`text-[13px] ${
                          category === "CategoryPhoto"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                      >
                        643
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div
                        className={`mr-[50px] text-[13px] ${
                          category === "CategoryEtc"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                        onClick={() => setCategory("CategoryEtc")}
                      >
                        {category === "CategoryEtc" ? (
                          <IconCategoryEtcOn className="w-[21px] inline-block mr-[60px]" />
                        ) : (
                          <IconCategoryEtcOff className="w-[21px] inline-block mr-[60px]" />
                        )}
                        <span>기타</span>
                      </div>
                      <p
                        className={`text-[13px] ${
                          category === "CategoryEtc"
                            ? "text-black font-bold"
                            : "text-[#959595]"
                        }`}
                      >
                        643
                      </p>
                    </div>
                  </div>
                </div>*/}
                <div className={`pt-[30px] ${pre_600.className}`}>
                  <div className="flex justify-between mb-[20px]">
                    <p className={`text-[15px] text-black `}>컬렉션</p>
                    <IconTopArrow className="w-[11px]" />
                  </div>
                  <div className="text-[13px]">
                    <div className="relative mb-[15px]">
                      <InputMD
                        style="w-full h-[30px] shadow-[0_2px_5px_rgba(149,149,149,0.4)] rounded-[15px] border-none pl-10"
                        onChange={setSearch}
                      />
                      <IconSearch className="w-[17px] absolute left-[10px] top-[6px]" />
                    </div>
                    <div className="flex justify-between items-center mb-[15px]">
                      <div className="flex items-center">
                        <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                          <Image
                            alt={"team"}
                            src={require("../../../public/images/logo_vertical.png")}
                          />
                        </div>
                        <span className="text-black">#1 NFT</span>
                      </div>
                      <span className="text-black">42</span>
                    </div>
                    <div className="flex justify-between items-center mb-[15px]">
                      <div className="flex items-center">
                        <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                          <Image
                            alt={"team2"}
                            src={require("../../../public/images/logo_vertical.png")}
                          />
                        </div>
                        <span className="text-[#959595]">#2 NFT</span>
                      </div>
                      <span className="text-[#959595]">42</span>
                    </div>
                    <div className="flex justify-between items-center mb-[15px]">
                      <div className="flex items-center">
                        <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center overflow-hidden mr-[20px]">
                          <Image
                            alt={"team2"}
                            src={require("../../../public/images/logo_vertical.png")}
                          />
                        </div>
                        <span className="text-[#959595]">#3 NFT</span>
                      </div>
                      <span className="text-[#959595]">42</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*  필터 끝  */}
          {marketNftsLoading ? (
            <div className="flex justify-center items-center my-10 h-[200px]">
              Loading ...
            </div>
          ) : marketNfts?.length > 0 ? (
            <div
              className={`${filter && marketNfts.length === 0 ? "min-h-[1000px]" : ""} mb-[150px]`}
            ></div>
          ) : (
            <div className={`${filter ? "min-h-[1000px]" : ""} mb-[150px]`}>
              <div className={`text-center text-[18px] pt-[20px] ${filter ? 'ml-[300px]' : ''}`}>
                등록된 NFT가 없습니다.
              </div>
            </div>
          )}
          {!marketNftsLoading && marketNfts?.length > 0 && (
            <div
              className={`${
                filter ? "lg:pl-[29%] xl:pl-[25%]" : "pl-0"
              }  mb-[150px]`}
            >
              <div
                className={`grid ${
                  filter
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-[20px] 2xl:gap-x-[65px]"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[40px] 2xl:gap-x-[65px]"
                }`}
              >
                {marketNfts?.length > 0 ? (
                  marketNfts?.map((v, i) => <NftCard nft={v} key={i} />)
                ) : (
                    <div className={`${filter ? "min-h-[1000px]" : ""} mb-[150px]`}>
                      <div className={`text-center text-[18px] pt-[20px] ${filter ? 'ml-[300px]' : ''}`}>
                        판매중인 NFT가 없습니다.
                      </div>
                    </div>
                )}
              </div>
              <Paginations
                style="mt-[20px]"
                page={page}
                setPage={setPage}
                limit={12}
                total={marketNftsCnt}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MarketHome;
