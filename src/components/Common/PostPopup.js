import DaumPostcode from "react-daum-postcode";
import CloseIcon from "../../../public/images/btn_close.svg";
import React, { useEffect } from "react";
import { pre_400 } from "../../../fonts";
const PostPopup = ({ onCompletePost }) => {
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      <div className="bg-white px-[20px] sm:px-[40px] pt-[60px] pb-[40px] w-[95%] sm:w-[500px] relative">
        <div className="absolute top-[10px] right-[10px]">
          <CloseIcon
            onClick={onCompletePost}
            className="cursor-pointer w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
          />
        </div>
        <DaumPostcode
          className="text-[16px]"
          onComplete={onCompletePost}
          autoResize
        />
      </div>
    </div>
  );
};

export default PostPopup;
