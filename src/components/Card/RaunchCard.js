import SocialInsta from "../../../public/images/social_insta_w.svg"
import SocialFace from "../../../public/images/social_face_w.svg"
import SocialTwiter from "../../../public/images/social_twiter_w.svg"
import IconEth from "../../../public/images/eth.svg"
import {poppins_100, poppins_200, poppins_300, poppins_400, poppins_600, poppins_700, pre_600, pre_800, pre_400, pre_300,} from "../../../fonts";
import classNames from "classnames";

const RaunchCard = ({style, type}) => {
    const checkImageWithHeight = ({ target: img }) => {
        if (img.naturalWidth > img.naturalHeight) {
            img.classList.add("height_img");
            img.classList.remove("width_img");
        } else {
            img.classList.add("width_img");
            img.classList.remove("height_img");
        }
    };

    return (
        <div className={`${style} cursor-pointer rounded-[10px] py-[30px] px-[35px] relative`}
             style={{background: `url('/images/test4.jpg') no-repeat center center`, backgroundSize: 'cover'}}>
            <div className={classNames(type == 'ing' || type == 'wait' ? `bg-gradient-to-t to-[rgba(0,0,0,0)] via-45% via-[rgba(0,0,0,0.15)] from-[rgba(0,0,0,0.5)]` :
                    `bg-[rgba(165,165,165,0.7)]`,
             `absolute w-full h-full top-0 left-0 right-0 bottom-0 rounded-[10px]`)}></div>
            <div className="relative mb-[120px] flex justify-between items-center">
                <span className={`inline-block text-black w-[70px] h-[30px] bg-[rgba(255,255,255,0.5)] text-[13px] rounded-[5px] text-center leading-[30px] ${pre_600.className}`}>
                    {type == 'ing' && "진행 중"}
                    {type == 'wait' && "진행 예정"}
                    {type == 'end' && "진행 종료"}
                </span>
                <div className="flex items-center">
                    <SocialInsta className="w-[17px] mr-[15px]" />
                    <SocialTwiter  className="w-[17px] mr-[15px]" />
                    <SocialFace  className="h-[17px]" />
                </div>
            </div>
            <div className="relative border-b-[0.5px] border-b-white pb-[20px] mb-[30px]">
                <p className={`text-[15px] text-white ${pre_300.className}`}>by 지남</p>
                <p className={`${pre_600.className} text-[25px] text-white`}>지남이의 안드로메다 여행</p>
            </div>
            <div className="relative">
                <p className={`relative pl-[85px] text-white text-[13px] mb-[5px] ${pre_300.className}`}>
                    <span className="absolute sm:inline-block w-[85px] text-[15px] top-0 left-0">민팅 기간</span>
                    <span className="inline-block">6월 19일(월) 00시 ~ 6월 30일(금) 11시 59분</span>

                </p>
                <p className={`text-white text-[13px] mb-[5px] ${pre_300.className}`}>
                    <span className="inline-block w-[85px] text-[15px]">민팅 가격</span>
                    <IconEth className="w-[21px] inline-block mr-[5px]"/>
                    0.025 ETH
                    <span className={`${pre_300.classname} text-[10px] ml-[10px]`}>(2,000,000 원)</span>
                </p>
                <p className={`text-white text-[13px] ${pre_300.className}`}>
                    <span className="inline-block w-[85px] text-[15px]">민팅 수량</span>
                    100 / 300 개
                </p>
            </div>
        </div>
    );
};

export default RaunchCard;
