import React from "react";

const Tag = ({children,classes}) => {
    return (
        <div className={`bg-slate-500 text-white p-1 rounded-full mx-4 ${classes}`}>
            {children}
        </div>
    );
}

export default Tag;