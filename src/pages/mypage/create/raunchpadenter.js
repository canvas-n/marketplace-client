import React from "react"
import {pre_400, pre_700} from "../../../../fonts"
import Layout from "../../../components/Layout"
import PageTitle from "../../../components/Common/PageTitle"
import InputMD from "../../../components/Common/InputMD"
import ButtonMD from "../../../components/Common/ButtonMD"
import IconCalendar from "../../../../public/images/icon_calendar2.svg"
const RaunchpadEnter = () => {
    return(
        <Layout path="/">
            <PageTitle title="런치패드 등록" type="signup" />
            <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
                <div className="mx-[20px]">
                    <div className={`${pre_700.className} pb-[15px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>런치패드 정보</div>
                    <div className="mb-[70px] lg:mb-[150px]">
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">프로젝트명</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">총 민팅 수량</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">민팅 가격</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">프로젝트 대표 이미지</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">프로젝트 배너 이미지</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 500 x 400 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-top mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">설명</div>
                            <div className="w-full"><textarea className="w-full h-[300px] resize-none border border-[#707070] shrink-1 mr-[15px]"></textarea></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">상세정보 이미지</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] mr-[5px] sm:mr-[15px] h-[45px] shrink-0 bg-[#959595] text-white" />
                                <ButtonMD text="삭제" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0"></div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] mr-[5px] sm:mr-[15px] h-[45px] shrink-0 bg-[#959595] text-white" />
                                <ButtonMD text="삭제" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0"></div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] mr-[5px] sm:mr-[15px] h-[45px] shrink-0 bg-[#959595] text-white" />
                                <ButtonMD text="삭제" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0"></div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] mr-[5px] sm:mr-[15px] h-[45px] shrink-0 bg-[#959595] text-white" />
                                <ButtonMD text="삭제" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0"></div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px] placeholder:text-[#959595]" placeholder="최소 1000 x 1000 사이즈의 JPG, PNG 이미지를 등록해주세요."/>
                                <ButtonMD text="업로드" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] mr-[5px] sm:mr-[15px] h-[45px] shrink-0 bg-[#959595] text-white" />
                                <ButtonMD text="삭제" style="text-[13px] lg:text-[15px] w-[70px] lg:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-[70px] lg:mb-[150px]">
                        <div className={`${pre_700.className} pb-[15px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>SNS 정보</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">홈페이지</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">인스타그램</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">페이스북</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">유투브</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">트위터</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">텔레그램</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">디스코드</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">카카오 오픈 카톡</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                    </div>
                    <div className="mb-[70px] lg:mb-[100px]">
                        <div className={`${pre_700.className} pb-[15px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>민팅 정보 1차</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">민팅 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1인 최대 구매 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1회 최대 구매 금액</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>ETH</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0 ">민팅 기간</div>
                            <div className="w-full flex items-center relative">
                                <div className="relative mr-[10px] sm:mr-[20px] w-[45%] sm:w-[180px]">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                                <span>~</span>
                                <div className="relative ml-[10px] sm:ml-[20px] w-[45%] sm:w-[180px] ">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">리빌 여부</div>
                            <div className="w-full sm:flex sm:justify-between">
                                <div className="flex items-center">
                                    <div className="block mr-[30px] lg:mr-[80px]">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            예
                                        </label>
                                    </div>
                                    <div className="block">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            아니오
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:flex items-center text-[16px] md:text-[18px] lg:text-[20px] mt-[25px] sm:mt-0">
                                    <div className="w-[80px] lg:w-[115px]">* 리빌 날짜</div>
                                    <div className="relative ml-0 sm:ml-[20px] w-full sm:w-[180px]">
                                        <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                        <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-top mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">설명</div>
                            <div className="w-full"><textarea className="w-full h-[150px] resize-none border border-[#707070] shrink-1 mr-[15px]"></textarea></div>
                        </div>
                    </div>
                    <div className="mb-[70px] lg:mb-[100px]">
                        <div className={`${pre_700.className} pb-[15px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>민팅 정보 2차</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">민팅 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1인 최대 구매 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1회 최대 구매 금액</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>ETH</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0 ">민팅 기간</div>
                            <div className="w-full flex items-center relative">
                                <div className="relative mr-[10px] sm:mr-[20px] w-[45%] sm:w-[180px]">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                                <span>~</span>
                                <div className="relative ml-[10px] sm:ml-[20px] w-[45%] sm:w-[180px] ">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">리빌 여부</div>
                            <div className="w-full sm:flex sm:justify-between">
                                <div className="flex items-center">
                                    <div className="block mr-[30px] lg:mr-[80px]">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            예
                                        </label>
                                    </div>
                                    <div className="block">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            아니오
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:flex items-center text-[16px] md:text-[18px] lg:text-[20px] mt-[25px] sm:mt-0">
                                    <div className="w-[80px] lg:w-[115px]">* 리빌 날짜</div>
                                    <div className="relative ml-0 sm:ml-[20px] w-full sm:w-[180px]">
                                        <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                        <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-top mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">설명</div>
                            <div className="w-full"><textarea className="w-full h-[150px] resize-none border border-[#707070] shrink-1 mr-[15px]"></textarea></div>
                        </div>
                    </div>
                    <div className="mb-[70px] lg:mb-[100px]">
                        <div className={`${pre_700.className} pb-[15px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>민팅 정보 3차</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">민팅 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1인 최대 구매 수량</div>
                            <div className="w-full">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>개</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">1회 최대 구매 금액</div>
                            <div className="w-full ">
                                <InputMD style="w-[85%] sm:w-[180px] h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[20px]"/>
                                <span>ETH</span>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0 ">민팅 기간</div>
                            <div className="w-full flex items-center relative">
                                <div className="relative mr-[10px] sm:mr-[20px] w-[45%] sm:w-[180px]">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                                <span>~</span>
                                <div className="relative ml-[10px] sm:ml-[20px] w-[45%] sm:w-[180px] ">
                                    <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                    <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">리빌 여부</div>
                            <div className="w-full sm:flex sm:justify-between">
                                <div className="flex items-center">
                                    <div className="block mr-[30px] lg:mr-[80px]">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            예
                                        </label>
                                    </div>
                                    <div className="block">
                                        <input
                                            className="hidden checkbox_select"
                                            id="select_2"
                                            type="checkbox"
                                        />
                                        <label
                                            htmlFor="select_2"
                                            className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                        >
                                            아니오
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:flex items-center text-[16px] md:text-[18px] lg:text-[20px] mt-[25px] sm:mt-0">
                                    <div className="w-[80px] lg:w-[115px]">* 리빌 날짜</div>
                                    <div className="relative ml-0 sm:ml-[20px] w-full sm:w-[180px]">
                                        <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 "/>
                                        <IconCalendar  className="absolute right-[10px] top-[10px] w-[20px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-top mb-[25px] text-[16px] md:text-[18px] lg:text-[20px]">
                            <div className="w-[150px] md:w-[250px] shrink-0">설명</div>
                            <div className="w-full"><textarea className="w-full h-[150px] resize-none border border-[#707070] shrink-1 mr-[15px]"></textarea></div>
                        </div>
                    </div>
                    <div className="mb-[70px] lg:mb-[150px] sm:flex justify-center">
                        <ButtonMD text="close" style="w-full sm:w-[33%] xl:w-[325px] h-[45px] lg:h-[55px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] text-white bg-[#959595] mr-0 sm:mr-[15px] lg:mr-[40px] text-[16px] md:text-[18px] lg:text-[20px] mb-[10px] sm:mb-0"/>
                        <ButtonMD text="Edit" style="w-full sm:w-[33%] xl:w-[325px] h-[45px] lg:h-[55px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] text-white bg-[#959595] mr-0 sm:mr-[15px] lg:mr-[40px] text-[16px] md:text-[18px] lg:text-[20px] mb-[10px] sm:mb-0"/>
                        <ButtonMD text="Open" style="w-full sm:w-[33%] xl:w-[325px] h-[45px] lg:h-[55px] rounded-[27px] shadow-[0_3px_6px_rgba(0,0,0,0.16)] text-white bg-[#F1BA58] text-[16px] md:text-[18px] lg:text-[20px]" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default RaunchpadEnter;