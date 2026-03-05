import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";
import { getApiKey } from "../../services/api";
import { API_URL } from "../../constants";
import Footer from "../components/Footer";

const Home = () => {
  // Filter states
  const [filters, setFilters] = useState({
    purpose: "buy",
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const formatProperties = (data) => {
    return data.map((item) => {
      const images = item.Image
        ? item.Image.split(",").map((img) => API_URL + "/" + img.trim())
        : [];

      return {
        id: item.ID,
        title: item.Title,
        price: Number(item.Price),
        location: item.Location,
        image: images.length ? images[0] : null,
        allImages: images,
        beds: item.Beds,
        baths: item.Baths,
        size: item.Size,
        type: item.Type,
        description: item.Description,
        currency: item.Currency,
      };
    });
  };
  // Add sort state
  const [sortBy, setSortBy] = useState("recommended");
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getApiKey("getlink-apikey/properties-list");
        const formated = formatProperties(data.report);
        console.log("formated:", formated);

        setFilteredProperties(formated);
      } catch (err) {
        console.log("err:", err);
      }
    }

    fetchProperties();
  }, []);
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);

    // Apply sorting to current filtered properties
    let sorted = [...filteredProperties];

    switch (value) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "most-popular":
        sorted.sort((a, b) => b.beds - a.beds);
        break;
      default:
        // recommended - keep original order
        sorted = [...filteredProperties];
        break;
    }

    setFilteredProperties(sorted);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...properties];

    // Filter by purpose (buy/rent)
    if (filters.purpose === "rent") {
      filtered = filtered.filter((property) => property.price < 2000000);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(
        (property) => property.type === filters.propertyType
      );
    }

    // Filter by min price
    if (filters.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= parseInt(filters.minPrice)
      );
    }

    // Filter by max price
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= parseInt(filters.maxPrice)
      );
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      if (filters.bedrooms === "4+") {
        filtered = filtered.filter((property) => property.beds >= 4);
      } else {
        filtered = filtered.filter(
          (property) => property.beds === parseInt(filters.bedrooms)
        );
      }
    }

    // Apply current sort after filtering
    let sorted = [...filtered];

    switch (sortBy) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "most-popular":
        sorted.sort((a, b) => b.beds - a.beds);
        break;
      default:
        // recommended - keep as is
        break;
    }

    setFilteredProperties(sorted);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      purpose: "buy",
      location: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
    });
    setSortBy("recommended");
    setFilteredProperties(properties);
  };

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onReset={resetFilters}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Properties for {filters.purpose === "rent" ? "Rent" : "Sale"}
          </h1>
          <p className="text-gray-600">
            Discover {filteredProperties.length} premium properties available
            for {filters.purpose === "rent" ? "rent" : "sale"}
          </p>
        </div>

        {/* Results Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-gray-700">
                Showing{" "}
                <span className="font-bold">{filteredProperties.length}</span>{" "}
                of {properties.length} properties
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {filters.purpose &&
                  `Purpose: ${filters.purpose === "rent" ? "Rent" : "Buy"} • `}
                {filters.location && `Location: ${filters.location} • `}
                {filters.propertyType && `Type: ${filters.propertyType} • `}
                {filters.bedrooms && `Bedrooms: ${filters.bedrooms} • `}
                {(filters.minPrice || filters.maxPrice) &&
                  `Price: ${filters.minPrice || "0"} - ${
                    filters.maxPrice || "Any"
                  }`}
                {!filters.location &&
                  !filters.propertyType &&
                  !filters.bedrooms &&
                  !filters.minPrice &&
                  !filters.maxPrice &&
                  filters.purpose === "buy" &&
                  "All Properties"}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Active Filters Count */}
              {Object.values(filters).some(
                (value) => value && value !== "buy"
              ) && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear All
                </button>
              )}

              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Sort Dropdown - NOW WORKING */}
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recommended">Sort by: Recommended</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="most-popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any properties matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Properties List - Single Column */}
        <div className="space-y-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
