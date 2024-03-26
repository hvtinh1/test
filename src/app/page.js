"use client";
import clsx from 'clsx';
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("All");
  const menus = [
    "All",
    "Manpower Supply",
    "Mobile App / Websites",
    "UI/UX design",
  ];
  const originNalItems = [
    {
      type: "Manpower Supply",
      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      type: "Mobile App / Websites",

      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      type: "UI/UX design",
      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      type: "UI/UX design",

      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      type: "UI/UX design",

      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
    {
      type: "UI/UX design",

      title: "TOI 3d Customize E-commerce",
      image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
    },
  ];
  const filerItems = originNalItems.filter(item => item.type === active || active === 'All');
  return (
    <main>
      <div className="flex gap-5 justify-center mt-10 mb-10">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={clsx("font-bold p-5 rounded-lg cursor-pointer", {
              "bg-yellow-500": active === menu,
            })}
            onClick={() => setActive(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
      <div className=" sm:max-w-[90vw] flex gap-5 flex-wrap my-0 mx-auto mb-[10rem] ">
        <div className="sm:flex-row md:justify-center xl:justify-start flex-col px-5 flex gap-5 flex-wrap align-middle translate-x-0">
          {filerItems.map((item, index) => (
            <div
              key={index}
              className="relative hover:-translate-y-1 transition-all hover:scale-[1.02]"
            >
              <div className="sm:justify-normal justify-center z-10 text-center absolute w-[90%] bottom-10 bg-white rounded-lg px-5 left-1/2 -translate-x-1/2">
                {item.title}
              </div>
              <div className="bg-[#ffe] w-[406]">
                <img src={item.image} width={406} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
