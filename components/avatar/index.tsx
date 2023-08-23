import React from "react";

const Avatar = () => {
  return (
    <>
      <div className="w-full max-w-[250px] h-[250px] rounded-full object-cover overflow-hidden bg-transparent">
        <img className="w-full" src="/images/avatar.jpg" />
      </div>
    </>
  );
};

export default Avatar;
