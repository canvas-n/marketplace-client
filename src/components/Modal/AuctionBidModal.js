import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../react-query/hooks/user";

import Paginations from "../Common/Paginations";
import { pre_400, pre_600 } from "../../../fonts";
import ButtonMD from "../Common/ButtonMD";
import {
  useMyAuctionBid,
  useProposeList,
  useNowAuctionInfo,
  useAuctionBidOrder,
  useProposePrice,
  useAuctionBidAutoOrder,
  useAuctionAutoState,
  useAuctionBidAutoOrderCancel,
} from "../../react-query/hooks/auction";
import { changeComma, numberToKorean } from "../../lib/common";
import moment from "moment/moment";

// 번역
import Loading from "../../components/Common/Loading";

const AuctionBidModal = ({
  setClose,
  id,
  setAlert,
  setMsg,
  setAType,
  auRefetch,
  nowPrice,
}) => {
  const [tab, setTab] = useState("manual");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [autoStateCheck, setAutoStateCheck] = useState(false);
  const [autoBidPrice, setAutoBidPrice] = useState("");

  const { user } = useUser();
  const { proposeList } = useProposeList();
  const { m_bid_total_cnt, m_auction_bid, m_bid_refetch } = useMyAuctionBid({
    page,
    limit,
    offset,
    id,
    me: "Y",
  });
  // 현재가 가져오기
  const { now_bid } = useNowAuctionInfo({
    goods_seq: id,
  });
  // 수동입찰하기
  const { bidOrder } = useAuctionBidOrder();
  // 자동입찰하기
  const { bidAutoOrder } = useAuctionBidAutoOrder();
  // 자동입찰 취소하기
  const { bidAutoOrderCancel } = useAuctionBidAutoOrderCancel();
  // 호가계산된 금액 가져옴
  const { proposePrice, proposeRefetch } = useProposePrice({
    goods_seq: id,
  });
  // 자동입찰 확인
  const { autoState } = useAuctionAutoState({
    goods_seq: id,
  });

  useEffect(() => {
    if (!proposePrice) return;

    if (autoState?.use_yn == "Y") {
      setAutoStateCheck(true);
      setAutoBidPrice(formatNumberWithCommas(autoState?.limit_price));
    } else {
      setAutoStateCheck(false);
      setAutoBidPrice(formatNumberWithCommas(proposePrice));
    }
  }, [proposePrice, autoState, tab]);

  const formatNumberWithCommas = (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e) => {
    const inputNumber = e.target.value.replace(/,/g, ""); // 쉼표 제거
    const formattedNumber = formatNumberWithCommas(inputNumber); // 쉼표 추가
    setAutoBidPrice(formattedNumber);
  };

  const [loader, setLoader] = useState(false);

  const btnBid = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!user) {
      setLoader(false);
      return;
    }

    if (!proposePrice) {
      setAlert(true);
      setMsg("다시 시도해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (!id) {
      setAlert(true);
      setMsg("다시 시도해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (autoState?.use_yn == "Y") {
      setAlert(true);
      setMsg("자동입찰 시 수동입찰은 불가합니다.");
      setAType("error");
      setLoader(false);
      return;
    }

    // 실제 hook에 정의된 mutation 의 호출은 여기서 한다
    const { success, data, msg } = await bidOrder({
      goods_seq: id,
      bid_price: proposePrice,
    });

    if (success) {
      setAlert(true);
      setMsg("수동입찰되었습니다.");
      setAType("error");
      setLoader(false);
      m_bid_refetch();
      proposeRefetch();
      auRefetch();
    } else {
      if (msg != "E4645" && msg != "E4654") {
        // setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
      setLoader(false);
      setAlert(true);
      setAType("error");
    }
  };

  const btnBidAuto = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!user) {
      setLoader(false);
      return;
    }

    if (!id) {
      setAlert(true);
      setMsg("다시 시도해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    // 자동입찰 취소하기
    if (autoStateCheck) {
      autoBidCancel();
    } else {
      let auto_price = autoBidPrice.replace(/,/g, "");

      if (parseInt(auto_price) < parseInt(nowPrice)) {
        setAutoBidPrice(formatNumberWithCommas(proposePrice));
        setAlert(true);
        setMsg("현재가보다 낮은 금액으로 자동 입찰을 시작할 수 없습니다.");
        setAType("error");
        setLoader(false);
        return;
      }

      if (parseInt(auto_price) < parseInt(proposePrice)) {
        setAutoBidPrice(formatNumberWithCommas(proposePrice));
        setAlert(true);
        setMsg("기준 호가가 충족되지 않았습니다.");
        setAType("error");
        setLoader(false);
        return;
      } else {
        autoBidStart();
      }
    }
  };

  // 자동입찰 시작
  const autoBidStart = async () => {
    const { success, data, msg } = await bidAutoOrder({
      goods_seq: id,
      limit_price: autoBidPrice.replace(/,/g, ""),
    });

    if (success) {
      if (data?.use_yn == "Y") {
        setAutoStateCheck(true);
      } else if (data?.use_yn == "N") {
        setAutoStateCheck(false);
      }

      setAlert(true);
      setMsg("자동입찰이 시작되었습니다.");
      setLoader(false);
      setAType("error");
      m_bid_refetch();
      auRefetch();
    } else {
      setAlert(true);
      if (msg != "E4645" && msg != "E4654") {
        setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
      setLoader(false);
      setAType("error");
    }
  };

  // 자동입찰 취소
  const autoBidCancel = async () => {
    const { success, data, msg } = await bidAutoOrderCancel({
      goods_seq: id,
    });

    if (success) {
      setAutoStateCheck(false);
      setAlert(true);
      setMsg("자동입찰이 취소되었습니다.");
      setAType("error");
      setLoader(false);
      m_bid_refetch();
    } else {
      setAlert(true);
      if (msg != "E4645" && msg != "E4654") {
        setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
      setLoader(false);
      setAType("error");
    }
  };

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

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      {loader ? (
        <Loading className="text-center" />
      ) : (
        <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[33px] sm:pb-[50px] w-[95%] sm:w-[500px] relative">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          <div className="flex text-center cursor-pointer relative">
            <div className="w-full h-[1px] absolute bottom-[2px] bg-[#000000] z-[0]"></div>
            <div
              className={`w-[33.33333%] pb-[10px] text-[15px] sm:text-[18px] leading-[18px] ${
                tab === "manual"
                  ? "border-b-[5px] border-black text-black"
                  : "text-[#ABAFBE]"
              }`}
              onClick={() => setTab("manual")}
            >
              수동입찰
            </div>
            <div
              className={`w-[33.33333%] pb-[10px] text-[15px] sm:text-[18px] leading-[18px] ${
                tab === "automatic"
                  ? "border-b-[5px] border-black text-black"
                  : "text-[#ABAFBE]"
              }`}
              onClick={() => setTab("automatic")}
            >
              자동입찰
            </div>
            <div
              className={`w-[33.33333%] pb-[10px] text-[15px] sm:text-[18px] leading-[18px] ${
                tab === "price"
                  ? "border-b-[5px] border-black text-black"
                  : "text-[#ABAFBE]"
              }`}
              onClick={() => setTab("price")}
            >
              호가
            </div>
          </div>
          <div className="w-full">
            {tab === "manual" && (
              <div>
                <div className="mt-[25px] mb-[25px]">
                  <div className="flex">
                    <input
                      type="text"
                      className="inline-block w-[82%] sm:w-[260px] h-[50px] border-[#C8C9D6] mr-[5px] align-middle text-black text-right shrink-1"
                      value={changeComma(proposePrice)}
                      readOnly
                      disabled
                    />
                    <ButtonMD
                      onClick={btnBid}
                      text={"입찰하기"}
                      style={`text-[16px]  text-center text-white w-[100px] sm:w-[155px] h-[50px] rounded-[3px] bg-[#000000] shrink-0 ${pre_400.className}`}
                    />
                  </div>
                  <p className="mt-[10px] text-[12px]">
                    현재 최고 입찰금액에 구간별 호가가 추가된 금액이 자동
                    표기됩니다.
                  </p>
                </div>
                <div className="mb-[35px]">
                  <p className="text-[15px] mb-[10px]">나의 입찰내역</p>
                  <div className="border border-[#DCDDE6] h-[215px]">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="h-[45px] bg-[#F5F5F8]">
                          <td className="w-[45px] pl-[20px] sm:pl-[30px] text-[13px] sm:text-[14px] text-left">
                            No.
                          </td>
                          <td className="text-right pr-0 sm:pr-[70px] text-[13px] sm:text-[14px]">
                            입찰금
                          </td>
                          <td className="w-[150px] pr-[20px] sm:pr-[30px] text-right text-[13px] sm:text-[14px]">
                            입찰시간
                          </td>
                        </tr>
                      </thead>

                      {m_auction_bid?.length > 0 ? (
                        <tbody>
                          {m_auction_bid?.map((bid, idx) => (
                            <tr
                              key={`m_bid_${bid?.seq}`}
                              className="text-black"
                            >
                              <td
                                className={`pt-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                }  leading-[15px] w-[45px] pl-[20px] sm:pl-[30px] text-left`}
                              >
                                {page > 1 ? idx + 1 + 10 * (page - 1) : idx + 1}
                              </td>
                              <td
                                className={`pt-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                } leading-[15px] text-right pr-0 sm:pr-[70px] `}
                              >
                                {changeComma(bid.bid_price)}원
                              </td>
                              <td
                                className={`pt-[15px] leading-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                } text-right pr-[20px] sm:pr-[30px]`}
                              >
                                <span className="text-gray-100">
                                  {moment(bid.reg_dttm).format("YYYY.MM.DD")}
                                </span>
                                &nbsp; {moment(bid.reg_dttm).format("HH:mm:ss")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <tbody>
                          <tr className="text-gray-100 text-sm text-center">
                            <td colSpan={3}>입찰내역이 없습니다.</td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                  <div className="popup_pagination">
                    <Paginations
                      limit={limit}
                      page={page}
                      setPage={setPage}
                      total={m_bid_total_cnt}
                    />
                  </div>
                </div>
                <div>
                  <p
                    className={`text-[15px] leading-[20px] mb-[10px] ${pre_600.className}`}
                  >
                    안내사항
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    낙찰 시, 낙찰가의 10%(부가세별도)의 구매수수료가 별도로
                    부과됩니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    입찰하기 버튼을 누르면 바로 입찰이 됩니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    입찰 및 낙찰은 시스템상 취소가 불가능하므로, 신중히
                    입찰해주시기 바랍니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    부득이한 경우 낙찰 철회 시 낙찰가의 30%에 해당하는
                    낙찰철회비가 부과됩니다.
                  </p>
                </div>
              </div>
            )}
            {tab === "automatic" && (
              <div>
                <div className="mt-[25px] mb-[25px]">
                  <div className="flex">
                    <input
                      placeholder="0"
                      readOnly={autoStateCheck ? true : false}
                      value={autoBidPrice}
                      onChange={handleInputChange}
                      type="text"
                      className="inline-block w-[82%] sm:w-[260px] h-[50px] border-[#C8C9D6] mr-[5px] align-middle text-right shrink-1"
                    />
                    <ButtonMD
                      text={autoStateCheck ? "멈춤" : "시작"}
                      onClick={btnBidAuto}
                      style={`text-[16px]  text-center text-white w-[100px] sm:w-[155px] h-[50px] rounded-[3px] bg-[#000000] shrink-0 ${pre_400.className}`}
                    />
                  </div>
                  <p className="mt-[10px] text-[12px]">
                    현재 최고 입찰금액에 구간별 호가가 추가된 금액이 자동
                    표기됩니다.
                  </p>
                </div>
                <div className="mb-[35px]">
                  <p className="text-[15px] mb-[10px]">나의 입찰내역</p>
                  <div className="border border-[#DCDDE6] h-[215px]">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="h-[45px] bg-[#F5F5F8]">
                          <td className="w-[45px] pl-[20px] sm:pl-[30px] text-[13px] sm:text-[14px] text-left">
                            No.
                          </td>
                          <td className="text-right pr-0 sm:pr-[70px] text-[13px] sm:text-[14px]">
                            입찰금
                          </td>
                          <td className="w-[150px] pr-[20px] sm:pr-[30px] text-right text-[13px] sm:text-[14px]">
                            입찰시간
                          </td>
                        </tr>
                      </thead>
                      {m_auction_bid?.length > 0 ? (
                        <tbody>
                          {m_auction_bid?.map((bid, idx) => (
                            <tr
                              key={`m_bid_${bid?.seq}`}
                              className="text-black"
                            >
                              <td
                                className={`pt-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                }  leading-[15px] w-[45px] pl-[20px] sm:pl-[30px] text-left`}
                              >
                                {page > 1 ? idx + 1 + 10 * (page - 1) : idx + 1}
                              </td>
                              <td
                                className={`pt-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                } leading-[15px] text-right pr-0 sm:pr-[70px] `}
                              >
                                {changeComma(bid.bid_price)}원
                              </td>
                              <td
                                className={`pt-[15px] leading-[15px] ${
                                  idx == 4 ? "pb-[15px]" : ""
                                } text-right pr-[20px] sm:pr-[30px]`}
                              >
                                <span className="text-gray-100">
                                  {moment(bid.reg_dttm).format("YYYY.MM.DD")}
                                </span>
                                &nbsp; {moment(bid.reg_dttm).format("HH:mm:ss")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <tbody>
                          <tr className="text-gray-100 text-sm text-center">
                            <td colSpan={3}>입찰내역이 없습니다.</td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                  <div className="popup_pagination">
                    <Paginations
                      limit={limit}
                      page={page}
                      setPage={setPage}
                      total={m_bid_total_cnt}
                    />
                  </div>
                </div>
                <div>
                  <p
                    className={`text-[15px] leading-[20px] mb-[10px] ${pre_600.className}`}
                  >
                    안내사항
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    낙찰 시, 낙찰가의 10%(부가세별도)의 구매수수료가 별도로
                    부과됩니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    입찰하기 버튼을 누르면 바로 입찰이 됩니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    입찰 및 낙찰은 시스템상 취소가 불가능하므로, 신중히
                    입찰해주시기 바랍니다.
                  </p>
                  <p className="text-[12px] leading-[20px]">
                    부득이한 경우 낙찰 철회 시 낙찰가의 30%에 해당하는
                    낙찰철회비가 부과됩니다.
                  </p>
                </div>
              </div>
            )}
            {tab === "price" && (
              <div>
                <div className="mt-[30px] mb-[70px]">
                  <table className="w-full text-[12px] border border-[#DCDDE6]">
                    <thead>
                      <tr className="h-[45px] bg-[#F5F5F8]">
                        <td className="w-[45px] pl-[20px] sm:pl-[30px] text-[13px] sm:text-[14px] text-left">
                          No.
                        </td>
                        <td className="text-right pr-0 sm:pr-[70px] text-[13px] sm:text-[14px]">
                          입찰금액범위
                        </td>
                        <td className="pr-[20px] sm:pr-[30px] text-right text-[13px] sm:text-[14px]">
                          입찰단위금액
                        </td>
                      </tr>
                    </thead>
                    {proposeList?.length > 0 ? (
                      <tbody>
                        {proposeList?.map((pro, idx) => (
                          <tr
                            key={`propose_list_${pro.seq}`}
                            className="text-black"
                          >
                            <td
                              className={`pt-[15px] leading-[15px] w-[45px] pl-[20px] sm:pl-[30px] text-left ${
                                proposeList?.length - 1 == idx
                                  ? "pb-[15px]"
                                  : ""
                              }`}
                            >
                              {pro.seq}
                            </td>
                            <td
                              className={`pt-[15px] leading-[15px] text-right pr-0 sm:pr-[70px] ${
                                proposeList?.length - 1 == idx
                                  ? "pb-[15px]"
                                  : ""
                              }`}
                            >
                              {pro?.sec_minprice && pro.sec_minprice != 0
                                ? pro.sec_minprice?.toString().slice(0, 1) ==
                                    "1" && pro.sec_minprice < 100000000
                                  ? "일" +
                                    numberToKorean(pro.sec_minprice) +
                                    " ~ "
                                  : pro.sec_minprice < 200000000
                                    ? numberToKorean(pro.sec_minprice) + " ~ "
                                    : numberToKorean(pro.sec_minprice) + " 이상"
                                : "~"}
                              {pro?.sec_minprice &&
                              pro.sec_maxprice?.toString().slice(0, 1) == "1" &&
                              pro.sec_maxprice < 100000000
                                ? "일" +
                                  numberToKorean(pro.sec_maxprice) +
                                  "  미만"
                                : pro.sec_maxprice > 200000000
                                  ? ""
                                  : numberToKorean(pro.sec_maxprice) + "  미만"}
                            </td>
                            <td
                              className={`pt-[15px] leading-[15px] mb-15px text-right pr-[20px] sm:pr-[30px] ${
                                proposeList?.length - 1 == idx
                                  ? "pb-[15px]"
                                  : ""
                              }`}
                            >
                              {numberToKorean(pro.propose_price)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      ""
                    )}
                  </table>
                </div>
                <div>
                  <p
                    className={`text-[15px] leading-[20px] mb-[10px] ${pre_600.className}`}
                  >
                    &nbsp;
                  </p>
                  <p className="text-[12px] leading-[20px]">&nbsp;</p>
                  <p className="text-[12px] leading-[20px]">&nbsp;</p>
                  <p className="text-[12px] leading-[20px]">&nbsp;</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionBidModal;
