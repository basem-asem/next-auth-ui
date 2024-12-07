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
    <div className="w-full max-w-4xl mx-auto p-4 bg-transparent rounded-md">
      <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">
        {avatars.map((src, index) => (
          <div
            key={index}
            className="w-20 h-20 rounded-3xl  overflow-hidden transition-transform"
          >
            <img
              src={src}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Add button */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600">
          +
        </button>
      </div>
    </div>
  );
};

export default AvatarList;
