import IconMark from "../../../public/images/mark.svg";
import IconHeartOn from "../../../public/images/icon_heart_on.svg";
import IconHeartOff from "../../../public/images/icon_heart_off.svg";
import { poppins_600, poppins_700, pre_600, pre_300 } from "../../../fonts";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";

const CollectionCard = ({ style }) => {
  const router = useRouter();
  const path = router.pathname;
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
    <div
      className={classNames(
        path == "/" ? "w-[490px]" : "w-full",
        `${style} rounded-[10px] shadow-[0_2px_3px_rgba(149,149,149,0.4)]`,
      )}
    >
      <div className="relative">
        <div className="overflow-hidden pb-[66%] rounded-t-[10px] relative">
          <Image
            onLoad={checkImageWithHeight}
            alt={"collection_card"}
            className="absolute top-0 left-0"
            src={require("../../../public/images/example.png")}
          />
        </div>
        <div className="w-[20%] pb-[20%] overflow-hidden rounded-[50%] absolute bottom-[-15%] left-[15px]">
          <Image
            alt={"collection_team"}
            className="absolute top-0 left-0"
            src={require("../../../public/images/team_2.png")}
          />
        </div>
      </div>
      <div className="px-[15px] 2xl:px-[25px] pt-[15px] pb-[25px]">
        <div className="mb-[80px] relative pl-[25%]">
          <p className={`${pre_600.className} text-[15px] `}>
            Lorem lpsum <IconMark className="w-[18px] ml-[5px] inline-block" />
          </p>
          <IconHeartOff className="absolute right-0 top-[4px] w-[28px]" />
        </div>
        <div className="lg:flex">
          <p className="lg:w-[50%] flex justify-between text-[15px] lg:border-r lg:border-r-[#CDCDCD] lg:pr-[10px] 2xl:pr-[25px]">
            <span>구매가</span>
            <span className={` ${poppins_600.className}`}>0.056 ETH</span>
          </p>
          <p className="lg:w-[50%] flex justify-between text-[15px] lg:pl-[20px]">
            <span>Volume</span>
            <span className={`${poppins_600.className}`}>123 ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
