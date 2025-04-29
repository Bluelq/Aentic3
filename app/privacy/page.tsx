import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: April 29th, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Aentic AI ("we," "our," or "us"). We respect your privacy and are committed to protecting your
            personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website aentic.ai (the "Website"), including any other media form, media channel, mobile
            website, or mobile application related or connected thereto.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">2.1 Personal Data</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Register on our Website</li>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a form</li>
              <li>Participate in surveys or contests</li>
              <li>Send us feedback or contact us</li>
              <li>Make a purchase</li>
            </ul>
            <p className="mb-4">The personal information we may collect includes:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Name and contact details (email address, phone number, address)</li>
              <li>Login credentials</li>
              <li>Payment and billing information</li>
              <li>Profile information (preferences, product interests)</li>
              <li>User-generated content (comments, reviews, forum posts)</li>
              <li>Communications with us</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our Website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Time spent on pages</li>
              <li>Pages visited</li>
              <li>Unique device identifiers</li>
              <li>Location information</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">2.3 Cookies and Similar Technologies</h3>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities.
              Please refer to our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>{" "}
              for more details.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Provide, operate, and maintain our Website</li>
            <li>Improve, personalize, and expand our Website</li>
            <li>Understand and analyze how you use our Website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Process your transactions</li>
            <li>Send you emails and newsletters</li>
            <li>Find and prevent fraud</li>
            <li>For compliance with legal obligations</li>
            <li>Protect our rights and the rights of other users</li>
            <li>Respond to governmental requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Legal Basis for Processing (for EEA, UK, and similar jurisdictions)
          </h2>
          <p className="mb-4">
            If you are located in the European Economic Area (EEA), United Kingdom, Switzerland, or jurisdictions with
            similar data protection laws, we collect and process your personal data based on one or more of the
            following legal grounds:
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>
              <strong>Consent:</strong> We process your information with your consent.
            </li>
            <li>
              <strong>Contract:</strong> We process your information to fulfill a contract with you.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> We process your information for our legitimate business interests,
              such as fraud prevention and improving our services.
            </li>
            <li>
              <strong>Legal Obligation:</strong> We process your information to comply with applicable laws.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p className="mb-4">
            We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy
            Policy. We will retain and use your personal data to the extent necessary to comply with our legal
            obligations, resolve disputes, and enforce our legal agreements and policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Transfer</h2>
          <p className="mb-4">
            Your information, including personal data, may be transferred to — and maintained on — computers located
            outside of your state, province, country, or other governmental jurisdiction. If you are located outside the
            United States and choose to provide information to us, please note that we transfer the data to the United
            States and process it there.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">6.1 International Transfers</h3>
            <p className="mb-4">
              If we transfer your personal data from the EEA, UK, or similar jurisdictions to countries that have not
              been deemed to provide an adequate level of protection, we ensure appropriate safeguards are in place,
              including:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Standard Contractual Clauses</li>
              <li>Binding Corporate Rules, where applicable</li>
              <li>Privacy Shield certification, where applicable</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Data Protection Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">
              7.1 European Economic Area, United Kingdom, and Similar Jurisdictions
            </h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>Right to access:</strong> You have the right to request copies of your personal data.
              </li>
              <li>
                <strong>Right to rectification:</strong> You have the right to request that we correct any information
                you believe is inaccurate or complete information you believe is incomplete.
              </li>
              <li>
                <strong>Right to erasure:</strong> You have the right to request that we erase your personal data, under
                certain conditions.
              </li>
              <li>
                <strong>Right to restrict processing:</strong> You have the right to request that we restrict the
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to object to processing:</strong> You have the right to object to our processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to data portability:</strong> You have the right to request that we transfer the data we
                have collected to another organization, or directly to you, under certain conditions.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> If we rely on your consent to process your personal data,
                you have the right to withdraw that consent at any time.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">7.2 California Residents</h3>
            <p className="mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights
              Act (CPRA) provide you with specific rights regarding your personal information:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>
                <strong>Right to know:</strong> You have the right to request information about the personal information
                we collect, use, disclose, and sell.
              </li>
              <li>
                <strong>Right to delete:</strong> You have the right to request the deletion of your personal
                information.
              </li>
              <li>
                <strong>Right to opt-out:</strong> You have the right to opt-out of the sale of your personal
                information.
              </li>
              <li>
                <strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising any of
                your CCPA rights.
              </li>
            </ul>
            <p className="mb-4">
              To submit a verifiable consumer request under the CCPA, please contact us using the information provided
              in the "Contact Us" section.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">7.3 Other Jurisdictions</h3>
            <p className="mb-4">
              We comply with applicable data protection laws in jurisdictions where we operate, including but not
              limited to:
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Canada (Personal Information Protection and Electronic Documents Act - PIPEDA)</li>
              <li>Australia (Privacy Act 1988)</li>
              <li>Brazil (Lei Geral de Proteção de Dados - LGPD)</li>
              <li>Japan (Act on the Protection of Personal Information - APPI)</li>
              <li>South Korea (Personal Information Protection Act - PIPA)</li>
            </ul>
            <p className="mb-4">
              If you wish to exercise any of these rights, please contact us using the information provided in the
              "Contact Us" section.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our Website is not intended for children under the age of 16. We do not knowingly collect personal
            information from children under 16. If you are a parent or guardian and you are aware that your child has
            provided us with personal data, please contact us. If we become aware that we have collected personal data
            from children without verification of parental consent, we take steps to remove that information from our
            servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
          <p className="mb-4">
            Our Website may contain links to other websites or services that are not operated by us. If you click on a
            third-party link, you will be directed to that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit.
          </p>
          <p className="mb-4">
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any
            third-party sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. We will also provide a more prominent
            notice if the changes are significant.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Security of Your Personal Data</h2>
          <p className="mb-4">
            The security of your personal data is important to us. We strive to use commercially acceptable means to
            protect your personal data, including using encryption, firewalls, and secure server infrastructure.
            However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Vercel Hosting</h2>
          <p className="mb-4">
            This Website is hosted on Vercel. By using our Website, you acknowledge that your information will be
            processed as described in Vercel's Privacy Policy (available at{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://vercel.com/legal/privacy-policy
            </a>
            ). Vercel may collect certain information about your device, browsing actions, and patterns, as described in
            their Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us:</p>
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
          <h2 className="text-2xl font-semibold mb-4">14. Data Protection Officer</h2>
          <p className="mb-4">
            For users in jurisdictions where a Data Protection Officer is required, our Data Protection Officer can be
            contacted at{" "}
            <a href="mailto:kobo@aentic.ai" className="text-primary hover:underline">
              kobo@aentic.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
