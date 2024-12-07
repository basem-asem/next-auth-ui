import React from "react";

const AvatarList = () => {
  // Sample avatars (replace URLs with actual image links)
  const avatars = [
    "https://randomuser.me/api/portraits/women/1.jpg", // Replace with people images
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/women/7.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
  ];

  return (
    <div className=" bg-transparent rounded-md overflow-auto">
      <div className="flex items-center gap-2 w-fit">
        {avatars.map((src, index) => (
          <div
            key={index}
            className="w-[100px] h-20 rounded-3xl overflow-hidden transition-transform"
          >
            <img
              src={src}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Add button */}
        <button className="w-20 h-20 flex items-center justify-center rounded-3xl font-semibold bg-[#666666]  text-2xl hover:bg-gray-600">
          +
        </button>
      </div>
    </div>
  );
};

export default AvatarList;
