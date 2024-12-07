import React from "react";

const MusicExpertCard = () => {
  return (
    <div className="flex items-start justify-between bg-[#DFFB48] p-4 rounded-2xl shadow-md w-72">
      {/* Left section: Image */}
      <div className="flex items-center space-x-3">
      <img
          src="../images/ProfilePic.png"
          alt="Music Expert"
          className=""
        />
        {/* Text */}
        <span className="text-black font-thin text-sm pr-3">
          Speak with a Music Expert today
        </span>
      </div>
      {/* Right section: Icon */}
      <img
          src="../images/share2.png"
          alt="Music Expert"
          className=""
        />
    </div>
  );
};

export default MusicExpertCard;
