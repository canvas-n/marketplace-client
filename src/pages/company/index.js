import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout/index";
import PageTitle from "../../components/Common/PageTitle";
import {pre_600,pre_800, pre_400, pre_300} from "../../../fonts";
import Image from "next/image";
import Icon1 from "../../../public/images/company_icon1.svg";
import Icon2 from "../../../public/images/company_icon2.svg";
import Icon3 from "../../../public/images/company_icon3.svg";
import ButtonMD from "../../components/Common/ButtonMD";

const Company = () => {
    return (
        <Layout path="/">
            <PageTitle title="Canvas N 소개" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                    <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                </div>
            </div>
        </Layout>
    );
}

export default Company;
