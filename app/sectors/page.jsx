"use client"
import React, { useState, useEffect } from 'react';
import {
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Clock,
  Users,
  Building2,
  Truck,
  Heart,
  Monitor,
  ShoppingCart,
  Play,
  Plane,
  CloudLightning as Lightning,
  Phone,
  FileText,
  GraduationCap,
  Building,
  Stethoscope,
  Package,
  CreditCard,
  Rocket,
  Menu,
  X,
  ChevronDown,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const SectorsPage = () => {
  // Header state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Modal state with animation control
  const [selectedSector, setSelectedSector] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle modal opening
  const openModal = (sector) => {
    setSelectedSector(sector);
    setIsModalVisible(true);
    // Small delay to ensure the modal is rendered before animation starts
    setTimeout(() => {
      setIsModalAnimating(true);
    }, 10);
  };

  // Handle modal closing
  const closeModal = () => {
    setIsModalAnimating(false);
    // Wait for animation to complete before hiding modal
    setTimeout(() => {
      setIsModalVisible(false);
      setSelectedSector(null);
    }, 300); // Match the animation duration
  };

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedSector) {
        closeModal();
      }
    };

    if (isModalVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalVisible, selectedSector]);

  const sectors = [
    {
      id: 1,
      icon: <Building2 className="h-8 w-8" />,
      title: "Banking & Financial Services",
      description:
        "High-touch customer support, secure data workflows, and multilingual assistance for regulated financial environments.",
      gradient: "from-blue-500 to-cyan-500",
      challenges: ["Complex regulatory compliance", "High-value customer expectations", "Multi-language support needs"],
      solutions: [
        "HIPAA/PCI compliant operations",
        "Dedicated financial specialists",
        "Real-time fraud monitoring support",
      ],
    },
    {
      id: 2,
      icon: <Truck className="h-8 w-8" />,
      title: "Delivery & Logistics",
      description:
        "Real-time support, order tracking, and dispatch coordination with multilingual coverage across time zones.",
      gradient: "from-green-500 to-emerald-500",
      challenges: ["24/7 tracking inquiries", "Multi-timezone coordination", "High-volume order processing"],
      solutions: ["Real-time order tracking", "Dispatch coordination", "Multilingual customer updates"],
    },
    {
      id: 3,
      icon: <Heart className="h-8 w-8" />,
      title: "HealthTech & Wellness",
      description:
        "Patient support, appointment handling, and sensitive data management — backed by compliant offshore teams.",
      gradient: "from-red-500 to-pink-500",
      challenges: ["HIPAA compliance requirements", "Sensitive patient data", "Appointment scheduling complexity"],
      solutions: ["HIPAA-compliant workflows", "Patient care specialists", "Secure data handling protocols"],
    },
    {
      id: 4,
      icon: <Monitor className="h-8 w-8" />,
      title: "Tech & SaaS",
      description:
        "24/7 helpdesks, ticket resolution, onboarding support, and remote staffing for fast-scaling product teams.",
      gradient: "from-purple-500 to-indigo-500",
      challenges: ["Rapid scaling needs", "Technical support complexity", "24/7 availability requirements"],
      solutions: ["Technical helpdesk teams", "Scalable support infrastructure", "Product onboarding specialists"],
    },
    {
      id: 5,
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Retail & eCommerce",
      description: "Cart recovery, post-purchase support, returns, and omnichannel engagement that drives retention.",
      gradient: "from-orange-500 to-red-500",
      challenges: ["Cart abandonment rates", "Return processing", "Peak season scaling"],
      solutions: ["Cart recovery campaigns", "Returns processing", "Peak season support scaling"],
    },
    {
      id: 6,
      icon: <Play className="h-8 w-8" />,
      title: "Streaming & Entertainment",
      description:
        "Fan support, subscription troubleshooting, and live content issue resolution — handled with speed and tone precision.",
      gradient: "from-pink-500 to-purple-500",
      challenges: ["Real-time content issues", "Subscription management", "Fan engagement"],
      solutions: ["Live content support", "Subscription troubleshooting", "Fan community management"],
    },
    {
      id: 7,
      icon: <Plane className="h-8 w-8" />,
      title: "Travel & Hospitality",
      description:
        "Reservation handling, itinerary changes, multilingual booking support, and escalations — 24/7, peak-season ready.",
      gradient: "from-teal-500 to-blue-500",
      challenges: ["Booking modifications", "Multi-language requirements", "Peak season demands"],
      solutions: ["24/7 reservation support", "Multilingual booking assistance", "Emergency travel support"],
    },
    {
      id: 8,
      icon: <Lightning className="h-8 w-8" />,
      title: "Utilities",
      description:
        "Billing inquiries, outage support, customer onboarding, and SLA-tied resolution for high-volume operations.",
      gradient: "from-yellow-500 to-orange-500",
      challenges: ["High call volumes", "Emergency outage support", "Billing complexity"],
      solutions: ["Emergency response teams", "Billing specialists", "Outage communication protocols"],
    },
    {
      id: 9,
      icon: <Phone className="h-8 w-8" />,
      title: "Telecom & Connectivity",
      description: "Large volume of customer calls, multilingual needs, 24/7 SLAs — NGT's sweet spot.",
      gradient: "from-indigo-500 to-purple-500",
      challenges: ["High call volumes", "Technical troubleshooting", "Service activation support"],
      solutions: ["High-volume call handling", "Technical support specialists", "24/7 service activation"],
    },
    {
      id: 10,
      icon: <FileText className="h-8 w-8" />,
      title: "Insurance & Claims",
      description: "Perfect for BackGrid — SLA-based workflows, data-heavy processing, and compliance needs.",
      gradient: "from-blue-600 to-indigo-600",
      challenges: ["Claims processing complexity", "Regulatory compliance", "Documentation requirements"],
      solutions: ["Claims processing specialists", "Compliance-first workflows", "Audit-ready documentation"],
    },
    {
      id: 11,
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & EdTech",
      description:
        "Inbound support for platforms, student onboarding, helpdesks, ticket resolution — often multilingual.",
      gradient: "from-green-600 to-teal-600",
      challenges: ["Student onboarding", "Platform support", "Multi-language needs"],
      solutions: ["Student support specialists", "Platform troubleshooting", "Multilingual assistance"],
    },
    {
      id: 12,
      icon: <Building className="h-8 w-8" />,
      title: "Public Sector & Government",
      description: "Support hotlines, citizen response centers, regulatory ticketing, and compliance-driven staffing.",
      gradient: "from-gray-600 to-blue-600",
      challenges: ["Citizen service requirements", "Regulatory compliance", "High-volume inquiries"],
      solutions: ["Citizen service centers", "Regulatory support", "Government compliance protocols"],
    },
    {
      id: 13,
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare",
      description:
        "HIPAA-compliant patient interactions, insurance processing, and appointment desk services — delivered with care and accuracy.",
      gradient: "from-red-600 to-pink-600",
      challenges: ["Patient privacy requirements", "Insurance processing", "Appointment coordination"],
      solutions: ["HIPAA-compliant operations", "Insurance specialists", "Patient care coordination"],
    },
    {
      id: 14,
      icon: <Package className="h-8 w-8" />,
      title: "Logistics & SaaS",
      description:
        "Integrated virtual staff for backend ops, support ticketing, and client onboarding in time-sensitive environments.",
      gradient: "from-purple-600 to-indigo-600",
      challenges: ["Time-sensitive operations", "Backend processing", "Client onboarding"],
      solutions: ["Integrated virtual teams", "Backend operations support", "Streamlined onboarding"],
    },
    {
      id: 15,
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financial Services",
      description:
        "Regulatory compliance, transactional assistance, and multilingual support for high-value customer portfolios.",
      gradient: "from-blue-700 to-cyan-700",
      challenges: ["Regulatory requirements", "High-value transactions", "Compliance monitoring"],
      solutions: ["Regulatory compliance teams", "Transaction specialists", "Compliance monitoring"],
    },
    {
      id: 16,
      icon: <Rocket className="h-8 w-8" />,
      title: "Startups / Scale-ups",
      description:
        "Agile support teams and virtual staff that flex with growth — built to deliver impact without overhead.",
      gradient: "from-pink-600 to-red-600",
      challenges: ["Rapid scaling needs", "Budget constraints", "Flexible requirements"],
      solutions: ["Flexible scaling models", "Cost-effective solutions", "Agile support teams"],
    },
  ];

  const stats = [
    { number: "17+", label: "Industries Served", icon: <Globe className="h-6 w-6" /> },
    { number: "5", label: "Continents", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Always-On Support", icon: <Clock className="h-6 w-6" /> },
    { number: "700+", label: "Expert Agents", icon: <Shield className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
   <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden min-h-screen flex justify-center items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-blue-400/8 rounded-full blur-2xl animate-float-fast"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-2000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Globe className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
              <span className="text-base text-gray-700">Industries We Serve</span>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              Industries We <span className="text-[#0C5DE2]">Understand</span>
              <br />
              Problems We <span className="text-[#0C5DE2]">Solve</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed -mt-4">
              NGT supports critical industries where customer expectations are high and compliance is vital, without compromising scale. We integrate seamlessly into complex environments <br /> where every moment matters.
            </p>

            <div className="w-24 h-1.5 bg-[#0C5DE2] mx-auto rounded-full mb-6 animate-pulse-glow mt-6"></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#0C5DE2] rounded-xl mb-4 mx-auto text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow mx-auto">
              <Globe className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
              <span className="text-base text-gray-700">All Sectors</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              Each Sector We Serve Brings <span className="text-[#0C5DE2]">Different Expectations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed -mt-4">
              That's why we don't copy-paste support models. We build them with your industry in mind.
            </p>
          </div>

          {/* Collapsed Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.id}
                onClick={() => openModal(sector)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Collapsed Card - Only Header */}
                <div className={`bg-gradient-to-r ${sector.gradient} p-6 text-white relative overflow-hidden h-40 flex flex-col justify-center items-center text-center`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 mx-auto">
                      {sector.icon}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">{sector.title}</h3>
                    <div className="mt-3 text-xs opacity-75">Click to learn more</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay with Fade Animation */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${isModalAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${isModalAnimating
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-95 opacity-0 translate-y-4'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedSector.gradient} p-6 text-white relative overflow-hidden`}>
              {/* <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button> */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                  {selectedSector.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedSector.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedSector.description}</p>

              {/* Challenges */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                  <Target className="h-5 w-5 mr-2 text-red-500" />
                  Key Challenges:
                </h4>
                <ul className="space-y-3">
                  {selectedSector.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  NGT Solutions:
                </h4>
                <ul className="space-y-3">
                  {selectedSector.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Integration Section */}
   <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg border border-white/20">
              <Zap className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
              <span className="text-base text-gray-700 font-medium">Service Integration</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How NGT <span className="text-[#0C5DE2]">Integrates</span> Into Your Industry
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every industry has unique workflows, compliance requirements, and customer expectations. NGT's three-layer
              service model adapts to your specific sector needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Engage360 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CEA911] to-[#CEA911]"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#CEA911] to-[#CEA911] rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10" />
              </div>
              <div className="mb-4">
                {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">Engage360</h3> */}
                <Image src="/ServicesLogos/New360.png" alt="360" width={200} height={200}  className="text-2xl font-bold text-gray-900 mb-2"/>
                <div className="w-12 h-1 bg-gradient-to-r from-[#CEA911] to-[#CEA911] rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Frontline customer conversations across all industries — from healthcare appointment scheduling to
                financial services support and e-commerce order handling.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-yellow-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-yellow-600" />
                  </div>
                  Industry-specific scripts
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-yellow-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-yellow-600" />
                  </div>
                  Compliance-trained agents
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-yellow-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-yellow-600" />
                  </div>
                  Multilingual support
                </div>
              </div>
            </div>

            {/* WorkForge */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#550203] to-[#550203]"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#550203] to-[#550203] rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10" />
              </div>
              <div className="mb-4">
                <Image src="/ServicesLogos/NewForge.png" alt="360" width={200} height={200}  className="text-2xl font-bold text-gray-900 mb-2"/>
                <div className="w-12 h-1 bg-gradient-to-r from-[#550203] to-[#550203] rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Virtual staffing solutions tailored to industry workflows — from healthcare data entry to SaaS customer
                onboarding and logistics coordination.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-red-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-red-600" />
                  </div>
                  Industry workflow integration
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-red-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-red-600" />
                  </div>
                  Dedicated virtual teams
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-red-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-red-600" />
                  </div>
                  Time-zone alignment
                </div>
              </div>
            </div>

            {/* BackGrid */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#29476C] to-[#29476C]"></div>
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#29476C] to-[#29476C] rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10" />
              </div>
              <div className="mb-4">
                <Image src="/ServicesLogos/NewGrid.png" alt="360" width={200} height={200}  className="text-2xl font-bold text-gray-900 mb-2 -mt-2"/>
                <div className="w-12 h-1 bg-gradient-to-r from-[#29476C] to-[#29476C] rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compliance-first operations for regulated industries — healthcare claims processing, financial
                documentation, and insurance workflow management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  HIPAA/PCI compliance
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  Audit-ready processes
                </div>
                <div className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  Quality assurance layers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-6">Not Sure If We Fit Your Industry?</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We've helped brands across 5 continents solve for scale, compliance, and experience. If your customers
              expect more — we're built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Talk to an Industry Specialist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                <Globe className="mr-2 h-5 w-5" />
                View All Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }
      `}</style>
    </div>
  );
};

export default SectorsPage;