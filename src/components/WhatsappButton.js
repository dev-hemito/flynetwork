import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with your WhatsApp number (include country code)
  const phoneNumber = "+447407702612";
  
  // Optional: Add your pre-filled message
  const message = "Hello! I want to know more about FLY.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute -top-2 -left-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </span>
    </button>
  );
};

export default WhatsAppButton;