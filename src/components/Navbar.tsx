import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onPricingClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onPricingClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onHomeClick}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              BlueCollar
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <button onClick={onPricingClick} className="text-gray-700 hover:text-blue-600">Pricing</button>
            <a href="#why-choose" className="text-gray-700 hover:text-blue-600">Why Choose Us</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
            <button onClick={onPricingClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</button>
            <a href="#why-choose" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Why Choose Us</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;