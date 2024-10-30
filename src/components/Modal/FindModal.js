import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import InputMD from "../Common/InputMD";
import CheckBox from "../Common/CheckBox";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFindId, useFindPw } from "../../react-query/hooks/auth";
import { useUser } from "../../react-query/hooks/user";
import { pre_400 } from "../../../fonts";

// 번역

import AlertModal from "./AlertModal";
import Loading from "../Common/Loading";

const FindModal = ({ setClose }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const { user } = useUser();
  const { findId } = useFindId();
  const { findPw } = useFindPw();

  const [atype, setAType] = useState("");
  const [msg, setMsg] = useState("");
  const [alertPopupShow, setAlertPopupShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const [tab, setTab] = useState("id");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const searchId = async () => {
    /*    if (loader) {
      return;
    }

    setLoader(true);*/

    setAlertPopupShow(true);
    setMsg("준비중입니다.");
    setAType("error");
    //setLoader(false);
    return;

    if (!name) {
      setAlertPopupShow(true);
      setMsg("이름을 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (!phone) {
      setAlertPopupShow(true);
      setMsg("휴대폰번호를 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    let uphone = phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    // 실제 hook에 정의된 mutation 의 호출은 여기서 한다
    const { success, data, msg } = await findId({
      name,
      phone: uphone,
    });

    if (success) {
      setAlertPopupShow(true);
      setMsg("가입시 입력한 휴대폰 번호로 아이디가 발송되었습니다.");
      setLoader(false);
      setAType("error");
      setEmail("");
      setPhone("");
      setName("");
    } else {
      setAlertPopupShow(true);
      if (msg) {
        //setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
      setAType("error");
      setLoader(false);
    }
  };

  const searchPw = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!name) {
      setAlertPopupShow(true);
      setMsg("이름을 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    if (!email) {
      setAlertPopupShow(true);
      setMsg("아이디(이메일)를 입력해 주세요.");
      setAType("error");
      setLoader(false);
      return;
    }

    // 실제 hook에 정의된 mutation 의 호출은 여기서 한다
    const { success, data, msg } = await findPw({
      name,
      email,
    });

    if (success) {
      setAlertPopupShow(true);
      setMsg("가입시 입력한 이메일로 임시 비밀번호가 발송되었습니다.");
      setAType("error");
      setLoader(false);
      setEmail("");
      setPhone("");
      setName("");
    } else {
      setAlertPopupShow(true);
      setLoader(false);
      if (msg) {
        setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
      setAType("error");
    }
  };

  const btnSend = () => {
    if (tab == "id") {
      searchId();
    } else {
      searchPw();
    }
  };

  const changeTab = () => {
    if (tab == "id") {
      setTab("password");
    } else {
      setTab("id");
    }
    setEmail("");
    setPhone("");
    setName("");
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
        <div className="bg-white px-[20px] sm:px-[40px] pt-[60px] pb-[40px] w-[95%] sm:w-[500px] relative">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          {/*test 주석*/}
          <div className="flex relative text-center cursor-pointer">
            <div className="w-full h-[1px] absolute bottom-[2px] bg-[#000000] z-[0]"></div>
            <div
              className={`w-[50%] pb-[10px] border-b-black text-[15px] sm:text-[18px] leading-[18px] ${
                tab === "id"
                  ? "border-b-[5px] border-black text-black"
                  : "text-[#ABAFBE]"
              }`}
              onClick={changeTab}
            >
              아이디찾기
            </div>
            <div
              className={`w-[50%] pb-[10px] border-b-black text-[15px] sm:text-[18px] leading-[18px] ${
                tab === "password"
                  ? "border-b-[5px] border-black text-black"
                  : "text-[#ABAFBE]"
              }`}
              onClick={changeTab}
            >
              비밀번호찾기
            </div>
          </div>
          <div className="w-full sm:max-w-[330px] m-auto mt-[40px]">
            <div className="w-full">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-[10px]"
              />
              {tab == "id" ? (
                <input
                  type="number"
                  placeholder="가입 시 입력한 휴대전화번호(숫자만 입력)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full"
                />
              ) : (
                <input
                  type="email"
                  placeholder="가입 시 입력한 이메일 주소"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2"
                />
              )}
            </div>

            <div className="mt-[90px]">
              <div
                className="bg-black text-white text-[16px] w-[192px] m-auto h-[50px] leading-[50px] text-center rounded-[3px] cursor-pointer"
                onClick={btnSend}
              >
                확인
              </div>
            </div>
          </div>
        </div>
      )}
      {alertPopupShow && (
        <AlertModal setClose={setAlertPopupShow} msg={msg} type={"error"} />
      )}
    </div>
  );
};

export default FindModal;
