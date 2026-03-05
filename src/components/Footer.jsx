import React, { useState } from "react";
import { whatsappContact } from "../../constants";

const Footer = () => {
  {
    /* Footer */
  }
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Us */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              SAHMIYE<span className="text-red-400">REAL</span>ESTATE
            </h3>
            <p className="text-gray-400 mb-4">
              SAHMIYE REAL ESTATE is a leading brokerage firm specializing in
              residential and commercial properties across Somalia. With a
              commitment to integrity, professionalism, and client satisfaction,
              we strive to provide exceptional real estate services tailored to
              meet the unique needs of each client.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Residential Sales:</strong> Whether you're buying or
                  selling a home, our experienced agents are here to guide you
                  through the process with expertise and personalized attention.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Commercial Real Estate:</strong> From office spaces to
                  retail properties, we assist investors, landlords, and tenants
                  in achieving their commercial real estate goals.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Investment Consulting:</strong> Our team provides
                  strategic investment advice, helping clients make informed
                  decisions to grow their real estate portfolios.
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Why Choose Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Local Expertise:</strong> With deep roots in the
                  community, we have extensive knowledge of local real estate
                  market trends and neighborhoods.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Client-Centric Approach:</strong> We prioritize our
                  clients' interests and work tirelessly to achieve their real
                  estate objectives.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Professionalism:</strong> Our agents are highly
                  trained and uphold the highest standards of professionalism
                  and ethics.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>
                  <strong>Innovative Technology:</strong> We leverage
                  cutting-edge technology to streamline processes, ensuring
                  efficiency and transparency.
                </span>
              </li>
            </ul>
          </div>

          {/* Our Mission & Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Mission</h4>
            <p className="text-gray-400 mb-6">
              To be the preferred choice for real estate solutions in Somalia,
              providing unparalleled service and fostering long-term
              relationships built on trust, integrity, and success.
            </p>

            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{whatsappContact}</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mogadishu, Somalia</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@sahmiyerealestate.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 SAHMIYE REAL ESTATE. All rights reserved. | Privacy Policy |
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
