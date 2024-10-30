import CloseIcon from "../../../public/images/btn_close.svg";

const AlertPopup = ({
  width = "500px",
  height = "285px",
  setClose,
  text,
  text2,
  text3 = "",
  onClick = null,
  btnText = "확인",
}) => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm w-full h-full fixed flex justify-center items-center z-40 top-0 left-0 shadow-sm">
      <div
        className="bg-white absolute  p-2.5 flex flex-col justify-between"
        style={{ width, height }}
      >
        <div className="flex w-full justify-end">
          <CloseIcon
            onClick={() => setClose(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-center">
          <div>{text}</div>
          {text2 && <div>{text2}</div>}
          {text3 && <div>{text3}</div>}
        </div>

        <div className="flex mb-8 justify-center items-center">
          <div
            className="bg-black text-white px-20 py-4 rounded-sm cursor-pointer"
            onClick={() => setClose(false)}
          >
            {btnText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
