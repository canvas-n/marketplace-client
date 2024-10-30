import { pre_300, pre_400, pre_600, pre_700 } from "../../../fonts";
import IconEth from "../../../public/images/eth.svg";
import React, {useState} from "react";
import ButtonMD from "@/components/Common/ButtonMD";
import moment from "moment";

const MypageTransactionCard = ({history}) => {
  const [year, setYear] = useState(new Date(history?.buy_dttm).getFullYear())
  const [month, setMonth] = useState(new Date(history?.buy_dttm).getMonth())
  const [day, setDay] = useState(new Date(history?.buy_dttm).getDate())
  const [hour, setHour] = useState(new Date(history?.buy_dttm).getHours())
  const [minute, setMinute] = useState(new Date(history?.buy_dttm).getMinutes())
  const [second, setSecond] = useState(new Date(history?.buy_dttm).getSeconds())

  return (
    <table className="w-full table-fixed my-[20px] text-[15px] text-center whitespace min-w-[1000px]">
      <tbody>
        <tr>
          <td className={`${pre_700.className} w-[120px]`}>{history?.transaction_type === "B" ? "구매" : "판매"}</td>
          <td className="pl-[15px] text-[15px] text-black text-left">
            <div
              className="w-[70px] lg:w-[120px] h-[70px] lg:h-[120px] inline-block align-middle"
              style={{
                background: `url(${history?.img_src}) no-repeat center center`,
                backgroundSize: `cover`,
              }}
            ></div>
            <span
              className={`${pre_700.className} ml-[20px] lg:ml-[40px] overflow-hidden text-ellipsis whitespace-nowrap`}
            >
              {history?.nft_name}
            </span>
          </td>
          <td className="w-[160px]">{history?.amount_ceth} cETH</td>
          <td className="w-[160px] break-words px-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            {history?.sell_addr ? history?.sell_addr : '-'}
          </td>
          <td className="w-[160px] break-words px-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            {history?.buy_addr ? history?.buy_addr : '-'}
          </td>
          <td className="w-[120px]">
            <p>{moment(history?.buy_dttm).format("YYYY.MM.DD")}</p>
            <p>{moment(history?.buy_dttm).format("HH:mm:ss")}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default MypageTransactionCard;
