import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This Cookie Policy explains how Aentic AI ("we", "us", or "our") uses cookies and similar technologies on
            our website aentic.ai (the "Website"). This policy provides you with clear and comprehensive information
            about the cookies we use and the purposes for which we use them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our
            Website. They allow us to recognize your device and remember certain information about your visit, such as
            your preferences and actions on our Website. Cookies are widely used to make websites work more efficiently
            and provide valuable information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Essential/Necessary Cookies</h3>
            <p>
              These cookies are essential for the Website to function properly. They enable core functionality such as
              security, network management, and account access. You cannot opt out of these cookies.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Preference Cookies</h3>
            <p>
              These cookies enable the Website to remember information that changes the way the Website behaves or
              looks, such as your preferred language or the region you are in.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Analytics/Statistics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our Website by collecting and reporting
              information anonymously. They help us improve the Website's performance and user experience.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites. The intention is to display ads that are
              relevant and engaging for the individual user.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Specific Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Cookie Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Purpose
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Essential</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    cookieConsent
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Stores your cookie consent preferences
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">1 year</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Essential</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">XSRF-TOKEN</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Security token for form submissions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Session</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Analytics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">_ga</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">2 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Analytics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">_gid</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">24 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Marketing</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">_fbp</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Used by Facebook to deliver advertisements
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">3 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="mb-4">
            Some cookies are placed by third parties on our Website. These third parties may include:
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Advertising networks</li>
            <li>Social media platforms</li>
            <li>Payment processors</li>
          </ul>
          <p>
            We do not control these third-party cookies and suggest you check the respective privacy policies of these
            third parties for more information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Consent</h2>
          <p className="mb-4">
            When you first visit our Website, you will be shown a cookie banner that allows you to accept or decline
            non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link
            at the bottom of our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Cookie Choices</h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies (except for essential cookies which are
            required for the Website's basic functionality). You can exercise your cookie rights by:
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Using our cookie consent tool when you first visit the Website</li>
            <li>Changing your preferences in your browser settings</li>
            <li>Using our "Cookie Settings" feature available on the Website</li>
          </ul>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and
              from version to version. However, you can typically set your cookie preferences in the "Settings,"
              "Preferences," or "Privacy" menu of your browser.
            </p>
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to use all the features of
              our Website.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection and Privacy</h2>
          <p className="mb-4">
            For more information about how we process your personal data, please refer to our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
          <p className="mb-4">
            Our Website is accessible globally. Your data may be processed and stored in countries outside your country
            of residence, including countries that may have different data protection standards. We implement
            appropriate safeguards to protect your information when it is transferred internationally, including
            entering into Standard Contractual Clauses or relying on other legally approved transfer mechanisms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regional-Specific Information</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">European Economic Area (EEA), United Kingdom, and Switzerland</h3>
            <p className="mb-4">
              We comply with the General Data Protection Regulation (GDPR) and the UK GDPR. For users in these regions:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                We process your data based on legitimate interests, consent, contractual necessity, or legal
                obligations.
              </li>
              <li>
                You have the rights of access, rectification, erasure, restriction of processing, data portability, and
                objection.
              </li>
              <li>To exercise these rights, please contact us at kobo@aentic.ai.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">United States</h3>
            <p className="mb-4">
              For California residents, we comply with the California Consumer Privacy Act (CCPA) and the California
              Privacy Rights Act (CPRA). You have the right to know what personal information we collect, to delete your
              personal information, to opt-out of the sale of your personal information, and to non-discrimination for
              exercising your privacy rights.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Canada</h3>
            <p>
              We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA). You have the
              right to access your personal information and challenge the accuracy of your personal information.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Australia</h3>
            <p>
              We comply with the Privacy Act 1988 and the Australian Privacy Principles (APPs). You have the right to
              access and correct your personal information.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Brazil</h3>
            <p>
              We comply with the Lei Geral de Proteção de Dados (LGPD). You have various rights regarding your personal
              data, including the right to access, correction, and deletion.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Asia-Pacific</h3>
            <p>
              We comply with applicable data protection laws in countries such as Japan (APPI), South Korea (PIPA), and
              Singapore (PDPA).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy Updates</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
            business practices. Any changes will be posted on this page with an updated revision date. We encourage you
            to periodically review this page for the latest information on our cookie practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy or how we use cookies, please contact us at:
          </p>
          <ul className="list-none space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@aentic.ai" className="text-primary hover:underline">
                info@aentic.ai
              </a>
            </li>
            <li>
              <strong>Postal Address:</strong> 701 Market St, Ste 110, Saint Louis, MO 63101
            </li>
            <li>
              <strong>Phone:</strong> +1 (844) 651-8233
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Last Updated</h2>
          <p>This Cookie Policy was last updated on April 29th, 2025</p>
        </section>
      </div>
    </main>
  )
}
