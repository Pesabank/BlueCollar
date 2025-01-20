import React from 'react';
import { Scroll } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <Scroll className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-gray-600">
            Effective Date: 1st January 2025
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">
            These Terms and Conditions ("Terms") govern the use of the BlueCollar platform ("Platform") and the services provided by BlueCollar Technologies Ltd ("BlueCollar," "we," "us," or "our"). By accessing or using the Platform, you ("User," "Employer," or "Employee") agree to comply with and be bound by these Terms.
          </p>
          <p className="text-gray-600 mb-8">
            Please read these Terms carefully. If you do not agree to these Terms, do not use the Platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. General Information</h2>
          <p className="text-gray-600 mb-8">
            BlueCollar provides a digital financial platform offering wage advances, financial solutions for businesses and employees, and a comprehensive HR and Payroll system. By using our Platform, you consent to the collection and use of certain personal and employment information, as detailed in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Eligibility</h2>
          <p className="text-gray-600 mb-8">
            To use our Platform, Users must be of legal age (18 years or older) and capable of forming binding legal agreements. Employees must be employed by a registered employer on the Platform, and Employers must be registered to access HR and Payroll features.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Services</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li className="mb-4"><strong>Wage Advances:</strong> BlueCollar offers employees the ability to access immediate advances on wages. Advances are processed promptly, with a one-time withholding/withdrawal fee applied.</li>
            <li><strong>HR and Payroll Software:</strong> Employers can access affordable HR and Payroll software to manage employee data, payroll, and other business functions. The software is free for employers participating in the wage advance network, subject to the terms of the agreement with the employer.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Employee Authorization for Wage Garnishment</h2>
          <p className="text-gray-600 mb-4">
            By accepting a wage advance, Employees grant BlueCollar authorization to garnish their wages directly from their employer for the repayment of the advance. This authorization is granted for the duration of the employee's participation in the advance program and is valid for all future wage advances until revoked in writing. Employees further authorize their employer to release payroll and other employment data necessary to process the advance and repayment.
          </p>
          <p className="text-gray-600 mb-8">
            Employers are required to cooperate with BlueCollar in facilitating wage garnishments and are liable to remit funds to BlueCollar as instructed by the Platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Employer Data and Privacy</h2>
          <p className="text-gray-600 mb-4">
            Employers must provide accurate and up-to-date information about their business, employees, and payroll. By registering on the Platform, Employers consent to BlueCollar's use of their company and employee data to facilitate wage advances and HR/Payroll services. This data may include, but is not limited to, employee names, salaries, employment periods, job titles, and contact information.
          </p>
          <p className="text-gray-600 mb-8">
            BlueCollar will take commercially reasonable steps to safeguard the privacy and security of the information collected. However, Users acknowledge and agree that BlueCollar is not liable for any breaches of data, whether through unauthorized access, misuse, or other causes. We will implement industry-standard security protocols to minimize the risk of data breaches.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Dispute Resolution</h2>
          <p className="text-gray-600 mb-8">
            In the event of a dispute between Users (whether Employee or Employer), BlueCollar will work to resolve the dispute as quickly and fairly as possible. Disputes must first be brought to BlueCollar's customer service for resolution. If the dispute cannot be resolved informally, Users agree to submit to arbitration or mediation in a manner prescribed by BlueCollar's dispute resolution procedures.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Fees</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li className="mb-4"><strong>Wage Advance Fees:</strong> Employees will incur a one-time withholding/withdrawal fee when accessing a wage advance. No interest is charged on advances.</li>
            <li><strong>HR/Payroll Software Fees:</strong> Employers who join the wage advance network may use the HR and Payroll software free of charge during a specified trial period. After the trial, the Employer will be billed according to the agreed-upon pricing model. Employers not in the advance network will be charged for the software at the rates outlined on the Platform.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Use of the Platform</h2>
          <p className="text-gray-600 mb-4">By using the Platform, Users agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Provide accurate and truthful information during registration and while using the Platform.</li>
            <li>Use the Platform solely for lawful purposes and not to engage in any fraudulent activity or misrepresentation.</li>
            <li>Maintain the confidentiality of account credentials and promptly notify BlueCollar of any unauthorized use of your account.</li>
            <li>Not use the Platform to transmit harmful or malicious content, such as viruses or malware.</li>
          </ul>
          <p className="text-gray-600 mb-8">
            BlueCollar reserves the right to suspend or terminate access to the Platform if any User violates these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            BlueCollar will not be liable for any damages, losses, or expenses incurred by Users, including but not limited to direct, indirect, incidental, or consequential damages resulting from:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Unauthorized access to or use of the Platform.</li>
            <li>Data breaches, loss of data, or security compromises.</li>
            <li>The inability to use the Platform for any reason, including technical issues or service interruptions.</li>
            <li>Disputes between Employers and Employees or any third-party claims related to wage advances, payroll, or employment matters.</li>
          </ul>
          <p className="text-gray-600 mb-8">
            To the maximum extent permitted by law, BlueCollar's liability to Users will be limited to the amount paid by the User for the specific service giving rise to the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Termination</h2>
          <p className="text-gray-600 mb-8">
            BlueCollar reserves the right to suspend or terminate a User's access to the Platform at any time, with or without cause, and with or without prior notice, if we believe that the User has violated these Terms. Upon termination, all pending obligations (such as wage advance repayments) will remain enforceable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Amendments</h2>
          <p className="text-gray-600 mb-8">
            BlueCollar reserves the right to modify, update, or change these Terms at any time. All changes will be posted on the Platform, and the new Terms will become effective upon posting. Users are encouraged to review the Terms regularly to stay informed of any updates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Governing Law</h2>
          <p className="text-gray-600 mb-8">
            These Terms will be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved in the appropriate courts of Kenya.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. Indemnification</h2>
          <p className="text-gray-600 mb-8">
            Users agree to indemnify and hold harmless BlueCollar, its affiliates, employees, agents, and partners from any claims, losses, or damages, including legal fees, arising out of or related to their use of the Platform or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">14. Severability</h2>
          <p className="text-gray-600 mb-8">
            If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">15. Entire Agreement</h2>
          <p className="text-gray-600 mb-8">
            These Terms, along with the Privacy Policy and any other policies or agreements referenced herein, constitute the entire agreement between BlueCollar and Users with respect to the use of the Platform. Any prior or contemporaneous agreements, whether written or oral, are superseded by this agreement.
          </p>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">
              By using the BlueCollar platform, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you have any questions or concerns, please contact us at{' '}
              <a href="mailto:support@bluecollar.com" className="text-blue-600 hover:text-blue-800">
                support@bluecollar.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;