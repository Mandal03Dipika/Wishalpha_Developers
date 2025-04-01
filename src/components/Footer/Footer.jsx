import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                WishAlpha
              </h3>
              <p className="text-gray-300">
                The ultimate platform for game developers and players.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Support Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-300">Email: wishalpha25@gmail.com </p>
              <p className="text-gray-300">Phone:+91 8240707689</p>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-300">
              &copy; 2025 WishAlpha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
