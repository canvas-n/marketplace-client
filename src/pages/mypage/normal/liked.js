//16NFT 마이페이지_일반_관심 아이템
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import MypageOwnerCard from "../../../components/Card/MypageOwnerCard";
import IconMark from "../../../../public/images/mark.svg";
import IconWallet from "../../../../public/images/icon_wallet2.svg";
import IconClone from "../../../../public/images/icon_clone.svg";
import SocialInsta from "../../../../public/images/social_insta_g.svg";
import SocialTwitter from "../../../../public/images/social_twitter_g.svg";
import SocialFace from "../../../../public/images/social_face_g.svg";

import { pre_400, pre_600, pre_700 } from "../../../../fonts";
import Paginations from "../../../components/Common/Paginations";
import Image from "next/image";
import Link from "next/link";
import { useUser, useUserLikeList } from "@/react-query/hooks/user";
import { useRouter } from "next/router";
const Liked = () => {
  const router = useRouter();
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sale, setSale] = useState("");
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(0);
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [cnt, setCnt] = useState(0);
  const { userLikeList, userLikeCnt, userNftLoading } = useUserLikeList({
    search,
    category,
    sale,
    priceStart,
    priceEnd,
    sort,
    limit,
    pageParam: (page - 1) * limit,
    offset: (page - 1) * limit,
  });

  useEffect(() => {
    if (userLikeCnt) {
      setCnt(userLikeCnt);
    }
    // 페이지가 렌더링될 때마다 스크롤 위치를 위로 올립니다.
    window.scrollTo(0, 0);
  }, [router.asPath, page, userLikeCnt, userLikeList]);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
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
              {/* <SocialInsta className="w-[20px] ml-[25px] inline-block" />
              <SocialTwitter className="w-[18px] ml-[25px] inline-block" />
              <SocialFace className="w-[10px] ml-[25px] inline-block" />
              <Image
                className="w-[18px] ml-[25px] inline-block"
                src={require("../../../../public/images/social_youtube_g.png")}
                alt={"social_youtube"}
              />*/}
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
                <IconMark className="w-[41px] absolute right-[33%] bottom-0 sm:right-0 lg:right-[11px] lg:bottom-[11px]" />
              </div>
              <h2
                className={`${pre_700.className} text-[25px] lg:text-[30px] mb-[5px]`}
              >
                {user?.unick}
                {/*<span
                  className={`${pre_400.className} text-[15px] text-[#959595] ml-[5px] lg:ml-[40px]`}
                >
                  @sine3c2
                </span>*/}
              </h2>
              <p className="inline-block mb-[10px] lg:mb-0 w-full lg:w-auto">
                <IconWallet className="w-[15px] mr-[10px] inline-block " />
                <span className="w-[70%] sm:w-[80%] md:w-auto overflow-hidden text-ellipsis text-[#959595] whitespace-nowrap inline-block align-middle">
                  {user?.wallet_addr}
                </span>
                <IconClone
                  onClick={() => handleCopyClipBoard(`${user?.wallet_addr}`)}
                  className="cursor-pointer w-[15px]  ml-[10px] inline-block"
                />
              </p>
            </div>
          </div>
          <div>
            <div className="flex border-b border-[#959595] mt-[100px]">
              <Link href="/mypage/normal">
                <div
                  className={`mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-[#959595]`}
                >
                  보유 아이템
                </div>
              </Link>
              {/* <Link href="/mypage/normal/suggest">
                                <div className={`mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-[#959595]`}>
                                    제안 내역
                                </div>
                            </Link>*/}
              <Link href="/mypage/normal/history">
                <div
                  className={`mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-[#959595]`}
                >
                  거래 내역
                </div>
              </Link>
              <Link href="/mypage/normal/liked">
                <div
                  className={`mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-black font-bold border-b-[4px] border-black`}
                >
                  관심 아이템
                </div>
              </Link>
            </div>
            {userNftLoading ? (
              <div className="flex justify-center items-center my-10 h-[200px]">
                Loading ...
              </div>
            ) : userLikeList?.length > 0 ? (
              <div className="mt-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[63px] mb-[20px]">
                {userLikeList?.map((like) => (
                  <MypageOwnerCard type="liked" nft={like} />
                ))}
              </div>
            ) : (
              <div className="my-[80px] flex justify-center items-center w-full">
                관심 아이템이 없습니다
              </div>
            )}

            {!userNftLoading && (
              <Paginations
                style="mt-[20px] mb-[70px] lg:mb-[150px]"
                limit={limit}
                page={page}
                setPage={setPage}
                total={cnt > 0 ? cnt : userLikeCnt}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Liked;
