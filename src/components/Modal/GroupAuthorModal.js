import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Paginations from "../../components/Common/Paginations";

import FindModal from "./FindModal";
import { pre_600, pre_400, poppins_400, poppins_600 } from "../../../fonts";
import IconSearch from "../../../public/images/icon_search.svg";
import {useArtistSearchList} from "../../react-query/hooks/artist";
import ArtistNull from "../../../public/images/icon_artist_null.svg";

const GroupAuthorModal = ({ setClose, setArtistName, setArtistSeq }) => {
  const router = useRouter();
  const [tab, setTab] = useState("KOR");
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [searchTxt, setSearchTxt] = useState("");
  const [search, setSearch] = useState("");

  const [innerWidth, setInnerWidth] = useState(
      typeof window !== 'undefined' ?  window.innerWidth : ''
  );

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);

    if (innerWidth < 600) {
      setLimit(3);
    } else {
      setLimit(9);
    }
  });

  useEffect(() => {
    setSearch('');
    setSearchTxt('');
    setPage(1);
  }, [tab]);

  const { total_cnt, artist_list, isRefetch } = useArtistSearchList({
    page,
    limit,
    offset,
    search,
    country : tab
  });

  // 검색어 버튼
  const btnSearch = () => {
    setSearch(searchTxt);
  };

  const btnArtistAdd = () => {
    router.push("/service/qna");
  }

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const selectedName = (name, seq) => {
    setArtistSeq(seq);
    setArtistName(name);
    setClose(false)
  }

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      btnSearch();
    }
  }

  return (
      <div className="bg-black bg-opacity-50 backdrop-blur-sm w-full h-full  fixed z-[100] top-0 left-0 shadow-sm overflow-auto">
        <div className="bg-white relative p-[40px] w-[100%] lg:w-[930px] min-h-[640px] md:min-h-[690px] top-[50%] m-auto  translate-y-[-50%]">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
                onClick={() => setClose(false)}
                className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          <div className="flex justify-evenly w-full font-md mt-5 relative text-gray-100 cursor-pointer">
            <div className="w-full h-[1px] absolute bottom-[2px] bg-[#000000] z-[-1]"></div>
            <div
                className={`w-1/2 pb-[10px] flex justify-center ${
                    tab === "KOR"
                        ? `border-b-[5px] text-black border-[#000000] ${pre_600.className}`
                        : `border-0 ${pre_400.className}`
                }`}
                onClick={() => setTab("KOR")}
            >
              국내작가
            </div>
            <div
                className={`w-1/2 pb-[10px] flex justify-center  ${
                    tab === "OTHER"
                        ? `border-b-[5px] text-black border-[#000000] ${pre_600.className}`
                        : `border-0 ${pre_400.className}`
                }`}
                onClick={() => setTab("OTHER")}
            >
              해외작가
            </div>
          </div>
          <div className="w-full">
            <div className="mt-[20px]">
              <div className="mb-[30px] ">
                <div className="w-full md:w-[300px] inline-block relative">
                  <input
                      onKeyDown={(e) => activeEnter(e)}
                      placeholder="작가 검색"
                      type="text"
                      className="inline-block w-full md:w-[300px] h-[45px] border-[#C8C9D6]"
                      value={searchTxt}
                      onChange={(e) => setSearchTxt(e.target.value)}
                  />
                  <IconSearch
                      onClick={btnSearch}
                      className="cursor-pointer absolute top-1/2 right-1 text-[25px] div_center"
                  />
                </div>
              </div>
              <div className="mb-[50px]">
                {
                    (total_cnt > 0 && search) &&
                    <p className="mb-[10px] text-[15px]">검색 건수 { total_cnt}건</p>
                }
                <div className="flex flex-wrap flex-start gap-x-[15px]">
                  {
                    total_cnt > 0 ?
                        artist_list?.map((artist, idx) => (
                            <>
                              <div onClick={() => selectedName(artist?.aname_kor, artist?.artist_seq)} key={`artist_list_${idx}`} className="w-[273px] h-[100px] mb-[17px] flex  border border-[#ECEDF2]">
                                { artist?.aprofile_img1 ? (
                                    <div className="w-[100px] h-[100px] shrink-0 bg-[#F5F5F8]" style={{background: `url(${process.env.IMAGE_PATH +artist?.aprofile_img1}) no-repeat center center`, backgroundSize: 'cover'}}></div>
                                ) : (
                                    <div className="flex justify-center shrink-0 items-center w-[100px] h-[100px] bg-[#F5F5F8]">
                                      <ArtistNull />
                                    </div>
                                )}

                                <div className="pl-[10px] flex shrink-1 items-center">
                                  <div className="overflow-hidden break-all">
                                    <p className={`text-[15px] max-h-[45px] overflow-ellipsis mb-[7px] ${pre_600.className} `}>
                                      {artist?.aname_kor}
                                    </p>
                                    <p className={`text-[15px] max-h-[45px] overflow-ellipsis ${poppins_400.className}`}>
                                      {artist?.aname_eng}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </>
                        ))
                        :
                        <div className="w-full">
                          <p className="text-center text-[17px] mt-[123px]">검색된 결과가 없습니다.</p>
                          <div className="text-center mt-[40px]">
                            <button onClick={() => btnArtistAdd()} type="button" className="inline-block text-center bg-black text-white w-[192px] rounded-[3px] h-[50px]">작가등록 요청하기</button>
                          </div>
                        </div>
                  }
                </div>
              </div>
              {
                  total_cnt > 0 &&
                  <div className="absolute bottom-[40px] md:bottom-[80px] left-1/2 div_center ">
                    <Paginations
                        limit={limit}
                        page={page}
                        setPage={setPage}
                        total={total_cnt}
                    />
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default GroupAuthorModal;