function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ButtonClass = ({
  text,
  onClick,
  share,
  type,
  check,
  condition,
  styleTrue,
  styleFalse,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        condition ? `${styleTrue}` : `${styleFalse}`,
        `${share}`
      )}
    >
      {check ? <i className="fal fa-check"></i> : ""} {text}{" "}
      {type ? <i className="fal fa-long-arrow-right"></i> : ""}
    </button>
  );
};

export default ButtonClass;
