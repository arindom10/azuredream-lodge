import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-black font-semibold"
      : "text-gray-600 hover:text-yellow-500 transition";
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <div>
          <Link to="/">
            <img
              src="https://i.ibb.co/yYC4D4n/logo-1.png"
              alt="HotelFinder Logo"
              className="w-32"
            />
          </Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/rooms" className={getLinkClass("/rooms")}>
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/blog" className={getLinkClass("/blog")}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/page" className={getLinkClass("/page")}>
              Page
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
            Login / Signup
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
