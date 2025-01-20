import React from 'react';
import { CreditCard, Building2, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Instant Wage Advances",
      description: "Access wages ahead of payday with no hidden interest charges, only a transparent withdrawal fee."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "HR & Payroll System",
      description: "Comprehensive solution for managing employee payroll and HR operations at an affordable rate."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Fast Onboarding",
      description: "Get started in minutes with our simple and efficient onboarding process."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Platform",
      description: "Bank-grade security protocols to protect your personal and financial data."
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features for Employers & Employees
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to manage your workforce and provide financial support.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6 bg-blue-50 rounded-lg p-3">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;