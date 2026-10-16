import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 border-b border-indigo-500/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-rotate-left" />
            Refund Policy
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Refund Policy
          </h1>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Please review our refund terms before purchasing any development,
            consulting, maintenance, or digital services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. General Refund Policy
              </h2>

              <p className="leading-relaxed">
                Due to the customized and service-based nature of web
                development, software development, consulting, and digital
                solutions, payments made for services are generally
                non-refundable once work has commenced.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Project Deposits
              </h2>

              <p className="leading-relaxed">
                Any advance payment, project deposit, or initial payment is
                considered confirmation of the project and allocation of
                development resources. Such payments are normally
                non-refundable after project work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Cancellation Before Work Begins
              </h2>

              <p className="leading-relaxed">
                If a project is cancelled before development or service
                delivery begins, a refund may be considered at our discretion,
                after deducting any applicable consultation, planning,
                processing, or administrative charges.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Completed Work
              </h2>

              <p className="leading-relaxed">
                Payments for completed development work, delivered software,
                websites, consulting sessions, maintenance services, or other
                completed deliverables are not eligible for refunds.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Third-Party Services
              </h2>

              <p className="leading-relaxed">
                Fees paid to third-party providers, including hosting,
                domains, APIs, software subscriptions, advertising platforms,
                payment processors, plugins, and other external services are
                subject to the respective provider's refund policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Client Delays
              </h2>

              <p className="leading-relaxed">
                Delays caused by missing information, content, approvals,
                credentials, payments, or client feedback do not automatically
                qualify for a refund.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Disputes
              </h2>

              <p className="leading-relaxed">
                If you have concerns regarding a service or payment, please
                contact us first so that we can review the matter and attempt
                to reach a reasonable resolution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-lg font-bold text-white mb-2">
                Contact Us
              </h2>

              <p className="text-slate-400 leading-relaxed">
                For refund-related questions, please contact:
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

export default RefundPolicy;

