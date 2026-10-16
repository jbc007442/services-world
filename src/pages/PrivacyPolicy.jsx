import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 border-b border-indigo-500/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-shield-halved" />
            Privacy Policy
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            This Privacy Policy explains how information may be collected,
            used, stored, and protected when you use our website or services.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Information We Collect
              </h2>

              <p className="leading-relaxed">
                Depending on how you interact with us, we may collect
                information such as your name, email address, telephone
                number, company information, project requirements, and other
                information that you voluntarily provide.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. How We Use Information
              </h2>

              <p className="leading-relaxed">
                Information may be used to respond to inquiries, provide
                requested services, communicate about projects, process
                payments, provide customer support, improve our website, and
                maintain business records.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Contact Information
              </h2>

              <p className="leading-relaxed">
                If you submit a contact or project inquiry, the information you
                provide may be used to contact you regarding your inquiry or
                requested services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Cookies and Similar Technologies
              </h2>

              <p className="leading-relaxed">
                Our website or third-party services may use cookies or similar
                technologies to improve functionality, understand website
                usage, maintain sessions, or provide analytics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Third-Party Services
              </h2>

              <p className="leading-relaxed">
                We may use third-party services for hosting, analytics,
                communications, payment processing, security, or other
                business functions. These providers may process information in
                accordance with their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Data Security
              </h2>

              <p className="leading-relaxed">
                We take reasonable technical and organizational measures to
                protect information from unauthorized access, misuse, loss, or
                disclosure. However, no internet-based system can be guaranteed
                to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Data Retention
              </h2>

              <p className="leading-relaxed">
                Information may be retained for as long as reasonably necessary
                to provide services, maintain business records, comply with
                legal obligations, resolve disputes, and enforce agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Your Rights
              </h2>

              <p className="leading-relaxed">
                Depending on applicable law, you may have rights concerning
                access, correction, deletion, or restriction of certain
                personal information. Requests can be submitted using the
                contact information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Children's Privacy
              </h2>

              <p className="leading-relaxed">
                Our services are not specifically directed toward children.
                We do not knowingly request personal information from children
                where prohibited by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Changes to This Policy
              </h2>

              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, practices, or applicable requirements.
                Updated versions will be published on this page.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-lg font-bold text-white mb-2">
                Privacy Questions
              </h2>

              <p className="text-slate-400 leading-relaxed">
                If you have questions about this Privacy Policy or how your
                information is handled, contact us at:
              </p>

              <p className="mt-3 text-indigo-400 font-semibold">
                dhruv@dhruvsharma.dev
              </p>

              <p className="mt-1 text-slate-400">
                Toll-Free: 8444942133
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
