import Features from "./components/Features";
import Genres from "./components/Genres";
import GetStartedCard from "./components/GetStartedCard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonies from "./components/Testimonies";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".mama",
      { y: "200%", opacity: 0 },
      {
        scrollTrigger: ".mama",
        y: "0%",
        opacity: 1,
        duration: 2,
        ease: "expo",
      }
    );
  });
  return (
    <div className="bg-radial-[at_100%_0%] from-[#415b62] to-[#1b1f24] to-40% flex flex-col items-center gap-20 min-h-screen m-0 p-0 overflow-x-hidden text-slate-50">
      <Navbar />
      <Home />
      <Genres />
      <h2 className="text-5xl w-3/5 text-center my-20 mama">
        Musikalis is the best music platform ever created, Musikalis aims to
        give new singers a place to express their work.
      </h2>
      <Features />
      <Testimonies />
      <GetStartedCard />
    </div>
  );
}

export default App;
