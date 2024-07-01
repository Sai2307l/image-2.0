import React from "react";

type propsType = {
  name: string;
  className: string;
  price: number;
  RAM: number;
  color: string;
};

const Display = (props: propsType) => {
  return (
    <div className={props.className}>
      <div className="m-4 font-bold font-3xl font-serif text-lg">
        Name: {props.name}
      </div>
      <div className="m-4">Price: {props.price}</div>
      <div className="m-3">RAM: {props.RAM}GB</div>
      <div className="m-3">Color: {props.color}</div>
    </div>
  );
};

export default Display;
