import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600">
            Effective Date: 1st January 2025
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">
            This Privacy Policy ("Policy") describes how BlueCollar Technologies Ltd ("BlueCollar," "we," "us," or "our") collects, uses, and protects your personal and employment information when you access or use our Digital Financial platform ("Platform"). By using the Platform, you consent to the collection, use, and sharing of your information in accordance with this Policy.
          </p>
          <p className="text-gray-600 mb-8">
            Please read this Policy carefully to understand how we handle your data. If you do not agree with this Policy, please do not use the Platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">To provide you with our services, we collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li><strong>Personal Information:</strong> This includes basic identification details such as your name, email address, phone number, and date of birth.</li>
            <li><strong>Employment Information:</strong> For employees, we collect job-related data including your employment status, salary, job title, employment duration, work location, and other payroll details. This data is essential for providing wage advances and processing HR and payroll functions.</li>
            <li><strong>Payment Information:</strong> This includes payment details for processing wage advances, including the amount, payment methods, and any withdrawal fees.</li>
            <li><strong>Usage Information:</strong> We collect information about your interactions with the Platform, such as pages visited, time spent on the Platform, and other usage statistics to improve our services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li><strong>Providing Services:</strong> To process wage advances, manage payroll, and offer HR software solutions.</li>
            <li><strong>Improving Our Platform:</strong> To analyze usage patterns and improve the functionality and performance of the Platform.</li>
            <li><strong>Communication:</strong> To send important notices, such as updates, offers, or other information related to your use of the Platform.</li>
            <li><strong>Security and Fraud Prevention:</strong> To protect the integrity of the Platform and ensure compliance with legal and regulatory requirements.</li>
            <li><strong>Customer Support:</strong> To address inquiries, complaints, or issues related to your account or services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. How We Share Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li><strong>With Employers:</strong> For employees who opt to use the wage advance service, we share necessary employment and payroll information with the employer to facilitate wage garnishments.</li>
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors or service providers that assist in delivering the services on our Platform, such as payment processors and IT support providers. These parties are obligated to protect your information in accordance with applicable privacy laws.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid legal requests, such as subpoenas or court orders.</li>
            <li><strong>With Your Consent:</strong> We may share your information with other parties when you have provided explicit consent.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-8">
            We take reasonable steps to protect the security of your personal and employment information, including the use of encryption, firewalls, and secure server technologies. However, while we strive to protect your information, no security system is impenetrable, and we cannot guarantee the absolute security of your data.
          </p>
          <p className="text-gray-600 mb-8">
            By using the Platform, you acknowledge and agree that BlueCollar is not liable for any unauthorized access, data breaches, or other security incidents beyond our reasonable control.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Data Retention</h2>
          <p className="text-gray-600 mb-8">
            We retain your personal and employment information for as long as necessary to fulfill the purposes outlined in this Policy, including complying with legal, regulatory, or contractual obligations. Once this information is no longer needed, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You may request that we correct any inaccuracies in your personal information.</li>
            <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to any legal obligations or the necessity of retaining the information for the provision of services.</li>
            <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent to the processing of your personal data at any time, although this may impact your ability to use certain features of the Platform.</li>
          </ul>
          <p className="text-gray-600 mb-8">
            To exercise these rights, please contact us using the contact information below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-8">
            We use cookies and similar tracking technologies to enhance your experience on the Platform, personalize content, and analyze usage patterns. Cookies are small data files stored on your device that help us recognize your preferences and track your usage of the Platform.
          </p>
          <p className="text-gray-600 mb-8">
            You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of the Platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600 mb-8">
            Our Platform is not intended for use by children under the age of 18. We do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child under 18, we will take steps to delete such information as quickly as possible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. International Data Transfers</h2>
          <p className="text-gray-600 mb-8">
            BlueCollar operates internationally, and as a result, your personal and employment data may be transferred to and stored in countries outside your own. By using the Platform, you consent to the transfer of your information to these locations, which may not have data protection laws as comprehensive as those in your jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-8">
            We may update or change this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will post the updated Policy on our Platform and indicate the effective date of the update. Please review this Policy regularly to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Contact Us</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights regarding your personal information, please contact us at:
          </p>
          <div className="mb-8">
            <p className="text-gray-600"><strong>BlueCollar Technologies Ltd</strong></p>
            <p className="text-gray-600">Email: <a href="mailto:support@bluecollar.com" className="text-blue-600 hover:text-blue-800">support@bluecollar.com</a></p>
          </div>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">
              By using the Platform, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;