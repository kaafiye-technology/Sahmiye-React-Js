import React from 'react';

const CallInfoModal = ({ isOpen, onClose, property }) => {
  if (!isOpen) return null;

  const agentName = "Mohamed Nosier";
  const brokerage = "Kommanda Real Estate Brokerage";
  const phoneNumber = "+971558427185";
  const refId = `mona${property?.id || '105766'}-nf3EoL`;

  const handleCopyRef = () => {
    navigator.clipboard.writeText(refId);
    alert('Reference number copied!');
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Call Agent</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Agent Info */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt={agentName}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg font-bold text-gray-900">{agentName}</h4>
            <p className="text-gray-600 text-sm">{brokerage}</p>
          </div>

          {/* Reference Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2">
              Don't forget to mention the property reference
            </p>
            <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-yellow-300">
              <span className="text-sm font-mono text-gray-800">{refId}</span>
              <button 
                onClick={handleCopyRef}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Phone Number */}
          <a 
            href={`tel:${phoneNumber}`}
            className="block w-full bg-green-600 text-white py-4 px-4 rounded-lg font-medium text-center hover:bg-green-700 transition-colors text-lg mb-2"
          >
            {phoneNumber}
          </a>
          <p className="text-xs text-gray-500 text-center">
            Click to call directly from your phone
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallInfoModal;