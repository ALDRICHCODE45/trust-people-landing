"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";

import productImage from "@/assets/product.jpg";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Information technology",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Logistics",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Manufacture",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24 ">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Trust.us!
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight max-w-2xl mx-auto text-center mt-5">
          We professionalize the recruitment process from a commercial
          methodology, verifying it in each key and specialized position within
          the different industries where our clients are located.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3 ">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 "
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer autoplay src={tab.icon} className="w-5 h-5" />
              </div>

              <div className="font-medium ">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3 ">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
          {/* <Image src={productImage} alt="product" /> */}
        </div>
      </div>
    </section>
  );
};
