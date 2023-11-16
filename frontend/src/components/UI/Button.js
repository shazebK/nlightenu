import React from "react";

const Button = ({children,theme}) => {
    return (
        <button className={`w-20 h-8 ${theme==="black" && "bg-black text-white"} flex items-center justify-center border border-black font-bold mx-4`}>{children}</button>
    )
}

export default Button;