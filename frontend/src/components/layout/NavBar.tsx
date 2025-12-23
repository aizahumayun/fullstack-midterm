
const NavBar = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-gray-300 text-black">
      <div className="flex gap-3">
        <img src="https://i.pinimg.com/236x/44/31/0a/44310a8e261a6c588c3ed64eb140c069.jpg" alt="Quote Logo" className="rounded h-10 w-10 " /> <h1 className="font-bold text-2xl"> Quote System</h1>
      </div>
      <div><ul className="flex gap-3">
        <li><a href="/"> Home </a></li>
        <li><a href="/">Quotes</a></li>
      </ul></div>
    </div>
  );
};

export default NavBar;
