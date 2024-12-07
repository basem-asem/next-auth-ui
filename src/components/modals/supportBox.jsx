export default function SupportBox() {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-[30px] shadow-lg overflow-hidden">
      {/* Top Section */}
      <div className="relative pt-2">
        <img
          src="./images/share.png" // Replace with a valid image path
          alt="Dylan Grace"
          className="mt-2 mr-2 absolute right-0 top-0 w-7 h-7"
        />
        <div className="flex justify-between mt-3">
          <div className="ml-6 mt-6">
            <h2 className="text-2xl  text-gray-900">
              Dylan <br></br> Grace
            </h2>
            <p className="text-[#B6B6B6]">Music Expert</p>
          </div>
          <img
            src="../human.png" // Replace with a valid image path
            alt="Dylan Grace"
            className="mt-2 h-48"
          />
        </div>
      </div>
      {/* Middle Section */}
      <div className="bg-[#E0F53E] pt-6 pb-0 flex justify-between flex-col rounded-t-3xl">
        <p className="text-gray-800 pl-6 pb-16 pr-28">
          Speak with a Music <br></br> Expert today
        </p>
        <div className="p-4">
          <button className="w-full py-3 px-4 bg-white text-black rounded-full text-xs">
            Schedule Call
          </button>
        </div>
      </div>
      {/* Bottom Section */}
    </div>
  );
}
