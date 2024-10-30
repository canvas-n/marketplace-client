import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoginModal from "./LoginModal";
import CloseIcon from "../../../public/images/btn_close.svg";
import { pre_400, pre_600 } from "../../../fonts";
import Paginations from "../../components/Common/Paginations";
import ButtonMD from "../../components/Common/ButtonMD";

import { changeComma, getRemainingDays } from "../../lib/common";
import { useMyCouponList } from "../../react-query/hooks/mypage";
import moment from "moment";

// 번역

const MyCouponModal = ({
  setClose,
  artDeliPrice,
  setSelectedCoupon,
  setSelectedCouponNo,
}) => {
  const router = useRouter();
  // const { t } = useTranslation();

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

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [couponAgree, setCouponAgree] = useState([]);

  // 회원의 쿠폰 리스트
  const { c_total_cnt, my_coupon_list } = useMyCouponList({
    page: page,
    limit,
    offset: offset,
    type: "PAY",
  });

  const handleCouponAgreeChange = (event, idx, cpPrice, cp_no) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setCouponAgree([idx]);
      setSelectedCoupon(cpPrice); // Set the selected coupon price in the state
      setSelectedCouponNo(cp_no);
    } else {
      setCouponAgree([]);
      setSelectedCoupon(0); // Clear the selected coupon price from the state
      setSelectedCouponNo("");
    }
  };

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[9px] md:px-[40px] pt-[50px] pb-[33px] sm:pb-[50px] w-[95%] sm:w-[600px] relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
        <div
          className={`text-[16px] md:text-[18px] lg:text-[20px] pb-[10px] border-b border-[#494B50] ${pre_600.className}`}
        >
          내쿠폰목록
          <span
            className={`${pre_400.className} text-[13px] md:text-[14px] text-gray-100`}
          >
            {" "}
            (배송비보다 할인액이 적은 쿠폰만 사용 가능합니다.)
          </span>
        </div>
        {c_total_cnt > 0 ? (
          <>
            <div className="mt-[20px] mb-[30px] text-[15px]">
              <table
                className={`w-full ${pre_400.className} text-center text-[15px] text-[#000000]`}
              >
                <thead>
                  <tr>
                    <th className="pt-[15px] pb-[12px] bg-[#F5F5F8]">쿠폰명</th>
                    <th className="pt-[15px] pb-[12px] bg-[#F5F5F8]">할인액</th>
                    <th className="pt-[15px] pb-[12px] bg-[#F5F5F8]">만료일</th>
                    <th className="pt-[15px] pb-[12px] bg-[#F5F5F8] w-[50px]">
                      선택
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {my_coupon_list?.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DCDDE6]">
                      <td
                        className={`pl-[20px] text-left py-[18px] ${pre_400.className} text-[#000000]`}
                      >
                        배송비 할인
                      </td>
                      <td
                        className={`py-[18px] ${pre_600.className} ${
                          artDeliPrice >= item?.cp_price
                            ? "text-[#000000]"
                            : "text-gray-100"
                        }`}
                      >
                        {changeComma(item?.cp_price)} 원
                      </td>
                      <td
                        className={`py-[18px] ${pre_400.className} ${
                          artDeliPrice >= item?.cp_price
                            ? "text-[#000000]"
                            : "text-gray-100"
                        }`}
                      >
                        {moment(item?.expire_dttm).format("YYYY.MM.DD")}
                        <span className={`text-[14px] text-[#ABAFBE]`}>
                          (D-{getRemainingDays(item?.expire_dttm)})
                        </span>
                      </td>
                      <td
                        className={`py-[18px] ${pre_600.className} ${
                          artDeliPrice >= item?.cp_price
                            ? "text-[#000000]"
                            : "text-gray-100"
                        }`}
                      >
                        <div className="inline-block">
                          <input
                            checked={couponAgree.includes(idx)}
                            id={`select_${idx}`}
                            onChange={(e) =>
                              handleCouponAgreeChange(
                                e,
                                idx,
                                item?.cp_price,
                                item?.cp_no,
                              )
                            }
                            className="hidden checkbox_select"
                            type="checkbox"
                            disabled={
                              artDeliPrice >= item?.cp_price ? false : true
                            }
                          />
                          <label
                            htmlFor={`select_${idx}`}
                            className={`${pre_400.className} pl-[20px] h-[20px] text-[15px] inline-block `}
                          ></label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-[50px]">
              <Paginations
                limit={limit}
                page={page}
                setPage={setPage}
                total={c_total_cnt}
              />
            </div>
            <div className="text-center text-[15px]">
              <ButtonMD
                onClick={() => setClose(false)}
                text="적용하기"
                style="block w-[190px] mx-auto h-[50px] px-3 py-2 bg-black text-[16px] text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 rounded-[3px]"
              />
            </div>
          </>
        ) : (
          <div className="mt-[100px] mb-[80px] text-[15px] text-center">
            현재 사용가능한 쿠폰이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCouponModal;
