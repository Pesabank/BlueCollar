import React from 'react';
import { Wallet, Building2, ArrowRight, Clock, CheckCircle2, Users } from 'lucide-react';

const HowItWorks = () => {
  const cashAdvanceSteps = [
    {
      title: "Contact Our Team",
      description: "Get in touch with our team to discuss your business needs and requirements for the Cash Advance program."
    },
    {
      title: "Account Setup",
      description: "We'll create a dedicated account for your business and configure the system according to your needs."
    },
    {
      title: "Employee Information",
      description: "Provide your employees' payroll information securely through our platform."
    },
    {
      title: "24-Hour Activation",
      description: "Within 24 hours, your employees will gain access to instant cash advances against their earned wages."
    }
  ];

  const hrPayrollSteps = [
    {
      title: "Free Sign Up",
      description: "Create your account instantly - no credit card required. Just basic business information needed."
    },
    {
      title: "Add Employees",
      description: "Import or manually add your employee information to the system."
    },
    {
      title: "14-Day Trial",
      description: "Explore all features of our HR & Payroll system completely free for 14 days."
    },
    {
      title: "Flexible Subscription",
      description: "After the trial, continue with our affordable per-user pricing of KSh 375 or USD 3 per month."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">How It Works</h1>
          <p className="mt-4 text-xl text-gray-600">
            Simple steps to get started with BlueCollar's services
          </p>
        </div>

        {/* Cash Advance Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-8">
            <Wallet className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Getting Started with Cash Advances
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {cashAdvanceSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Talk to Our Team <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Business team meeting"
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
            Self-Onboarding for HR & Payroll
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="HR professional at work"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {hrPayrollSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Sign Up Now <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose BlueCollar?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Quick Setup</h3>
              <p className="mt-2 text-gray-600">Get started in minutes with our streamlined onboarding process</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Employee-Centric</h3>
              <p className="mt-2 text-gray-600">Designed to improve employee financial wellness and satisfaction</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Risk-Free Trial</h3>
              <p className="mt-2 text-gray-600">Try our HR & Payroll system free for 14 days with no commitments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;