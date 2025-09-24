import React from "react";

const Logo = () => {
  return (
    <>
      <div className="inline-block">
        <span className="text-4xl font-bold text-gray-800 tracking-wider">
          fasal
        </span>
        <div className="flex space-x-1 mt-1">
          <div className="w-3 h-1 bg-green-400 rounded-full"></div>
          <div className="w-2 h-1 bg-green-500 rounded-full"></div>
          <div className="w-1 h-1 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Logo;
