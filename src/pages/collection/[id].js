// 20NFT _컬렉션 상세_아이템리스트
import { pre_400, pre_600, pre_700 } from "../../../fonts";
import IconMark from "../../../public/images/mark.svg";
import IconEth from "../../../public/images/eth.svg";
import IconWallet from "../../../public/images/icon_wallet2.svg";
import IconClone from "../../../public/images/icon_clone.svg";
import IconSearch from "../../../public/images/icon_search.svg";
import SocialInsta from "../../../public/images/social_insta_g.svg";
import SocialTwitter from "../../../public/images/social_twitter_g.svg";
import SocialFace from "../../../public/images/social_face_g.svg";
import Image from "next/image";
import Link from "next/link";
import MypageOwnerCard from "@/components/Card/MypageOwnerCard";
import Paginations from "@/components/Common/Paginations";
import Layout from "@/components/Layout";
import InputMD from "../../components/Common/InputMD";
import ButtonMD from "../../components/Common/ButtonMD";
import React, { useState } from "react";
import WhitePaperUploadModal from "../../components/Modal/WhitePaperUploadModal";
import MypageTransactionCard from "@/components/Card/MypageTransactionCard";
import IconDown from "../../../public/images/icon_down_arrow.svg";
import IconUp from "../../../public/images/icon_top_arrow.svg";

const CollectionDetail = () => {
  const [tab, setTab] = useState("item");
  const [date, setDate] = useState("7");
  const [state, setState] = useState("transaction");
  const [info, setInfo] = useState(false);
  const [whitePaperUploadModal, setWhitePaperUploadModal] = useState(false);
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
            <div className="flex items-center pl-[150px] md:pl-[225px] xl:pl-0 mb-[10px] xl:mb-0">
              <p
                onClick={() => setWhitePaperUploadModal(true)}
                className={`cursor-pointer text-[20px] text-[#959595] ${pre_700.className}`}
              >
                WP
              </p>
              <SocialInsta className="w-[20px] ml-[25px] inline-block" />
              <SocialTwitter className="w-[18px] ml-[25px] inline-block" />
              <SocialFace className="w-[10px] ml-[25px] inline-block" />
              <Image
                className="w-[18px] ml-[25px] inline-block"
                src={require("../../../public/images/social_youtube_g.png")}
                alt={"social_youtube"}
              />
            </div>
            <div className="relative pl-[150px] md:pl-[225px]">
              <div className="absolute top-[-35px] md:top-[-60px] xl:top-[-110px] left-0">
                <div
                  className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] xl:border-[10px] xl:border-[#ffffff] rounded-[50%]"
                  style={{
                    background: `url(/images/artist.svg) no-repeat center center`,
                    backgroundSize: `contain`,
                  }}
                ></div>
                <IconMark className="w-[41px] absolute right-0 bottom-0" />
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
                컨트랙트 주소
                <span className="w-[70%] sm:w-[80%] md:w-auto overflow-hidden text-ellipsis whitespace-nowrap inline-block align-middle ml-[40px]">
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
              className={`text-[16px] md:text-[18px] lg:text-[20px] ${pre_700.className} pb-[20px] border-b border-[#959595] mb-[15px] lg:mb-[20px]`}
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
              <div
                onClick={() => setTab("item")}
                className={`${
                  tab == "item"
                    ? "font-bold border-b-[4px] border-black"
                    : "text-[#959595]"
                } mr-[25px] lg:mr-[50px] text-[16px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer text-black `}
              >
                보유 아이템
              </div>
              <div
                onClick={() => setTab("history")}
                className={`${
                  tab == "history"
                    ? "font-bold border-b-[4px] border-black"
                    : "text-[#959595]"
                } mr-[25px] lg:mr-[50px] text-[16px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer `}
              >
                거래 내역
              </div>
            </div>

            {tab == "item" && (
              <>
                <div className="md:flex justify-between mt-[50px] lg:mt-[70px]">
                  <div className="relative md:w-[460px] mb-[20px] md:mb-0">
                    <InputMD
                      style="w-full h-[40px] rounded-[21px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] indent-[10px]"
                      placeholder="검색"
                    />
                    <IconSearch className="w-[20px] absolute right-[15px] top-[10px]" />
                  </div>
                  <div className="text-right">
                    <select name="" id="" className="long">
                      <option value="">거래량 많은 순</option>
                    </select>
                  </div>
                </div>
                <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[63px] mb-[20px]">
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
                <div className="2xl:flex 2xl:justify-between mt-[50px] lg:mt-[70px]">
                  <div className="lg:flex lg:flex-row-reverse lg:justify-end">
                    <div className="relative sm:w-[460px] mb-[20px] lg:mb-0">
                      <InputMD
                        style="w-full h-[40px] rounded-[21px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] indent-[10px]"
                        placeholder="검색"
                      />
                      <IconSearch className="w-[20px] absolute right-[15px] top-[10px]" />
                    </div>
                    <div>
                      <ButtonMD
                        text="거래"
                        onClick={() => setState("transaction")}
                        style={`${
                          state == "transaction"
                            ? "bg-[#959595] text-white"
                            : "bg-white text-[#959595]"
                        } w-[75px] sm:w-[100px] h-[30px] sm:h-[40px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] mr-[5px] sm:mr-[10px] rounded-[21px] text-[14px] sm:text-[15px]`}
                      />
                      <ButtonMD
                        text="판매 등록"
                        onClick={() => setState("sell")}
                        style={`${
                          state == "sell"
                            ? "bg-[#959595] text-white"
                            : "bg-white text-[#959595]"
                        } w-[75px] sm:w-[100px] h-[30px] sm:h-[40px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] mr-[5px] sm:mr-[10px] rounded-[21px] text-[14px] sm:text-[15px]`}
                      />
                      <ButtonMD
                        text="가격 제안"
                        onClick={() => setState("offer")}
                        style={`${
                          state == "offer"
                            ? "bg-[#959595] text-white"
                            : "bg-white text-[#959595]"
                        } w-[75px] sm:w-[100px] h-[30px] sm:h-[40px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] mr-[5px] sm:mr-[10px] rounded-[21px] text-[14px] sm:text-[15px]`}
                      />
                      <ButtonMD
                        text="전송"
                        onClick={() => setState("send")}
                        style={`${
                          state == "send"
                            ? "bg-[#959595] text-white"
                            : "bg-white text-[#959595]"
                        } w-[75px] sm:w-[100px] h-[30px] sm:h-[40px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] mr-[5px] sm:mr-[20px] rounded-[21px] text-[14px] sm:text-[15px]`}
                      />
                    </div>
                  </div>
                  <div className="shadow-[0_1px_3px_rgba(0,0,0,0.2)] rounded-[21px] bg-white px-[15px] inline-block mt-[20px] 2xl:mt-0">
                    <ButtonMD
                      text="7일"
                      onClick={() => setDate("7")}
                      style={`${
                        date == "7" ? "text-black font-bold" : "text-[#959595]"
                      } w-[50px] sm:w-[70px] h-[40px] text-center text-[15px]`}
                    />
                    <ButtonMD
                      text="30일"
                      onClick={() => setDate("30")}
                      style={`${
                        date == "30" ? "text-black font-bold" : "text-[#959595]"
                      } w-[50px] sm:w-[70px] h-[40px] text-center text-[15px]`}
                    />
                    <ButtonMD
                      text="60일"
                      onClick={() => setDate("60")}
                      style={`${
                        date == "60" ? "text-black font-bold" : "text-[#959595]"
                      } w-[50px] sm:w-[70px] h-[40px] text-center text-[15px]`}
                    />
                    <ButtonMD
                      text="90일"
                      onClick={() => setDate("90")}
                      style={`${
                        date == "90" ? "text-black font-bold" : "text-[#959595]"
                      } w-[50px] sm:w-[70px] h-[40px] text-center text-[15px]`}
                    />
                    <ButtonMD
                      text="전체"
                      onClick={() => setDate("all")}
                      style={`${
                        date == "all"
                          ? "text-black font-bold"
                          : "text-[#959595]"
                      } w-[50px] sm:w-[70px] h-[40px] text-center text-[15px]`}
                    />
                  </div>
                </div>
                <div className="mt-[40px] border-b border-[#959595] mb-[100px] overflow-auto height_scroll ">
                  <div className=" pb-[50px]">
                    <table
                      className={`min-w-[1150px] w-full table-fixed text-[15px] border-b border-[#959595] ${pre_600.className}`}
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
                          <td className="w-[160px] pb-[10px] text-center">
                            To
                          </td>
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
                </div>
                <Paginations style="mt-[20px] mb-[150px]" />
              </>
            )}
          </div>
        </div>
      </div>
      {whitePaperUploadModal && (
        <WhitePaperUploadModal setClose={setWhitePaperUploadModal} />
      )}
    </Layout>
  );
};

export default CollectionDetail;
