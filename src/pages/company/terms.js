import React, {useState} from "react";

import Layout from "../../components/Layout/index";
import PageTitle from "../../components/Common/PageTitle";
import {pre_600,pre_800, pre_400, pre_300} from "../../../fonts";
import Image from "next/image";

const Terms = () => {
    return (
        <Layout path="/">
            <PageTitle title="이용약관" />
            <div className={`max-w-[1640px] mx-auto ${pre_300.className}` }>
                <div className="mb-[80px] lg:mb-[150px] py-[130px]">
                    <Image className={`text-center m-auto`} src={require("../../../public/images/icon_waiting.png")} />
                </div>
            </div>
        </Layout>
    );
}

export default Terms;