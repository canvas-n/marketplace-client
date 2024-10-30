import React from "react"
import {pre_300, pre_400, pre_700} from "../../../fonts"
import Layout from "../../components/Layout/index"
import PageTitle from "../../components/Common/PageTitle"
import InputMD from "../../components/Common/InputMD"
import ButtonMD from "../../components/Common/ButtonMD"
import Image from "next/image";
const CreateSignUp = () => {
    return(
        <Layout path="/">
            <PageTitle title="NFT 입점 신청" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                    <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                </div>
            </div>
           {/* <div className={`${pre_400.className} max-w-[1130px] mx-auto`}>
                <div className="mx-[20px]">
                    <div className="text-[16px] md:text-[18px] lg:text-[20px] mb-[70px] md:mb-[150px]">
                        <p className="mb-[20px]">Canvas N에 오신 것을 환영합니다!</p>
                        <p>본 페이지를 통해 Canvas N에 NFT 입점을 신청하실 수 있습니다.</p>
                        <p>Canvas N에서는 스캠 및 러그풀을 방지하기 위해 검토 후 선별적으로 입점을 허가하고 있습니다. </p>
                        <p>입점을 위해서 하단 질문지를 작성해주시면 검토 후 메일로 답변 드리겠습니다. </p>
                        <p className="mb-[20px]">추가 문의 사항은 official@canvasn.co.kr 으로 메일을 보내주세요. </p>
                        <p>감사합니다.</p>
                    </div>
                    <div className="mb-[70px] md:mb-[150px]">
                        <div className={`${pre_700.className} pb-[10px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>체인 정보</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">NFT 메인넷</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">크리에이터 지갑 주소</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">토큰 스탠다드</div>
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
                                            ERC 721
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
                                            ERC 1155
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">카테고리</div>
                            <div className="w-full sm:flex place-content-start">
                                <div className="block mr-[30px] lg:mr-[120px]">
                                    <input
                                        className="hidden checkbox_select"
                                        id="select_2"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="select_2"
                                        className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                    >
                                        아트
                                    </label>
                                </div>
                                <div className="block mr-[30px] lg:mr-[120px]">
                                    <input
                                        className="hidden checkbox_select"
                                        id="select_2"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="select_2"
                                        className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                    >
                                        PFP
                                    </label>
                                </div>
                                <div className="block mr-[30px] lg:mr-[120px]">
                                    <input
                                        className="hidden checkbox_select"
                                        id="select_2"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="select_2"
                                        className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                    >
                                        사진
                                    </label>
                                </div>
                                <div className="block mr-[30px] lg:mr-[120px]">
                                    <input
                                        className="hidden checkbox_select"
                                        id="select_2"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="select_2"
                                        className={`${pre_400.className} pl-[30px] h-[20px] text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[20px]`}
                                    >
                                        기타
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mb-[70px] md:mb-[100px]">
                        <div className={`${pre_700.className} pb-[20px] border-b border-[#959595] text-[20px] mb-[30px]`}>기본 정보</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">아이디(ID)</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px]"/>
                                <ButtonMD text="중복 체크" style="w-[80px] md:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white text-[15px]" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">크리에이터 이름</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[250px] shrink-0">연락처</div>
                            <div className="w-full">
                                <select className="w-[120px] h-[45px] shrink-1">
                                    <option value="">010</option>
                                </select>
                                <InputMD style="w-[120px] h-[45px] border border-[#C8C9D6] shrink-1 ml-[10px]"/>
                                <InputMD style="w-[120px] h-[45px] border border-[#C8C9D6] shrink-1 ml-[10px]"/>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[250px] shrink-0">창작자 로열티</div>
                            <div className="w-[120px]"><InputMD style="w-[120px] h-[45px] border border-[#707070] shrink-1"/></div>
                            <p className={`${pre_700.className} text-[15px] ml-[10px]`}>%</p>
                        </div>
                    </div>
                    <div className="mb-[70px] md:mb-[150px]">
                        <div className={`${pre_700.className} pb-[10px] lg:pb-[20px] border-b border-[#959595] text-[18px] lg:text-[20px] mb-[30px]`}>프로젝트 정보</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">프로젝트명(국문)</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">프로젝트명(영문)</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">프로젝트 대표 이미지</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px]"/>
                                <ButtonMD text="업로드" style="w-[80px] md:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white text-[15px]" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">프로젝트 프로필 이미지</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px]"/>
                                <ButtonMD text="업로드" style="w-[80px] md:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white text-[15px]" />
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">프로젝트 배너</div>
                            <div className="w-full flex items-center">
                                <InputMD style="w-full h-[45px] border border-[#707070] shrink-1 mr-[5px] sm:mr-[15px]"/>
                                <ButtonMD text="업로드" style="w-[80px] md:w-[120px] h-[45px] shrink-0 bg-[#959595] text-white text-[15px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-[70px] md:mb-[100px]">
                        <div className={`${pre_700.className} pb-[20px] border-b border-[#959595] text-[20px] mb-[30px]`}>SNS 정보</div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">홈페이지</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">인스타그램</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">페이스북</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">유투브</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">트위터</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">텔레그램</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">디스코드</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                        <div className="sm:flex sm:items-center mb-[25px] text-[20px]">
                            <div className="w-[150px] lg:w-[250px] shrink-0">카카오 오픈 카톡</div>
                            <div className="w-full"><InputMD style="w-full h-[45px] border border-[#707070] shrink-1"/></div>
                        </div>
                    </div>
                    <div className="flex md:block mb-[70px] md:mb-[150px] text-center">
                        <ButtonMD text="취소" style="w-[50%] md:w-[325px] h-[45px] md:h-[55px] rounded-[27px] text-[16px] md:text-[18px] lg:text-[20px] text-white shadow-[0_3px_6px_rgba(0,0,0,0.16)] bg-[#959595] mr-[10px] md:mr-[20px] lg:mr-[40px]"/>
                        <ButtonMD text="신청" style="w-[50%] md:w-[325px] h-[45px] md:h-[55px] rounded-[27px] text-[16px] md:text-[18px] lg:text-[20px] text-white shadow-[0_3px_6px_rgba(0,0,0,0.16)] bg-[#F1BA58]" />
                    </div>
                </div>
            </div>*/}
        </Layout>
    )
}
export default CreateSignUp;