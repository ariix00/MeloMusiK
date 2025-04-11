import image1 from "../assets/miku.webp";
const Testimonies = () => {
  return (
    <div className="flex flex-col gap-15 w-full items-center text-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl">Testimonials from customers</h2>
        <h3 className="text-xl text-slate-300">
          Our providers take a hands-on approach to help you see
        </h3>
      </div>
      <div className="flex gap-5 text-start">
        <div className="flex flex-col text-xl bg-linear-to-t from-[#1b1f24] to-[#23343a] p-5 rounded-2xl gap-5">
          <div className="flex gap-3">x x x x 0 </div>
          <h3>
            It's magical to be able to move between generations and discover hat
            Funk is still more alive than ever.
          </h3>
          <div className="flex gap-5">
            <img
              src={image1}
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3>Alexander</h3>
              <span>02/09/2023</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xl bg-linear-to-t from-[#1b1f24] to-[#23343a] p-5 rounded-2xl gap-5">
          <div className="flex gap-3">x x x x 0 </div>
          <h3>
            It's magical to be able to move between generations and discover hat
            Funk is still more alive than ever.
          </h3>
          <div className="flex gap-5">
            <img
              src={image1}
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3>Alexander</h3>
              <span>02/09/2023</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xl bg-linear-to-t from-[#1b1f24] to-[#23343a] p-5 rounded-2xl gap-5">
          <div className="flex gap-3">x x x x 0 </div>
          <h3>
            It's magical to be able to move between generations and discover hat
            Funk is still more alive than ever.
          </h3>
          <div className="flex gap-5">
            <img
              src={image1}
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3>Alexander</h3>
              <span>02/09/2023</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xl bg-linear-to-t from-[#1b1f24] to-[#23343a] p-5 rounded-2xl gap-5">
          <div className="flex gap-3">x x x x 0 </div>
          <h3>
            It's magical to be able to move between generations and discover hat
            Funk is still more alive than ever.
          </h3>
          <div className="flex gap-5">
            <img
              src={image1}
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3>Alexander</h3>
              <span>02/09/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
