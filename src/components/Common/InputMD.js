const InputMD = ({ type, placeholder, onChange, style }) => {
  return (
    <input
      className={`${style}`}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputMD;
