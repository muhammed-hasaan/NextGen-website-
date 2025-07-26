"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageSquare,
  Bot,
  Mail,
  Star,
  CheckCircle,
  Users,
  Globe,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  ArrowRight,
  Target,
  Award,
  BarChart3,
  Heart,
  Headphones,
  MessageCircle,
  PhoneCall,
  Monitor,
  Settings,
  Database,
  Sparkles,
  Play,
  ChevronRight,
  Building2,
  ShoppingCart,
  Stethoscope,
  Home,
  Building,
  Laptop,
  Eye,
  UserCheck,
  TrendingDown,
  Percent
,Earth} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Engage360Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const smartCxRef = useRef(null);
  const metricsRef = useRef(null);
  const industriesRef = useRef(null);
  const integrationsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [heroRef, servicesRef, whyChooseRef, smartCxRef, metricsRef, industriesRef, integrationsRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Inbound & Outbound Call Center (24/7)",
      description: "Always-available, human-led call support for customer inquiries, onboarding, appointments, renewals, and more.",
      subtext: "Outbound campaigns for renewals, feedback, reminders, and upsells with full compliance and call quality assurance.",
      color: "#3B82F6"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat, Email & WhatsApp Support",
      description: "Real-time customer assistance across multiple digital channels.",
      subtext: "Seamless escalation from bot to human, with full history continuity and multilingual coverage.",
      color: "#10B981"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbots & Voicebots with Seamless Escalation",
      description: "Smart self-service experiences with built-in empathy and business logic.",
      subtext: "Smooth handover to live agents without losing customer context.",
      color: "#8B5CF6"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Feedback & NPS Collection",
      description: "Post-interaction feedback capture across all channels.",
      subtext: "Built-in analytics and dashboards to monitor satisfaction, resolve friction points, and improve CX in real time.",
      color: "#F59E0B"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Arabic + English Multilingual Support",
      description: "Native-speaking agents in both English and Arabic to ensure culturally relevant, fluent support.",
      subtext: "Ideal for regional and GCC-based businesses seeking premium bilingual CX.",
      color: "#06B6D4"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Human + AI Synergy",
      description: "We combine the warmth of real human interaction with the precision of intelligent automation. Bots handle the basics. Our agents handle what matters."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Deployment, Zero Headache",
      description: "Go live in days, not months. Our plug-and-play model integrates with your CRM, support platforms, and phone systems — no rip-and-replace needed."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Trained for Your Business",
      description: "Our agents don't just work for you — they work as you. Each one is trained on your brand tone, systems, FAQs, escalation flows, and customer personas."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Coverage, Local Sensibility",
      description: "Whether it's a Saudi customer speaking in Arabic or a U.S. customer typing in English, we provide local fluency and cultural alignment."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise-Grade Compliance",
      description: "All services are designed for HIPAA-readiness, ISO-aligned procedures, and customer data security across sectors like healthcare, finance, and government."
    }
  ];

  const metrics = [
    { number: "60%", label: "Reduce times and ticket backlogs", icon: <Clock className="h-5 w-5" /> },
    { number: "30%+", label: "Boost first-call resolution (FCR)", icon: <Target className="h-5 w-5" /> },
    { number: "100%", label: "QA-monitored interactions", icon: <Shield className="h-5 w-5" /> },
    { number: "24/7", label: "Global customer support", icon: <Globe className="h-5 w-5" /> }
  ];

  const industries = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "eCommerce & Retail",
      description: "order support, return logistics, post-purchase follow-up"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      description: "appointment booking, lab result support, benefits clarification"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "property inquiries, tenant onboarding, maintenance dispatch"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Government & Public Sector",
      description: "citizen helplines, case status updates, multilingual outreach"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Technology",
      description: "onboarding walkthroughs, app support, account recovery"
    }
  ];

  const integrations = [
    { category: "CRMs", platforms: ["Salesforce", "HubSpot", "Zoho"], icon: <Database className="h-5 w-5" /> },
    { category: "Helpdesks", platforms: ["Zendesk", "Freshdesk", "Intercom"], icon: <Headphones className="h-5 w-5" /> },
    { category: "Telephony", platforms: ["Five9", "Genesys", "Twilio"], icon: <Phone className="h-5 w-5" /> },
    { category: "Messaging", platforms: ["WhatsApp Business API", "Meta Inbox"], icon: <MessageCircle className="h-5 w-5" /> },
    { category: "Custom", platforms: ["Web based" , "App based" , "All Api based systems"], icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Simplified and Clean */}
<section
  ref={heroRef}
  id="hero"
  className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 overflow-hidden pt-36 pb-28"
>
  {/* Background blobs */}
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
    <div className="absolute top-20 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div
      className={`text-center transition-all duration-1000 ${
        visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Badge */}
      <div className="inline-flex items-center space-x-3 px-6 py-2 mb-10 rounded-full bg-white/50 backdrop-blur-md shadow-sm animate-pulse-glow ">
        <Phone className="h-4 w-4 text-[#CEA911] animate-pulse" />
        <span className="text-sm text-gray-700 font-medium">
          Customer Experience Command Center
        </span>
      </div>
                        <Image src="/ServicesLogos/New360-bg.png" alt="360" width={200} height={200} className="text-2xl  text-gray-900 mb-2 -mt-2 mx-auto"/>

      {/* Headings */}
      <div className="mb-6">

        <h2 className="text-3xl md:text-5xl  text-gray-900 leading-tight tracking-tight">
          Your{" "}
          <span className="text-[#CEA911]">Multilingual Customer Experience</span><br /> Command Center
        </h2>
      </div>

      {/* Highlight Box */}
     
      {/* Paragraph */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-2">
        <p className="text-base sm:text-md text-gray-700 leading-relaxed">
          Your customers expect more than just answers — they expect empathy,
          speed, and consistency. Engage360™ is your fully managed, AI-augmented Customer Experience (CX) layer,
          built to handle every interaction — inbound, outbound, digital, or voice — across time zones and languages.
          Whether you're a fast-scaling startup or a global enterprise, we turn every conversation into a competitive advantage.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="group bg-[#CEA911] hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-md">
          <Phone className="h-5 w-5" />
          <span>Book a Demo</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="group bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 border border-gray-200 shadow-sm">
          <Play className="h-5 w-5" />
          <span>See It In Action</span>
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Services Section - Interactive Showcase */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('services') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center space-x-3 px-6 py-2 mb-6 rounded-full bg-white/50 backdrop-blur-md shadow-sm animate-pulse-glow">
        {/* <Phone className="h-4 w-4 text-[#CEA911] animate-pulse" /> */}
              <MessageSquare className="h-4 w-4 text-yellow-600" />
        <span className="text-sm text-gray-700 font-medium">
          What Engage360™ Delivers
        </span>
      </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              💬 Complete <span className="text-[#CEA911]">Customer Experience</span> Suite
            </h2>
          </div>

          {/* Interactive Service Display */}
          <div className="grid  gap-12 items-center">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    currentServiceIndex === index 
                      ? 'border-[#CEA911] bg-yellow-50' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => setCurrentServiceIndex(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className={`p-3 rounded-lg transition-all duration-300`}
                      style={{ 
                        backgroundColor: currentServiceIndex === index ? service.color : '#f3f4f6',
                        color: currentServiceIndex === index ? 'white' : '#6b7280'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">• {service.description}</p>
                      <p className="text-gray-500 text-sm">• {service.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Visualization */}
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div 
                  className="text-center transition-all duration-500"
                  style={{ color: services[currentServiceIndex].color }}
                >
                  <div className="mb-6">
                    {React.cloneElement(services[currentServiceIndex].icon, { className: "h-24 w-24 mx-auto" })}
                  </div>
                  <h3 className="text-xl  text-gray-900 mb-4">
                    {services[currentServiceIndex].title}
                  </h3>
                  <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: services[currentServiceIndex].color }}></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Timeline Style */}
      <section
        ref={whyChooseRef}
        id="why-choose"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('why-choose') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Heart className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-700">Why Brands Choose Engage360™</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
               The <span className="text-[#CEA911]">Perfect Blend</span> of Human & AI
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#CEA911] to-yellow-600 rounded-full"></div>
            
            <div className="space-y-16">
              {whyChooseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <div className="p-2 bg-[#CEA911] rounded-lg text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#CEA911] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart CX Section - Dashboard Style */}
      <section
        ref={smartCxRef}
        id="smart-cx"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-6 transition-all duration-1000 ${visibleSections.has('smart-cx') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow" >
              <BarChart3 className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-700">Smart CX That Learns and Improves</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
               Intelligent <span className="text-[#CEA911]">Feedback Loops</span> Enable Continuous Learning
            </h2>
          </div>

          {/* Dashboard-style Layout */}
          <div className="bg-white rounded-3xl p-8 text-white relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center border-2 border-[#CEA911] p-4 rounded-xl">
                  <div className="bg-[#fff7dd] rounded-2xl p-6 mb-4">
                    <Bot className="h-12 w-12 mx-auto text-[#CEA911]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">AI monitors sentiment and flags every king of risk</h3>
                  <p className="text-sm text-black">Real-time analysis of customer emotions</p>
                </div>
                
                <div className="text-center border-2 border-[#CEA911] p-4 rounded-xl">
                  <div className="bg-[#fff7dd] rounded-2xl p-6 mb-4">
                    <Users className="h-12 w-12 mx-auto text-[#CEA911]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Supervisors coach agents based on real conversations</h3>
                  <p className="text-sm text-black">Personalized training and development</p>
                </div>
                
                <div className="text-center border-2 border-[#CEA911] p-4 rounded-xl">
                  <div className="bg-[#fff7dd] rounded-2xl p-6 mb-4">
                    <BarChart3 className="h-12 w-12 mx-auto text-[#CEA911]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Dashboards visualize your top contact drivers</h3>
                  <p className="text-sm text-black">Clear insights into resolutions and trends</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#CEA911] to-yellow-600 rounded-full px-8 py-3 font-semibold text-lg">
                  <TrendingUp className="h-5 w-5" />
                  <span>The result? A CX layer that gets better every month.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section - Infographic Style */}
      <section
        ref={metricsRef}
        id="metrics"
        className="py-20 bg-gradient-to-br from-[#CEA911] to-yellow-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('metrics') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20 animate-pulse-glow">
              <Target className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Use Engage360™ To</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
               Measurable <span className="text-yellow-300">Impact</span> On Your Business
            </h2>
          </div>

          {/* Flowing Metrics Layout */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center relative"
                >
                  <div className="bg-white backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#CC990A] rounded-xl mb-4 mx-auto text-white">
                      {metric.icon}
                    </div>
                    <div className="text-3xl  text-black mb-2">{metric.number}</div>
                    <div className="text-sm text-black font-medium">{metric.label}</div>
                  </div>
                  
                  {/* Connecting Lines */}
                  {index < metrics.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-black/30"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="bg-white backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-black mb-6 text-center">Additional Benefits:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#CC980A] mt-1 flex-shrink-0" />
                  <span className="text-black">Improve NPS and customer satisfaction without scaling headcount</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#CC980A] mt-1 flex-shrink-0" />
                  <span className="text-black">Support global customers with localized service teams</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#CC980A] mt-1 flex-shrink-0" />
                  <span className="text-black">Protect your brand with 100% QA-monitored interactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Hexagonal Grid */}
      <section
        ref={industriesRef}
        id="industries"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('industries') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Building2 className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-700">Industries We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
               Specialized <span className="text-[#CEA911]">Industry Expertise</span>
            </h2>
          </div>

          {/* Flowing Industry Layout */}
         <div className="space-y-8">
  {Array.from({ length: Math.ceil(industries.length / 2) }).map((_, rowIndex) => {
    const firstIndex = rowIndex * 2;
    const firstIndustry = industries[firstIndex];
    const secondIndustry = industries[firstIndex + 1];

    return (
      <div key={rowIndex} className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8">
        {/* First Industry Card */}
        <div className="flex-1">
          <div className="bg-yellow-50 rounded-2xl p-6 h-full">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-xl bg-[#CEA911] text-white">
                {firstIndustry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{firstIndustry.title}</h3>
            </div>
            <p className="text-gray-600">{firstIndustry.description}</p>
          </div>
        </div>

        {/* Center Divider */}
        {secondIndustry && (
          <div className="w-2 h-24 bg-gradient-to-b from-[#CEA911] to-yellow-600 rounded-full hidden sm:block self-center"></div>
        )}

        {/* Second Industry Card (if exists) */}
        {secondIndustry && (
          <div className="flex-1">
            <div className="bg-yellow-50 rounded-2xl p-6 h-full">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-[#CEA911] text-white">
                  {secondIndustry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{secondIndustry.title}</h3>
              </div>
              <p className="text-gray-600">{secondIndustry.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>

        </div>
      </section>

      {/* Integrations Section - Network Style */}
      <section
        ref={integrationsRef}
        id="integrations"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('integrations') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Settings className="h-4 w-4 text-[#CEA911]" />
              <span className="text-sm text-gray-700">Integrations & Platforms</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Seamless <span className="text-[#CEA911]">Integration</span> With Your Stack
            </h2>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-[#CEA911]/10 rounded-xl mb-4 mx-auto text-[#CEA911]">
                      {integration.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{integration.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {integration.platforms.map((platform, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-yellow-50 rounded-lg px-3 py-1">
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* Testimonial Quote */}


      <section className="py-10 border-2 border-[#d8a715] mb-10 max-w-7xl mx-auto " style={{borderRadius:'40px'}}>
        <div className="max-w-4xl mx-auto  text-center">
          <div className="relative">
            <div className="text-6xl text-black mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-black mb-6 leading-relaxed -mt-10">
              Engage360 feels like our in-house team. Our CSAT has never been higher.
            </blockquote>
            <cite className="text-black font-medium -mt-22">
              — CX Director, Leading GCC Retail Brand
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#CEA911] to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-base text-white">Ready to Transform Your CX?</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Let's turn your support into a <span className="text-yellow-100">competitive edge</span>
          </h2>

          <p className="text-lg text-yellow-100 mb-8 leading-relaxed">
            Get a fully managed team in less than 10 days and start delivering exceptional customer experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-[#CEA911] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className=" flex justify-center items-center group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20">
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Experts
            </button>
          </div>

          <div className="mt-8 text-yellow-100 text-sm">
            <Zap className="h-4 w-4 inline mr-1" />
            Get a fully managed team in less than 10 days
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

       <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px #CEA911; }
          50% { box-shadow: 0 0 40px #D5B533; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-scale-in { animation: scale-in 0.8s ease-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .bg-dots-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 15px 15px;
        }

        .bg-lines-pattern {
          background-image: repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 10px);
        }

        .bg-waves-pattern {
          background-image: repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 8px);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Engage360Page;