"use client";

import Phone from "../components/phone";
import Details from "../components/details";
import Button from "../components/buttons";
import { useState } from "react";

const Data = [
  { Name: "Iphone-64-Red", Ram: 64, Color: "Red", Price: 72000 },
  { Name: "Iphone-64-Green", Ram: 64, Color: "Green", Price: 80000 },
  { Name: "Iphone-64-Indigo", Ram: 64, Color: "Indigo", Price: 82000 },
  { Name: "Iphone-128-Red", Ram: 128, Color: "Red", Price: 91000 },
  { Name: "Iphone-128-Green", Ram: 128, Color: "Green", Price: 110000 },
  { Name: "Iphone-128-Indigo", Ram: 128, Color: "Indigo", Price: 100000 },
  { Name: "Iphone-256-Red", Ram: 256, Color: "Red", Price: 120000 },
  { Name: "Iphone-256-Green", Ram: 256, Color: "Green", Price: 140000 },
  { Name: "Iphone-256-Indigo", Ram: 256, Color: "Indigo", Price: 130000 },
];

const colorCode = {
  Red: "bg-red-400",
  Green: "bg-green-400",
  Indigo: "bg-indigo-400",
};

export default function Home() {
  const [color, setColor] = useState("Red");
  const [ram, setRam] = useState(64);
  const [index, setIndex] = useState(0);

  return (
    <main className="w-full flex items-center justify-evenly h-screen">
      <div className="flex items-center justify-evenly">
        <Phone Color=" bg-white" className="pr-7" />
        <Details
          name={Data[index].Name}
          className="px-10 "
          RAM={ram}
          price={Data[index].Price}
          color={color}
        />
        <Button className="" />
      </div>
    </main>
  );
}
