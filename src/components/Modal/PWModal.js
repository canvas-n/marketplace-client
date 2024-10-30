import CloseIcon from "../../../public/images/btn_close.svg";
import InputMD from "../Common/InputMD";
import SelectBox from "../Common/SelectBox";
import React, { useEffect, useState } from "react";
import { pre_400, pre_800 } from "../../../fonts";

// 번역
import dynamic from "next/dynamic";

import { useMyPwChange, useMyPwCheck } from "../../react-query/hooks/mypage";

import Loading from "../../components/Common/Loading";

const AlertModal = dynamic(() => import("../Modal/AlertModal"), {
  suspense: true,
});

const validatePassword = (pw) => {
  const pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).{8,15}$/;
  return pattern.test(pw);
};

const PWModal = ({ setClose }) => {
  const { t } = useTranslation();
  const { getMyPw } = useMyPwCheck();
  const { setUpdatePw } = useMyPwChange();

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

  const [step, setStep] = useState(1);

  const [alertPopupShow, setAlertPopupShow] = useState(false);
  const [atype, setAType] = useState("");
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const [nowPw, setNowPw] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const btnPwCheck = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!nowPw) {
      setAlertPopupShow(true);
      setMsg("현재 비밀번호를 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    /*
    if (!validatePassword(nowPw)) {
      setAlertPopupShow(true);
      setMsg("비밀번호는 영문+숫자+특수문자의 조합으로 8자~12자로 입력해 주세요.");
      setAType("error");
      setNowPw('');
      return;
    }
*/

    const { success, data, msg } = await getMyPw({
      upw: nowPw,
    });

    if (success) {
      setLoader(false);
      setStep(2);
    } else {
      setLoader(false);
      setAlertPopupShow(true);
      if (msg == null) {
        setMsg("다시 시도해 주세요.");
      } else {
        //setMsg(t(msg));
      }
      setNowPw("");
      setAType("error");
    }
  };

  const btnPwChange = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!password) {
      setAlertPopupShow(true);
      setMsg("비밀번호를 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (!validatePassword(password)) {
      setAlertPopupShow(true);
      setMsg(
        "비밀번호는 영문+숫자+특수문자의 조합으로 8자~12자로 입력해 주세요.",
      );
      setAType("error");
      setPassword("");
      setLoader(false);
      return;
    }

    if (!passwordCheck) {
      setAlertPopupShow(true);
      setMsg("비밀번호 확인을 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (password !== passwordCheck) {
      setAlertPopupShow(true);
      setMsg("비밀번호와 비밀번호확인이 일치하지않습니다.");
      setAType("error");
      setPasswordCheck("");
      setLoader(false);
      return;
    }

    const { success, data, msg } = await setUpdatePw({
      upw: password,
    });

    if (success) {
      setLoader(false);
      setClose(false);
      setAlertPopupShow(true);
      setMsg("비밀번호가 변경되었습니다.");
      setAType("error");
    } else {
      setLoader(false);
      setAlertPopupShow(true);
      if (msg == null) {
        setMsg("다시 시도해 주세요.");
      } else {
        setMsg(t(msg));
      }
      setAType("error");
    }
  };

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      {loader ? (
        <Loading className="text-center" />
      ) : (
        <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[40px] w-[95%] sm:w-[500px] relative min-h-[440px]">
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
              비밀번호 변경
            </div>
            {step == 1 && (
              <>
                <div className="flex items-center justify-center mt-[80px] w-full">
                  <div className="w-[330px]">
                    <div className="w-full">
                      <div className="sm:text-[17px] text-[15px] mb-[7px]">
                        현재 비밀번호를 입력하세요.
                      </div>
                      <input
                        placeholder="현재 비밀번호"
                        value={nowPw}
                        onChange={(e) => setNowPw(e.target.value)}
                        type="password"
                        className="w-[330px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[109px]">
                  <div
                    className="bg-black text-white text-[16px] w-[192px] m-auto h-[50px] leading-[50px] text-center rounded-[3px] cursor-pointer"
                    onClick={btnPwCheck}
                  >
                    확인
                  </div>
                </div>
              </>
            )}
            {step == 2 && (
              <>
                <div className="inline-block  mt-[40px] w-full">
                  <div className="w-[330px] mx-auto">
                    <div className="w-full">
                      <div className="sm:text-[17px] text-[15px] mb-[7px]">
                        새 비밀번호를 입력하세요.
                      </div>
                      <input
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="w-[330px]"
                      />
                    </div>
                  </div>
                  <div className="w-[330px] mx-auto mt-[25px]">
                    <div className="w-full">
                      <div className="sm:text-[17px] text-[15px] mb-[7px]">
                        새 비밀번호를 한번 더 입력하세요.
                      </div>
                      <input
                        placeholder="비밀번호 확인"
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        type="password"
                        className="w-[330px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[53px]">
                  <div
                    className="bg-black text-white text-[16px] w-[192px] m-auto h-[50px] leading-[50px] text-center rounded-[3px] cursor-pointer"
                    onClick={btnPwChange}
                  >
                    변경하기
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {alertPopupShow && (
        <AlertModal setClose={setAlertPopupShow} msg={msg} type={atype} />
      )}
    </div>
  );
};

export default PWModal;
