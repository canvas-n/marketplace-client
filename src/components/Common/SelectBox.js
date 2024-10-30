import React from "react";
import {pre_400} from "../../../fonts";

const SelectBox = ({ options, style, defaultValue, onChange  }) => {

    return (
        <select onChange={(e) => onChange(e.target.value)} className={`${style} ${pre_400.className}`}>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    defaultValue={defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;