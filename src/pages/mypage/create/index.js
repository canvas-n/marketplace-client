//13NFT 마이페이지_일반_보유아이템
import React, { useState } from "react";
import Layout from "@/components/Layout";
import MypageOwnerCard from "../../../components/Card/MypageOwnerCard";
import MypageOfferCard from "../../../components/Card/MypageOfferCard";
import MypageTransactionCard from "../../../components/Card/MypageTransactionCard";
import IconMark from "../../../../public/images/mark.svg";
import IconWallet from "../../../../public/images/icon_wallet2.svg";
import IconClone from "../../../../public/images/icon_clone.svg";
import SocialInsta from "../../../../public/images/social_insta_g.svg";
import SocialTwitter from "../../../../public/images/social_twitter_g.svg";
import SocialFace from "../../../../public/images/social_face_g.svg";

import { pre_400, pre_600, pre_700 } from "../../../../fonts";
import "swiper/css/pagination";
import Paginations from "../../../components/Common/Paginations";
import SocialLinkModal from "../../../components/Modal/SocialLinkModal";

import Image from "next/image";
import Link from "next/link";
import AlertModal from "@/components/Modal/AlertModal";
import ButtonMD from "@/components/Common/ButtonMD";
import IconUp from "../../../../public/images/icon_top_arrow.svg";
import IconDown from "../../../../public/images/icon_down_arrow.svg";
import IconEth from "../../../../public/images/eth.svg";
const MyPageCreate = () => {
  const [tab, setTab] = useState("owner");
  const [info, setInfo] = useState(false);
  const [socialLinkModal, setSocialLinkModal] = useState(false);

  const InfoOpen = () => {
    if (info) {
      setInfo(false);
    } else {
      setInfo(true);
    }
  };

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
          <div className="xl:flex xl:justify-between mt-[25px] mb-[25px] xl:flex-row-reverse">
            <div className="flex items-center justify-center sm:justify-start sm:pl-[150px] lg:pl-[225px] xl:pl-0 mb-[10px] xl:mb-0">
              <SocialInsta className="w-[20px] ml-[25px] inline-block" />
              <SocialTwitter className="w-[18px] ml-[25px] inline-block" />
              <SocialFace className="w-[10px] ml-[25px] inline-block" />
              <Image
                className="w-[18px] ml-[25px] inline-block"
                src={require("../../../../public/images/social_youtube_g.png")}
                alt={"social_youtube"}
              />
            </div>
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
              <p className="block lg:inline-block text-[15px] lg:ml-[20px]">
                <span>창작자 로열티</span>{" "}
                <span className="text-[#959595] ml-[40px]">10 %</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[15px] mb-[70px] lg:mb-[100px] md:pl-[225px]">
            <div className="w-full h-[60px] border border-[#959595] rounded-[5px] text-[15px] px-[10px] pt-[8px] pb-[2px]">
              <p>네트워크</p>
              <p>
                <IconEth className="w-[20px] mr-[10px] inline-block" />
                <span className={`${pre_700.className}`}>Ethereum</span>
              </p>
            </div>
            <div className="w-full h-[60px] border border-[#959595] rounded-[5px] text-[15px] px-[10px] pt-[8px] pb-[2px]">
              <p>네트워크</p>
              <p>
                <IconEth className="w-[20px] mr-[10px] inline-block" />
                <span className={`${pre_700.className}`}>Ethereum</span>
              </p>
            </div>
            <div className="w-full h-[60px] border border-[#959595] rounded-[5px] text-[15px] px-[10px] pt-[8px] pb-[2px]">
              <p>네트워크</p>
              <p>
                <IconEth className="w-[20px] mr-[10px] inline-block" />
                <span className={`${pre_700.className}`}>Ethereum</span>
              </p>
            </div>
            <div className="w-full h-[60px] border border-[#959595] rounded-[5px] text-[15px] px-[10px] pt-[8px] pb-[2px]">
              <p>네트워크</p>
              <p>
                <IconEth className="w-[20px] mr-[10px] inline-block" />
                <span className={`${pre_700.className}`}>Ethereum</span>
              </p>
            </div>
            <div className="w-full h-[60px] border border-[#959595] rounded-[5px] text-[15px] px-[10px] pt-[8px] pb-[2px]">
              <p>네트워크</p>
              <p>
                <IconEth className="w-[20px] mr-[10px] inline-block" />
                <span className={`${pre_700.className}`}>Ethereum</span>
              </p>
            </div>
          </div>
          <div className="mb-[80px]">
            <div
              className={`text-[20px] ${pre_700.className} pb-[20px] border-b border-[#959595] mb-[20px]`}
            >
              소개
            </div>
            <div className=" mb-[60px]">
              <p
                className={`text-[15px] overflow-hidden ${
                  info == true ? "h-auto" : "h-[100px] md:h-auto"
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              {info == true ? (
                <div
                  className={`block md:hidden border border-[#959595] text-center rounded-[5px] mb-[20px] mt-[20px]`}
                  onClick={() => InfoOpen()}
                >
                  <IconUp className="w-[20px] inline-block" />
                </div>
              ) : (
                <div
                  className={`block md:hidden border border-[#959595] text-center rounded-[5px] mb-[20px] mt-[20px]`}
                  onClick={() => InfoOpen()}
                >
                  <IconDown className="w-[20px] inline-block" />
                </div>
              )}
            </div>
            <div className="text-right">
              <ButtonMD
                text="런치패드 보기"
                style="w-[150px] h-[40px] rounded-[27px] bg-[#F1BA58] text-white text-[15px] shadow-[0_2px_3px_rgba(149,149,149,0.4)]"
              />
            </div>
          </div>
          <div>
            <div className="flex border-b border-[#959595]">
              <Link href="/mypage/create">
                <div
                  className={`mr-[25px] lg:mr-[50px] text-[16px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-black font-bold border-b-[4px] border-black`}
                >
                  보유 아이템
                </div>
              </Link>
              <Link href="/mypage/create/history">
                <div
                  className={`mr-[25px] lg:mr-[50px] text-[16px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-[#959595]`}
                >
                  거래 내역
                </div>
              </Link>
            </div>
            <div className="mt-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[63px] mb-[20px]">
              <MypageOwnerCard type="sell" />
              <MypageOwnerCard type="sell" />
              <MypageOwnerCard type="sell" />
              <MypageOwnerCard type="sell" />
              <MypageOwnerCard type="sell" />
              <MypageOwnerCard type="sell" />
            </div>
            <Paginations style="mt-[20px] mb-[150px]" />
          </div>
        </div>
      </div>
      {socialLinkModal && <SocialLinkModal setClose={setSocialLinkModal} />}
    </Layout>
  );
};

export default MyPageCreate;
