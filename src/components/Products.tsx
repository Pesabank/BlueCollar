import React from 'react';
import { Wallet, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const cashAdvanceFeatures = [
    "Instant access to earned wages",
    "No interest charges - only a small withdrawal fee",
    "Automated repayment through payroll",
    "Available 24/7 through mobile app",
    "Financial wellness tools and education",
    "Transparent fee structure"
  ];

  const hrPayrollFeatures = [
    "Complete employee management system",
    "Automated payroll processing",
    "Leave management",
    "Performance tracking",
    "Document management",
    "Custom reporting",
    "Employee self-service portal",
    "Time and attendance tracking"
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for businesses and employees
          </p>
        </div>

        {/* Cash Advance Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-8">
            <Wallet className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cash Advance Program
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Cash Advance Program empowers employees with instant access to their earned wages before payday. This innovative solution helps reduce financial stress and promotes better financial wellness among your workforce.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Unlike traditional loans, our program charges no interest - just a small, transparent withdrawal fee. The advance is automatically repaid through payroll deduction, making it hassle-free for both employers and employees.
              </p>
              <div className="space-y-4">
                {cashAdvanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Financial services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* HR & Payroll Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            HR & Payroll Software
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="HR Management"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive HR & Payroll software streamlines your workforce management with powerful, easy-to-use tools. Designed for businesses of all sizes, our platform automates critical HR processes and ensures accurate, timely payroll processing.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Starting at just $3 or KSh 375 per employee per month, with a 20% discount for annual subscriptions, our solution offers enterprise-grade features at an affordable price point.
              </p>
              <div className="space-y-4">
                {hrPayrollFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  View Pricing <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;