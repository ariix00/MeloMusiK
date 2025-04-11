import image1 from "../assets/miku.webp";
const Genres = () => {
  return (
    <div className="flex flex-col mt-10 w-3/5">
      <div className="flex">
        <div className="flex flex-col">
          <h2>Choose your favorite genre</h2>
          <h3>Music genres from all over the world are there, one of them.</h3>
        </div>
        <button>See more</button>
      </div>
      <div className="flex w-full gap-5">
        <img src={image1} alt="" className="h-[500px] w-1/4 object-cover" />
        <img src={image1} alt="" className="h-[500px] w-1/4 object-cover" />

        <img src={image1} alt="" className="h-[500px] w-1/4 object-cover" />

        <img src={image1} alt="" className="h-[500px] w-1/4 object-cover" />
      </div>
    </div>
  );
};

export default Genres;
