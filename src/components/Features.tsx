import image1 from "../assets/miku.webp";
const Features = () => {
  return (
    <div className="flex w-4/5 gap-20 justify-center">
      <div className="flex flex-col w-4/10 gap-5">
        <h2 className="text-5xl">Best Features</h2>
        <div className="flex gap-5 bg-linear-to-t from-[#1b1f24] to-[#23343a] p-4 rounded-2xl">
          <span>01</span>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl">The Best Price</h3>
            <span className="text-lg font-extralight text-slate-300">
              We offer very cheap and very affordable monthly member prices for
              you
            </span>
          </div>
        </div>
        <div className="flex gap-5 bg-linear-to-t from-[#1b1f24] to-[#23343a] p-4 rounded-2xl">
          <span>02</span>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl">Copyright Free</h3>
            <span className="text-lg font-extralight text-slate-300">
              Royalty free music to download or play online - Get unlimited
              access to over 40.000 tracks
            </span>
          </div>
        </div>
        <div className="flex gap-5 bg-linear-to-t from-[#1b1f24] to-[#23343a] p-4 rounded-2xl">
          <span>03</span>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl">Premium Quality</h3>
            <span className="text-lg font-extralight text-slate-300">
              Premium quality that makes Musicalists more elgant and more
              comfortable to hear
            </span>
          </div>
        </div>
      </div>
      <img
        src={image1}
        alt=""
        className="w-4/11 h-auto object-cover rounded-4xl rounded-bl-[35%] border-4 p-1 border-slate-50/10"
      />
    </div>
  );
};

export default Features;
