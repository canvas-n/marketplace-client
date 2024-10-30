import React from "react";

import Layout from "../../components/Layout/index";
import PageTitle from "../../components/Common/PageTitle";
import {pre_400, pre_600, pre_800} from "../../../fonts";
import Image from "next/image";

const Organization = () => {
    return (
        <Layout path="/">
            <div className={`min-h-full pt-[50px] lg:pt-[100px] sm:overflow-auto relative ${pre_600.className}`}>
                <div className=" shadow-[inset_0_-2px_0_#000000]">
                    <PageTitle title="조직도" />
                </div>
                <div className="min-h-full ">
                    <div className="max-w-[1400px]  mb-[130px] mt-[80px] mx-[20px] 2xl:mx-auto ">
                        <div className="lg:flex lg:flex-wrap lg:justify-start mb-[70px] lg:mb-[120px]">
                            <div className="w-[335px] sm:w-[400px] 2xl:w-[560px] h-[335px] sm:h-[400px] 2xl:h-[560px] mx-auto sm:mx-0" style={{background: `url('/images/team_1.png') no-repeat top center`, backgroundSize: "cover",}}></div>
                            <div className={`${pre_400.className} lg:pl-[40px] flex items-center company_banner w-full lg:w-[580px] 2xl:w-[660px]`}>
                                <div className="mt-[40px] lg:mt-0">
                                    <h5 className={`${pre_800.className} text-[24px]  md:text-[30px] xl:text-[36px] leading-[40px] lg:leading-[50px] mb-[40px] md:mb-[47px]`}>대표이사 장현우</h5>
                                    <table className={`${pre_400.className}`}>
                                        <tbody>
                                        <tr>
                                            <td className="text-[14px] lg:text-[15px] w-[50px] lg:w-[60px] align-top">현재</td>
                                            <td className="text-[14px] lg:text-[15px] leading-[24px] ">
                                                <p>- 캔버스N 대표</p>
                                                <p>- 현재 VERSACE HOME, DOLCE GABBANNA CASA, BENTLY HOME, ETRO HOME, ROBERTO CAVALLI HOME 한국 총판 라이센스 보유</p>
                                                <p className="mb-[25px]">- 2010년부터 현재 상하이 VERSACE HOME, DOLCE GABBANNA CASA, BENTLY HOME, ETRO HOME, ROBERTO CAVALLI HOME 판권 라이센스 보유</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-[14px] lg:text-[15px] w-[50px] lg:w-[60px] align-top ">과거</td>
                                            <td className="text-[14px] lg:text-[15px] leading-[24px]">
                                                <p>(주) LGS (DOLCE& GABBANNA CASA) 설립</p>
                                                <p>(주) CGS (DOLCE& GABBANNA LOUNGE) 설립</p>
                                                <p>(주) 에스엘에이비 (VERSACE HOME LOUNGE) 설립 </p>
                                                <p>(주) LLHK (VERSACE HOME) 설립</p>
                                                <p>메종 한남 설립</p>
                                                <p>상하이 태명가구 유한공사 설립 (생산 공장)</p>
                                                <p>(주) 태명 가구 회사 설립</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Organization;
