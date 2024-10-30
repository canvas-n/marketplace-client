import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import { useUser } from "@/react-query/hooks/user";
import { useSignIn } from "@/react-query/hooks/auth";

import InputMD from "../Common/InputMD";
import CheckBox from "../Common/CheckBox";
import Link from "next/link";
import { pre_400, pre_600, pre_800 } from "../../../fonts";

import GOOGLE from "../../../public/images/icon_google.svg";
import NAVER from "../../../public/images/icon_naver.svg";
import KAKAO from "../../../public/images/icon_kakao_y.svg";

import FindModal from "./FindModal";
import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";



const LoginModal = ({ setClose, setData }) => {
  const router = useRouter();
  const path = router.pathname;



  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
  const [loader, setLoader] = useState(false);

  const { user } = useUser();
  const { signIn } = useSignIn();

  const [atype, setAType] = useState("");
  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);

  const [idSave, setIdSave] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [tab, setTab] = useState("user");

  useEffect(() => {
    if(cookies.rememberEmail) {
      setEmail(cookies.rememberEmail);
      setIdSave(true);
    }
  }, []);

  // 아이디 저장
  const handleChangeCheck = (e) => {
    setIdSave(e.target.checked);
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

  // 일반 로그인
  const normalLogin = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!email) {
      setAlertPopupShow(true);
      setMsg("아이디(이메일)를 입력 해주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (!password) {
      setAlertPopupShow(true);
      setMsg("비밀번호를 입력 해주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    // 실제 hook에 정의된 mutation 의 호출은 여기서 한다
    const { success, data, msg } = await signIn({
      idSave,
      password,
      email,
      type: "D",
    });

    if (success) {
      if (idSave) {
        // 30일 유효기간
        setCookie('rememberEmail', email, {maxAge: 2592000000});
      } else {
        removeCookie('rememberEmail');
      }
      if (path == "/user/signup") {
        router.push("/");
      } else {
        router.reload();
      }

    } else {
      setLoader(false);
      setAlertPopupShow(true);
      if (msg) {
       // setMsg(t(msg));
      } else {
        setMsg('다시 시도해 주세요.');
      }
      setAType("error");
    }
  };

  const findShow = () => {
    setClose(false);
    setData(true);
  };
  
  const btnWait = () => {
    setAlertPopupShow(true);
    setMsg("준비중입니다.");
    setAType("error");
    return;
  }

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      normalLogin();
    }
  }

  const btnRegister = () => {
    if (path == "/user/signup") {
      setClose(false);
    } else {
      router.push('/user/signup');
    }
  }

  return (
    <div  className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}>
      {
        loader ?
          <Loading className="text-center" />
            :
          <div className="bg-white px-[20px] sm:px-[40px] py-[60px] w-[95%] sm:w-[500px] relative">
            <>
              <div className="absolute top-[10px] right-[10px]">
                <CloseIcon
                    onClick={() => setClose(false)}
                    className="cursor-pointer w-[20px] h-[20px]"
                />
              </div>
              <div className="flex text-center cursor-pointer relative">
                <div className="w-full h-[1px] absolute bottom-[2px] bg-[#000000] z-[0]"></div>
                <div className={`w-full text-left mb-[12px] text-[18px] sm:text-[18px] leading-[18px] text-black `} >
                  로그인
                </div>
              </div>
              <div className="w-full sm:max-w-[330px] m-auto mt-[40px]">
                <div className="w-full">
                  <input
                      type="text"
                      placeholder="이메일 주소"
                      onKeyDown={(e) => activeEnter(e)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mb-[10px] text-black"
                  />
                  <input
                      type="password"
                      placeholder="비밀번호"
                      onKeyDown={(e) => activeEnter(e)}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full mb-[10px] text-black"
                  />
                  <div className="block text-right">
                    <input
                        className="hidden checkbox_select"
                        id="select_2"
                        type="checkbox"
                        checked={idSave}
                        onChange={handleChangeCheck}
                    />
                    <label
                        htmlFor="select_2"
                        className={`${pre_400.className} pl-[30px] h-[20px] text-[14px] inline-block text-black `}
                    >
                      아이디저장
                    </label>
                  </div>
                </div>

                <div className="mt-[60px]">
                  <div
                      className="bg-black w-[190px] h-[50px] text-center m-auto leading-[50px] text-white text-[16px] rounded-[3px] cursor-pointer"
                      onClick={tab == "user" ? normalLogin : sellerLogin}
                  >
                    로그인
                  </div>
                </div>
                {/*{tab === "user" && (
            <div>
              <div className="relative mt-[45px] mb-[35px]">
                <div className="relative text-center">
                  <div className="w-full absolute top-[12px] left-0 h-[1px] bg-[#DCDDE6]" />
                  <span className="bg-white px-[27px] text-base relative font-semibold leading-[20px] text-gray-900">
                    or
                  </span>
                </div>
              </div>
              <div className="text-center">
                <span className="mr-[20px]">
                  <GOOGLE onClick={btnWait}/>
                </span>
                <span className="mr-[20px]">
                  <NAVER onClick={btnWait} />
                </span>
                <span>
                  <KAKAO onClick={btnWait} />
                </span>
              </div>
            </div>
          )}*/}
                <div className="text-center text-sm mt-[60px]">
                  <span
                      onClick={btnRegister}
                      className="cursor-pointer text-[14px] mr-[50px] border-b border-b-black text-black"
                  >
                    회원가입
                  </span>
                  <span
                      onClick={findShow}
                      className="text-[14px] border-b border-b-black text-black"
                  >
              아이디/비밀번호찾기
            </span>
          </div>
        </div>
      </>
      { alertPopupShow &&
          <AlertModal setClose={setAlertPopupShow} msg={msg} type={'error'}/>
      }
      </div>
      }
    </div>
  );
};

export default LoginModal;
