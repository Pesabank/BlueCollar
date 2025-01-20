import React from 'react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
  onPricingClick: () => void;
  onProductsClick: () => void;
  onHowItWorksClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onTermsClick, 
  onPrivacyClick, 
  onPricingClick, 
  onProductsClick,
  onHowItWorksClick 
}) => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">BlueCollar</span>
            <p className="mt-4 text-gray-400">
              Empowering Businesses and Employees with innovative digital financial solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <button onClick={onProductsClick} className="text-base text-gray-300 hover:text-white">
                  Products
                </button>
              </li>
              <li>
                <button onClick={onHowItWorksClick} className="text-base text-gray-300 hover:text-white">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={onPricingClick} className="text-base text-gray-300 hover:text-white">
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <button onClick={onTermsClick} className="text-base text-gray-300 hover:text-white">
                  Terms
                </button>
              </li>
              <li>
                <button onClick={onPrivacyClick} className="text-base text-gray-300 hover:text-white">
                  Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} BlueCollar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;