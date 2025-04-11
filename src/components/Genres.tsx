import image1 from "../assets/miku.webp";
const Genres = () => {
  return (
    <div className="flex flex-col mt-10 w-4/5 gap-10 ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5 justify-center">
          <h2 className="text-5xl">Choose your favorite genre</h2>
          <h3 className="text-xl font-light">
            Music genres from all over the world are there, one of them.
          </h3>
        </div>
        <button className="py-2 px-7 hover:text-black font-semibold hover:bg-[#aafd51] rounded-full duration-300 cursor-pointer h-10">
          See more
        </button>
      </div>
      <div className="flex w-full gap-5">
        <div className="flex flex-col items-center w-1/4 gap-5">
          <img
            src={image1}
            alt=""
            className="h-[500px] object-cover rounded-t-full rounded-b-full cursor-pointer hover:brightness-50 duration-300"
          />
          <span className="text-2xl">METAL</span>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-5">
          <img
            src={image1}
            alt=""
            className="h-[500px] object-cover rounded-t-full rounded-b-full cursor-pointer hover:brightness-50 duration-300"
          />
          <span className="text-2xl">METAL</span>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-5">
          <img
            src={image1}
            alt=""
            className="h-[500px] object-cover rounded-t-full rounded-b-full cursor-pointer hover:brightness-50 duration-300"
          />
          <span className="text-2xl">METAL</span>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-5">
          <img
            src={image1}
            alt=""
            className="h-[500px] object-cover rounded-t-full rounded-b-full cursor-pointer hover:brightness-50 duration-300"
          />
          <span className="text-2xl">METAL</span>
        </div>
      </div>
    </div>
  );
};

export default Genres;
