import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { pre_400, pre_600, pre_800 } from "../../../fonts";
import CloseIcon from "../../../public/images/btn_close.svg";

import ButtonMD from "../Common/ButtonMD";

import { useUser } from "../../react-query/hooks/user";
import {
  useMyAuctionBid,
  useEvenBidOrder,
  useEvenBidUserCnt,
} from "../../react-query/hooks/auction";
import { changeComma } from "../../lib/common";
import moment from "moment";

import Loading from "../../components/Common/Loading";

const BiddingAvailableModal = ({
  setClose,
  id,
  setAlert,
  setMsg,
  setAType,
  auc_refetch,
}) => {
  // const { t } = useTranslation();
  const { user } = useUser();

  const [sellPrice, setSellPrice] = useState("");
  const [loader, setLoader] = useState(false);

  // 입찰 가능 수 CALL
  const { evenBidCnt, cntRefetch } = useEvenBidUserCnt(id);
  // 입찰내역
  const { m_bid_total_cnt, m_auction_bid, m_bid_refetch } = useMyAuctionBid({
    page: 1,
    limit: 10,
    offset: 0,
    id,
    me: "Y",
  });
  // 이벤트 입찰하기
  const { evenBidOrder } = useEvenBidOrder();

  // 10원 단위로 입찰 가능하게
  const validateAmount = (input) => {
    const amount = parseFloat(input);

    if (isNaN(amount) || amount < 10 || amount > 9990) {
      return false;
    }

    if (amount % 10 !== 0) {
      return false;
    }

    return true;
  };

  const handleInputChange = (event) => {
    setSellPrice(event.target.value);
  };

  // 입찰하기
  const btnBid = async () => {
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
      setMsg("다시 시도해 주세요-2.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (validateAmount(sellPrice)) {
      //console.log("유효한 금액입니다.");
    } else {
      setAlert(true);
      setMsg("입찰 금액은 10원 부터 9,990원까지 10원 단위로만 가능합니다.");
      setAType("error");
      setSellPrice("");
      setLoader(false);
      return;
    }

    // 실제 hook에 정의된 mutation 의 호출은 여기서 한다
    const { success, data, msg } = await evenBidOrder({
      goods_seq: id,
      bid_price: sellPrice,
    });

    if (success) {
      // 낙찰 or 입찰
      setAlert(true);
      setMsg("되었습니다.");
      setAType("event_success");
      setClose(false);
      setSellPrice("");
      setLoader(false);
      cntRefetch();
      m_bid_refetch();
      auc_refetch();
    } else {
      setAlert(true);
      if (msg) {
        if (msg == "E4523") {
          //setMsg(t(msg));
          setAType("error");
        } else {
          //  setMsg(t(msg));
          setAType("event_fail");
        }
      } else {
        setAType("error");
        setMsg("다시 시도해 주세요.");
      }
      setLoader(false);
      setSellPrice("");
      cntRefetch();
      m_bid_refetch();
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
        <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[45px] sm:pt-[55px] sm:pb-[65px] w-[95%] sm:w-[500px] relative">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          <div className="w-full">
            <div
              className={`text-[18px] pb-[10px] border-b border-[#494B50] ${pre_400.className}`}
            >
              입찰가능 횟수{" "}
              <span className={` ${pre_800.className}`}>
                {evenBidCnt ? evenBidCnt : 0}회
              </span>
            </div>
            <div>
              <div className="my-[30px]">
                <div className="flex">
                  <input
                    placeholder="0"
                    value={sellPrice}
                    onChange={handleInputChange}
                    type="text"
                    className="inline-block w-[82%] sm:w-[260px] h-[50px] border-[#C8C9D6] mr-[5px] align-middle text-right"
                  />
                  <ButtonMD
                    onClick={btnBid}
                    text={"입찰하기"}
                    style={`text-[16px]  text-center text-white w-[100px] sm:w-[155px] h-[50px] rounded-[3px] bg-[#000000] ${pre_400.className}`}
                  />
                </div>
                <p className="mt-[10px] text-[12px]">
                  ￦ 0 ~ ￦ 9,990의 범위안에서 입찰이 가능합니다.
                </p>
              </div>
              <div className="mb-[40px] sm:mb-[30px]">
                <p
                  className={`text-[14px] sm:text-[15px] mb-[10px] ${pre_600.className}`}
                >
                  나의 입찰내역
                </p>
                <div className="border border-[#DCDDE6] min-h-[220px]">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="h-[45px] bg-[#F5F5F8]">
                        <td className="w-[60px] pl-[20px] sm:pl-[30px] text-[13px] sm:text-[14px] text-left">
                          No.
                        </td>
                        <td className="text-right pr-[40px] sm:pr-[70px] text-[13px] sm:text-[14px]">
                          입찰금
                        </td>
                        <td className="w-[150px] pr-[20px] sm:pr-[30px] text-right text-[13px] sm:text-[14px]">
                          입찰시간
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {m_auction_bid?.length > 0 ? (
                        m_auction_bid?.map((bid, idx) => (
                          <tr key={`bid_${bid?.seq}`}>
                            <td className="pt-[15px] leading-[15px] w-[60px] pl-[20px] sm:pl-[30px] text-left">
                              {idx + 1}
                            </td>
                            <td className="pt-[15px] leading-[15px] text-right pr-[40px] sm:pr-[70px] ">
                              {changeComma(bid.bid_price)}원
                            </td>
                            <td className="pt-[15px] leading-[15px] mb-15px text-right pr-[20px] sm:pr-[30px]">
                              <span className="text-[#ABAFBE]">
                                {moment(bid.reg_dttm).format("YYYY.MM.DD")}
                              </span>
                              &nbsp; {moment(bid.reg_dttm).format("HH:mm:ss")}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center leading-5">
                            입찰내역이 없습니다.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/*                        <div>
                            <p className={`text-[15px] leading-[20px] mb-[10px] ${pre_600.className}`}>안내사항</p>
                            <p className="text-[12px] leading-[20px]">안내사항이 들어갑니다. 들어갈 내용을 넣어 주세요. 안내사항이 들어갑니다. 들어갈 내용을 넣어 주세요. 안내사항이 들어갑니다. 안내사항이 들어 갑니다. 안내사항이 들어갑니다.</p>
                        </div>*/}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiddingAvailableModal;
