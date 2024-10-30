import InputMD from "../../components/Common/InputMD";
import { pre_300, pre_400, pre_600, pre_800 } from "../../../fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ButtonMD from "../Common/ButtonMD";

import AlertModal from "../Modal/AlertModal";
import LoginModal from "../Modal/LoginModal";
import { isValidEmail } from "@/lib/common";
import { useUser } from "@/react-query/hooks/user";
import classNames from "classnames";

import SocialPhone from "../../../public/images/footer_social_phone.svg";
import SocialFace from "../../../public/images/footer_social_face.svg";
import SocialInsta from "../../../public/images/footer_social_insta.svg";
import SocialTwitter from "../../../public/images/footer_social_twitter.svg";
import SocialTele from "../../../public/images/footer_social_tele.svg";
//import SocialYoutube from "../../../public/images/social_youtube_g.svg";
import SocialMail from "../../../public/images/footer_social_mail.svg";

const navigation = {
  solutions: [
    { name: "Canvas N 소개", href: "/company" },
    { name: "조직도", href: "/company/organization" },
  ],
  support: [
    { value: 1, name: "공지사항", href: "/company/example" },
    { value: 1, name: "FAQ", href: "/company/example" },
    { value: 1, name: "1:1 문의", href: "/company/example" },
  ],
  company: [
    { value: 4, name: "크리에이터 신청", href: "/user/createsignup" },
    { value: 2, name: "이용약관", href: "/company/terms" },
    { value: 3, name: "개인정보 취급방침", href: "/company/personal" },
  ],
  social: [
    {
      name: "Instagram",
      href: "http://www.instagram.com/canvasn_official",
      icon: (props) => <SocialInsta className="w-[55px] sm:w-[65px]" />,
    },
        {
      name: "Twitter",
      href: "http://www.instagram.com/canvasn_official",
      icon: (props) => <SocialTwitter className="w-[55px] sm:w-[65px]" />,
    },
    {
      name: "Facebook",
      href: "http://www.facebook.com/profile.php?id=100085346956200",
      icon: (props) => <SocialFace className="w-[55px] sm:w-[65px]" />,
    },
        {
      name: "Telegram",
      href: "https://www.youtube.com/channel/UCbAllU3-srpjDRaSpr1-NQQ",
      icon: (props) => <SocialTele className="w-[55px] sm:w-[65px]" />,
    },
    {
      name: "Phone",
      href: "http://www.instagram.com/canvasn_official",
      icon: (props) => <SocialPhone className="w-[55px] sm:w-[65px]" />,
    },
    {
      name: "Mail",
      href: "http://www.instagram.com/canvasn_official",
      icon: (props) => <SocialMail className="w-[55px] sm:w-[65px]" />,
    },
  ],
};
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;

  const { user, isUserLoading } = useUser();

  const [email, setEmail] = useState("");
  const [atype, setAType] = useState("");
  const [msg, setMsg] = useState("");
  const [loginPopupShow, setLoginPopupShow] = useState(false);
  const [alertPopupShow, setAlertPopupShow] = useState(false);

  const btnNewsSub = async () => {
    if (!email) {
      setAlertPopupShow(true);
      setMsg("이메일을 입력해 주세요.");
      setAType("error");
      return;
    }

    if (!isValidEmail(email)) {
      setAlertPopupShow(true);
      setMsg("이메일형식으로 입력해 주세요.");
      setAType("error");
      return;
    }

    if (success) {
      setAlertPopupShow(true);
      setMsg("뉴스레터 구독 신청되었습니다.");
      setAType("error");
      setEmail("");
    } else {
      setAlertPopupShow(true);
      setMsg("이미 구독 신청된 이메일입니다.");
      setAType("error");
      setEmail("");
    }
  };

  const btnClick = (val) => {
    if (val == 1) {
      setAlertPopupShow(true);
      setMsg("준비중입니다.");
      setAType("error");
    }
  };

  const btnLoginCheck = (val, page) => {
    if (val == 2 && !user) {
      setLoginPopupShow(true);
    } else {
      router.push(page);
    }
  };

  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : "",
  );
  const [mBanner, setMBanner] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);

    if (innerWidth < 600) {
      setMBanner(true);
    } else {
      setMBanner(false);
    }
  }, [innerWidth]);

  return (
    <footer
      className={classNames(
        path == "/raunchpad/[contract]" ? `pb-[406px] lg:pb-0` : "pb-0",
        path == "/nft/[contract]" ? `pb-[406px]` : "pb-0",
        `bg-[#F2F3F5] ${pre_400}`,
      )}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-[1640px] mx-auto pt-[50px] lg:pt-[95px] pb-[50px] lg:pb-[145px]">
        <div className="mx-[20px]">
          <div className="lg:flex md:justify-between pb-[30px] lg:pb-[75px] border-b border-[#959595]">
                        <div className="lg:w-[50%] ">
              <h3
                className={`text-[15px] ${pre_600.className} text-black mb-[10px] lg:mb-[35px]`}
              >
                Subscribe To New Products
              </h3>
              <input
                className="bg-[#201F1F] h-[53px] w-[100%] lg:w-[300px] xl:w-[445px] text-white rounded-[30px] footer_input"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-[50px] lg:mt-0 lg:w-[50%] md:w-auto">
              <div className="inline-block">
                <h3
                  className={`text-[15px] ${pre_600.className} text-black mb-[10px] lg:mb-[35px]`}
                >
                  Community
                </h3>
                <div className="lg:text-right">
                  {navigation.social.map((item) => (
                    <a
                      target="_blank"
                      key={item.name}
                      href={item.href}
                      className="text-[#ABAFBE] hover:text-white first:ml-0 lg:ml-[20px] inline-block "
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between pt-[40px] lg:pt-[60px] flex-row-reverse">
            <div className={`lg:w-[50%] w-[100%] ${pre_300.className} `}>
              <div className="flex justify-between lg:justify-end flex-wrap sm:mb-0">
                <div className="mr-[10px] sm:mr-0 md:mr-[50px] xl:mr-[100px]">
                  <h3 className={`text-[15px] ${pre_600.className} text-black`}>
                    회사소개
                  </h3>
                  <ul role="list" className="mt-[17px]">
                    {navigation?.solutions.map((item) => (
                      <li key={item.name} className="mt-[15px] leading-[12px]">
                        <a
                          href={item.href}
                          className="text-[14px] md:text-[15px] text-black mb-[10px] inline-block"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mr-[10px] sm:mr-0 md:mr-[50px] xl:mr-[100px] mb-[30px] sm:mb-0">
                  <h3 className={`text-[15px] ${pre_600.className} text-black`}>
                    고객센터
                  </h3>
                  <ul role="list" className="mt-[17px]">
                    {navigation?.support.map((item) => (
                      <li
                        key={item.name}
                        className="cursor-pointer mt-[15px] leading-[12px]"
                        onClick={() => btnLoginCheck(item.value, item.href)}
                      >
                        <span className="text-[14px] md:text-[15px] text-black mb-[10px] inline-block">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" mb-[30px] sm:mb-0">
                  <h3 className={`text-[15px] ${pre_600.className} text-black`}>
                    로그인 및 회원가입
                  </h3>
                  <ul role="list" className="mt-[17px]">
                    {navigation?.company.map((item) => (
                      <li
                        key={item.name}
                        className="mt-[15px] leading-[12px]"
                        onClick={() => btnClick(item.value)}
                      >
                        <a
                          href={item.href}
                          className="text-[14px] md:text-[15px] text-black mb-[10px] inline-block"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[20px] lg:mt-0 lg:w-[50%] ">
              <Image
                src={require("../../../public/images/logo.png")}
                alt={"header_logo"}
                className="w-[196px] h-[25px] mb-[15px]"
              />
              <div className="lg:max-w-[445px] text-[12px] leading-[20px] text-black mb-[20px] lg:mb-[5px]">
                서울특별시 강남구 언주로 172길 25, 1F 2F(신사동)&nbsp;
                <p className={mBanner ? "" : "inline-block"}>
                  {" "}
                  official@canvasn.co.kr (주)캔버스엔 갤러리 대표 : 장현우
                  &nbsp;
                </p>
                <p className={mBanner ? "" : "inline-block"}>
                  {" "}
                  사업자등록번호 : 103-87-02894&nbsp;
                </p>
                <p className={mBanner ? "" : "inline-block"}>
                  {" "}
                  통신판매번호 : 2023-서울강남-02089 &nbsp;
                </p>
                <p className="text-[11px] leading-[20px] text-black">
                  사이트상의 모든 상품 및 거래에 대하여 Canvas N은 통신판매중개자이며 통신판매의
                  당사자가 아닙니다. 따라서 사용자가 등록한 상품·거래정보 및
                  거래에 대하여 Canvas N은 일체 책임을 지지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alertPopupShow && (
        <AlertModal setClose={setAlertPopupShow} msg={msg} type={atype} />
      )}
      {loginPopupShow && <LoginModal setClose={setLoginPopupShow} />}
    </footer>
  );
}
