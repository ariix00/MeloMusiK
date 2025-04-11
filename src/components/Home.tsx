import image1 from "../assets/miku.webp";

const Home = () => {
  return (
    <div className="mt-20 flex flex-col gap-10 w-3/5">
      <h1 className="text-7xl font-black">Music is the shorthand of emotion</h1>
      <div className="flex gap-5">
        <div className="flex flex-col w-7/12 text-2xl justify-center gap-10">
          <h3 className="">
            It's our mission at RouteNote to give you the opportunities to take
            your music as far as you want it to go.
          </h3>
          <div className="flex">
            <button className="p-4 bg-amber-600 rounded-full ">
              Get Started
            </button>
          </div>
          <div className="flex">
            <div className="h-40 bg-amber-500 p-4">320k</div>
            <div>47k</div>
          </div>
        </div>
        <div className="flex grow bg-amber-100">
          <img src={image1} alt="" className="h-[500px] w-1/2 object-cover" />
          <div className="flex flex-col gap-5 grow">
            <div className="bg-blue-300 rounded-full h-1/3"></div>
            <div className="bg-blue-300 rounded-t-full rounded-b-full grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
