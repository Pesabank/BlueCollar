import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does BlueCollar's wage advance work?",
      answer: "Employees can request an advance on their wages through the BlueCollar platform. The advance is processed instantly and is deducted from the employee's next paycheck. No interest is charged, only a one-time withholding/withdrawal fee applies."
    },
    {
      question: "Is there any interest charged on the wage advance?",
      answer: "No, we do not charge any interest on wage advances. We only apply a one-time withholding/withdrawal fee."
    },
    {
      question: "How long does it take to onboard on BlueCollar's platform?",
      answer: "Onboarding is quick and easy! It typically takes only a few minutes to complete the registration process and get started on our platform."
    },
    {
      question: "Is BlueCollar's HR and Payroll software expensive for employers?",
      answer: "No, our HR and Payroll software is affordable and designed to suit businesses of all sizes. Employers who join the wage advance network receive free access to the software for a trial period."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about BlueCollar's services.
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <dt className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;