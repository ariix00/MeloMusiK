const Navbar = () => {
  return (
    <div className="fixed top-0 w-7/8 flex justify-between m-5">
      <span>Musikalis</span>
      <div className="flex">
        <button className="px-5 bg-transparent border-none">Home</button>
        <button className="px-5 bg-transparent border-none">About</button>

        <button className="px-5 bg-transparent border-none">Services</button>

        <button className="px-5 bg-transparent border-none">Advisor</button>
      </div>
      <div className="flex">
        <button className="px-5">Sign in</button>
        <button className="px-5">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
