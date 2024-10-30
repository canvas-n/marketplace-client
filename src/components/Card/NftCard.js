import IconMark from "../../../public/images/mark.svg";
import IconHeartOn from "../../../public/images/icon_heart_on.svg";
import IconHeartOff from "../../../public/images/icon_heart_off.svg";
import { poppins_600, poppins_700, pre_600, pre_300 } from "../../../fonts";
import classNames from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const https = require("https");

/*
const projectId = "2XFCcZJ7Yor7AdZ4miQ4TGmis0A";
const projectSecret = "9630506824c76d6bb0e03b45e2b10d75";
*/

const NftCard = ({ style, type, nft }) => {
  const router = useRouter();
  const path = router.pathname;
  const [imageSrc, setImageSrc] = useState(
    nft?.img_src || require("/public/images/forbbiden.png"),
  );

  const CheckStyle = () => {
    if (type == "small") {
      return "w-[260px]";
    } else if (type == "main") {
      return "w-[350px]";
    } else {
      return "";
    }
  };
  const CheckStyle2 = () => {
    console.log(type)
    if (type == "small") {
      return "w-[260px] h-[260px]";
    } else {
      return "pb-[100%]";
    }
  };

  useEffect(() => {
    setImageSrc(nft?.img_src || require("/public/images/forbbiden.png"));
  }, [nft]);
  const checkImageWithHeight = ({ target: img }) => {
    /* const options = {
            host: "ipfs.infura.io",
            port: 5001,
            path: "/api/v0/pin/get?arg=QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn",
            method: "POST",
            auth: projectId + ":" + projectSecret,
        };

        let req = https.request(options, (res) => {
            let body = ""; 
            res.on("data", function (chunk) {
                body += chunk;
            });
            res.on("end", function () {
                console.log(body); 
            });
        });*/

    if (img.naturalWidth > img.naturalHeight) {
      img.classList.add("height_img");
      img.classList.remove("width_img");
    } else {
      img.classList.add("width_img");
      img.classList.remove("height_img");
    }
  };

  const CheckText = () => {
    if (type == "small") {
      return (
        <>
          <div className="mb-[35px]">
            <p className={`relative text-[14px] ${pre_600.className}`}>
              {nft?.metadata?.name}{" "}
              <IconHeartOn className="w-[21px] absolute right-0 top-[4px]" />
            </p>
            <p className={`${pre_300.className} text-[11px] `}>
              {nft?.tokenId}{" "}
              <IconMark className="w-[14px] ml-[5px] inline-block" />
            </p>
          </div>
          <div>
            <p className="flex justify-between mb-[10px]">
              <span className="text-[11px]">구매가</span>
              <span className={`text-[14px] ${poppins_700.className}`}>
                0.056 ETH
              </span>
            </p>
            {/*<p className="flex justify-between ">
                            <span className="text-[11px]">Volume</span>
                            <span className={`text-[11px] ${poppins_600.className}`}>123 ETH</span>
                        </p>*/}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mb-[55px]">
            <p className={`relative text-[20px] ${pre_600.className}`}>
              <span
                className={`inline-block w-[200px] overflow-hidden text-ellipsis whitespace-nowrap`}
              >
                {nft?.nft_name}{" "}
              </span>
              {nft?.is_liked ? (
                <IconHeartOn className="w-[28px] absolute right-0 top-[4px]" />
              ) : (
                <IconHeartOff className="w-[28px] absolute right-0 top-[4px]" />
              )}
            </p>
            <p className={`${pre_300.className} text-[15px] `}>
              {nft?.token_id}{" "}
              <IconMark className="w-[18px] ml-[5px] inline-block" />
            </p>
          </div>
          {nft?.sell_status != "S" && (
            <div>
              <p className="flex justify-between text-[15px] mb-[10px]">
                <span>구매가</span>
                <span className={`text-[20px] ${poppins_700.className}`}>
                  {nft?.price} cETH
                </span>
              </p>
              {/* <p className="flex justify-between text-[15px]">
                            <span>Volume</span>
                            <span className={`${poppins_600.className}`}>123 ETH</span>
                        </p>*/}
            </div>
          )}
        </>
      );
    }
  };

  return (
    <Link
      href={`/nft/${nft?.contract}/${nft?.token_id}`}
      className={classNames(
        path == "/" ? "" : "mb-[80px]",
        `${style} w-[350px] rounded-[10px] shadow-[0_2px_3px_rgba(149,149,149,0.4)] `,
      )}
    >
      <div
        className={`pb-[100%] rounded-t-[10px] overflow-hidden object-cover relative`}
      >
        <Image
          onLoad={checkImageWithHeight}
          className="absolute top-0 left-0"
          src={imageSrc}
          width={100}
          height={100}
          alt={"nft_card"}
          onError={(e) =>
              setImageSrc(`${process.env.CLIENT_URL}/images/forbbiden.png`)
          }
        />
      </div>
      <div className="px-[25px] pt-[15px] pb-[25px]">{CheckText()}</div>
    </Link>
  );
};

export default NftCard;
