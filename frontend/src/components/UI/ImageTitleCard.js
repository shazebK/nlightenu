import React from "react";

const ImageTitleCard = ({image,title}) => {
    return (
        <div className="w-80 h-[300px] flex flex-col justify-evenly rounded-lg shadow-2xl cursor-pointer">
            <div className="w-full h-4/5 border-b-2 border-gray-400">
            <img src = {image} alt = {title} className="h-full w-full object-cover"/>
            </div>
            <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
    );
}

export default ImageTitleCard;