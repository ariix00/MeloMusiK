import image1 from "../assets/miku.webp";
const GetStartedCard = () => {
  return (
    <div className="flex flex-col gap-10 bg-linear-to-t from-[#1b1f24] to-[#23343a] rounded-2xl w-4/5 mt-20 py-20 px-15 relative overflow-hidden">
      <h2 className="text-5xl w-1/2">
        Start selling your music worldwide today
      </h2>
      <h3 className="text-xl text-slate-300 w-1/2">
        Our mission at Musicalists is to give you the opportunity to take your
        music as far as you want.
      </h3>
      <div className="flex gap-5">
        <button className="py-2 px-7 hover:text-black font-semibold hover:bg-[#aafd51] rounded-full duration-300 cursor-pointer">
          Get Started
        </button>
        <button className="py-2 px-7 hover:text-black font-semibold hover:bg-[#aafd51] rounded-full duration-300 cursor-pointer">
          See More
        </button>
      </div>
      <img
        src={image1}
        alt=""
        className="absolute w-full -right-[50%] -top-[50%] rounded-full object-cover"
      />
    </div>
  );
};

export default GetStartedCard;
