import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import IconMark from "../../public/images/mark.svg";
import SocialInsta from "../../public/images/social_insta.svg";
import SocialTele from "../../public/images/social_tele.svg";
import SocialLike from "../../public/images/social_like.svg";
import IconGuid1 from "../../public/images/icon_guid_1.svg";
import IconGuid2 from "../../public/images/icon_guid_2.svg";
import IconGuid3 from "../../public/images/icon_guid_3.svg";
import IconGuid4 from "../../public/images/icon_guid_4.svg";
import IconGuid5 from "../../public/images/icon_guid_5.svg";
import IconGuid6 from "../../public/images/icon_guid_6.svg";

import Image from "next/image";

import RankingCard from "../components/Card/RankingCard";
import NftCard from "../components/Card/NftCard";
import CollectionCard from "../components/Card/CollectionCard";
// ----- 번역 ---------

import {
  poppins_100,
  poppins_200,
  poppins_300,
  poppins_400,
  poppins_600,
  poppins_700,
  pre_600,
  pre_800,
  pre_400,
  pre_700,
} from "../../fonts";
import Layout from "../components/Layout";
import { useNfts, useRecommNfts } from "@/react-query/hooks/nft";
import { useUser } from "@/react-query/hooks/user";

// ----- 번역 ---------

export default function Home() {
  const { user } = useUser();
  const { nfts } = useNfts({ address: user?.wallet_addr });
  const { recommNfts } = useRecommNfts();
  const [nftData, setNftData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setNftData(nfts);
  }, [nfts]);

  return (
    <Layout path="/">
      <section className=" mb-[130px]">
        <div className="h-[800px] w-full">
          <Swiper
            spaceBetween={0}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper text-black"
          >
            <SwiperSlide>
              <div
                className="h-[800px]"
                style={{
                  background: `url('/images/example.png') no-repeat center center`,
                  backgroundSize: "cover",
                }}
              >
                <div className="max-w-[1600px] text-white absolute top-[125px] right-[20%]">
                  <div className="">
                    <p
                      className={`text-[80px] text-left font-bold ${poppins_700.className}`}
                    >
                      Milkomeda N
                    </p>
                    <p className="text-[40px] text-left">2023.05.25</p>
                    <p className="text-[24px] text-left poppins mt-5 leading-[18px]">
                      Lorem Ipsum is simply dummy
                    </p>
                    <p className="text-[24px] text-left poppins">
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                  className="h-[800px]"
                  style={{
                    background: `url('/images/example.png') no-repeat center center`,
                    backgroundSize: "cover",
                  }}
              >
                <div className="max-w-[1600px] text-white absolute top-[125px] right-[20%]">
                  <div className="">
                    <p
                        className={`text-[80px] text-left font-bold ${poppins_700.className}`}
                    >
                      Milkomeda N
                    </p>
                    <p className="text-[40px] text-left">2023.05.25</p>
                    <p className="text-[24px] text-left poppins mt-5 leading-[18px]">
                      Lorem Ipsum is simply dummy
                    </p>
                    <p className="text-[24px] text-left poppins">
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                  className="h-[800px]"
                  style={{
                    background: `url('/images/example.png') no-repeat center center`,
                    backgroundSize: "cover",
                  }}
              >
                <div className="max-w-[1600px] text-white absolute top-[125px] right-[20%]">
                  <div className="">
                    <p
                        className={`text-[80px] text-left font-bold ${poppins_700.className}`}
                    >
                      Milkomeda N
                    </p>
                    <p className="text-[40px] text-left">2023.05.25</p>
                    <p className="text-[24px] text-left poppins mt-5 leading-[18px]">
                      Lorem Ipsum is simply dummy
                    </p>
                    <p className="text-[24px] text-left poppins">
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="max-w-[1640px] mx-auto">
        {/*<section className=" xl:flex mx-[20px] mb-[140px]">
          <div
            className="w-full xl:w-[800px] rounded-[16px_16px_0_0]  xl:rounded-[16px_0_0_16px] h-[350px] lg:h-[700px]"
            style={{
              background: `url('/images/example.png') no-repeat center center`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" lg:h-[700px] w-full xl:w-[800px] shadow-[0_7px_20px_rgba(0,0,0,0.1)] bg-white rounded-[0_0_16px_16px] xl:rounded-[0_16px_16px_0] p-[30px] lg:px-[50px] 2xl:pl-[105px] lg:py-[50px] lg:pt-[75px] 2xl:pr-[85px]">
            <div className="sm:flex sm:justify-between sm:flex-row-reverse">
              <div className="flex mb-[20px] sm:mb-0">
                <SocialLike className="w-[40px] lg:w-[65px]" />
                <SocialInsta className="w-[40px] lg:w-[65px] ml-[15px] lg:ml-[25px]" />
                <SocialTele className="w-[40px] lg:w-[65px] ml-[15px] lg:ml-[25px]" />
              </div>
              <div className="flex items-center relative w-[200px] lg:w-[250px] h-[40px] lg:h-[65px] rounded-[33px] bg-[#EBEBEB] p-[7px]">
                <div className="w-[30px] lg:w-[51px] h-[30px] lg:h-[51px] overflow-hidden rounded-[50%] flex justify-center items-center mr-[20px]">
                  <Image src={require("../../public/images/team_2.png")} />
                </div>
                <div
                  className={`${poppins_400.className} text-[17px] lg:text-[20px] inline-block`}
                >
                  gil-dong.hong
                </div>
                <IconMark className="w-[15px] lg:w-[30px] absolute left-[35px] bottom-[7px]" />
              </div>
            </div>
            <div className="my-[30px] lg:my-[75px]">
              <h2
                className={`${poppins_700.className} text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px]`}
              >
                Lorem Ipsum
              </h2>
            </div>
            <div className="sm:flex sm:justify-between mb-[50px] sm:mb-[75px]">
              <div>
                <p
                  className={`${poppins_300.className} text-[14px] md:text-[16px] mb-0 sm:mb-[15px]`}
                >
                  Current price
                </p>
                <p
                  className={`${poppins_700.className} text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mb-0 sm:mb-[15px]`}
                >
                  0.349 ETH
                </p>
                <p
                  className={`${poppins_300.className} text-[14px] md:text-[16px]`}
                >
                  $ 1,123.22
                </p>
              </div>
              <div className="mt-[20px] sm:mt-0">
                <p
                  className={`${poppins_300.className} text-[14px] md:text-[15px] mb-0 sm:mb-[15px]`}
                >
                  Ending in
                </p>
                <p
                  className={`${poppins_700.className} text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mb-0 sm:mb-[15px]`}
                >
                  <span className="inline-block w-[65px]">01</span>
                  <span className="inline-block w-[65px]">15</span>
                  <span className="inline-block w-[65px]">36</span>
                  <span className="inline-block w-[50px]">45</span>
                </p>
                <p
                  className={`${poppins_300.className} text-[14px] md:text-[15px]`}
                >
                  <span className="inline-block w-[65px]">Days</span>
                  <span className="inline-block w-[65px]">Hours</span>
                  <span className="inline-block w-[65px]">Min.s</span>
                  <span className="inline-block w-[50px]">Sec.s</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <ButtonMd
                text={"Mint"}
                style="w-[50%] sm:w-[165px] h-[45px] sm:h-[55px] bg-[#959595] rounded-[28px] text-[#ffffff] mr-[20px] sm:mr-[70px]"
              />
              <ButtonMd
                text={"View Project"}
                style="w-[50%] sm:w-[165px] h-[45px] sm:h-[55px] bg-[#959595] rounded-[28px] text-[#ffffff]"
              />
            </div>
          </div>
        </section>*/}
        {/*<section className="mb-[170px]">
          <div className="xl:flex justify-between mb-[110px] flex-row-reverse px-[20px]">
            <div className="flex items-center w-full justify-end ">
              <div
                className={`relative before:hidden before:lg:block after:hidden after:lg:block before:content-'' before:w-[20px] before:h-[1px] before:bg-[#707070] before:absolute before:top-[30px] before:right-[110px] after:content-'' after:w-full xl:after:w-[400px] 2xl:after:w-[662px] after:h-[1px] after:bg-[#707070] after:absolute after:bottom-[30px] after:right-[110px] text-[40px] md:text-[50px] lg:text-[65px] ${poppins_100.className}`}
              >
                09
              </div>
              <div
                className={`text-right text-[18px] md:text-[20px] lg:text-[24px] ml-[10px] ${poppins_200.className}`}
              >
                <p>January</p>
                <p>wednesday</p>
              </div>
            </div>
            <div className="flex items-center justify-between xl:justify-start">
              <h2
                className={`text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] sm:mr-[115px] ${poppins_700.className}`}
              >
                Ranking
              </h2>
              <div className="flex">
                <select
                  className={`small mr-[10px] ${poppins_600.className}`}
                  name=""
                  id=""
                >
                  <option value="">24h</option>
                </select>
                <select
                  className={`small ${poppins_600.className}`}
                  name=""
                  id=""
                >
                  <option value="">ETH</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-auto whitespace-nowrap  height_scroll">
            <div className="pb-[50px] flex px-[20px]">
              <RankingCard style="mr-[60px] last:mr-0" />
              <RankingCard style="mr-[60px] last:mr-0" />
              <RankingCard style="mr-[60px] last:mr-0" />
              <RankingCard style="mr-[60px] last:mr-0" />
              <RankingCard style="mr-[60px] last:mr-0" />
              <RankingCard style="mr-[60px] last:mr-0" />
            </div>
          </div>
        </section>*/}
      </div>
      <div
        className="h-[450px] mb-[170px]"
        style={{
          background: `url('/images/banner.png') no-repeat center center`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="max-w-[1640px] mx-auto">
        {/*<section className="mb-[170px]">
          <div className="flex items-baseline justify-between mb-[110px] px-[20px]">
            <h2
              className={`text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] mr-[115px] ${pre_700.className}`}
            >
              런치패드
            </h2>
            <div
              className={`relative after:hidden after:lg:block after:content-'' after:w-[600px] xl:after:w-[900px] 2xl:after:w-[1160px] after:h-[1px] after:bg-[#707070] after:absolute after:bottom-[10px] after:right-[100px] 2xl:after:right-[170px] text-[16px] md:text-[18px] lg:text-[20px] ${poppins_600.className}`}
            >
              View All
            </div>
          </div>
          <div className="overflow-auto whitespace-nowrap  height_scroll ">
            <div className="pb-[50px] flex px-[20px]">
              <RaunchCard type="ing" style="mr-[65px] last:mr-0 shrink-0" />
              <RaunchCard type="end" style="mr-[65px] last:mr-0 shrink-0" />
              <RaunchCard type="wait" style="mr-[65px] last:mr-0 shrink-0" />
              <RaunchCard type="wait" style="mr-[65px] last:mr-0 shrink-0" />
              <RaunchCard type="end" style="mr-[65px] last:mr-0 shrink-0" />
              <RaunchCard type="ing" style="mr-[65px] last:mr-0 shrink-0" />
            </div>
          </div>
        </section>*/}
        <section className="mb-[170px]">
          <div className="flex items-baseline justify-between mb-[110px] px-[20px]">
            <h2
              className={`text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] mr-[115px] ${pre_700.className}`}
            >
              추천 NFT
            </h2>
            <div
              onClick={() => router.push("/market")}
              className={`cursor-pointer relative after:hidden after:lg:block after:content-'' after:w-[600px] xl:after:w-[900px] 2xl:after:w-[1160px] after:h-[1px] after:bg-[#707070] after:absolute after:bottom-[10px] after:right-[100px] 2xl:after:right-[170px] text-[16px] md:text-[18px] lg:text-[20px] ${poppins_600.className}`}
            >
              View All
            </div>
          </div>
          <div className="overflow-auto whitespace-nowrap  height_scroll ">
            <div className="pb-[50px] flex px-[20px] justify-center">
              {recommNfts?.length > 0 ? (
                recommNfts?.map((v, i) => (
                  <NftCard
                    key={i}
                    nft={v}
                    type="main"
                    style="mr-[63px] last:mr-0 shrink-0"
                  />
                ))
              ) : (
                <div>판매중인 NFT 가 없습니다</div>
              )}
            </div>
          </div>
        </section>
        {/*<section className="mb-[170px]">
          <div className="flex items-baseline justify-between mb-[110px] px-[20px]">
            <h2
              className={`text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] mr-[115px] ${pre_700.className}`}
            >
              추천 컬렉션
            </h2>
            <div
              onClick={() => router.push("/collection")}
              className={`cursor-pointer relative after:hidden after:lg:block after:content-'' after:w-[600px] xl:after:w-[900px] 2xl:after:w-[1160px] after:h-[1px] after:bg-[#707070] after:absolute after:bottom-[10px] after:right-[100px] 2xl:after:right-[170px] text-[16px] md:text-[18px] lg:text-[20px] ${poppins_600.className}`}
            >
              View All
            </div>
          </div>
          <div className="overflow-auto whitespace-nowrap  height_scroll ">
            <div className="pb-[50px] flex px-[20px]">
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
              <CollectionCard style="mr-[62px] last:mr-0 shrink-0" />
            </div>
          </div>
        </section>*/}
       {/* <section className="mb-[200px]">
          <div className="flex items-baseline justify-between mb-[110px] relative after:content-'' after:z-[-1] after:w-[90%] 2xl:after:w-full after:h-[1px] after:bg-[#707070] after:max-w-[1335px] after:hidden lg:after:block after:absolute after:bottom-[20px] after:right-[20px] px-[20px]">
            <h2
              className={`text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] mr-[115px] ${pre_700.className} bg-white pr-[30px]`}
            >
              NFT 가이드
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[44%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px] mb-[60px]">
              <IconGuid1 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  지갑 만들기
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[44%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px] mb-[60px]">
              <IconGuid2 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  NFT 구매하기
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[44%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px] mb-[60px]">
              <IconGuid3 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  보유 NFT 확인하기
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[44%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px] mb-[60px]">
              <IconGuid4 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  NFT 용어 가이드
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[44%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px] ">
              <IconGuid5 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  NFT 판매하기
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
            <div className="py-[45px] px-[25px] lg:px-[52px] flex max-w-[720px] mx-[20px] w-full md:w-[45%] shadow-[0_3px_6px_rgba(0,0,0,0.16)] rounded-[10px]">
              <IconGuid6 className="w-[50px] shrink-0" />
              <div className="pl-[15px] lg:pl-[35px] shrink-1">
                <p
                  className={`text-[20px] md:text-[22px] lg:text-[25px] xl:text-[30px] leading-[35px] mb-[10px] ${pre_600.className}`}
                >
                  KLAY / ETH 출금하기
                </p>
                <p className="text-[14px] md:text-[15px]">
                  내용 들어갑니다. 내용들어갑니다. 내용 들어갑니다.
                  내용들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </section>*/}
      </div>
    </Layout>
  );
}
