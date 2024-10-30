import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { pre_400, pre_800 } from "../../../fonts";
import { useSignOut } from "../../react-query/hooks/auth";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const AlertModal = ({ setClose, type, msg, refresh }) => {
  const router = useRouter();
  const signout = useSignOut();

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

  const handleButtonClose = async () => {
    setClose(false);

    if (type == "quit") {
      await signout();
      router.reload();
    }

    if (refresh) {
      refresh();
    }
  };

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[33px] sm:pb-[50px] w-[95%] sm:w-[500px] min-h-[230px] flex justify-center items-center relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={handleButtonClose}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
        {/*test 주석*/}
        <div className={`text-center text-[16px] ${pre_400.className}`}>
          {type == "qna" && (
            <>
              <p>1:1 문의가 접수되었습니다.</p>
              <p>문의내역은 마이페이지에서 확인할 수 있습니다.</p>
            </>
          )}
          {type == "error" && (
            <>
              <p>{msg}</p>
            </>
          )}
          {type == "event_fail" && (
            <>
              <p>아쉽네요~</p>
              <p>다음 기회에 다시 도전해 주세요.</p>
            </>
          )}
          {type == "event_success" && (
            <>
              <p>축하합니다.</p>
              <p>낙찰되었습니다.</p>
            </>
          )}
          {type == "order_bank" && (
            <>
              <p>주문이 취소되었습니다.</p>
              <p>
                마이페이지 {">"} 내정보에서 환불계좌정보를 한번 더 확인해
                주세요.
              </p>
            </>
          )}
          {type == "order_card" && (
            <>
              <p>주문이 취소되었습니다.</p>
              <p>카드결제 취소는 영업일 기준 7일 이내 환불됩니다.</p>
            </>
          )}
          {type == "quit" && (
            <>
              <p className={`text-[18px] ${pre_800} font-bold`}>
                회원탈퇴가 완료되었습니다.
              </p>
              <p>그동안 Canvas N을 이용해 주셔서 감사합니다.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
