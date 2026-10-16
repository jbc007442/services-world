import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900 border-b border-indigo-500/20 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="font-medium">
              Direct Developer Service — No Account Managers or Middlemen
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="tel:8444942133"
              className="hover:text-indigo-400 transition-colors font-semibold flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone-volume text-indigo-400" />
              Toll-Free: 8444942133
            </a>

            <span className="hidden md:inline text-slate-600">|</span>

            <span className="hidden md:inline text-slate-400">
              <i className="fa-solid fa-location-dot text-indigo-400 mr-1" />
              Gurgaon, HR, India
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090d16]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                BS
              </div>

              <div>
                <span className="text-xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Bookings Service
                </span>

                <span className="block text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  Web Solutions
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-indigo-400 transition-colors"
              >
                Services
              </a>

              <a
                href="#estimator"
                className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-indigo-400 transition-colors"
              >
                Estimator
              </a>

              <a
                href="#portfolio"
                className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-indigo-400 transition-colors"
              >
                Portfolio
              </a>

              <a
                href="#why-direct"
                className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-indigo-400 transition-colors"
              >
                Why Direct?
              </a>

              <a
                href="#contact"
                className="text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center space-x-4">
              {/* CALL BUTTON */}
              <a
                href="tel:8444942133"
                className="hidden lg:inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 border border-slate-700 text-slate-200 hover:border-indigo-500 transition-colors"
              >
                <i className="fa-solid fa-headset mr-2 text-indigo-400" />
                Call 8444942133
              </a>

              {/* BOOK CALL */}
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/25"
              >
                <i className="fa-regular fa-calendar-check mr-2 text-sm" />
                Book Call
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
                aria-label="Toggle Menu"
              >
                <i className={`fa-solid ${mobileMenu ? 'fa-xmark' : 'fa-bars'} text-xl`} />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            {[
              ['#services', 'Services'],
              ['#estimator', 'Cost Estimator'],
              ['#portfolio', 'Portfolio Work'],
              ['#why-direct', 'Why Direct Developer?'],
              ['#contact', 'Contact & Address'],
            ].map(([href, text]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-indigo-400 transition-colors"
              >
                {text}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-800">
              <a
                href="tel:8444942133"
                className="block w-full py-2.5 px-4 text-center rounded-xl bg-slate-800 text-xs font-bold text-slate-200"
              >
                <i className="fa-solid fa-phone mr-2 text-indigo-400" />
                Toll-Free: 8444942133
              </a>
            </div>
          </div>
        )}
      </header>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0f172a] border border-slate-700 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Book a Call</h2>

              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-indigo-500 resize-none"
              />

              <button
                type="button"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold hover:from-indigo-500 hover:to-purple-500 transition-all"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


