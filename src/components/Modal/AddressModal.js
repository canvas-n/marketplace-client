import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect, useState } from "react";

import { pre_400, pre_600 } from "../../../fonts";
import ButtonMD from "../Common/ButtonMD";
import { useForm } from "react-hook-form";
import { useUser } from "../../react-query/hooks/user";
import { useMyAddrAdd } from "../../react-query/hooks/mypage";

import PostPopup from "../../components/Common/PostPopup";
import Loading from "../../components/Common/Loading";

import { validatePhoneNumber } from "../../lib/common";

// 번
const AddressModal = ({ setClose, setAlert, setAType, setMsg }) => {
  const { user } = useUser();
  const { addrAdd } = useMyAddrAdd();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
    getValues,
  } = useForm({ mode: "onChange" });

  const [modalState, setModalState] = useState(false);
  const [loader, setLoader] = useState(false);

  const onCompletePost = ({ zonecode, address }) => {
    setModalState(false);
    setValue("rzip", zonecode);
    setValue("raddr1", address);
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

  // 배송지 추가
  const onSubmit = async ({
    addr_name,
    recipient,
    phone1,
    phone2,
    phone3,
    rzip,
    raddr1,
    raddr2,
    isdefault,
  }) => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!user) {
      setLoader(false);
      return;
    }

    // 연락처 합치기
    let rphone1 = phone1 + phone2 + phone3;
    let rtn = validatePhoneNumber(rphone1);

    if (rtn) {
      setAlert(true);
      setAType("error");
      setMsg("연락처를 확인해 주세요.");
      setLoader(false);
      return;
    }

    if (!isdefault) {
      isdefault = "N";
    } else {
      isdefault = "Y";
    }

    let fullPhone = phone1 + "-" + phone2 + "-" + phone3;

    // 서버 호출
    const { success, data, msg } = await addrAdd({
      addr_name,
      rzip,
      raddr1,
      raddr2,
      recipient,
      rphone1: fullPhone,
      isdefault,
    });

    if (success) {
      setLoader(false);
      setClose(false);
      setAlert(true);
      setMsg("배송지목록에 추가되었습니다.");
      setAType("error");
    } else {
      setLoader(false);
      setClose(false);
      setAlert(true);
      setAType("error");
      if (msg) {
        // setMsg(t(msg));
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
        <div className="bg-white px-[20px] sm:px-[40px] pt-[50px] pb-[40px] w-[95%] sm:w-[500px] relative">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div>배송지 추가</div>
            <div className="border-b border-b-black my-3"></div>
            <div className=" mt-[20px]  w-full text-sm2">
              <div className="flex w-full items-center">
                <div className="w-[80px] mr-2.5 shrink-0">배송지명</div>
                <input
                  type="text"
                  className="w-full sm:w-[280px] shrink-1"
                  {...register("addr_name", {
                    required: "배송지명을 입력해 주세요",
                  })}
                />
              </div>
              <div className="flex w-full items-center mt-[10px]">
                <div className="w-[80px] mr-2.5 shrink-0">받는사람</div>
                <input
                  type="text"
                  className="w-full sm:w-[280px] shrink-1"
                  {...register("recipient", {
                    required: "받는사람을 입력해 주세요",
                  })}
                />
              </div>
              <div className="flex w-full items-center mt-[10px]">
                <div className={`w-[80px] mr-2.5 shrink-0`}>연락처</div>
                <select
                  className={`p-[10px] w-[80px] h-[45px] mr-[5px] text-[14px] lg:text-[15px] shrink-0 ${pre_400.className}`}
                  {...register("phone1", {
                    required: "연락처를 입력해주세요",
                  })}
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                </select>
                <input
                  {...register("phone2", {
                    required: "연락처를 입력해주세요",
                    minLength: {
                      value: 4,
                      message: "전화번호를 정확히 입력 해주세요",
                    },
                    pattern: {
                      value: /[0-9]/g,
                      message: "숫자만 입력 해주세요",
                    },
                  })}
                  className="w-[50%] sm:w-[95px] h-[45px] mr-[5px] shrink-1"
                  type="number"
                />
                <input
                  {...register("phone3", {
                    required: "연락처를 입력해주세요",
                    minLength: {
                      value: 4,
                      message: "전화번호를 정확히 입력 해주세요",
                    },
                    pattern: {
                      value: /[0-9]/g,
                      message: "숫자만 입력 해주세요",
                    },
                  })}
                  className="w-[50%] sm:w-[95px] h-[45px] shrink-1"
                  type="number"
                />
              </div>
              <div className="flex w-full items-center mt-[60px] sm:mt-[10px]">
                <div className="w-[80px] mr-2.5 shrink-0">배송지주소</div>
                <div className="sm:flex sm:justify-between w-full sm:flex-row-reverse relative">
                  <div className="sm:flex sm:items-center absolute sm:relative top-[-30px] sm:top-0 right-0">
                    <input
                      className="hidden checkbox_select"
                      {...register("isdefault")}
                      type="checkbox"
                      id="select_2"
                    />
                    <label
                      htmlFor="select_2"
                      className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}
                    >
                      기본배송지
                    </label>
                  </div>
                  <div className="flex  ">
                    <input
                      type="text"
                      {...register("rzip", {
                        required: "우편번호를 입력해주세요",
                      })}
                      className="w-full sm:w-[80px] mr-[5px] shrink-1"
                    />
                    <ButtonMD
                      onClick={() => setModalState(true)}
                      style={`inline-block w-[80px] h-[45px] text-[15px] border-solid border-[1px] border-[#494B50] text-black align-bottom shrink-0 ${pre_600.className}`}
                      text={"우편번호"}
                    />
                    {modalState && (
                      <PostPopup onCompletePost={onCompletePost} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center mt-[5px]">
                <div className="w-[80px] mr-2.5 hidden sm:inline-block shrink-0"></div>
                <input
                  type="text"
                  className="w-full shrink-1"
                  {...register("raddr1", {
                    required: "주소를 입력해주세요",
                  })}
                />
              </div>
              <div className="flex w-full items-center mt-[5px]">
                <div className="w-[80px] mr-2.5 hidden sm:inline-block shrink-0"></div>
                <input
                  type="text"
                  className="w-full shrink-1"
                  {...register("raddr2", {
                    required: "상세주소를 입력해주세요",
                  })}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <input
                type="submit"
                className="bg-black text-white px-20 py-4 rounded-sm cursor-pointer"
                value={"추가하기"}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddressModal;
