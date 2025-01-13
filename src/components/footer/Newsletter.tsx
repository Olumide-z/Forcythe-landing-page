import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-transparent text-white w-full px-4">
      {/* Newsletter Input Form --> */}
      <form className="flex flex-col space-y-4 max-w-[500px] mx-auto">
        {/* Input + Button  */}
        <div className="flex items-center w-full border border-white rounded-[2rem] overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 text-white bg-transparent outline-none text-sm"
            required
          />
          <button
            type="submit"
            className="bg-white text-forcythe-darkBg px-4 py-3 font-medium text-sm"
          >
            Subscribe
          </button>
        </div>

        {/* Custom Radio Input */}
        <div className="flex items-start space-x-2">
          <label className="relative flex items-center cursor-pointer">
            <input type="radio" name="newsletter" className="hidden peer" />
            <span className="w-5 h-5 flex-shrink-0 rounded-full border-2 border-white relative peer-checked:bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-forcythe-darkBg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-checked:block hidden"></span>
            </span>
          </label>
          <span className="text-sm leading-tight">
            I agree to receive other notifications from Forcythe
          </span>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
