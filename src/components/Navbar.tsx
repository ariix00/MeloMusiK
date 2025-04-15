import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".nav",
      { y: "-100%", opacity: 0 },
      {
        scrollTrigger: ".nav",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <div className="z-50 nav backdrop-blur-sm fixed top-0 w-full bg-cyan-950/50 flex justify-between p-5 nav -translate-y-[100%]">
      <span>Musikalis</span>
      <div className="flex">
        <button className="px-5 bg-transparent border-none">Home</button>
        <button className="px-5 bg-transparent border-none">About</button>

        <button className="px-5 bg-transparent border-none">Services</button>

        <button className="px-5 bg-transparent border-none">Advisor</button>
      </div>
      <div className="flex">
        <button className="px-5">Sign in</button>
        <button className="px-5">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
