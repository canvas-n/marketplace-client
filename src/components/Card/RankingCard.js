import IconMark from "../../../public/images/mark.svg"
import {poppins_600, poppins_700, pre_600, pre_300,} from "../../../fonts";

const RankingCard = ({style}) => {
    return (
        <div className={`${style} w-[270px] rounded-[10px] shadow-[0_3px_5px_rgba(0,0,0,0.3)] px-[25px] pb-[35px]`}>
            <div className="mb-[50px] md:mb-[60px] lg:mb-[80px]">
                <h2 className={`relative text-[#959595] text-[60px] sm:text-[65px] md:text-[70px] lg:text-[80px] ${poppins_700.className} after:contents-'' after:w-[45px] after:h-[7px] after:bg-black after:absolute after:left-0 after:bottom-0`}>01</h2>
            </div>
            <div className="mb-[20px]">
                <p className={`text-[20px] ${pre_600.className}`}>Lorem lpsum <IconMark className="w-[18px] ml-[25px] inline-block" /></p>
                <p className={`${pre_300.className} text-[15px] `}>Lorem lpsum</p>
            </div>
            <div className="w-[220px] h-[220px] mb-[20px]" style={{background: `url('/images/example.png') no-repeat center center`, backgroundSize: 'cover'}}></div>
            <div>
                <p className="flex justify-between text-[15px]">
                    <span>구매가</span>
                    <span className={`${poppins_600.className}`}>0.056 ETH</span>
                </p>
                <p className="flex justify-between text-[15px]">
                    <span>Volume</span>
                    <span className={`${poppins_600.className}`}>123 ETH</span>
                </p>
            </div>
        </div>
    );
};

export default RankingCard;
