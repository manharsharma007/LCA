import React from "react";

function Loader() {
  return (
    <div className="mx-auto mt-[50%] translate-y-[-250%] w-[70px]">
      <span className="block w-[60px] h-[60px] rounded-[100%] border-8 animate-spin border-[#186EC4] border-t-[#BFDFFC]"></span>
    </div>
  );
}

export default Loader;
