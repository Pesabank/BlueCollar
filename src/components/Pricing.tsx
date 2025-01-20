import React from 'react';
import { DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const yearlyDiscount = 20;
  const monthlyPrice = 3;
  const yearlyPrice = monthlyPrice * 12 * (1 - yearlyDiscount / 100);
  const monthlyPriceKsh = 375;
  const yearlyPriceKsh = monthlyPriceKsh * 12 * (1 - yearlyDiscount / 100);

  const features = [
    "Full HR Management System",
    "Complete Payroll Processing",
    "Employee Self-Service Portal",
    "Leave Management",
    "Performance Reviews",
    "Document Management",
    "Custom Reports",
    "24/7 Support"
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <DollarSign className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include our full suite of HR and Payroll features.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* HR & Payroll Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">HR & Payroll</h2>
            <p className="mt-4 text-gray-600">Everything you need to manage your workforce</p>
            
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">${monthlyPrice}</span>
                <span className="ml-2 text-gray-600">/ employee / month</span>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                or KSh {monthlyPriceKsh} / employee / month
              </div>
              <div className="mt-2 inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                Save {yearlyDiscount}% with yearly billing
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Yearly: ${yearlyPrice.toFixed(2)} or KSh {yearlyPriceKsh.toFixed(2)} / employee / year
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Cash Advances Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">Cash Advances</h2>
            <p className="mt-4 text-gray-600">Empower your employees with instant access to earned wages</p>
            
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">Custom Pricing</span>
              </div>
              <p className="mt-2 text-gray-600">
                Contact our team to discuss a tailored solution for your business
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">No Interest Charges</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">Instant Processing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">Flexible Repayment Options</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">Employee Financial Wellness Tools</span>
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Register to View Pricing
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Need a custom solution?</h3>
          <p className="mt-2 text-gray-600">
            Contact our team to discuss your specific requirements and get a tailored quote.
          </p>
          <button className="mt-6 inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Talk to Sales <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;