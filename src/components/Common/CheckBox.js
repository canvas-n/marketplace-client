import {pre_400, pre_600} from "../../../fonts";
import React from "react";

const CheckBox = ({ title, content, check, type, disabled, checked, onChange, htmlFor, Id }) => {
    return (
        <div>
            <div className="flex justify-between items-end mb-[10px] mt-[40px] lg:mt-[30px]">
                <div className={`text-black text-[20px] ${pre_600.className}`}>{ title } <span className={`text-[15px] ${pre_400.className}`}>{ check ? "(필수)" : "(선택)"}</span></div>
                <div className="block leading-[20px]">
                    <input
                        className="hidden checkbox_select"
                        onChange={({ target: { checked } }) => onChange(checked)}
                        disabled={disabled}
                        checked={checked}
                        id={Id}
                        type="checkbox"
                    />
                    <label htmlFor={htmlFor} className={`${pre_400.className} pl-[30px] h-[20px] text-[15px] inline-block `}>동의합니다</label>
                </div>
            </div>
            <div className="h-[150px] border-solid border-[1px] border-[#DCDDE6] px-[10px] py-[15px] md:p-[20px] text-[15px]">
                <div className="h-[110px] text-[12px] md:text-[15px] leading-[20px] md:leading-[28px] overflow-auto width_scroll pr-1">
                    {
                        content?.split("\n").map((line, idx) => {
                            return (
                            <span key={`content_${idx}`}>
                              {" "}
                              {line} <br />
                            </span>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CheckBox;