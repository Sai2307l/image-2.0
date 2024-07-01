import React from "react";

const colorCode = {
  Red: "bg-red-400",
  Green: "bg-green-400",
  Indigo: "bg-indigo-400",
};

type propsType = {
  Color: string;
  className: string;
};

const Display = (props: propsType) => {
  return (
    <div className={props.className}>
      <div
        className={`w-72 h-[85vh] rounded-3xl border-black border-4 border-b-[15px] flex align-middle justify-center ${props.Color} transition-colors`}
      >
        <div className="bg-black w-[3vh] h-[3vh] rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default Display;
