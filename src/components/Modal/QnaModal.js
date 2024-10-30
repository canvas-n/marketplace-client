import React, { useEffect, useState } from "react";
import { pre_400 } from "../../../fonts";
import { useForm } from "react-hook-form";
import CloseIcon from "../../../public/images/btn_close.svg";
import { useUser } from "../../react-query/hooks/user";
import { useGoodsQnaWrite } from "../../react-query/hooks/qna";
import Loading from "../../components/Common/Loading";

const QnaModal = ({ setClose, setAlert, setMsg, setAType, id }) => {
  const [loader, setLoader] = useState(false);

  // const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useUser();
  const { goodsQnaWrite } = useGoodsQnaWrite();

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

  // qna 작성
  const onSubmit = async ({ type, title, contents }) => {
    if (loader) {
      return;
    }

    setLoader(true);

    if (!user) {
      setLoader(false);
      return;
    }

    let goods_seq = id;
    if (!goods_seq) {
      setLoader(false);
      return;
    }

    // 서버 호출
    const { success, data, msg } = await goodsQnaWrite({
      type,
      goods_seq,
      title,
      contents,
    });

    if (success) {
      let state = data?.ret?.state;

      if (state) {
        setLoader(false);
        setClose(false);
        setAlert(true);
        setAType("qna");
        reset();
      }
    } else {
      setLoader(false);
      setClose(false);
      setAlert(true);
      setAType("error");
      if (msg) {
        setMsg(t(msg));
      } else {
        setMsg("다시 시도해 주세요.");
      }
    }
  };

  return (
    <div
      className={`bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-[100] ${pre_400.className}`}
    >
      {loader ? (
        <Loading className="text-center" />
      ) : (
        <div className="bg-white px-[20px] sm:px-[40px] pb-[8px] pt-[50px] w-[95%] lg:w-[800px] min-h-[500px] relative">
          <div className="absolute top-[10px] right-[10px]">
            <CloseIcon
              onClick={() => setClose(false)}
              className="cursor-pointer w-[20px] h-[20px]"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div>1:1 문의하기</div>
            <div className="border-b border-b-black my-3"></div>
            <div className="flex items-center justify-center w-full">
              <div className="w-full">
                <div className="w-full space-y-2.5">
                  <div className="flex">
                    <select
                      className="border border-gray-350 mr-2.5 w-[115px]"
                      {...register("type", {
                        required: "문의 종류 선택해 주세요.",
                      })}
                    >
                      <option value="NORM">일반</option>
                      <option value="GOOD">작품</option>
                      <option value="AUCT">경매</option>
                      <option value="ETCC">기타</option>
                    </select>
                    <input
                      {...register("title", {
                        required: "제목을 입력 해주세요.",
                        min: 18,
                        max: 99,
                      })}
                      placeholder={"제목을 입력 해주세요."}
                      className="w-full border border-gray-350 px-2"
                    />
                  </div>
                  <textarea
                    className="w-full resize-none border border-gray-350"
                    placeholder="내용을 입력해 주세요"
                    rows={10}
                    {...register("contents", {
                      required: "내용을 입력 해주세요.",
                      min: 18,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="flex mb-8 justify-center items-center mt-7">
              <input
                type="submit"
                className="bg-black text-white px-20 py-4 rounded-sm cursor-pointer"
                value={"문의하기"}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default QnaModal;
