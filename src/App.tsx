import Features from "./components/Features";
import Genres from "./components/Genres";
import GetStartedCard from "./components/GetStartedCard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonies from "./components/Testimonies";

function App() {
  return (
    <div className="bg-radial-[at_100%_0%] from-[#415b62] to-[#1b1f24] to-40% flex flex-col items-center gap-20 min-h-screen w-screen m-0 p-0 overflow-x-hidden text-slate-50">
      <Navbar />
      <Home />
      <Genres />
      <h2 className="text-5xl w-3/5 text-center my-20">
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
