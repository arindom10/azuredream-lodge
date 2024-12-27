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
          <button className="px-4 py-2  text-gray-800 rounded-md ">
            Login / Signup
          </button>
          <a href="/rooms">
            <button
              style={{ backgroundColor: "#CEAF83" }}
              className="px-4 py-2 bg-yellow-500 text-white rounded-full "
            >
              Reservation
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
