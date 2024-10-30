import Layout from "../../components/Layout";
import React, { useRef, useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { useForm } from "react-hook-form";
import {
  useIdCheck,
  useSignUp,
  usePhoneCheck,
} from "../../react-query/hooks/auth";

import Link from "next/link";
import { pre_400, pre_600, pre_800 } from "../../../fonts";

import { YEAR, MONTH, DAY } from "../../lib/common";

import CheckBox from "../../components/Common/CheckBox";
import ButtonMD from "../../components/Common/ButtonMD";
import classNames from "classnames";
import PostPopup from "../../components/Common/PostPopup";
import LoginModal from "../../components/Modal/LoginModal";
import AlertModal from "../../components/Modal/AlertModal";
import FindModal from "../../components/Modal/FindModal";

import Loading from "../../components/Common/Loading";

import { useUser } from "../../react-query/hooks/user";
//import { useAgreeList } from "../../react-query/hooks/etc";
import { useRouter, useHistory } from "next/router";
import { RotatingSquare } from "react-loader-spinner";

// ---------남은거 -------------
// 1. 주소 검색 api 붙이기
// 2. 가입하기 버튼 테스트

// 환불계좌 은행
const bankOptions = [
  "새마을금고",
  "국민은행",
  "농협은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "기업은행",
  "산업은행",
  "SC제일은행",
  "수협은행",
  "시티은행",
  "우체국",
  "신협",
  "카카오뱅크",
  "토스뱅크",
  "산림조합",
  "케이뱅크",
  "부산은행",
  "대구은행",
  "경남은행",
  "광주은행",
  "전북은행",
  "제주은행",
  "저축은행",
  "도이치은행",
  "중국은행",
  "중국공상은행",
  "중국건설은행",
];

const UserSignUp = () => {
  const router = useRouter();
  const { user } = useUser();
  //const { service, privacy, privacy_supply, privacy_term } = useAgreeList();
  // 현재 진행단계
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // 페이지가 렌더링될 때마다 스크롤 위치를 위로 올립니다.
    window.scrollTo(0, 0);
  }, [router.asPath, currentStep]);

  // 로그인 상태 시 메인 페이지로 이동
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  // react hook form setting
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
    getValues,
  } = useForm({ mode: "onChange" });

  // 팝업
  const [popupShow, setPopupShow] = useState(false);
  const [popupFindShow, setPopupFindShow] = useState(false);
  const [alertPopupShow, setAlertPopupShow] = useState(false);
  const [atype, setAType] = useState("");
  const [msg, setMsg] = useState("");

  const [loader, setLoader] = useState(false);

  // id 중복체크 hook
  const { checkId } = useIdCheck();
  const { checkPhone } = usePhoneCheck();
  // 문자 전송 hook
  //const { sendSMS } = useSendSms();
  // 회원가입 hook
  const { signUp } = useSignUp();

  // 필수 정책 동의 목록
  // 전체동의
  const [checkAllTerm, setCheckAllTerm] = useState(false);
  // 서비스 이용약관
  const [serviceTerm, setServiceTerm] = useState(false);
  // 개인정보 수집 및 이용
  const [privacyUse, setPrivacyUse] = useState(false);
  // 개인정보 처리방침
  const [privacyTerm, setPrivacyTerm] = useState(false);
  // 개인정보 제 3자 제공
  const [privacySupply, setPrivacySupply] = useState(false);

  // id 사용 가능 여부
  const [changeEmail, setChangeEmail] = useState(null);
  const [availableId, setAvailableId] = useState(null);
  // 성별
  const [gender, setGender] = useState("M");
  // 전체 핸드폰 번호 (국가번호 포함)
  const [fullPhone, setFullPhone] = useState(null);
  // 실명인증 확인
  const [phoneCheck, setPhoneCheck] = useState(false);

  // 서버가 보내준 인증문자 hash
  const [hash, setHash] = useState(null);
  // 나이스 팝업
  const [popup, setPopup] = useState(null);

  const [modalState, setModalState] = useState(false);
  const [userType, setUserType] = useState("NMAL");
  const checkAll = useRef(false);
  // 약관 전체동의 function
  const agreeAllTerm = () => {
    checkAll.current = !checkAllTerm;
    setCheckAllTerm((prev) => !prev);
    setServiceTerm(checkAll.current);
    setPrivacyUse(checkAll.current);
    setPrivacyTerm(checkAll.current);
    setPrivacySupply(checkAll.current);
  };

  // 광고 / 알림
  const [checkAllLetter, setCheckAllLetter] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [subSocial, setSubSocial] = useState({
    sns: false,
    message: false,
    email: false,
  });

  useEffect(() => {
    // Check if all the individual checkboxes are checked
    const allChecked =
      newsletter && subSocial.sns && subSocial.message && subSocial.email;
    setCheckAllLetter(allChecked);
  }, [newsletter, subSocial]);

  const handleCheckAllLetter = (event) => {
    const isChecked = event.target.checked;
    setCheckAllLetter(isChecked);
    setNewsletter(isChecked);
    setSubSocial({
      sns: isChecked,
      message: isChecked,
      email: isChecked,
    });
  };

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.checked);
  };

  const handleSubSocialChange = (e) => {
    const { id, checked } = e.target;

    setSubSocial((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  // 가입하기 submit function
  const onSubmit = async (params) => {
    const {
      email,
      password,
      passwordCheck,
      year,
      month,
      day,
      name,
      nation,
      phone,
      postcode,
      address1,
      address2,
      bank,
      account,
    } = params;

    if (loader) {
      return;
    }

    setLoader(true);

    if (!availableId || changeEmail !== email) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("아이디 중복 검사를 해주세요.");
      setAType("error");
      return;
    }

    if (!password) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("비밀번호를 입력해 주세요.");
      setAType("error");
      return;
    }

    if (!passwordCheck) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("비밀번호 확인을 입력해 주세요.");
      setAType("error");
      return;
    }

    if (password !== passwordCheck) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("비밀번호와 비밀번호확인이 일치하지않습니다.");
      setAType("error");
      return;
    }

    if (!phone) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("연락처를 입력해 주세요.");
      setAType("error");
      return;
    }

    if (!postcode || !address1) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("주소를 입력해 주세요.");
      setAType("error");
      return;
    }

    if (!address2) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("상세 주소를 입력해 주세요.");
      setAType("error");
      return;
    }

    const sendParam = {
      email,
      password,
      passwordCheck,
      ubirthday: year + "-" + month + "-" + day,
      name,
      nation: "+82",
      postcode,
      address1,
      address2,
      bank,
      account,
      accountName: name,
      newsletter: newsletter ? "Y" : "N",
      subSocial: subSocial.sns ? "Y" : "N",
      subSms: subSocial.message ? "Y" : "N",
      subEmail: subSocial.email ? "Y" : "N",
      fullPhone: phone,
      gender,
      serviceTerm: "Y",
      privacyUse: "Y",
      privacyTerm: "Y",
      privacySupply: "Y",
      userType,
    };

    // 회원가입 api
    const { success, data, msg } = await signUp(sendParam);

    if (success) {
      setLoader(false);
      // 가입 완료 페이지 보여주기
      setCurrentStep(4);
    } else {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg(msg);
      setAType("error");
    }
  };

  // 약관 전체동의 function
  const [agreements, setAgreements] = useState([false, false, false, false]);

  // 약관 동의 상태 업데이트 함수
  const toggleAgreement = (index) => {
    const updatedAgreements = [...agreements];
    updatedAgreements[index] = !updatedAgreements[index];
    setAgreements(updatedAgreements);
    setCheckAllTerm(updatedAgreements.every((agreement) => agreement));
  };

  // 전체 동의 상태 업데이트 함수
  const toggleAllAgreements = () => {
    const allAgreed = agreements.every((agreement) => agreement);
    const updatedAgreements = agreements.map(() => !allAgreed);
    setAgreements(updatedAgreements);
    setCheckAllTerm(!allAgreed);
  };

  const checkAllAgreements = () => {
    return agreements.every((agreement) => agreement);
  };

  // 단계 변경
  const changeStep = async () => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (currentStep === 1) {
      let result = await checkAllAgreements();
      if (!result) {
        setLoader(false);
        setAlertPopupShow(true);
        setMsg("약관에 모두 동의해주세요");
        setAType("error");
        return false;
      }
      setLoader(false);
      setCurrentStep(2);
    }
  };

  // 아이디 중복체크 function
  const idCheck = async (e) => {
    e.preventDefault();
    // react hook form 에서 email의 현재 값 가져오기

    if (loader) {
      return;
    }

    setLoader(true);

    const id = getValues("email");

    if (!id) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("아이디를 입력해 주세요.");
      setAType("error");
      return false;
    }

    if (errors?.email) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg(errors?.email?.message);
      setAType("error");
      return false;
    }
    // 서버 호출
    const { success, data, msg } = await checkId({ id });

    if (success) {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg("사용가능한 아이디입니다.");
      setAType("error");
      setAvailableId(true);
      setChangeEmail(id);
    } else {
      setLoader(false);
      setAlertPopupShow(true);
      setMsg(msg);
      setAType("error");
      setValue("email", "");
      setAvailableId(false);
    }
  };

  // 휴대폰 인증
  const verifyPhone = async (e) => {
    e.preventDefault();

    if (phoneCheck) return;
    /*    // react hook form 에서 현재 값들 불러오기
        //const nation = watch("nation");
        const phone1 = getValues("phone1");
        const phone2 = getValues("phone2");
        const phone3 = getValues("phone3");
        // alert("인증 됐다 치고 넘기는 부분");

        const fullNumber = phone1 + phone2 + phone3;
        setFullPhone(fullNumber);*/
    setHash("anjsrkgotnlanswk");

    const popup = window.open(
      process.env.NICE_URL,
      "_blank",
      "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no",
    );

    setPopup(popup);

    /* setAlertShow(true);
   //setAlertMsg("인증이 완료 되었습니다.");*/
  };

  useEffect(() => {
    if (!popup) {
      return;
    }

    const receiveMessage = async (e) => {
      // 동일한 Origin 의 이벤트만 처리하도록 제한
      /* if (e.origin !== window.location.origin) {
        return;
      }*/
      const { name, phone, location, gender, birthday } = e.data;

      if (name) {
        popup?.close();

        const { success, data, msg } = await checkPhone({ name, phone });

        if (success) {
          setGender(gender);
          setValue("name", name);
          setValue("phone", phone);
          setPhoneCheck(true);
          const birthday_s = birthday.split("-");
          setValue("year", birthday_s[0]);
          setValue("month", birthday_s[1]);
          setValue("day", birthday_s[2]);

          setCurrentStep(3);
          setPopup(null);
          setAlertPopupShow(true);
          setMsg("인증이 완료 되었습니다.");
          setAType("error");
        } else {
          setAlertPopupShow(true);
          setMsg(msg);
          setAType("error");
        }
      }
    };

    window.addEventListener("message", receiveMessage, false);

    return () => {
      window.removeEventListener("message", receiveMessage);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  // 우편번호 검색
  const onCompletePost = ({ zonecode, address }) => {
    setModalState(false);
    setValue("postcode", zonecode);
    setValue("address1", address);
  }; // onCompletePost 함수

  // 휴대폰 번호 최대 4글자
  const handleChangeLength = (e) => {
    const inputValue = e.target.value;
    // Remove any non-numeric characters
    const numericValue = inputValue.replace(/[^\d]/g, "");
    // Truncate to 4 digits
    const truncatedValue = numericValue.slice(0, 4);
    // Update the input value
    e.target.value = truncatedValue;
  };

  return (
    <Layout path="/">
      <div
        className={`min-h-full pt-[50px] lg:pt-[100px] ${pre_400.className}`}
      >
        <div className="border-solid border-b-[2px] border-[#000000]">
          <div className="max-w-[930px] ml-[20px] lg:mx-auto text-[20px] sm:text-[24px] md:text-[29px] lg:text-[32px] font-bold leading-[55px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px]">
            회원가입
          </div>
        </div>

        {currentStep === 1 && (
          <div className="max-w-[930px] lg:mx-auto mx-[10px] mt-[40px] lg:mt-[80px] mb-[70px] lg:mb-[130px]">
            <div className="block mb-[-25px] lg:mb-0">
              <input
                className="hidden checkbox_select"
                checked={checkAllTerm}
                onChange={toggleAllAgreements}
                id="select_2"
                type="checkbox"
              />
              <label
                htmlFor="select_2"
                className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}
              >
                모두 동의합니다
              </label>
            </div>
            {/*<CheckBox
              title={"서비스 이용약관"}
              content={service?.agr_content_kor}
              check={true}
              type={"service"}
              checked={agreements[0]}
              Id={"check_policy"}
              htmlFor={"check_policy"}
              onChange={() => toggleAgreement(0)}
            />
            <CheckBox
              title={"개인정보수집 및 이용"}
              content={privacy?.agr_content_kor}
              check={true}
              type={"service"}
              checked={agreements[1]}
              Id={"check_info"}
              htmlFor={"check_info"}
              onChange={() => toggleAgreement(1)}
            />
            <CheckBox
              title={"개인정보 처리방침"}
              content={privacy_term?.agr_content_kor}
              check={true}
              type={"service"}
              checked={agreements[2]}
              Id={"check_info2"}
              htmlFor={"check_info2"}
              onChange={() => toggleAgreement(2)}
            />
            <CheckBox
              title={"개인정보 제3자 제공 동의"}
              content={privacy_supply?.agr_content_kor}
              check={true}
              type={"service"}
              checked={agreements[3]}
              Id={"check_info3"}
              htmlFor={"check_info3"}
              onChange={() => toggleAgreement(3)}
            />*/}
            <div className="w-full pt-[60px] lg:pt-[80px]">
              <ButtonMD
                onClick={changeStep}
                text="다음"
                style="block w-[195px] mx-auto h-[50px] text-center leading-[50px] bg-black text-[16px] text-white rounded-[3px]"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="max-w-[930px] mx-[20px] lg:mx-auto mt-[40px] md:mt-[80px] mb-[70px] md:mb-[130px]">
            <div className="text-[16px] md:text-[20px] font-semibold border-b border-[#494B50] pb-[10px] mb-[30px]">
              가입 인증
            </div>
            <p className="text-center text-[15px] md:text-[18px] my-[20px] md:my-[40px] ">
              본인인증
            </p>
            <div className="w-[95%] mx-auto text-center">
              <ButtonMD
                onClick={(e) => verifyPhone(e)}
                text={"휴대폰인증"}
                style={
                  "inline-block leading-[50px] rounded-[3px] bg-black text-white w-[192px] h-[50px] text-center"
                }
              />
            </div>
            <div className="inline-block text-center mt-[20px] md:mt-[40px] w-full mx-auto">
              <p className="text-sm block md:inline-block text-gray-100 mt-[5px] md:mt-0">
                휴대폰 인증을 통하여 본인인증을&nbsp;
              </p>
              <p className="block md:inline-block text-sm text-gray-100 mt-[5px] md:mt-0">
                {" "}
                하셔야 회원가입이 가능합니다.
              </p>
              <p className="text-sm mt-[5px] md:mt-0">
                인증 버튼을 눌러 본인인증을 진행해주세요.
              </p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="max-w-[930px] mx-[20px] lg:mx-auto mt-[40px] md:mt-[80px] mb-[70px] md:mb-[130px]">
            <div className="text-[16px] md:text-[20px] font-semibold border-b border-[#494B50] pb-[10px] mb-[30px]">
              기본정보 입력
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  아이디 <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <div className="flex md:inline-block">
                  <input
                    placeholder="이메일 주소"
                    type="email"
                    {...register("email", {
                      required: "이메일을 입력해 주세요",
                      pattern: {
                        value:
                          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                        message: "이메일 형식이 맞지 않습니다.",
                      },
                    })}
                    className="w-[90%] md:w-[280px] h-[45px] mr-[5px]"
                  />
                  <ButtonMD
                    onClick={idCheck}
                    text="중복체크"
                    style={`${pre_600.className} w-[80px] h-[45px] text-[15px] border border-[#494B50] text-black align-top`}
                  />
                </div>
                {errors.email ? (
                  <span className="block md:inline-block text-[14px] text-[#FF3E3E] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                    {errors.email?.message}
                  </span>
                ) : (
                  <span className="block md:inline-block text-[14px] text-[#ABAFBE] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                    (사용하는 이메일 주소를 입력해 주세요.)
                  </span>
                )}
              </div>
              {/* 비밀번호 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  비밀번호{" "}
                  <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "비밀번호를 입력해 주세요",
                    pattern: {
                      value:
                        /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                      message:
                        "영문+숫자+특수문자의 조합으로 8자~12자로 입력해 주세요.",
                    },
                  })}
                  className="w-[100%] md:w-[280px] h-[45px]"
                />

                {errors.password ? (
                  <span className="block lg:inline-block text-[14px] text-[#FF3E3E] ml-0 md:ml-[125px] lg:ml-[10px] mt-[5px] lg:mt-0">
                    {errors.password?.message}
                  </span>
                ) : (
                  <span className="block md:inline-block text-[14px] text-[#ABAFBE] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                    (영문+숫자+특수문자의 조합으로 8자~12자로 입력해 주세요.)
                  </span>
                )}
              </div>
              {/* 비밀번호 확인 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  비밀번호 확인{" "}
                  <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                  {...register("passwordCheck", {
                    required: "비밀번호를 한번 더 입력해 주세요.",
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "비밀번호가 일치하지 않습니다.";
                      }
                    },
                  })}
                  className="w-[100%] md:w-[280px] h-[45px]"
                />
                <span className="block md:inline-block text-[14px] text-[#FF3E3E] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                  {errors.passwordCheck && errors.passwordCheck?.message}
                </span>
              </div>
              {/* 연락처 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  연락처 <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <div className="flex md:inline-block">
                  <input
                    {...register("phone", {
                      required: "인증을 진행해 주세요.",
                    })}
                    placeholder={"연락처를 입력해 주세요."}
                    type="text"
                    className="w-[100%] md:w-[280px] h-[45px]"
                    disabled={true}
                  />
                </div>
                <span className="bㅇlock md:inline-block text-[14px] text-[#FF3E3E] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                  {errors.phone}
                </span>
              </div>
              {/* 성별 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  성별 <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <div className="inline-block w-[280px]">
                  <div
                    className={classNames(
                      gender === "M"
                        ? "bg-[#494B50] text-white border-[#494B50]"
                        : "text-gray-100 border-[#C8C9D6]",
                      "w-1/2 inline-block h-[45px] leading-[45px] text-center border-solid border-[1px]",
                    )}
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="M"
                      checked={gender === "M"}
                      disabled={true}
                    />
                    <label
                      htmlFor="M"
                      className="text-[14px] lg:text-[15px] relative"
                    >
                      {gender === "M" && (
                        <i className="fal fa-check absolute left-[-17px] top-0"></i>
                      )}
                      남자
                    </label>
                  </div>
                  <div
                    className={classNames(
                      gender === "W"
                        ? "bg-[#494B50] text-white border-[#494B50]"
                        : "text-gray-100 border-[#C8C9D6]",
                      "w-1/2 inline-block h-[45px] leading-[45px] text-center border-solid border-[1px]",
                    )}
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="W"
                      checked={gender === "W"}
                      disabled={true}
                    />
                    <label
                      htmlFor="W"
                      className="text-[14px] lg:text-[15px] relative"
                    >
                      {gender === "W" && (
                        <i className="fal fa-check absolute left-[-17px] top-0 "></i>
                      )}
                      여자
                    </label>
                  </div>
                </div>
              </div>

              {/* 이름 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  이름 <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <input
                  placeholder="이름을 입력해 주세요"
                  type="text"
                  {...register("name", {
                    required: "이름을 입력해 주세요",
                    pattern: {
                      // input의 정규식 패턴
                      value: /^[가-힣]{2,10}$/,
                      message: "실명으로 입력해 주세요", // 에러 메세지
                    },
                  })}
                  disabled={true}
                  className="w-[100%] md:w-[280px] h-[45px"
                />
                {errors.name ? (
                  <span className="block md:inline-block text-[14px] text-[#FF3E3E] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                    {errors.name?.message}
                  </span>
                ) : (
                  <span className="block md:inline-block text-[14px] text-[#ABAFBE] ml-0 md:ml-[10px] mt-[5px] md:mt-0">
                    (실명으로 입력해 주세요.)
                  </span>
                )}
              </div>
              {/* 생년월일 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  생년월일{" "}
                  <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <div className="inline-block">
                  <select
                    className="w-[90px] mr-[5px] text-[14px] lg:text-[15px]"
                    {...register("year", {
                      required: "생년월일을 입력해 주세요",
                    })}
                  >
                    {YEAR.map((y) => {
                      return <option key={y}>{y}</option>;
                    })}
                  </select>
                  <select
                    className="w-[90px] mr-[5px] text-[14px] lg:text-[15px]"
                    {...register("month", {
                      required: "생년월일을 입력해 주세요",
                    })}
                  >
                    {MONTH.map((m) => {
                      return <option key={m}>{m}</option>;
                    })}
                  </select>
                  <select
                    className="w-[90px] text-[14px] lg:text-[15px]"
                    {...register("day", {
                      required: "생년월일을 입력해 주세요",
                    })}
                  >
                    {DAY.map((d) => {
                      return <option key={d}>{d}</option>;
                    })}
                  </select>
                </div>
              </div>
              {/* 주소 */}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  주소 <span className="text-[#FF3E3E] align-middle">*</span>
                </label>
                <input
                  onClick={() => setModalState(true)}
                  placeholder="우편번호를 입력해 주세요"
                  type="text"
                  {...register("postcode", {
                    required: "우편번호를 입력해 주세요",
                  })}
                  readOnly={true}
                  className="inline-block w-[180px] md:w-[185px] h-[45px] mr-[5px]"
                />
                <ButtonMD
                  onClick={() => setModalState(true)}
                  style={`inline-block w-[80px] h-[45px] text-[15px] border-solid border-[1px] border-[#494B50] text-black align-bottom ${pre_600.className}`}
                  text={"우편번호"}
                />
                {modalState && <PostPopup onCompletePost={onCompletePost} />}
                <div className="block md:ml-[125px] mt-[5px]">
                  <input
                    onClick={() => setModalState(true)}
                    placeholder="주소를 입력해 주세요"
                    type="text"
                    {...register("address1", {
                      required: "주소를 입력해 주세요",
                    })}
                    readOnly={true}
                    className="w-[100%] lg:w-[470px] md:w-[300px] h-[45px] mb-[5px] md:mb-0 md:mr-[5px] "
                  />
                  <input
                    placeholder="상세주소를 입력해 주세요"
                    type="text"
                    {...register("address2", {
                      required: "상세주소를 입력해 주세요",
                    })}
                    className="w-[100%] lg:w-[330px] md:w-[220px] h-[45px]"
                  />
                </div>
              </div>
              {/* 환불 계좌 정보*/}
              <div className="my-[30px] md:my-[10px]">
                <label
                  className={`block md:inline-block md:w-[125px] mb-[5px] md:mb-0 text-[14px] md:text-[15px] ${pre_600.className}`}
                >
                  환불계좌정보{" "}
                  <span className="text-[#FF3E3E] align-middle"></span>
                </label>
                <select
                  className="w-[180px] h-[45px] md:mr-[5px] mb-[5px] md:mb-0 text-[14px] lg:text-[15px]"
                  {...register("bank")}
                >
                  <option value="">선택</option>
                  {bankOptions.map((bankName, idx) => (
                    <option key={`bankOptions_${idx}`} value={bankName}>
                      {bankName}
                    </option>
                  ))}
                </select>
                <input
                  placeholder="계좌번호를 -없이 숫자만 입력해 주세요"
                  type="number"
                  {...register("account", {
                    pattern: {
                      value: /[0-9]/g,
                      message: "-없이 숫자만 입력해 주세요.",
                    },
                  })}
                  className="block md:inline-block w-[100%] md:w-[200px] lg:w-[285px] h-[45px] md:mr-[5px] mb-[5px] md:mb-0"
                />
                <input
                  placeholder="예금주"
                  type="text"
                  value={watch("name")}
                  readOnly={true}
                  className="block md:inline-block w-[100%] md:w-[200px] lg:w-[285px] h-[45px] md:mr-[5px] text-gray-100 input_only"
                />
                <span className="md:pl-[125px] block md:inline-block text-[14px] text-[#ABAFBE] ml-0 mt-[5px] md:mt-0">
                  (환불 계좌는 본인 계좌만 가능합니다. 환불 계좌 오기입으로 인한
                  문제에 대해 책임지지 않습니다.)
                </span>
              </div>
              <div className="mt-[20px] border-t border-[#ECEDF2]">
                <div className="block mt-[20px] md:ml-[125px]">
                  <input
                    className="hidden checkbox_select"
                    onChange={handleCheckAllLetter}
                    checked={checkAllLetter}
                    id="select_2"
                    type="checkbox"
                  />
                  <label
                    htmlFor="select_2"
                    className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}
                  >
                    전체선택
                  </label>
                </div>
                <div className="block mt-[20px]">
                  {/* Newsletter Checkbox */}
                  <span
                    className={`inline-block mr-[20px] md:mr-0 md:w-[125px] text-[14px] md:text-[15px] ${pre_600.className}`}
                  >
                    뉴스레터 구독
                  </span>
                  <input
                    className="hidden checkbox_select"
                    onChange={handleNewsletterChange}
                    checked={newsletter}
                    id="select_news"
                    type="checkbox"
                  />
                  <label
                    htmlFor="select_news"
                    className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}
                  >
                    신청
                  </label>
                </div>
                <div className="block mt-[20px]">
                  {/* Social Subscription Checkboxes */}
                  <span
                    className={`inline-block mr-[20px] md:mr-0 md:w-[125px] text-[14px] md:text-[15px] ${pre_600.className}`}
                  >
                    광고수신
                  </span>
                  <input
                    className="hidden checkbox_select"
                    onChange={handleSubSocialChange}
                    checked={subSocial.sns}
                    id="sns"
                    type="checkbox"
                  />
                  <label
                    htmlFor="sns"
                    className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block mr-[40px]`}
                  >
                    우편
                  </label>
                  <input
                    className="hidden checkbox_select"
                    onChange={handleSubSocialChange}
                    checked={subSocial.message}
                    id="message"
                    type="checkbox"
                  />
                  <label
                    htmlFor="message"
                    className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block  mr-[40px]`}
                  >
                    문자
                  </label>
                  <input
                    className="hidden checkbox_select"
                    onChange={handleSubSocialChange}
                    checked={subSocial.email}
                    id="email"
                    type="checkbox"
                  />
                  <label
                    htmlFor="email"
                    className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}
                  >
                    이메일
                  </label>
                </div>
              </div>

              <div className="w-[95%] mx-auto text-center mt-[60px] mb-[70px] md:mt-[80px] ">
                <input
                  type="submit"
                  value="가입하기"
                  className="cursor-pointer rounded-[3px] bg-black text-white w-[192px] h-[50px] text-center"
                />
              </div>
            </form>
          </div>
        )}
        {currentStep === 4 && (
          <div className="max-w-[930px] mx-[20px] lg:mx-auto mt-[100px] md:mt-[130px] mb-[70px] md:mb-[220px]">
            <div className="w-full border border-[#ECEDF2] h-[160px] md:h-[250px] py-[55px] md:py-[85px]">
              <p className="text-center font-semibold text-[16px] md:text-[20px] mb-[10px] md:mb-[20px]">
                캔버스N 회원가입이 완료되었습니다.
              </p>
              <p className="text-center  text-[15px] md:text-[18px]">
                로그인 후 다양한 서비스를 이용해 보세요.
              </p>
            </div>
            <div className="w-[95%] mx-auto text-center">
              <ButtonMD
                onClick={() => setPopupShow(true)}
                text={"로그인하기"}
                style={
                  "mt-[80px] md:mt-[100px]  inline-block leading-[50px] rounded-[3px] bg-black text-white w-[192px] h-[50px] text-center"
                }
              />
            </div>
          </div>
        )}
      </div>
      {popupShow && (
        <LoginModal setClose={setPopupShow} setData={setPopupFindShow} />
      )}
      {popupFindShow && <FindModal setClose={setPopupFindShow} />}
      {alertPopupShow && (
        <AlertModal setClose={setAlertPopupShow} msg={msg} type={"error"} />
      )}
      {loader && (
        <div
          className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
        >
          <RotatingSquare
            ariaLabel="rotating-square"
            visible={true}
            color="black"
            strokeWidth="10"
          />
        </div>
      )}
    </Layout>
  );
};

export default UserSignUp;
