const GetStartedCard = () => {
  return (
    <div className="flex flex-col bg-amber-500 rounded--xl w-4/5 mt-20 py-15 px-10">
      <h2>Start selling your music worldwide today</h2>
      <h3>
        Our mission at Musicalists is to give you the opportunity to take your
        music as far as you want.
      </h3>
      <div className="flex gap-5">
        <button>Get Started</button>
        <button>See More</button>
      </div>
    </div>
  );
};

export default GetStartedCard;
