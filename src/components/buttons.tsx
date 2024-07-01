"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type propsType = {
  className: string;
};

const buttons = (props: propsType) => {
  const [buttonColor, setButtonColor] = useState("Green");
  const [buttonRam, setButtonRam] = useState(64);

  return (
    <div className={props.className}>
      <div className="flex items-center justify-center mb-6">
        <Button
          variant="ghost"
          className={`hover:bg-green-400 font-bold p-4 m-4 active:bg-green-300 ${
            buttonColor == "Green" ? "bg-green-300" : ""
          }`}
          onClick={() => {
            if (buttonColor != "Green") {
              setButtonColor("Green");
            }
          }}
        >
          Green
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-red-400 font-bold p-4 m-4 active:bg-red-300 ${
            buttonColor == "Red" ? "bg-red-300" : ""
          }`}
          onClick={() => {
            if (buttonColor != "Red") {
              setButtonColor("Red");
            }
          }}
        >
          Red
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-indigo-400 font-bold p-4 m-4 active:bg-indigo-300 ${
            buttonColor == "Indigo" ? "bg-indigo-300" : ""
          }`}
          onClick={() => {
            if (buttonColor != "Indigo") {
              setButtonColor("Indigo");
            }
          }}
        >
          Indigo
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          className={`hover:bg-slate-500 font-bold p-4 m-4 active:bg-slate-400 ${
            buttonRam == 64 ? "bg-slate-400" : ""
          }`}
          onClick={() => {
            if (buttonRam != 64) {
              setButtonRam(64);
            }
          }}
        >
          64GB
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-slate-500 p-4 m-4 font-bold active:bg-slate-400 ${
            buttonRam == 128 ? "bg-slate-400" : ""
          }`}
          onClick={() => {
            if (buttonRam != 128) {
              setButtonRam(128);
            }
          }}
        >
          128GB
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-slate-500 p-4 m-4 font-bold active:bg-slate-400 ${
            buttonRam == 256 ? "bg-slate-400" : ""
          }`}
          onClick={() => {
            if (buttonRam != 256) {
              setButtonRam(256);
            }
          }}
        >
          256GB
        </Button>
      </div>
    </div>
  );
};

export default buttons;
