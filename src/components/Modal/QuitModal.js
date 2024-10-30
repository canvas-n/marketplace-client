import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";
import { pre_400 } from "../../../fonts";
import { useUser } from "../../react-query/hooks/user";
import { useMyUnsubscribe } from "../../react-query/hooks/mypage";

import Loading from "../../components/Common/Loading";

// 번역

const QuitModal = ({ setClose, setAlert, setMsg, setAType }) => {
  const { user } = useUser();
  const { unsubscribe } = useMyUnsubscribe();
  const [loader, setLoader] = useState(false);

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

  const btnQuit = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!user) {
      setLoader(false);
      return;
    }

    const { success, data, msg } = await unsubscribe();

    if (success) {
      setLoader(false);
      setClose(false);
      setAlert(true);
      setAType("quit");
    } else {
      setLoader(false);
      setClose(false);
      setAlert(true);
      setAType("error");
      if (msg) {
        if (msg == "E4648") {
          setMsg("현재 구매 중인 작품이 있습니다.");
        } else {
          //setMsg(t(msg));
        }
      } else {
        setMsg("다시 시도해 주세요.");
      }
    }
  };

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
          <div className="w-full">
            <div className="text-md font-bold flex justify-center border-b border-[#C8C9D6] pb-[60px] mt-[10px]">
              <div>정말로 탈퇴하시겠습니까?</div>
            </div>
            <div className="mt-5">
              <div className="text-sm2 font-medium">안내사항</div>
            </div>
            <div className="mt-2.5 text-xs">
              <p>
                - 구매 중인 작품이 있을 경우, 해당 작품의 구매 프로세스가 완료된
                후 탈퇴할 수 있습니다.
              </p>
              <p>
                - 입찰한 경매가 진행중일 경우, 해당 경매가 마감되기 전까지
                탈퇴가 불가능합니다.
              </p>
              <p>
                - 낙찰자의 경우, 낙찰대금을 모두 지불하기 전까지 탈퇴가
                불가능합니다.
              </p>
            </div>
            <div className="mt-9 flex font-medium space-x-2.5 px-3.5 mb-7">
              <div
                className="py-4 w-1/2 flex justify-center border border-gray-350 rounded-[3px]  cursor-pointer"
                onClick={() => setClose(false)}
              >
                취소하기
              </div>
              <div
                onClick={btnQuit}
                className="py-4 w-1/2 flex justify-center bg-black text-white rounded-[3px] cursor-pointer"
              >
                탈퇴하기
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuitModal;
