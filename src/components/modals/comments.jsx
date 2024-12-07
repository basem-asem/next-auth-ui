import { useState } from "react";

export default function CommentsSidebar() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Aubrey McMillan",
      time: "1 hour ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/user/1.png",
    },
    {
      id: 2,
      name: "Leroy Strickland",
      time: "30 mins ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/user/2.png",
    },
    {
      id: 3,
      name: "Cassandra Vickers",
      time: "10 mins ago",
      text: "Looking forward to the next phase!",
      avatar: "/images/user/3.png",
    },
  ]);
  const reply = [
    {
      id: 3,
      name: "Cassandra Vickers",
      time: "8 mins ago",
      text: "Very lovely! Looking forward to that!",
      avatar: "/images/user/4.png",
    },
  ];
  const [openDropdown, setOpenDropdown] = useState(2);
  const [generalDropdown, setGeneralDropdown] = useState(true);
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="w-96 bg-white shadow-lg rounded-lg">
          <div className="flex justify-end">
            <button
              className="rounded-full bg-gray-100 px-2 text-gray-300 mr-2 mt-2"
              onClick={() => setShow(false)}
            >
              x
            </button>
          </div>
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-black font-bold">Comments</h2>
              <button className="text-gray-500 bg-[#F8F8F8] hover:text-gray-800 p-[6px] rounded-lg">
                <span className="text-xs bg-white py-[2px] px-[8px] rounded-md">Open</span>
                <span className="ml-2 text-xs text-gray-400">Resolved</span>
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex justify-evenly gap-3 border-b py-4 relative">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm w-full mx-2">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 4.707l3.4 3.4a1 1 0 11-1.414 1.414l-3.4-3.4A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Input Field */}
              <input
                type="text"
                placeholder="search"
                className="bg-transparent outline-none text-sm text-gray-600 w-full"
              />
            </div>

            <img
              className="cursor-pointer pr-7 relative"
              src="/images/threeDots.svg"
              alt="menu"
              onClick={() => setGeneralDropdown(!generalDropdown)}
            />
            {generalDropdown && (
              <div className="absolute right-5 mt-5 py-2  bg-white border rounded-2xl shadow-xl z-10">
                <ul>
                  <li className="px-4 ml-6 py-1 text-[#5E5E5E] ">
                    Hide comments
                  </li>
                  <li className="px-4 py-1 text-[#5E5E5E]  flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Mark all as read
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Comments */}
          <div className="p-4 space-y-4">
            {comments.map((comment, i) => (
              <div className= {`flex-col flex ${
                i < comments.length - 1 ? "border-b" : ""
              }`}>
                <div
                  key={comment.id}
                  className={`flex items-start space-x-3  pb-4`}
                >
                  <div className="flex gap-1">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-10 h-10 rounded-full"
                    />
                    {comment.id === 3 && (
                      <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-10 h-10 rounded-full"
                    />)}
                    </div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-col">
                      <h3 className="font-medium text-gray-800">
                        {comment.name}
                      </h3>
                      <span className="text-gray-400 text-sm">
                        {comment.time}
                      </span>
                    </div>
                    
                  </div>
                  <button
                    className="relative"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === comment.id ? null : comment.id
                      )
                    }
                  >
                    <img
                      src="/images/threeDots.svg"
                      alt="menu"
                      className="pr-2"
                    />
                    {openDropdown === comment.id && (
                      <div className="absolute right-0 top-0 py-3 w-36 bg-white border rounded-lg shadow-md z-10">
                        <ul>
                          <li className="px-4 py-1 text-sm text-[#5E5E5E] font-light text-left hover:bg-[#7C9BEB] hover:text-white">
                            Mark as unread
                          </li>
                          <li className="px-4 py-1 text-sm font-light text-[#5E5E5E] text-left hover:bg-[#7C9BEB] hover:text-white">
                            Delete comment
                          </li>
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
                <p className="text-gray-600 text-sm pl-1">{comment.text}</p>
                    <button className="text-blue-500 pl-1 text-xs hover:underline mt-1 mb-2 text-left">
                      Reply
                    </button>
                {reply.filter((r) => r.id === comment.id).length > 0 && (
                  <div className="border-b flex flex-col">
                    <span className="h-7 border w-[1px] ml-4"></span>
                  <div className="flex items-start space-x-3  pb-4">

                    <img
                      src="/images/user/4.png"
                      alt="user"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between flex-col">
                        <h3 className="font-medium text-gray-800">
                          Cassandra Vickers
                        </h3>
                        <span className="text-gray-400 text-sm">
                          8 mins ago
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Very lovely! Looking forward to that!
                      </p>
                    </div>
                  </div>
                      </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-4">
            <div className="relative">
              <textarea className="w-full resize-none h-24 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" />
              <button className="absolute bottom-3 right-2 text-xs bg-black text-white px-6 py-1 rounded-lg hover:bg-gray-900">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
