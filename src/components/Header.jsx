import React, { useState } from "react";

const Header = ({ filters, onFilterChange, onSearch, onReset }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
    <header className="bg-white border-b border-gray-200 shadow-sm  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                SAHMIYE <span className="text-red-500">REAL </span>ESTATE
              </h1>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Login/Post Ad */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:inline-flex text-sm font-medium text-gray-700 hover:text-blue-600">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Login / Register
              </button>

              {/* <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300">
                <svg
                  className="w-4 h-4 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Post Property Free
              </button> */}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Search Bar */}
        <div className="pb-4">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-4 shadow-inner">
            <form onSubmit={onSearch}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Buy/Rent Dropdown - PURPOSE */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    I Want To
                  </label>
                  <div className="relative">
                    <select
                      name="purpose"
                      value={filters.purpose || "buy"}
                      onChange={onFilterChange}
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 pl-10 pr-10 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="buy">Buy</option>
                      <option value="rent">Rent</option>
                    </select>
                    <div className="absolute left-3 top-3 text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="md:col-span-3">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={filters.location || ""}
                      onChange={onFilterChange}
                      className="w-full bg-white border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">All Locations</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Al Rawda">Al Rawda</option>
                      <option value="Dubai Marina">Dubai Marina</option>
                      <option value="Palm Jumeirah">Palm Jumeirah</option>
                      <option value="Arabian Ranches">Arabian Ranches</option>
                      <option value="Business Bay">Business Bay</option>
                    </select>
                    <div className="absolute left-3 top-3 text-gray-400">
                      📍
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={filters.propertyType || ""}
                    onChange={onFilterChange}
                    className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any Type</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Studio">Studio</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {filters.purpose === "rent"
                      ? "Monthly Rent (AED)"
                      : "Price Range (AED)"}
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice || ""}
                      onChange={onFilterChange}
                      placeholder="Min"
                      className="w-1/2 bg-white border border-gray-300 rounded-lg py-3 px-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice || ""}
                      onChange={onFilterChange}
                      placeholder="Max"
                      className="w-1/2 bg-white border border-gray-300 rounded-lg py-3 px-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <select
                    name="bedrooms"
                    value={filters.bedrooms || ""}
                    onChange={onFilterChange}
                    className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any Bedrooms</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="md:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Buy
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Rent
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
