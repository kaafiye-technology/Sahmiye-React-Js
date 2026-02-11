import React, { useState } from 'react';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties'; 

const Home = () => {
  // Filter states
  const [filters, setFilters] = useState({
    purpose: 'buy',
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  // Add sort state
  const [sortBy, setSortBy] = useState('recommended');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    // Apply sorting to current filtered properties
    let sorted = [...filteredProperties];
    
    switch(value) {
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'most-popular':
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
    if (filters.purpose === 'rent') {
      filtered = filtered.filter(property => property.price < 2000000);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(property => 
        property.type === filters.propertyType
      );
    }

    // Filter by min price
    if (filters.minPrice) {
      filtered = filtered.filter(property => 
        property.price >= parseInt(filters.minPrice)
      );
    }

    // Filter by max price
    if (filters.maxPrice) {
      filtered = filtered.filter(property => 
        property.price <= parseInt(filters.maxPrice)
      );
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      if (filters.bedrooms === '4+') {
        filtered = filtered.filter(property => property.beds >= 4);
      } else {
        filtered = filtered.filter(property => 
          property.beds === parseInt(filters.bedrooms)
        );
      }
    }

    // Apply current sort after filtering
    let sorted = [...filtered];
    
    switch(sortBy) {
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'most-popular':
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
      purpose: 'buy',
      location: '',
      propertyType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    });
    setSortBy('recommended');
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
            Properties for {filters.purpose === 'rent' ? 'Rent' : 'Sale'} in UAE
          </h1>
          <p className="text-gray-600">
            Discover {filteredProperties.length} premium properties available for {filters.purpose === 'rent' ? 'rent' : 'sale'}
          </p>
        </div>

        {/* Results Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-gray-700">
                Showing <span className="font-bold">{filteredProperties.length}</span> of {properties.length} properties
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {filters.purpose && `Purpose: ${filters.purpose === 'rent' ? 'Rent' : 'Buy'} • `}
                {filters.location && `Location: ${filters.location} • `}
                {filters.propertyType && `Type: ${filters.propertyType} • `}
                {filters.bedrooms && `Bedrooms: ${filters.bedrooms} • `}
                {(filters.minPrice || filters.maxPrice) && `Price: ${filters.minPrice || '0'} - ${filters.maxPrice || 'Any'}`}
                {!filters.location && !filters.propertyType && !filters.bedrooms && !filters.minPrice && !filters.maxPrice && 
                  filters.purpose === 'buy' && 'All Properties'}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Active Filters Count */}
              {Object.values(filters).some(value => value && value !== 'buy') && (
                <button 
                  onClick={resetFilters}
                  className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear All
                </button>
              )}
              
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Properties Found</h3>
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
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </main>


      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            
            {/* About Us */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                SAHMIYE<span className="text-red-400">REAL</span>ESTATE
              </h3>
              <p className="text-gray-400 mb-4">
                SAHMIYE REAL ESTATE is a leading brokerage firm specializing in residential and commercial properties across Somalia. With a commitment to integrity, professionalism, and client satisfaction, we strive to provide exceptional real estate services tailored to meet the unique needs of each client.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                  <span><strong>Residential Sales:</strong> Whether you're buying or selling a home, our experienced agents are here to guide you through the process with expertise and personalized attention.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Commercial Real Estate:</strong> From office spaces to retail properties, we assist investors, landlords, and tenants in achieving their commercial real estate goals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Investment Consulting:</strong> Our team provides strategic investment advice, helping clients make informed decisions to grow their real estate portfolios.</span>
                </li>
              </ul>
            </div>
            
            {/* Why Choose Us */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Why Choose Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Local Expertise:</strong> With deep roots in the community, we have extensive knowledge of local real estate market trends and neighborhoods.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Client-Centric Approach:</strong> We prioritize our clients' interests and work tirelessly to achieve their real estate objectives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Professionalism:</strong> Our agents are highly trained and uphold the highest standards of professionalism and ethics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span><strong>Innovative Technology:</strong> We leverage cutting-edge technology to streamline processes, ensuring efficiency and transparency.</span>
                </li>
              </ul>
            </div>
            
            {/* Our Mission & Contact Us */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Our Mission</h4>
              <p className="text-gray-400 mb-6">
                To be the preferred choice for real estate solutions in Somalia, providing unparalleled service and fostering long-term relationships built on trust, integrity, and success.
              </p>
              
              <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+252 619 874 953</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Somoli building, Taleh, Mogadishu, Somalia</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@sahmiyerealestate.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 SAHMIYE REAL ESTATE. All rights reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;