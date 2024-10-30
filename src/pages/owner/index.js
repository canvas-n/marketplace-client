//13NFT 마이페이지_일반_보유아이템
import React, { useState } from "react";
import Layout from "@/components/Layout";
import MypageOwnerCard from "../../components/Card/MypageOwnerCard";
import MypageOfferCard from "../../components/Card/MypageOfferCard";
import MypageTransactionCard from "../../components/Card/MypageTransactionCard";
import IconMark from "../../../public/images/mark.svg";
import IconWallet from "../../../public/images/icon_wallet.svg";
import IconClone from "../../../public/images/icon_clone.svg";
import SocialInsta from "../../../public/images/social_insta_g.svg";
import SocialTwitter from "../../../public/images/social_twitter_g.svg";
import SocialFace from "../../../public/images/social_face_g.svg";

import { pre_400, pre_600, pre_700 } from "../../../fonts";
import "swiper/css/pagination";
import Paginations from "../../components/Common/Paginations";
import SocialLinkModal from "../../components/Modal/SocialLinkModal";

import Image from "next/image";
import Link from "next/link";
import AlertModal from "@/components/Modal/AlertModal";
import ButtonMD from "@/components/Common/ButtonMD";
const MyPageCreate = () => {
  const [tab, setTab] = useState("item");
  const [socialLinkModal, setSocialLinkModal] = useState(false);

  return (
    <Layout path="/">
      <div
        className="w-full h-[320px]"
        style={{
          background: `url(/images/banner2.png) no-repeat center center`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className={`max-w-[1640px]   mx-auto ${pre_400.className}`}>
        <div className="mx-[20px]">
          <div className="mt-[25px] mb-[25px]">
            <div className="relative sm:pl-[150px] lg:pl-[225px] text-center sm:text-left">
              <div className="relative sm:absolute top-0 sm:top-[-35px] md:top-[-40px] xl:top-[-110px] left-0 ">
                <div
                  className="w-[120px] lg:w-[180px] h-[120px] lg:h-[180px] xl:border-[10px] xl:border-[#ffffff] rounded-[50%] mx-auto"
                  style={{
                    background: `url(/images/artist.svg) no-repeat center center`,
                    backgroundSize: `contain`,
                  }}
                ></div>
                <IconMark className="w-[41px] absolute left-[55%] sm:right-0 bottom-0" />
              </div>
              <h2
                className={`${pre_700.className} text-[25px] lg:text-[30px] mb-[5px]`}
              >
                Jina Park{" "}
                <span
                  className={`${pre_400.className} text-[15px] text-[#959595] ml-[5px] lg:ml-[40px]`}
                >
                  @sine3c2
                </span>
              </h2>
              <p className="inline-block mb-[10px] lg:mb-0 w-full lg:w-auto">
                <IconWallet className="w-[15px] mr-[10px] inline-block " />
                <span className="w-[70%] sm:w-[80%] md:w-auto overflow-hidden text-ellipsis whitespace-nowrap inline-block align-middle">
                  2as38729djxi182xj98a2yzsm2as38729djxi182xj98a2yzsm
                </span>
                <IconClone className="w-[15px]  ml-[10px] inline-block" />
              </p>
            </div>
          </div>
          <div>
            <div className="flex border-b border-[#959595] mt-[100px]">
              <div
                onClick={() => setTab("item")}
                className={`${
                  tab == "item"
                    ? "text-black font-bold border-b-[4px] border-black"
                    : "text-[#959595]"
                } mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer `}
              >
                보유 아이템
              </div>
              <div
                onClick={() => setTab("history")}
                className={`${
                  tab == "history"
                    ? "text-black font-bold border-b-[4px] border-black"
                    : "text-[#959595]"
                } mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer `}
              >
                거래 내역
              </div>
            </div>
            {tab == "item" && (
              <>
                <div className="mt-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[63px] mb-[20px]">
                  <MypageOwnerCard type="sell" />
                  <MypageOwnerCard type="sell" />
                  <MypageOwnerCard type="sell" />
                  <MypageOwnerCard type="sell" />
                  <MypageOwnerCard type="sell" />
                  <MypageOwnerCard type="sell" />
                </div>
                <Paginations style="mt-[20px] mb-[150px]" />
              </>
            )}
            {tab == "history" && (
              <>
                <div className="mt-[80px] border-b border-[#959595] mb-[100px] overflow-auto height_scroll">
                  <table
                    className={`min-w-[1000px] w-full table-fixed text-[15px] border-b border-[#959595] ${pre_600.className}`}
                  >
                    <tbody>
                      <tr>
                        <td className="w-[120px] text-center pb-[10px]">
                          구분
                        </td>
                        <td className="pl-[160px] pb-[10px]">아이템</td>
                        <td className="w-[160px] text-center pb-[10px]">
                          가격
                        </td>
                        <td className="w-[160px] text-center pb-[10px]">
                          From
                        </td>
                        <td className="w-[160px] pb-[10px] text-center">To</td>
                        <td className="w-[120px] pb-[10px] text-center">
                          거래 일시
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <MypageTransactionCard />
                  <MypageTransactionCard />
                  <MypageTransactionCard />
                  <MypageTransactionCard />
                  <MypageTransactionCard />
                  <MypageTransactionCard />
                </div>
                <Paginations style="mt-[20px] mb-[150px]" />
              </>
            )}
          </div>
        </div>
      </div>
      {socialLinkModal && <SocialLinkModal setClose={setSocialLinkModal} />}
    </Layout>
  );
};

export default MyPageCreate;
