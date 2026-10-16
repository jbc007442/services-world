import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* BRAND */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-black text-sm">
                DS
              </div>

              <span className="text-base font-bold text-white">
                Dhruv Sharma
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Full-Stack Web Developer & Digital Solutions Consultant operating
              as an independent Sole Proprietorship in Gurgaon, HR, India.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Quick Links
            </h5>

            <ul className="space-y-2">

              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Contact Details
            </h5>

            <p className="text-slate-300 font-bold mb-1">
              Toll-Free: 8444942133
            </p>

            <p className="text-slate-400 leading-relaxed text-[11px] mb-2">
              201, Sagar Apartments, Sector 56, Gurgaon, HR 122011, India
            </p>

            <p className="text-indigo-400 text-[11px]">
              dhruv@dhruvsharma.dev
            </p>
          </div>

          {/* BUSINESS HOURS */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Business Hours
            </h5>

            <p className="text-slate-400 text-[11px] mb-1">
              <strong className="text-slate-200">
                Mon - Sat:
              </strong>{" "}
              9:00 AM – 7:00 PM IST
            </p>

            <p className="text-slate-400 text-[11px] mb-4">
              <strong className="text-slate-200">
                Emergency Support:
              </strong>{" "}
              24/7 for Care Plan Clients
            </p>

            <div className="flex space-x-3 text-slate-300 text-sm">

              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-indigo-400"
              >
                <i className="fa-brands fa-github" />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-indigo-400"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-indigo-400"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>

            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500">

          <p>
            © {new Date().getFullYear()} Dhruv Sharma Web Consultancy.
            Registered Sole Proprietorship.
          </p>

          <p className="mt-2 sm:mt-0">
            Gurgaon, HR, India • Toll-Free: 8444942133
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
