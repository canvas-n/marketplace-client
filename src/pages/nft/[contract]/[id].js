//07NFT 상세페이지
import Layout from "../../../components/Layout";
import NftDetailTableCard from "../../../components/Card/NftDetailTableCard";
import NftCard from "../../../components/Card/NftCard";
import ButtonMD from "../../../components/Common/ButtonMD";
import Image from "next/image";
import { pre_400, pre_700, poppins_700 } from "../../../../fonts";
import React, { useEffect, useState } from "react";

import IconMark from "../../../../public/images/mark.svg";
import IconLikeOn from "../../../../public/images/icon_heart_on.svg";
import IconLikeOff from "../../../../public/images/icon_heart_off.svg";
import IconShareOn from "../../../../public/images/icon_share.svg";
import IconFace from "../../../../public/images/social_face_g.svg";
import IconTwitter from "../../../../public/images/social_twitter_g.svg";
import IconInsta from "../../../../public/images/social_insta_g.svg";
import IconUp from "../../../../public/images/icon_top_arrow.svg";
import IconDown from "../../../../public/images/icon_down_arrow.svg";
import { useRouter } from "next/router";
import {
  useBuyNft,
  useNft,
  useNftDetail,
  useSellNft,
} from "@/react-query/hooks/nft";
import { useUser } from "@/react-query/hooks/user";
import { changeComma } from "@/lib/common";
import OrderCheckModal from "@/components/Modal/OrderCheckModal";
import { useMarketNfts, useNftLike } from "@/react-query/hooks/market";
import { useSignOut } from "@/react-query/hooks/auth";

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

const NftDetail = ({ params }) => {
  const router = useRouter();
  // const { id } = router?.query;
  const { nftDetail, nftReturn, nftDetailLoading, nftDetailSuccess } =
    useNftDetail({
      contract: params && params?.contract,
      tokenId: params && params?.id,
    });

  useEffect(() => {
    if (!nftDetailLoading && nftReturn) {
      router.push("/market");
    }
  }, [nftDetailLoading, nftReturn]);

  const { buyNftToken } = useBuyNft();
  const { user } = useUser();
  const { nftLike } = useNftLike();

  const [tab, setTab] = useState("");
  //const [popupNFTDetailOffer, setPopupNFTDetailOffer] = useState(false);
  const [mSellMenu, setMSellMenu] = useState(false);
  const [nftMetadata, setNftMetadata] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [remainTime, setRemainTime] = useState(
    new Date(nftDetail?.end_dttm).getTime() - Date.now(),
  );
  const [imageSrc, setImageSrc] = useState(
    nftDetail?.img_src || require("/public/images/forbbiden_img.png"),
  );
  const [paymentPopUp, setPaymentPopUp] = useState(false);
  const [krwPrice, setKrwPrice] = useState(nftDetail?.coin_krw.toFixed(4));

  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [saleStatus, setSaleStatus] = useState("");
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(0);
  const [sort, setSort] = useState("new");
  const { marketNfts, marketNftsCnt } = useMarketNfts({
    search: "",
    category: tab === "ALL" ? "" : tab,
    sale: "",
    priceStart,
    priceEnd,
    sort,
    limit: 10,
    pageParam: (page - 1) * 10,
    sell_status: saleStatus,
    user_seq: user?.seq,
    except_mk_seq: nftDetail?.seq,
  });

  useEffect(() => {
    if (nftDetail) {
      setNftMetadata(JSON.parse(nftDetail?.metadata).metadata);
      setRemainTime(new Date(nftDetail?.end_dttm).getTime() - Date.now());
      setImageSrc(
        nftDetail?.img_src || require("/public/images/forbbiden_img.png"),
      );
      setKrwPrice(nftDetail?.coin_krw.toFixed(4));
      setIsLiked(nftDetail?.is_liked);
    }
  }, [nftDetail]);

  const buyNft = async () => {
    const { data, success, msg } = await buyNftToken({
      contract: nftDetail?.contract,
      tokenId: nftDetail?.token_id,
    });

    if (success) {
      alert(msg);
      router.push("/mypage/normal");
    } else {
      alert(msg);
      setPaymentPopUp(false);
    }
  };

  const setNftLike = async () => {
    if (user) {
      const result = await nftLike({ mk_seq: nftDetail?.seq });

      if (result.success) {
        var like = result.data.ret.state;
        setIsLiked(like ? 1 : 0);
      } else {
        // 다시 시도해 주세요.
      }
    }
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  return (
    <Layout path="/">
      <div className={`max-w-[1640px]   mx-auto ${pre_400.className}`}>
        <div className="mx-[20px]">
          <div className="lg:flex lg:justify-between mt-[70px] lg:mt-[125px] h-full relative">
            <div className="lg:w-[60%] lg:max-w-[870px] shrink-1">
              <div className="w-full pb-[100%] flex justify-center items-center relative overflow-hidden rounded-[16px] mb-[70px] lg:mb-[100px]">
                <Image
                  alt={"nft_image"}
                  className="absolute top-0 left-0"
                  src={imageSrc}
                  fill={true}
                  onError={(e) =>
                    setImageSrc(
                      `${process.env.CLIENT_URL}/images/forbbiden_img.png`,
                    )
                  }
                />
              </div>
              <div className="mb-[100px]">
                <h2
                  className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px] mb-[20px]`}
                >
                  판매정보
                </h2>
                <div className="text-[15px] text-black">
                  {nftDetail?.market_description}
                </div>
              </div>
              <div className="mb-[100px]">
                <h2
                  className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px] mb-[20px]`}
                >
                  설명
                </h2>
                <div className="text-[15px] text-black">
                  {nftDetail?.description}
                </div>
              </div>
              <div className="mb-[70px] lg:mb-[100px]">
                <h2
                  className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px] mb-[20px]`}
                >
                  NFT 상세정보
                </h2>
                <div className="text-[15px] text-black">
                  <p className="flex justify-between text-[15px] text-black mb-[40px]">
                    <span>소유자</span>
                    <span>{nftDetail?.sell_addr}</span>
                  </p>
                  <p className="flex justify-between text-[15px] text-black mb-[40px]">
                    <span className="shrink-0">컨트랙트 주소</span>
                    <span className="break-all shrink-1  text-right">
                      {nftDetail?.contract}
                    </span>
                  </p>
                  <p className="flex justify-between text-[15px] text-black mb-[40px]">
                    <span>토큰 아이디</span>
                    <span>{nftDetail?.token_id}</span>
                  </p>
                  <p className="flex justify-between text-[15px] text-black mb-[40px]">
                    <span>토큰 표준</span>
                    <span>{nftDetail?.token_type}</span>
                  </p>
                  <p className="flex justify-between text-[15px] text-black mb-[40px]">
                    <span>체인</span>
                    <span>Ethereum</span>
                  </p>
                  {/* <p className="flex justify-between text-[15px] text-black"><span>창작자 로열티</span><span>7.5%</span></p>*/}
                </div>
              </div>
              {nftMetadata && (
                <div className="mb-[70px] lg:mb-[100px]">
                  <h2
                    className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px] mb-[20px]`}
                  >
                    아이템 특성 정보
                  </h2>
                  <div className="text-[15px] text-black">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                      {nftMetadata?.attributes?.map((v, i) => {
                        return (
                          <div
                            key={`nft_${i}`}
                            className="w-full h-[100px] rounded-[10px] border border-[#959595] p-[20px]"
                          >
                            <p className="text-[15px] text-black">
                              {v?.trait_type}
                            </p>
                            <p
                              className={`${pre_700.className} text-[15px] text-black`}
                            >
                              {v?.value}
                            </p>
                            {/*<p className="text-[12px] text-[#959595]">
                              희소성 100%
                            </p>*/}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {nftDetail?.nftHistory?.length > 0 && (
                <div className="mb-[70px] lg:mb-[100px]">
                  <h2
                    className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px]`}
                  >
                    Sales
                  </h2>
                  <div className="overflow-auto ">
                    {nftDetail?.nftHistory?.map((history, i) => (
                      <NftDetailTableCard
                        key={`list_${i}`}
                        type="sales"
                        title="from"
                        history={history}
                        exchangeData={nftDetail?.exchangeData}
                      />
                    ))}
                  </div>
                </div>
              )}
              {/*{marketNfts?.length > 0 && (
                <div className="mb-[70px]">
                  <div className="flex justify-between border-b border-[#959595] mb-[20px]">
                    <h2
                      className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} pb-[15px] lg:pb-[20px] `}
                    >
                      More From
                    </h2>
                    <span className="text-[15px] text-[#959595]">View All</span>
                  </div>
                  <div className="text-[15px] text-black overflow-auto height_scroll">
                    <div className="flex px-[5px] lg:px-0">
                      {marketNfts
                        ? marketNfts?.map((nft) => (
                            <NftCard
                              style="mr-[40px] last:mr-0"
                              type={"small"}
                              nft={nft}
                            />
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              )}*/}
            </div>
            <div className="hidden lg:block w-[45%] max-w-[660px] pb-[150px] shrink-1 ml-[30px]">
              <div className="w-full sticky top-[130px]  flex">
                <div className="w-full ">
                  <div className="xl:flex xl:justify-between xl:items-center border-b border-[#000000] pb-[30px] mb-[40px]">
                    <div className="flex items-center w-[200px] 2xl:w-[270px] rounded-[32px] bg-[#00000009] py-[8px] pl-[8px] 2xl:p-[8px] h-[35px] 2xl:h-[65px]">
                      <div className="relative mr-[30px]">
                        <div className="w-[25px] 2xl:w-[50px] h-[25px] 2xl:h-[50px] flex justify-center items-center overflow-hidden rounded-[50%]">
                          <Image
                            alt={"team_1"}
                            src={require("/public/images/artist.png")}
                          />
                        </div>
                        {/*   <IconMark className="w-[15px] 2xl:w-[24px] absolute bottom-0 right-[-10px]" />*/}
                      </div>
                      <div className="text-[16px] 2xl:text-[20px]">
                        {nftDetail?.unick}
                      </div>
                    </div>
                    <div className="flex mt-[20px] xl:mt-0">
                      <div className="">
                        {isLiked == 1 ? (
                          <IconLikeOn
                            className="w-[16px] 2xl:w-[21px] mr-[15px] 2xl:mr-[30px] inline-block cursor-pointer"
                            onClick={setNftLike}
                          />
                        ) : (
                          <IconLikeOff
                            className="w-[16px] 2xl:w-[21px] mr-[15px] 2xl:mr-[30px] inline-block cursor-pointer"
                            onClick={setNftLike}
                          />
                        )}
                        <IconShareOn
                          className="w-[16px] 2xl:w-[17px] inline-block cursor-pointer"
                          onClick={() =>
                            handleCopyClipBoard(
                              `${process.env.CLIENT_URL}${router.asPath}`,
                            )
                          }
                        />
                      </div>
                      {/*<div className="">
                        <IconInsta className="w-[16px] 2xl:w-[20px] inline-block ml-[15px] 2xl:ml-[20px]" />
                        <IconTwitter className="w-[16px] 2xl:w-[18px] inline-block ml-[15px] 2xl:ml-[20px]" />
                        <IconFace className="w-[9px] inline-block ml-[15px] 2xl:ml-[20px]" />
                        <Image
                          alt={"social_youtube_g"}
                          className="w-[16px] 2xl:w-[18px] inline-block ml-[15px] 2xl:ml-[20px]"
                          src={require("../../../../public/images/social_youtube_g.png")}
                        />
                      </div>*/}
                    </div>
                  </div>
                  <div className="mb-[70px] 2xl:mb-[105px]">
                    {parseInt(remainTime / (1000 * 60 * 60 * 24)) < 90 && (
                      <span className="xl:inline-block lg:block text-[15px] text-[#898989]">
                        판매 종료까지{" "}
                        {parseInt(remainTime / (1000 * 60 * 60 * 24))}일{" "}
                        {Math.floor(
                          (Math.floor(remainTime / (1000 * 60)) -
                            Math.floor(
                              Math.floor(remainTime / (1000 * 60)) / (24 * 60),
                            ) *
                              24 *
                              60) /
                            60,
                        )}
                        시간 남음
                      </span>
                    )}
                    <h2 className="xl:flex xl:justify-between xl:items-baseline mb-[5px]">
                      <span
                        className={`xl:inline-block lg:block text-[30px] 2xl:text-[45px] ${poppins_700.className}`}
                      >
                        {nftDetail?.nft_name}{" "}
                      </span>
                    </h2>
                    <span className="inline-block w-[100px] 2xl:w-[120px] h-[25] 2xl:h-[30px] rounded-[13px] bg-[#EBEBEB] text-center leading-[25px] 2xl:leading-[30px] text-[13px] 2xl:text-[15px]">
                      #
                      {nftDetail?.category === "ART"
                        ? "아트"
                        : nftDetail?.category === "PFP"
                          ? "PFP"
                          : nftDetail?.category === "PHO"
                            ? "사진"
                            : "기타"}
                    </span>
                  </div>
                  <div className="mb-[50px] 2xl:mb-[95px]">
                    <div className="pb-[30px] border-b border-black">
                      <p
                        className={`flex justify-between text-[20px] 2xl:text-[25px] ${pre_700.className}`}
                      >
                        <span>구매가</span>
                        <span>{nftDetail?.total_price.toFixed(4)} cETH</span>
                      </p>
                    </div>
                    <div className="pt-[20px]">
                      <p className="flex justify-between text-[16px] 2xl:text-[20px]">
                        <span>판매가</span>{" "}
                        <span>{nftDetail?.curr_ceth} cETH</span>
                      </p>
                      <p className="flex justify-between text-[16px] 2xl:text-[20px]">
                        <span>수수료</span>{" "}
                        <span>{nftDetail?.sale_fee.toFixed(4)} cETH</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {/*    <ButtonMD onClick={() => setPopupNFTDetailOffer(true)} text="가격제안" style="w-[49%] h-[40px] 2xl:h-[50px] bg-[#959595] rounded-[26px] mr-[10px] text-white text-[16px] 2xl:text-[20px]" />*/}
                    {/* <ButtonMD onClick={approveSell} text="가격제안" style="w-[49%] h-[40px] 2xl:h-[50px] bg-[#959595] rounded-[26px] mr-[10px] text-white text-[16px] 2xl:text-[20px]" />*/}
                    { (user?.seq !== nftDetail?.user_seq && nftDetail?.sell_status == 'N') && (
                      <ButtonMD
                        onClick={() => setPaymentPopUp(true)}
                        text="바로구매"
                        style="w-[100%] h-[40px] 2xl:h-[50px] bg-[#F1BA58] rounded-[26px] text-white text-[16px] 2xl:text-[20px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden block fixed left-0 right-0 p-[20px] bg-white bottom-0">
              <div className="w-full sticky top-[130px]  flex">
                <div className="w-full">
                  {mSellMenu == true ? (
                    <div
                      className="border border-[#959595] text-center rounded-[5px] mb-[20px]"
                      onClick={() => setMSellMenu(false)}
                    >
                      <IconDown className="w-[20px] inline-block" />
                    </div>
                  ) : (
                    <div
                      className="border border-[#959595] text-center rounded-[5px] mb-[20px]"
                      onClick={() => setMSellMenu(true)}
                    >
                      <IconUp className="w-[20px] inline-block" />
                    </div>
                  )}
                  {mSellMenu == true && (
                    <>
                      <div className="flex justify-between items-center border-b border-[#000000] pb-[20px] mb-[20px]">
                        <div className="flex items-center rounded-[32px] bg-[#EBEBEB] py-[8px] pr-[15px] pl-[8px] h-[35px]">
                          <div className="relative mr-[30px]">
                            <div className="w-[25px] h-[25px] flex justify-center items-center overflow-hidden rounded-[50%]">
                              <Image
                                alt={"team_1"}
                                src={require("../../../../public/images/team_1.png")}
                              />
                            </div>
                            <IconMark className="w-[15px] absolute bottom-0 right-[-10px]" />
                          </div>
                          <div className="text-[16px]">{nftDetail?.unick}</div>
                        </div>
                        <div className="flex ">
                          <div className="">
                            <IconLikeOn className="w-[21px] mr-[30px] inline-block" />
                            <IconShareOn className="w-[17px] inline-block" />
                          </div>
                          {/*<div className="">
                            <IconInsta className="w-[20px] inline-block ml-[20px]" />
                            <IconTwitter className="w-[18px] inline-block ml-[20px]" />
                            <IconFace className="w-[9px] inline-block ml-[20px]" />
                            <Image
                              alt={"social_youtube_g"}
                              className="w-[18px] inline-block ml-[20px]"
                              src={require("../../../../public/images/social_youtube_g.png")}
                            />
                          </div>*/}
                        </div>
                      </div>
                      <div className="mb-[20px]">
                        <h2 className="flex justify-between items-baseline mb-[5px]">
                          <span
                            className={`text-[22px] ${poppins_700.className}`}
                          >
                            {nftDetail?.nft_name}{" "}
                          </span>
                          {parseInt(remainTime / (1000 * 60 * 60 * 24)) <
                            90 && (
                            <span className="text-[13px] text-[#898989]">
                              판매 종료까지{" "}
                              {parseInt(remainTime / (1000 * 60 * 60 * 24))}일{" "}
                              {Math.floor(
                                (Math.floor(remainTime / (1000 * 60)) -
                                  Math.floor(
                                    Math.floor(remainTime / (1000 * 60)) /
                                      (24 * 60),
                                  ) *
                                    24 *
                                    60) /
                                  60,
                              )}
                              남음
                            </span>
                          )}
                        </h2>
                        <span className="inline-block w-[100px] h-[20px] rounded-[13px] bg-[#EBEBEB] text-center leading-[20px] text-[13px]">
                          #
                          {nftDetail?.category === "ART"
                            ? "아트"
                            : nftDetail?.category === "PFP"
                              ? "PFP"
                              : nftDetail?.category === "PHO"
                                ? "사진"
                                : "기타"}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="mb-[20px]">
                    <div className="pb-[15px] border-b border-black">
                      <p
                        className={`flex justify-between text-[20px] ${pre_700.className}`}
                      >
                        <span>구매가</span>
                        <span>{nftDetail?.total_price.toFixed(4)} cETH</span>
                      </p>
                    </div>
                    <div className="pt-[15px]">
                      <p className="flex justify-between text-[16px]">
                        <span>판매가</span>{" "}
                        <span>{nftDetail?.curr_ceth} cETH</span>
                      </p>
                      <p className="flex justify-between text-[16px]">
                        <span>수수료</span>{" "}
                        <span>{nftDetail?.sale_fee.toFixed(4)} cETH</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {/*    <ButtonMD onClick={() => setPopupNFTDetailOffer(true)} text="가격제안" style="w-[49%] h-[45px] bg-[#959595] rounded-[26px] mr-[10px] text-white text-[16px]" />*/}
                    {/*<ButtonMD onClick={approveSell} text="가격제안" style="w-[49%] h-[45px] bg-[#959595] rounded-[26px] mr-[10px] text-white text-[16px]" />*/}
                    {user?.seq !== nftDetail?.user_seq && (
                      <ButtonMD
                        onClick={() => setPaymentPopUp(true)}
                        text="바로구매"
                        style="w-[100%] h-[45px] bg-[#F1BA58] rounded-[26px] text-white text-[16px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-[70px] lg:mb-[150px]">
              {/* <h2 className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} border-b border-[#959595] pb-[15px] lg:pb-[20px] `}>아이템 특성 정보</h2>
                            <div className="mt-[20px]">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>*/}
            </div>
          </div>
        </div>
      </div>
      {/*  {popupNFTDetailOffer && (
        <NFTDetailOffer setClose={setPopupNFTDetailOffer} />
      )}*/}
      {paymentPopUp && (
        <OrderCheckModal btnPayment={buyNft} setClose={setPaymentPopUp} />
      )}
    </Layout>
  );
};

export default NftDetail;
