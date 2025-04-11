import image1 from "../assets/miku.webp";
const Features = () => {
  return (
    <div className="flex w-3/5 gap-5 justify-center">
      <div className="flex flex-col">
        <h2>Best Features</h2>
        <div className="flex">
          <span>01</span>
          <div className="flex flex-col">
            <h3></h3>
            <span></span>
          </div>
        </div>
        <div className="flex">
          <span>02</span>
          <div className="flex flex-col">
            <h3></h3>
            <span></span>
          </div>
        </div>
        <div className="flex">
          <span>03</span>
          <div className="flex flex-col">
            <h3></h3>
            <span></span>
          </div>
        </div>
      </div>
      <img src={image1} alt="" className="w-1/2" />
    </div>
  );
};

export default Features;
