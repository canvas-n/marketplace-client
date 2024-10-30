import { useRouter } from 'next/router'
import {pre_600, pre_700} from "../../../fonts";
import IconBack from "../../../public/images/icon_back.svg";

const BackPage = ({ name, page }) => {
    const router = useRouter();

    return (
        <div className="inline-block" onClick={() => router.replace(page)}>
            <IconBack className="mr-[15px] align-text-top cursor-pointer" />
            <p className={`inline-block text-[16px] md:text-[18 px] lg:text-[20px] font-semibold ${pre_700.className}`}>{ name }</p>
        </div>
    );
};

export default BackPage;
