import { poppins_400, pre_600, pre_800 } from "../../../fonts";
import classNames from "classnames";
import { useRouter } from "next/router";



const PageTitle = ({ title, type, show }) => {
    const titleCheck = () => {
        if (type == 'signup') {
            return 'max-w-[1130px] mt-[40px] md:mt-[60px] lg:mt-[150px] mb-[40px] lg:mb-[70px]'
        }  else{
            return  'max-w-[1640px] mt-[40px] md:mt-[60px] lg:mt-[125px] mb-[40px] md:mb-[60px]'
        }
    }
  const router = useRouter();
  const path = router.pathname;
  return(
    <div
        className={classNames(
            `${titleCheck()}   mx-auto text-[20px] md:text-[22px] lg:text-[25px] ${pre_800.className}`
        )}
        ><div className="mx-[20px]">{title}</div></div>
  )
};

export default PageTitle;
