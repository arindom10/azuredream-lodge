import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Social Media */}
        <div>
          <div>
            <Link to="/">
              <img
                src="https://i.ibb.co/yYC4D4n/logo-1.png"
                alt="HotelFinder Logo"
                className="w-32"
              />
            </Link>
          </div>
          <p className="mb-4">Follow us on social media</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-gray-800"
              aria-label="Facebook"
            >
              <i
                style={{ backgroundColor: "#CEAF83" }}
                className="fab fa-facebook-f fa-lg p-3 rounded-full"
              ></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-800"
              aria-label="LinkedIn"
            >
              <i
                style={{ backgroundColor: "#CEAF83" }}
                className="fab fa-linkedin-in fa-lg p-3 rounded-full"
              ></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-gray-800"
              aria-label="Twitter"
            >
              <i
                style={{ backgroundColor: "#CEAF83" }}
                className="fab fa-twitter fa-lg p-3 rounded-full"
              ></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="About us" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="Our Service" className="hover:underline">
                Our Service
              </a>
            </li>
            <li>
              <a href="Our Blog's" className="hover:underline">
                {`Our Blog's`}
              </a>
            </li>
            <li>
              <a href="Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Appointment */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Appointment</h3>
          <ul className="space-y-2">
            <li>
              <a href="Web Design and development" className="hover:underline">
                Web Design and development
              </a>
            </li>
            <li>
              <a href="UI UX Service" className="hover:underline">
                UI UX Service
              </a>
            </li>
            <li>
              <a href="Digital marketing" className="hover:underline">
                Digital marketing
              </a>
            </li>
            <li>
              <a href="Custom Web Design" className="hover:underline">
                Custom Web Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h3>
          <p className="mb-2">
            <span className="font-bold">Email: </span>
            <span>hunkyAgencyUI@gmail.com</span>
          </p>
          <p>
            <span className="font-bold"> Location: </span>
            <span>302/1, Hazi Tower, Gandaria New Rd, Dhaka 1204</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-gray-300 text-sm py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
          <p>©2024 Bookly | All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="Twitter" className="hover:underline">
              Terms of service
            </a>
            <a href="Twitter" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
