import React from "react";

const Avatar = ({image}) => {
  return (
    <div className="h-[40px] w-[40px] rounded-full shadow-md">
      <img src={image} className="w-full h-full rounded-full object-cover" alt="avatar"/>
    </div>
  );
};

export default Avatar;
