import React, { useState, useEffect } from 'react';

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return (
        showButton && (
            <div className="fixed right-[5%] bottom-[5%] z-[100] ">
                <button className={`text-bold w-[50px] h-[50px] text-[28px] leading-[50px] text-center text-white bg-[rgba(0,0,0,0.5)] rounded-[50%] cursor-pointer`} onClick={scrollToTop} type="button" ><i className="fal fa-chevron-up"></i></button>
            </div>
        )
    );
};

export default TopButton;