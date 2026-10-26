import React, { useEffect, useState } from 'react';

const services = [
  {
    icon: 'fa-solid fa-code',
    color: 'indigo',
    title: 'Custom Web Development',
    description:
      'High-performance custom code built with React, Next.js, HTML5/CSS3, JavaScript, or modern CMS engines like WordPress & Webflow.',
    items: [
      'Modern Tech Stack (React / Tailwind)',
      'Dynamic API Integration & CMS',
      'Fully Responsive & Mobile-First',
    ],
  },
  {
    icon: 'fa-solid fa-palette',
    color: 'purple',
    title: 'UI/UX & Web Design',
    description:
      'User-centric design systems, Figma interactive prototypes, brand identities, and visual experiences that convert traffic into paying clients.',
    items: [
      'Custom Figma Wireframing',
      'Conversion Rate Architecture',
      'Dark/Light Modern Aesthetic',
    ],
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    color: 'emerald',
    title: 'E-Commerce Solutions',
    description:
      'Shopify and custom payment gateway builds (Stripe, Razorpay, PayPal). Smooth cart experiences optimized for low abandonment rates.',
    items: [
      'Shopify / Custom Cart Setup',
      'Secure Payment Gateway Integration',
      'Automated Inventory & Shipping Sync',
    ],
  },
  {
    icon: 'fa-solid fa-gauge-high',
    color: 'cyan',
    title: 'Speed & SEO Optimization',
    description:
      'Transform slow websites into sub-second fast experiences. Optimize Google Core Web Vitals, implement schema markup, and boost search rankings.',
    items: [
      'Core Web Vitals 90+ Target',
      'Technical On-Page SEO Schema',
      'Asset & Image CDN Compression',
    ],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    color: 'amber',
    title: 'Website Care & Security',
    description:
      'Ongoing maintenance and security. Daily automated backups, core system updates, uptime tracking, and priority content edits.',
    items: [
      '24/7 Uptime & Security Monitoring',
      'Daily Cloud Off-Site Backups',
      'Unlimited Monthly Small Tweaks',
    ],
  },
  {
    icon: 'fa-solid fa-cubes',
    color: 'rose',
    title: 'Custom Web Applications',
    description:
      'Bespoke portals, client dashboards, form calculators, and webhook integrations tailored specifically to your unique workflow.',
    items: [
      'Custom Dashboards & Portals',
      'Third-Party API Integration',
      'Database Architecture Setup',
    ],
  },
];

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    alt: 'SaaS Dashboard',
    badge: '+140% Conversions',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    title: 'Nova Analytics Portal',
    description:
      'Complete UI design and custom front-end development for a high-volume B2B analytics platform.',
    category: 'B2B Web Application',
    result: '+140% Lead Conversion Rate',
    tech: 'React, Tailwind CSS, REST APIs',
    details:
      'Designed the marketing presentation website and created an interactive demo portal. Reduced average page loading time from 3.8s to 0.7s.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    alt: 'E-Commerce Storefront',
    badge: '99/100 Mobile Speed',
    tags: ['Shopify', 'JavaScript', 'Liquid'],
    title: 'Verve Boutique Store',
    description:
      'High-converting e-commerce storefront engineered for frictionless mobile cart checkout.',
    category: 'E-Commerce Storefront',
    result: '99/100 Mobile Speed Score',
    tech: 'Shopify, Custom Liquid, Tailwind CSS',
    details:
      'Custom Shopify build eliminating third-party app bloat. Boosted checkout completions by 42% in the first quarter.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'Corporate Website',
    badge: '3x Organic Leads',
    tags: ['HTML5/JS', 'SEO Schema', 'Tailwind'],
    title: 'Apex Capital Advisory',
    description:
      'Corporate website overhaul with structured SEO schema and an integrated appointment scheduling flow.',
    category: 'Corporate Website & Lead Engine',
    result: '3x Inbound Organic Leads',
    tech: 'HTML5, JavaScript, Tailwind, Local SEO',
    details:
      'Re-architected outdated corporate site with lightweight modular code. Search rankings reached page 1 for targeted consulting keywords.',
  },
];

const advantages = [
  {
    icon: 'fa-solid fa-comments',
    color: 'indigo',
    title: 'Direct 1-on-1 Communication',
    description:
      'No account managers or broken communication loops. Speak directly with the developer engineering your site.',
  },
  {
    icon: 'fa-solid fa-bolt',
    color: 'purple',
    title: 'Faster Project Delivery',
    description:
      'Without corporate red tape and multi-layered approvals, projects are built, tested, and launched in record time.',
  },
  {
    icon: 'fa-solid fa-hand-holding-dollar',
    color: 'emerald',
    title: 'Fair, Transparent Pricing',
    description:
      'You pay purely for high-grade technical craftsmanship, not expensive agency office leases or executive salaries.',
  },
  {
    icon: 'fa-solid fa-code-commit',
    color: 'cyan',
    title: '100% Code Ownership',
    description:
      'You retain full ownership of all source code, assets, and accounts with zero vendor lock-in or hidden fees.',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    color: 'amber',
    title: 'Personalized Attention',
    description:
      'I deliberately restrict active clients to 2-3 projects at a time to ensure maximum quality control and focus.',
  },
  {
    icon: 'fa-solid fa-shield-cat',
    color: 'rose',
    title: 'Long-Term Reliability',
    description:
      'Continuous support, security updates, and performance checks long after your website goes live.',
  },
];

const colorClasses = {
  indigo: {
    icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    hover: 'group-hover:bg-indigo-600 group-hover:text-white',
    check: 'text-indigo-400',
    border: 'hover:border-indigo-500/40',
  },
  purple: {
    icon: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    hover: 'group-hover:bg-purple-600 group-hover:text-white',
    check: 'text-purple-400',
    border: 'hover:border-purple-500/40',
  },
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    hover: 'group-hover:bg-emerald-600 group-hover:text-white',
    check: 'text-emerald-400',
    border: 'hover:border-emerald-500/40',
  },
  cyan: {
    icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    hover: 'group-hover:bg-cyan-600 group-hover:text-white',
    check: 'text-cyan-400',
    border: 'hover:border-cyan-500/40',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    hover: 'group-hover:bg-amber-600 group-hover:text-white',
    check: 'text-amber-400',
    border: 'hover:border-amber-500/40',
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    hover: 'group-hover:bg-rose-600 group-hover:text-white',
    check: 'text-rose-400',
    border: 'hover:border-rose-500/40',
  },
};

const Home = () => {
  const [selectedType, setSelectedType] = useState('landing');
  const [pages, setPages] = useState(1);
  const [seo, setSeo] = useState(false);
  const [cms, setCms] = useState(false);
  const [care, setCare] = useState(false);

  const [bookingOpen, setBookingOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    time: '',
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web Development',
    message: '',
  });

  const [estimate, setEstimate] = useState({
    min: 650,
    max: 780,
    weeks: 1,
  });

  useEffect(() => {
    calculateEstimate();
  }, [selectedType, pages, seo, cms, care]);

  const calculateEstimate = () => {
    let baseCost = 0;
    let weeks = 1;

    if (selectedType === 'landing') {
      baseCost = 650 + (pages - 1) * 90;
      weeks = 1;
    } else if (selectedType === 'business') {
      baseCost = 1200 + (pages - 1) * 120;
      weeks = 2 + Math.ceil(pages / 4);
    } else if (selectedType === 'ecommerce') {
      baseCost = 1800 + (pages - 1) * 160;
      weeks = 3 + Math.ceil(pages / 3);
    } else if (selectedType === 'webapp') {
      baseCost = 2500 + (pages - 1) * 200;
      weeks = 4 + Math.ceil(pages / 2);
    }

    if (seo) baseCost += 300;
    if (cms) baseCost += 350;

    setEstimate({
      min: baseCost,
      max: Math.round(baseCost * 1.2),
      weeks,
    });
  };

  const getEstimateText = () => {
    let text = `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`;

    if (care) {
      text += ' +$120/mo care plan';
    }

    return text;
  };

  const applyEstimate = () => {
    setContactForm((prev) => ({
      ...prev,
      message: `Hi Dhruv, I configured an estimate of roughly ${getEstimateText()} using your calculator. Please send me a formal proposal and availability schedule.`,
    }));

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 900);
  };

  const resetContactForm = () => {
    setContactForm({
      name: '',
      email: '',
      phone: '',
      service: 'Custom Web Development',
      message: '',
    });

    setFormSubmitted(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    alert(
      'Consultation call requested! Dhruv Sharma will review your time slot and confirm via email/phone.'
    );

    setBookingOpen(false);

    setBookingForm({
      name: '',
      email: '',
      time: '',
    });
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setProjectOpen(true);
  };

  return (
    <div className="bg-[#090d16] text-slate-100 antialiased min-h-screen flex flex-col">
      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              <span>Independent Web Specialist • Accepting Q2 / Q3 Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-6">
              Bespoke Websites Engineered For <br className="hidden sm:block" />
              <span className="gradient-text">Speed, Conversions & Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Hi, I’m <strong className="text-white">Dhruv Sharma</strong>—an independent full-stack
              web developer and digital solutions consultant. I build lightning-fast web
              applications, e-commerce storefronts, and optimized corporate sites with zero agency
              bloat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#estimator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-xs uppercase tracking-wider text-center"
              >
                <i className="fa-solid fa-calculator mr-2" />
                Get Instant Estimate
              </a>

              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700"
              >
                <i className="fa-regular fa-calendar-check mr-2 text-indigo-400" />
                Book Consultation
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-slate-800/80 max-w-5xl mx-auto">
            {[
              ['70+', 'Websites Launched', 'text-indigo-400'],
              ['99+', 'PageSpeed Rating', 'text-emerald-400'],
              ['100%', 'Direct Developer Access', 'text-purple-400'],
              ['24/7', 'Security & Maintenance', 'text-cyan-400'],
            ].map(([value, label, color]) => (
              <div key={label} className="glass-card rounded-2xl p-6 text-center">
                <div className={`text-3xl sm:text-4xl font-black ${color} mb-1`}>{value}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 bg-slate-950/60 relative border-t border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3">
              Core Offerings
            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Web Solutions & Services
            </p>

            <p className="text-slate-400 text-sm">
              Exclusively focused on web technologies to ensure your business digital presence is
              modern, secure, and built for conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const c = colorClasses[service.color];

              return (
                <div
                  key={service.title}
                  className="glass-card rounded-2xl p-8 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center text-2xl mb-6 ${c.hover} transition-all`}
                    >
                      <i className={service.icon} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <i className={`fa-solid fa-circle-check ${c.check} mr-2`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section id="estimator" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3">
              Transparent Calculator
            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Project Cost & Timeline Estimator
            </p>

            <p className="text-slate-400 text-sm">
              Select your website preferences for an instant transparent price quote and delivery
              timeframe.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3">
                    1. Website Type
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      ['landing', 'fa-rocket', 'Landing Page'],
                      ['business', 'fa-briefcase', 'Business Site'],
                      ['ecommerce', 'fa-store', 'E-Commerce'],
                      ['webapp', 'fa-layer-group', 'Web App'],
                    ].map(([type, icon, label]) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`p-3 border rounded-xl text-xs font-bold text-center transition-all ${
                          selectedType === type
                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300'
                            : 'border-slate-700 bg-slate-800/60 text-slate-300'
                        }`}
                      >
                        <i className={`fa-solid ${icon} block text-base mb-1`} />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                      2. Number of Pages
                    </label>

                    <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-lg">
                      {pages} {pages === 1 ? 'Page' : 'Pages'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />

                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1 Page</span>
                    <span>5 Pages</span>
                    <span>10 Pages</span>
                    <span>20+ Pages</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3">
                    3. Add-On Capabilities
                  </label>

                  <div className="space-y-2.5">
                    <label className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-900/60 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={seo}
                          onChange={(e) => setSeo(e.target.checked)}
                          className="w-4 h-4"
                        />

                        <span className="text-xs font-semibold text-slate-200">
                          Speed & Advanced Technical SEO Package
                        </span>
                      </div>

                      <span className="text-xs font-bold text-indigo-400">+$300</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-900/60 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={cms}
                          onChange={(e) => setCms(e.target.checked)}
                          className="w-4 h-4"
                        />

                        <span className="text-xs font-semibold text-slate-200">
                          Custom Content Management System (CMS / Blog)
                        </span>
                      </div>

                      <span className="text-xs font-bold text-indigo-400">+$350</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-900/60 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={care}
                          onChange={(e) => setCare(e.target.checked)}
                          className="w-4 h-4"
                        />

                        <span className="text-xs font-semibold text-slate-200">
                          Monthly Website Security & Care Plan
                        </span>
                      </div>

                      <span className="text-xs font-bold text-indigo-400">+$120/mo</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-center">
                <div className="my-auto space-y-4 py-4">
                  <span className="text-[11px] uppercase font-extrabold text-slate-400 tracking-widest">
                    Estimated Investment
                  </span>

                  <div className="text-4xl sm:text-5xl font-black text-white gradient-text">
                    ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                  </div>

                  {care && <span className="text-xs text-slate-400 block">+$120/mo care plan</span>}

                  <div className="inline-flex items-center text-xs font-bold text-slate-300 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                    <i className="fa-regular fa-clock text-indigo-400 mr-2" />
                    Estimated Timeline:
                    <span className="text-emerald-400 font-extrabold ml-1.5">
                      {estimate.weeks} - {estimate.weeks + 1} Weeks
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed pt-3">
                    Includes custom responsive layout, clean optimized code, source code ownership,
                    and 30 days of post-launch warranty support.
                  </p>
                </div>

                <button
                  onClick={applyEstimate}
                  className="w-full py-4 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
                >
                  Request Official Proposal
                  <i className="fa-solid fa-arrow-right ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-20 bg-slate-950/40 relative border-t border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3">
                Case Studies
              </h2>

              <p className="text-3xl sm:text-4xl font-bold text-white">Featured Project Work</p>
            </div>

            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
              Every project is custom engineered for optimal loading speed, cross-device
              responsiveness, and measurable business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <span className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/90 text-indigo-300 text-[10px] font-bold border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>

                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={() => openProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center"
                  >
                    View Case Details
                    <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIRECT */}
      <section id="why-direct" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3">
              The Independent Advantage
            </h2>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Work Directly With Dhruv Sharma?
            </h3>

            <p className="text-slate-400 text-sm">
              When you hire an agency, up to 60% of your budget goes to account managers, sales
              reps, and overhead. Working directly with me guarantees 100% focused developer
              attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage) => {
              const c = colorClasses[advantage.color];

              return (
                <div
                  key={advantage.title}
                  className={`glass-card rounded-2xl p-6 border-slate-800 ${c.border} transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${c.icon} border-0 flex items-center justify-center text-xl mb-4`}
                  >
                    <i className={advantage.icon} />
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{advantage.title}</h4>

                  <p className="text-slate-400 text-xs leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-950/60 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">
                  Inquiries & Contact
                </h2>

                <h3 className="text-3xl font-bold text-white mb-3">Let’s Discuss Your Project</h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Have a question or ready to build your website? Send an inquiry or reach out
                  directly using the details below. All inquiries receive a response within 24
                  hours.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 space-y-5 border-slate-800">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-user-check" />
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                      Independent Specialist
                    </div>
                    <div className="text-sm font-bold text-white">Dhruv Sharma</div>
                    <div className="text-xs text-indigo-400 font-medium">
                      Web Architect & Consultant
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-phone-volume" />
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                      Toll-Free / Phone
                    </div>

                    <a
                      href="tel:8444942133"
                      className="text-sm font-bold text-white hover:text-indigo-400"
                    >
                      8444942133
                    </a>

                    <div className="text-[11px] text-slate-400">+91 8444942133</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-location-dot" />
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                      Office Address
                    </div>

                    <div className="text-xs font-semibold text-white leading-normal">
                      201, Sagar Apartments, Sector 56, Gurgaon, HR 122011, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg shrink-0">
                    <i className="fa-solid fa-envelope" />
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                      Direct Email
                    </div>

                    <a
                      href="mailto:support@bookingsservice.com"
                      className="text-xs font-semibold text-white hover:text-indigo-400"
                    >
                      support@bookingsservice.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
                {!formSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Your Name *
                        </label>

                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Email Address *
                        </label>

                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Service Requested
                        </label>

                        <select
                          value={contactForm.service}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              service: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                        >
                          <option>Custom Web Development</option>
                          <option>E-Commerce Storefront</option>
                          <option>UI/UX & Web Design</option>
                          <option>Speed & SEO Optimization</option>
                          <option>Monthly Website Care Plan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Project Details & Objectives *
                      </label>

                      <textarea
                        required
                        rows="4"
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Briefly describe your goals, required pages, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
                    >
                      {formLoading ? (
                        <>
                          <i className="fa-solid fa-spinner animate-spin mr-2" />
                          Processing Inquiry...
                        </>
                      ) : (
                        <>
                          Send Message Inquiry
                          <i className="fa-solid fa-paper-plane ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto border border-emerald-500/20">
                      <i className="fa-solid fa-check" />
                    </div>

                    <h4 className="text-2xl font-bold text-white">Inquiry Submitted!</h4>

                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you! Your message has been routed directly to Dhruv Sharma. Expect a
                      response within 24 hours.
                    </p>

                    <button
                      onClick={resetContactForm}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center text-xl mx-auto mb-3 border border-indigo-500/20">
                <i className="fa-regular fa-calendar-check" />
              </div>

              <h3 className="text-xl font-bold text-white">Book Free 15-Min Call</h3>

              <p className="text-slate-400 text-xs mt-1">
                Direct website consultation with Dhruv Sharma.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={bookingForm.name}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    name: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={bookingForm.email}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    email: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
              />

              <input
                type="datetime-local"
                required
                value={bookingForm.time}
                onChange={(e) =>
                  setBookingForm({
                    ...bookingForm,
                    time: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Confirm Call Schedule
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {projectOpen && selectedProject && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setProjectOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>

            <div className="rounded-2xl overflow-hidden h-56 mb-6 bg-slate-950 border border-slate-800">
              <img
                src={selectedProject.image.replace('w=800', 'w=1200')}
                alt="Project Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block mb-1">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>

            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                {selectedProject.result}
              </span>

              <span className="text-slate-400 text-xs">{selectedProject.tech}</span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {selectedProject.details}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setProjectOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
