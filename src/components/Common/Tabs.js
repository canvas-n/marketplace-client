import React, {useState, useEffect} from "react";
import classNames from "classnames";
const Tabs = ({ name, onClick, path,  idx, active }) => {
    const [num, setNum] = useState(0);

    return (
        <li onClick={ onClick } className={classNames(
            idx == active ? "bg-black text-white" : "",
            "h-[50px] leading-[50px] text-center border-solid border-[1px] text-black border-[#DCDDE6]"
        )}>
            <a href={ path }>{ name }</a>
        </li>
    );
};

export default Tabs;
