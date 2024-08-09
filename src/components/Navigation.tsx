import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-between items-center p-5 h-[50px] shadow-md bg-gray-700 text-white">
      <h2 className="font-bold">GitHub responses</h2>
      <span className="flex gap-5 items-end">
        <Link to="/" className="text-indigo-300">Home</Link>
        <Link to="/favourites" className="text-indigo-300">Favourites</Link>
      </span>
    </div>
  );
}

export default Navigation;
