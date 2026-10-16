import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 border-b border-indigo-500/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-file-contract" />
            Terms & Conditions
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            These terms govern the use of our website and the provision of our
            web development, consulting, and digital services.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h2>

              <p className="leading-relaxed">
                By accessing this website or engaging our services, you agree
                to comply with these Terms & Conditions. If you do not agree
                with these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Services
              </h2>

              <p className="leading-relaxed">
                We provide website development, web application development,
                software development, API integration, technical consulting,
                maintenance, optimization, and related digital services.
              </p>

              <p className="mt-3 leading-relaxed">
                The exact scope of a project will be determined by the agreed
                proposal, quotation, statement of work, or written
                communication between the client and service provider.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Client Responsibilities
              </h2>

              <p className="leading-relaxed">
                Clients are responsible for providing accurate information,
                content, credentials, approvals, materials, and feedback
                required to complete the project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Payments
              </h2>

              <p className="leading-relaxed">
                Project pricing, payment schedules, deposits, milestones, and
                other financial terms will be communicated before work begins.
                Failure to make payments on time may result in suspension or
                delay of services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Project Changes
              </h2>

              <p className="leading-relaxed">
                Requests outside the originally agreed project scope may
                require additional charges and development time. Any
                significant change may be quoted separately before
                implementation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Intellectual Property
              </h2>

              <p className="leading-relaxed">
                Ownership and licensing of project deliverables will depend on
                the agreed project terms and payment status. Third-party
                libraries, frameworks, APIs, fonts, images, and other assets
                remain subject to their respective licenses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Third-Party Services
              </h2>

              <p className="leading-relaxed">
                We may integrate third-party services such as hosting
                providers, payment gateways, APIs, analytics platforms,
                communication services, and software tools. Availability and
                performance of such services are controlled by their respective
                providers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Limitation of Liability
              </h2>

              <p className="leading-relaxed">
                We will make reasonable efforts to provide reliable services.
                However, we are not responsible for losses caused by
                circumstances outside our reasonable control, including
                third-party outages, hosting failures, security incidents,
                internet failures, or changes to external platforms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Website Content
              </h2>

              <p className="leading-relaxed">
                Website content is provided for general informational purposes.
                We reserve the right to update, modify, or remove website
                content at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Termination
              </h2>

              <p className="leading-relaxed">
                Either party may terminate a service engagement according to
                the agreed project terms. Outstanding payments for work already
                completed remain payable after termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                11. Governing Law
              </h2>

              <p className="leading-relaxed">
                These terms shall be interpreted in accordance with applicable
                laws of India. Any disputes will be subject to the appropriate
                jurisdiction applicable to the service provider and the
                applicable laws.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-lg font-bold text-white mb-2">
                Contact
              </h2>

              <p className="text-slate-400">
                Email:{" "}
                <span className="text-indigo-400">
                  dhruv@dhruvsharma.dev
                </span>
              </p>

              <p className="text-slate-400 mt-1">
                Toll-Free: 8444942133
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

