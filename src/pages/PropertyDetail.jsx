import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { properties } from "../data/properties";
import EmailInquiryModal from "../components/EmailInquiryModal";
import CallInfoModal from "../components/CallInfoModal";
import { whatsappContact } from "../../constants";

const PropertyDetail = () => {
  const location = useLocation();
  const property = location.state;
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Find the property by ID

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Property Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const totalImages = property?.allImages?.length || 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleEmailClick = () => {
    setIsEmailModalOpen(true);
  };

  const handleCallClick = () => {
    setIsCallModalOpen(true);
  };

  // const handleWhatsAppClick = () => {
  //   const phoneNumber = "971544550186";
  //   const message = `Hello! I'm interested in this property advertised on SAHMIYE REAL ESTATE.%0A%0AProperty: ${
  //     property.title
  //   }%0APrice: ${
  //     property?.currency
  //   } ${property.price.toLocaleString()}%0ALocation: ${
  //     property.location
  //   }%0ARef ID: mona${
  //     property.id
  //   }-nf3EoL%0A%0AKindly do not edit this message to ensure your inquiry is sent to the agent.`;

  //   window.open(
  //     `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`,
  //     "_blank"
  //   );
  // };

  const generatePropertyImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = property.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, 350);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 350, canvas.width, 250);

      ctx.fillStyle = "#000";
      ctx.font = "bold 28px Arial";
      ctx.fillText(property.title, 20, 390);

      ctx.font = "20px Arial";
      ctx.fillText(`📍 ${property.location}`, 20, 430);
      ctx.fillText(`🛏 ${property.beds} Bedrooms`, 20, 460);
      ctx.fillText(`🛁 ${property.baths} Bathrooms`, 20, 490);
      ctx.fillText(
        `💰 ${property.currency} ${property.price.toLocaleString()}`,
        20,
        520
      );

      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = "property.png";
      link.href = imageUrl;
      link.click();
    };
  };
  const handleWhatsAppClick = () => {
    const phone = whatsappContact.replaceAll(" ", "");

    const message = `
    Hello Sahmiye Real State

  🏡 ${property.title}
  
  📍 Location: ${property.location}
  🛏 ${property.beds} Bedrooms
  🛁 ${property.baths} Bathrooms
  💰 Price: ${property.currency} ${property.price}
  
  View Property Details.
  `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium">Back To Search</span>
            </button>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </div>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full ${
                  isFavorite
                    ? "bg-red-50 text-red-500"
                    : "bg-gray-100 text-gray-600 hover:text-red-500"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill={isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {property.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
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
            <span>{property.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images Only */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6">
              <div className="relative h-96">
                <img
                  src={property?.allImages?.[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1}/{totalImages}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex space-x-2 overflow-x-auto">
                {property?.allImages?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Price Card & Agent Card Together */}
          <div className="lg:col-span-1 space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    Location: {property.location}
                  </li>

                  <li className="flex items-center">
                    <span className="mr-2">🛏</span>
                    {property.beds} Bedrooms
                  </li>

                  <li className="flex items-center">
                    <span className="mr-2">🛁</span>
                    {property.baths} Bathrooms
                  </li>

                  <li className="flex items-center">
                    <span className="mr-2">🚗</span>
                    Parking Available
                  </li>

                  <li className="flex items-center">
                    <span className="mr-2">💰</span>
                    Price: {property.currency} {property.price.toLocaleString()}
                  </li>

                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    Contact: Sahmiye Real Estate
                  </li>

                  <li
                    className="flex items-center cursor-pointer hover:text-green-600 transition"
                    onClick={handleWhatsAppClick}
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.52 0 .22 5.3.22 11.83c0 2.08.54 4.1 1.57 5.88L0 24l6.48-1.69a11.79 11.79 0 005.57 1.42h.01c6.53 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.13-3.37-8.42zm-8.47 18.2c-1.78 0-3.53-.48-5.05-1.38l-.36-.21-3.85 1 1.03-3.75-.24-.38a9.8 9.8 0 01-1.51-5.23c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.03 6.96 2.9a9.79 9.79 0 012.87 6.93c0 5.42-4.41 9.83-9.82 9.83zm5.39-7.37c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.21-.62.07-.29-.15-1.21-.44-2.31-1.41-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.02 2.81 1.17 3 .14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34z" />
                    </svg>
                    WhatsApp: {whatsappContact}
                  </li>
                </ul>
                {/* <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${property?.currency} {property.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">Total Price</span>
                </div> */}

                {/* <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Est. Payment</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${property?.currency} {estimatedPayment.toLocaleString()}/mo
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Based on 5% down payment
                  </p>
                </div> */}

                {/* <div className="space-y-3">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Make an Offer
                  </button>
                  <button className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Schedule a Tour
                  </button>
                </div> */}
              </div>
            </div>

            {/* Agent Card with Contact Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Agent</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All Properties
                </button>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">
                    Farhad Mustafayev
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Senior Property Consultant
                  </p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-sm">4.9</span>
                    <span className="text-gray-500 text-sm ml-1">
                      (124 reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center justify-center py-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Email</span>
                </button>
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center py-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Call</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-xs font-medium">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details Grid - Your existing code remains */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ... Property Features and Amenities ... */}
        </div>

        {/* Property Description */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {property.description ||
              "Premium property in excellent condition with modern amenities. This stunning property features spacious living areas, high-quality finishes, and is located in a prime location with easy access to major attractions, shopping centers, and schools."}
          </p>
        </div>
      </main>

      {/* Modals */}
      <EmailInquiryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        property={property}
      />

      <CallInfoModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        property={property}
      />
    </div>
  );
};

export default PropertyDetail;
