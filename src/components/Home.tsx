import image1 from "../assets/miku.webp";
import { useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      "fromTopAnimation",
      { y: "-100%", opacity: 0 },
      {
        scrollTrigger: ".nav",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".images",
      { x: "200%", opacity: 0 },
      {
        scrollTrigger: ".images",
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <div className="mt-20 flex flex-col  w-4/5">
      <h1 className="text-7xl font-semibold nav">
        Music Is The Shorthand <br /> Of Emotion
      </h1>
      <div className="flex gap-20 w-full justify-center">
        <div className="nav flex flex-col w-1/2 text-xl font-light justify-center  gap-10">
          <h3 className="">
            It's our mission at RouteNote to give you the opportunities to take
            your music as far as you want it to go.
          </h3>
          <div className="flex">
            <button className="py-2 px-7 hover:text-black font-semibold hover:bg-[#aafd51] rounded-full duration-300 cursor-pointer">
              Get Started
            </button>
            <button className="py-2 px-7 hover:text-black font-semibold hover:bg-[#aafd51] rounded-full duration-300 cursor-pointer">
              See More
            </button>
          </div>
          <div className="flex mt-10 text-5xl font-light text-center gap-5">
            <div className="h-40 bg-linear-to-t from-[#1b1f24] to-[#23343a] p-4 rounded-2xl w-32">
              320k
              <br />
              <span className="text-xl font-normal text-gray-400">
                Customer
              </span>
            </div>
            <div className="h-40 bg-linear-to-t from-[#1b1f24] to-[#23343a] p-4 rounded-2xl w-32">
              47k
              <br />
              <span className="text-xl font-normal text-gray-400">Tracks</span>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 gap-5 justify-center">
          <img
            src={image1}
            alt=""
            className="images h-[600px] w-64 object-cover rounded-t-full rounded-b-full  border-1 border-slate-50/59 bg-transparent p-1"
          />
          <div className="flex flex-col gap-5">
            <img
              src={image1}
              className="images bg-blue-300 rounded-full h-1/3 w-52 object-cover"
            />
            <img
              src={image1}
              className="images bg-blue-300 rounded-t-full rounded-b-full grow w-52 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
