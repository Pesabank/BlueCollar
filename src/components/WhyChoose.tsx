import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    "No hidden interest charges on wage advances",
    "Comprehensive HR and Payroll system",
    "Free trial for employers in the advance network",
    "Bank-grade security protocols",
    "24/7 customer support",
    "Customizable solutions for businesses"
  ];

  return (
    <div id="why-choose" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose BlueCollar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing the best digital banking solutions for African businesses and their employees.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;