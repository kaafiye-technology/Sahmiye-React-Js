import React, { useState } from "react";
import { whatsappContact } from "../../constants";

const Footer = () => {
  {
    // return null;
    /* Footer */
  }
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            SAHMIYE REALSTATE
          </h3>
          <p className="text-sm text-gray-400">
            Guriga saxda ah, nolol fiican. Waxaan kaa caawinaynaa inaad hesho
            guri ku habboon baahidaada iyo miisaaniyaddaada.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Links Degdeg ah
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="/properties" className="hover:text-green-400">
                Guryaha
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400">
                Nagu Saabsan
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400">
                Nala Soo Xiriir
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm text-gray-400">📍 Mogadishu, Somalia</p>
          <p className="text-sm text-gray-400">📧 info@sahmiyerealstate.com</p>
          <p className="text-sm text-gray-400">📱 {whatsappContact}</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-400">
              Facebook
            </a>
            <a href="#" className="hover:text-green-400">
              WhatsApp
            </a>
            <a href="#" className="hover:text-green-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2026 SAHMIYE REALSTATE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
