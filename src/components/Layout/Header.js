import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import dynamic from "next/dynamic";
import { poppins_400, pre_600, pre_400, pre_800 } from "../../../fonts";
import { useRouter } from "next/router";
import { useUser } from "@/react-query/hooks/user";
import { useSignIn, useSignOut } from "@/react-query/hooks/auth";
import IconWallet from "../../../public/images/icon_wallet.svg";
import IconMyWallet from "../../../public/images/icon_mywallet.svg";
import Bars3Icon from "../../../public/images/btn_mobile.svg";
import CloseIcon from "../../../public/images/btn_close.svg";
import AlertModal from "../Modal/AlertModal";

const center = [
  { name: "거버넌스", href: process.env.GV_URL },
  { name: "스테이킹", href: process.env.STAKING_URL },
];

//const lang = ["KR", "CN", "JP", "EN"];

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  const { signOut } = useSignOut();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const [popupFindShow, setPopupFindShow] = useState(false);
  const [popupAlertShow, setPopupAlertShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [address, setAddress] = useState("");
  const { signIn } = useSignIn();
  const { user, isUserLoading, isUserError, isUserRefetch } = useUser(address);

  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  //const { nfts } = useNfts({ address });
  const handleToggleMenu = (menuIndex) => {
    setOpenMenuIndex((prevIndex) =>
      prevIndex === menuIndex ? null : menuIndex,
    );
  };

  /*
  const signout = useSignOut();

  const btnLogout = async () => {
   await signout();
   //deactivate();
   router.reload();
 };
*/

  useEffect(() => {
    if (scrollY > 1) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scrollY]);

  useEffect(() => {
    const watch = () => {
      window?.addEventListener("scroll", handleFollow);
      window?.ethereum?.on("accountsChanged", connectWallet);
      window?.ethereum?.on("connect", connectWallet);
      // window?.ethereum?.on("disconnect", disconnect);
    };

    watch(); // addEventListener 함수를 실행

    return () => {
      window?.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
      window?.ethereum?.removeListener("accountsChanged", connectWallet);
      window?.ethereum?.removeListener("connect", connectWallet);
      // window?.ethereum?.removeListener("disconnect", disconnect);
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (address && user) {
        if (user?.wallet_addr !== address) {
          const chainId = await window?.ethereum?.request({
            method: "eth_chainId",
          });

          if (chainId !== process.env.CHAIN_ID) {
            await ethereum?.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: process.env.CHAIN_ID }],
            });
          }
          await signIn({ address });
          router.reload();
        }
      }
    })();
  }, [address]);

  const disconnect = async () => {
    setAddress("");
    await signOut();
  };
  const handleFollow = () => {
    setScrollY(window?.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  const btnMyWallet = () => {
    setMobileMenuOpen(false);
    router.push("/mypage/normal");
  };

  /*
  const goMyPage = () => {
    router.push("/mypage/normal");
  };

  const mobileLoginPopupOpen = () => {
    setMobileMenuOpen(false);
    setPopupShow(true);
  };

  const btnWait = () => {
    setMobileMenuOpen(false);
    setPopupAlertShow((prev) => !prev);
  };*/

  const connectWallet = async () => {
    // 2
    if (window?.ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];

      if (account !== address) {
        setAddress(account);
        if (user) {
          await signOut();
        }
        await signIn({ address: account });
        //router.reload();
      }
    }
  };

  return (
    /* 깃 테스트 */
    <header
      className={` isolate z-50 ${pre_400.className} fixed top-0 left-0 right-0 bg-white`}
    >
      <nav
        className="h-[50px] lg:h-[100px] max-w-[1600px] relative mx-auto "
        aria-label="Global"
      >
        <Link
          href="/"
          className="absolute left-[20px] z-[10] top-[15px] lg:top-[35px]"
        >
          <span className="sr-only">Canvas N</span>
          <Image
            src={require("../../../public/images/logo.png")}
            alt={"header_logo"}
            className="w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[235px]"
          />
        </Link>
        <div className="hidden lg:flex absolute w-full justify-between items-center z-0">
          <div
            className={`h-[100px] flex w-full justify-center relative isolate z-50 ${pre_600}`}
          >
            <div className="self-center">
              <div className={`relative`}>
                <Link
                  href={"/market"}
                  className={`text-[18px] font-semibold leading-[100px]  focus:outline-none px-[20px] xl:px-[55px]`}
                >
                  마켓 플레이스
                </Link>
              </div>
            </div>
            <div
              className="self-center"
              onMouseEnter={() => setOpenMenuIndex("")}
            >
              <div className={`relative`}>
                <Link
                  href={"/ranking"}
                  className={`text-[18px] font-semibold leading-[100px]  focus:outline-none px-[20px] xl:px-[55px]`}
                >
                  랭킹
                </Link>
              </div>
            </div>
            <div
              className="self-center"
              onMouseEnter={() => setOpenMenuIndex("")}
            >
              <div className={`relative`}>
                <Link
                  href={"/collection"}
                  className={`text-[18px] font-semibold leading-[100px]  focus:outline-none px-[20px] xl:px-[55px]`}
                >
                  컬렉션
                </Link>
              </div>
            </div>

            <div className="self-center">
              <div className={`relative`}>
                <Link
                  href={"/raunchpad"}
                  className={`text-[18px] font-semibold leading-[100px] focus:outline-none px-[20px] xl:px-[55px]`}
                >
                  런치패드
                </Link>
              </div>
            </div>

            <div className="self-center">
              <div className={`relative`} onClick={handleClickContainer}>
                <span
                  className={`cursor-pointer text-[18px] font-semibold leading-[100px] focus:outline-none px-[20px] xl:px-[55px]`}
                >
                  서비스{" "}
                  <i
                    className={`pl-3 far ${!isDropdownView ? "fa-chevron-down" : "fa-chevron-up"}`}
                  ></i>
                </span>
                {isDropdownView && (
                  <div className="absolute top-[110px] left-1/2 div_center text-center w-[100px] bg-white">
                    <ul>
                      {center.map((item) => (
                        <li className={`leading-[30px]`}>
                          <a
                            target={"_blank"}
                            href={item.href}
                            className={`active:${pre_800.className} text-[14px] xl:text-[16px]`}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*</div>*/}
        <div className="flex lg:hidden absolute right-[20px] top-[13px] z-[10]">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md  text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-[23px] w-[23px]" aria-hidden="true" />
          </button>
        </div>
        {user || address ? (
          <div
            className="hidden lg:inline-block absolute right-[20px] top-[25px] z-[10]"
            onClick={() => router.push("/mypage/normal")}
          >
            <span
              onClick={() => setPopupShow(true)}
              className={`inline-block text-[15px] w-[160px] h-[50px] border border-[#F1BA58] rounded-[26px] leading-[50px] text-center text-[#F1BA58] cursor-pointer align-middle`}
            >
              <IconMyWallet className="w-[24px] inline-block mr-[20px] align-text-top" />{" "}
              내 지갑
            </span>
          </div>
        ) : (
          <div
            className="hidden lg:inline-block absolute right-[20px] top-[25px] z-[10]"
            onClick={connectWallet}
          >
            <span
              onClick={() => setPopupShow(true)}
              className={`inline-block text-[15px] w-[160px] h-[50px] border border-[#959595] rounded-[26px] leading-[50px] text-center text-[#898989] cursor-pointer align-middle`}
            >
              <IconWallet className="w-[24px] inline-block mr-[20px] align-text-top" />{" "}
              지갑 연결
            </span>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-[100] shadow-[-3px_0_10px_rgba(0,0,0,0.1)] bg-opacity-50 bg-black backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-[300px] overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between h-[50px] px-[20px] border-b border-[#ECEDF2]">
            <Link href="/" className="lg:mr-[30px]  2xl:mr-[135px]">
              <span className="sr-only">Your Company</span>
              <Image
                src={require("../../../public/images/logo.png")}
                alt={"header_logo"}
                className="w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[235px]"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon className="cursor-pointer w-[20px] h-[20px]" />
            </button>
          </div>
          {user || address ? (
            <div
              className="h-[60px] border-b border-[#ECEDF2] text-right leading-[60px]"
              onClick={btnMyWallet}
            >
              <span className="inline-block cursor-pointer mr-[20px] text-[14px]">
                <IconWallet className="w-[19px] inline-block align-text-middle mr-[10px] mb-[2px]" />{" "}
                내 지갑
              </span>
            </div>
          ) : (
            <div
              className="h-[60px] border-b border-[#ECEDF2] text-right leading-[60px]"
              onClick={connectWallet}
            >
              <span className="inline-block cursor-pointer mr-[20px] text-[14px]">
                <IconWallet className="w-[19px] inline-block align-text-middle mr-[10px] mb-[2px]" />{" "}
                지갑 연결
              </span>
            </div>
          )}

          <div className="mt-[30px] mb-[60px]">
            <div className="bg-white px-[30px]">
              <Link href={"/market"}>
                <p className=" text-[16px] font-semibold leading-6 mb-[5px]">
                  마켓 플레이스
                </p>
              </Link>
            </div>
            <div className="bg-white mt-[25px] px-[30px]">
              <Link href={"/ranking"}>
                <p className=" text-[16px] font-semibold leading-6 mb-[5px]">
                  랭킹
                </p>
              </Link>
            </div>
            <div className="bg-white mt-[25px] px-[30px]">
              <Link href={"/collection"}>
                <p className="text-[16px] font-semibold leading-6 mb-[5px]">
                  컬렉션
                </p>
              </Link>
            </div>
            <div className="bg-white mt-[25px] px-[30px]">
              <Link href={"/raunchpad"}>
                <p className="text-[16px] font-semibold leading-6 mb-[5px]">
                  런치패드
                </p>
              </Link>
            </div>
            <div className="bg-white mt-[25px] px-[30px]">
              <p className="text-[16px] font-semibold leading-6 mb-[5px]">
                서비스
              </p>
              <div className="px-[10px]">
                {center.map((item) => (
                  <div key={item.name} className="py-[5px] leading-[14px]">
                    <div>
                      <Link href={item.href} className="text-[14px] ">
                        - {item.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {popupAlertShow && (
        <AlertModal
          setClose={setPopupAlertShow}
          msg={"준비중입니다."}
          type={"error"}
        />
      )}
    </header>
  );
}
