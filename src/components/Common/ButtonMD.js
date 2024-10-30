const ButtonMD = ({ text, onClick, style, type, check }) => {
    return (
        <button onClick={onClick} className={`${style}`}>
            { check ? <i className="fal fa-check"></i> : '' } { text } { type ? <i className='fal fa-long-arrow-right'></i> : '' }
        </button>
    );
};

export default ButtonMD;
