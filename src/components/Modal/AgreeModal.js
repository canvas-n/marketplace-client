import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import { pre_400 } from "../../../fonts";

// 번

import { useUser } from "../../react-query/hooks/user";
import { useAgreeList } from "../../react-query/hooks/etc";
import Loading from "../Common/Loading";

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const AgreeModal = ({
  setClose,
  setBidAgree,
  setBidPopupShow,
  setAlert,
  setMsg,
  setAType,
}) => {
  const { service, privacy, privacy_supply, privacy_term } = useAgreeList();
  const { user } = useUser();
  const { checkPhone } = usePhoneCheck();

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

  const [loader, setLoader] = useState(false);
  // 실명인증 확인
  const [phoneCheck, setPhoneCheck] = useState(false);
  // 나이스 팝업
  const [popup, setPopup] = useState(null);

  // 휴대폰 인증
  const verifyPhone = async (e) => {
    e.preventDefault();

    if (phoneCheck) return;
    if (loader) return;

    setLoader(true);

    const popup = window.open(
      process.env.NICE_URL,
      "_blank",
      "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no",
    );

    setPopup(popup);
  };

  useEffect(() => {
    if (!popup) return;

    const receiveMessage = async (e) => {
      const { name, phone } = e.data;

      if (name) {
        popup?.close();

        if (user?.uname != name) {
          setClose(false);
          setAlert(true);
          setMsg("본인 명의의 휴대폰 인증만 가능합니다.");
          setAType("error");
          return;
        }

        if (user?.uphone != phone) {
          setClose(false);
          setAlert(true);
          setMsg("회원 정보와 인증된 번호가 다릅니다. 다시 확인해주세요.");
          setAType("error");
          return;
        }

        setClose(false);
        setBidAgree(true);
        setBidPopupShow(true);
      }
    };

    window.addEventListener("message", receiveMessage, false);

    return () => {
      window.removeEventListener("message", receiveMessage);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[40px] pt-[60px] pb-[40px] w-[95%] lg:w-[930px] relative ">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>

        <div className="w-full">
          <div className="mt-5">
            <div className="text-md font-medium">전자상거래 이용약관</div>
          </div>
          <div className="mt-2.5 border-b border-b-gray-350"></div>
          <div className="mt-2.5 text-[15px] lg:h-[450px] h-[200px] overflow-auto width_scroll">
            {privacy_supply?.agr_content_kor.split("\n").map((line, idx) => {
              return (
                <span key={`privacy_supply_${idx}`}>
                  {" "}
                  {line} <br />
                </span>
              );
            })}
          </div>
          <div className="mt-[60px]">
            <div
              onClick={verifyPhone}
              className="bg-black w-[190px] h-[50px] text-center m-auto leading-[50px] text-white text-[16px] rounded-[3px] cursor-pointer"
            >
              동의합니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreeModal;
