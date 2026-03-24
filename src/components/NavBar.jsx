import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { whatsappContact } from "../../constants";

export default function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gray-900 text-gray-200 text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2">
          <div className="flex gap-4">
            <span>📍 Mogadishu, Somalia</span>
            <span>📧 info@sahmiyerealstate.com</span>
          </div>

          <div className="flex gap-4">
            <span>📱 {whatsappContact}</span>
            <span>🕒 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="text-2xl font-extrabold text-green-700">
            SAHMIYE REALSTATE
          </Link>

          {/* MENU */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
              <li>
                <Link to="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-green-600">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>

            <Link
              to="/properties"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Home size={18} /> Guryaha
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
