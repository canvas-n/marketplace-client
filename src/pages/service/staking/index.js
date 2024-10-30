import React, {useState} from "react"
import {pre_400, pre_700} from "../../../../fonts"

import Layout from "../../../components/Layout/index"
import PageTitle from "../../../components/Common/PageTitle"
import ButtonMD from "../../../components/Common/ButtonMD"
import Paginations from "../../../components/Common/Paginations"
import StakingHistoryCard from "../../../components/Card/StakingHistoryCard"
import StakingDetail from "../../../components/Modal/StakingDetail"


const StakingHome = () => {
    const [popupShow, setPopupShow] = useState(false);
    const [tab, setTab] = useState('goods');
    return(
        <Layout path="/">
            <PageTitle type="signup" title="스테이킹" />
            <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
                <div className="mx-[20px]">
                    <div className="flex border-b border-[#959595] mb-[40px] md:mb-[80px]">
                        <div className={`
                        ${ tab == 'goods' ? `${pre_700.className} border-black border-b-[4px] ` : `text-[#959595]` }
                         mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} onClick={() => setTab('goods')}>
                            스테이킹 상품
                        </div>
                        <div className={`
                        ${ tab == 'history' ? `${pre_700.className} border-black border-b-[4px] ` : `text-[#959595]` }
                             mr-[20px] lg:mr-[50px] text-[15px] md:text-[18px] lg:text-[20px] pb-[15px] lg:pb-[20px] cursor-pointer`} onClick ={() => setTab('history')}>
                            스테이킹 내역
                        </div>
                    </div>
                    { tab =='goods' &&
                        <div className="mb-[70px] md:mb-[150px]">
                            <div className="p-[20px] sm:p-[50px] w-full bg-[rgba(235,235,235,0.5)] lg:h-[300px] rounded-[10px] border border-[#B8B8B8] flex justify-center items-center mb-[70px] md:mb-[100px]">
                                <div className="w-[100%] lg:w-[845px]">
                                    <div className="sm:flex sm:justify-between sm:items-center mb-[30px]">
                                        <h2 className={`${pre_700.className} `}>30 DAY : 갤러리코인(GLR) 스테이킹 30D</h2>
                                        <ButtonMD onClick={() => setPopupShow(true)} text="자세히 보기" style="w-[120px] md:w-[150px] h-[30px] md:h-[40px] bg-[#F1BA58] rounded-[27px] shadow-[0_2px_3px_rgba(149,149,149,0.4)] text-white text-[14px] md:text-[15px] ml-auto sm:ml-0 mt-[20px] sm:mt-0 block"/>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] mb-[25px] md:mb-[35px]">
                                        <div className="h-[60px] border border-[#959595] rounded-[10px] px-[15px] py-[9px] bg-white">
                                            <p className="text-[13px]">스테이킹 규모</p>
                                            <p className={`${pre_700.className} text-[14px] md:text-[15px]`}>1,000,000 GLR</p>
                                        </div>
                                        <div className="h-[60px] border border-[#959595] rounded-[10px] px-[15px] py-[9px] bg-white">
                                            <p className="text-[13px]">스테이킹 규모</p>
                                            <p className={`${pre_700.className} text-[14px] md:text-[15px]`}>1,000,000 GLR</p>
                                        </div>
                                        <div className="h-[60px] border border-[#959595] rounded-[10px] px-[15px] py-[9px] bg-white">
                                            <p className="text-[13px]">스테이킹 규모</p>
                                            <p className={`${pre_700.className} text-[14px] md:text-[15px]`}>1,000,000 GLR</p>
                                        </div>
                                        <div className="h-[60px] border border-[#959595] rounded-[10px] px-[15px] py-[9px] bg-white">
                                            <p className="text-[13px]">스테이킹 규모</p>
                                            <p className={`${pre_700.className} text-[14px] md:text-[15px]`}>1,000,000 GLR</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full lg:w-[845px] h-[20px] md:h-[30px] border-[#B8B8B8] border rounded-[23px] bg-white relative">
                                            <div className="absolute top-[-1px] left-[-1px] w-[30%] h-[20px] md:h-[30px] bg-[#F1BA58] rounded-[23px_0_0_23px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                    { tab == 'history' &&
                        <div className="px-[20px]">
                            <div className="overflow-auto height_scroll">
                                <table className={`min-w-[880px] text-[14px] md:text-[15px] w-full table-fixed border-b border-[#959595] text-center ${pre_700.className}`}>
                                    <tbody>
                                    <tr>
                                        <td className="pb-[10px]">가입 상품</td>
                                        <td className="w-[150px] pb-[10px]">가입 수량</td>
                                        <td className="w-[120px] pb-[10px]">수익률</td>
                                        <td className="w-[120px] pb-[10px]">만기일</td>
                                        <td className="w-[120px] pb-[10px]">예상 환급액</td>
                                        <td className="w-[100px] pb-[10px]"></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="border-b border-[#959595] mb-[50px] min-w-[880px]">
                                    <StakingHistoryCard />
                                    <StakingHistoryCard />
                                    <StakingHistoryCard />
                                    <StakingHistoryCard />
                                </div>
                            </div>
                            <div className="mt-[50px] mb-[70px] md:mb-[150px]">
                            <Paginations />
                            </div>
                        </div>
                    }

            </div>
            {popupShow && (
                <StakingDetail setClose={setPopupShow} />
            )}
        </Layout>
    )
}
export default StakingHome;