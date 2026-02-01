import React, { useState } from 'react';

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 10;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer flex flex-col md:flex-row">
      
      {/* Image Section - Left */}
      <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-10">
          <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        {/* Previous Image Button */}
        <button 
          onClick={prevImage}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next Image Button */}
        <button 
          onClick={nextImage}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Slider Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
          {Array.from({ length: totalImages }).map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* Image Count */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
          {currentImageIndex + 1}/{totalImages}
        </div>
      </div>

      {/* Content Section - Right */}
      <div className="md:w-3/5 p-5 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          {/* Price & Type */}
          <div className="mb-3">
            <p className="text-2xl font-bold text-gray-900">
              AED {property.price.toLocaleString()}
            </p>
            <p className="text-lg text-gray-700 font-medium">{property.type || "Villa"}</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <span className="text-lg mr-2">🛏</span>
              <span className="font-medium">{property.beds} beds</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-2">🛁</span>
              <span className="font-medium">{property.baths} baths</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-2">📐</span>
              <span className="font-medium">{property.size.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">
            {property.id === 1 ? "Spacious area, newly finished, 100% freehold own..." : 
             property.id === 2 ? "Al Rawda1 Ajman - Premium villa in prime location" :
             property.description || "Premium property in excellent condition with modern amenities"}
          </p>

          {/* Location */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <span className="text-lg mr-2">📍</span>
            <span>{property.location}</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button className="flex-1 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors p-2">
            <span className="text-xl mr-2">📧</span>
            <span className="text-sm font-medium">Email</span>
          </button>
          <button className="flex-1 flex items-center justify-center text-gray-700 hover:text-green-600 transition-colors p-2">
            <span className="text-xl mr-2">📞</span>
            <span className="text-sm font-medium">Call</span>
          </button>
          <button className="flex-1 flex items-center justify-center text-gray-700 hover:text-green-500 transition-colors p-2">
            <span className="text-xl mr-2">📱</span>
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;