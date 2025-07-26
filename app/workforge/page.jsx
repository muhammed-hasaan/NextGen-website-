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
  Percent,
  Earth,
  Briefcase,
  PenTool,
  FileText,
  Calculator,
  Calendar,
  UserPlus,
  Layers,
  DollarSign,
  Lock,
  CheckSquare
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const WorkForgePage = () => {
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
      setCurrentServiceIndex((prev) => (prev + 1) % 7);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Bilingual Customer Support Representatives",
      description: "Fluent Arabic + English agents with cultural sensitivity and CX training",
      subtext: "Live support across voice, chat, email, and social platforms",
      color: "#550203"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Virtual Admins & Project Coordinators",
      description: "Inbox, calendar, and documentation management",
      subtext: "Workflow follow-ups, data organization, project tracking",
      color: "#7A0304"
    },
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Sales Development Reps (SDRs)",
      description: "Lead qualification, CRM updates, outbound outreach",
      subtext: "Personalized scripts, appointment setting, and pipeline building",
      color: "#9F0405"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Writers & Designers",
      description: "Product descriptions, social media copy, blogs, presentation decks",
      subtext: "Ad creatives, packaging visuals, social media graphics, reels",
      color: "#C40506"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Medical Billing Assistants",
      description: "CPT/ICD coding assistance, claim submission, denial resolution",
      subtext: "Trained in HIPAA-ready systems and secure workflows",
      color: "#E90607"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate Virtual Assistants",
      description: "MLS listings, property brochures, inbound call handling",
      subtext: "Maintenance coordination, document processing",
      color: "#FF2A2B"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Fully Embedded Teams",
      description: "Work in your tools, your hours, your language",
      subtext: "Branded email accounts, Slack access, SOP-driven delivery",
      color: "#FF5C5D"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Not Freelancers. Not BPO. Fully Embedded Talent.",
      description: "We don't drop random VAs into your business. We build trained, documented, process-aligned support teams that work inside your environment."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "One Team. Multiple Roles.",
      description: "Mix and match virtual roles under one account — one client dashboard, one relationship, total visibility."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Arabic + English Proficiency",
      description: "Ideal for companies operating across the U.S. and MENA regions. Our talent speaks your customer's language — literally."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Onboarding",
      description: "Your dedicated WorkForge team is onboarded and trained within 7–10 business days — with SOPs, templates, and communication cadences already in place."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Your Systems. Your Tools.",
      description: "We don't force platform migrations. Our talent is embedded directly into your CRMs, Helpdesks, Project tools, Messaging platforms, and EMR systems."
    }
  ];

  const metrics = [
    { number: "65%", label: "Reduce costs vs local hiring", icon: <DollarSign className="h-5 w-5" /> },
    { number: "24/7", label: "Operate across multiple time zones", icon: <Globe className="h-5 w-5" /> },
    { number: "7-10", label: "Days to full team onboarding", icon: <Clock className="h-5 w-5" /> },
    { number: "100%", label: "Zero HR, payroll, compliance burden", icon: <Shield className="h-5 w-5" /> }
  ];

  const industries = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare & Medical Offices",
      description: "billing, admin, patient communication"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Retail & eCommerce",
      description: "product listings, support, content design"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "listings, tenant coordination, brochure design"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Tech & SaaS",
      description: "lead generation, content creation, user support"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Marketing Agencies",
      description: "SDRs, designers, writers, traffic managers"
    }
  ];

  const integrations = [
    { category: "CRMs", platforms: ["Salesforce", "HubSpot"], icon: <Database className="h-5 w-5" /> },
    { category: "Helpdesks", platforms: ["Zendesk", "Freshdesk"], icon: <Headphones className="h-5 w-5" /> },
    { category: "Project Tools", platforms: ["Asana", "ClickUp", "Trello"], icon: <CheckSquare className="h-5 w-5" /> },
    { category: "Messaging", platforms: ["Slack", "MS Teams"], icon: <MessageCircle className="h-5 w-5" /> },
    { category: "EMR Systems", platforms: ["For medical billing", "clients"], icon: <FileText className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Simplified and Clean */}
      <section
        ref={heroRef}
        id="hero"
        className="relative pt-36 pb-20 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${visibleSections.has('hero') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-10 animate-pulse-glow">
              <Briefcase className="h-4 w-4 text-red-800 animate-pulse" />
              <span className="text-sm text-gray-700">Virtual Workforce Solution</span>
            </div>
                                     <Image src="/ServicesLogos/NewForge-bg.png" alt="360" width={200} height={200} className="text-2xl  text-gray-900 mb-2 -mt-2 mx-auto"/>
             
            <div className="mb-4">
              {/* <h1 className="text-2xl md:text-3xl text-gray-600 mb-2">WorkForge™ – Your Workforce. Only Smarter.</h1> */}
              <h2 className="text-3xl md:text-4xl text-gray-900 leading-tight">
                Fully Embedded <span className="text-red-800">Virtual Talent</span>. Bilingual. Aligned. Always On.
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              {/* <div className="bg-gradient-to-r from-red-800 to-red-600 text-white p-2 flex justify-center items-center rounded-2xl mb-4">
                <h3 className="text-xl font-semibold flex justify-center items-center gap-2"><Briefcase /> Your Operations. Reinforced by On-Demand Expertise.</h3>
              </div> */}
              
              <p className="text-lg text-gray-600 leading-relaxed mb-2">
                Modern businesses are lean, remote, and always under pressure to scale without bloat. WorkForge™ is your virtual workforce solution — building dedicated, bilingual teams that work inside your systems, aligned with your brand, values, and workflows.
                              From customer support to design, medical billing to content ops — our professionals don't feel outsourced. They feel in-house.

              </p>
              
              {/* <p className="text-lg text-gray-700 font-medium">
                From customer support to design, medical billing to content ops — our professionals don't feel outsourced. They feel in-house.
              </p> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                <Phone className="h-5 w-5" />
                <span>Book a Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 border border-gray-200">
                <Play className="h-5 w-5" />
                <span>See Sample SOPs</span>
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
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Users className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">What WorkForge™ Delivers</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
               Complete <span className="text-red-800">Virtual Talent</span> Suite
            </h2>
          </div>

          {/* Interactive Service Display */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start justify-center">
            {/* Service Navigation */}
            {/* <div className="space-y-4"> */}
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    currentServiceIndex === index 
                      ? 'border-red-800 bg-red-50' 
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
            {/* </div> */}

            {/* Service Visualization */}
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div 
                  className="text-center transition-all duration-500"
                  style={{ color: services[currentServiceIndex].color }}
                >
                  <div className="mb-6">
                    {React.cloneElement(services[currentServiceIndex].icon, { className: "h-24 w-24 mx-auto" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
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
        className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('why-choose') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Heart className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">Why WorkForge™ Is Different</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
               The <span className="text-red-800">Perfect Blend</span> of Talent & Technology
            </h2>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-800 to-red-600 rounded-full"></div>
            
            <div className="space-y-8">
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
                        <div className="p-2 bg-red-800 rounded-lg text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-800 rounded-full border-4 border-white shadow-lg"></div>
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
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <BarChart3 className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">Built for Operations Leaders Who</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Leaders Who Value <span className="text-red-800">Quality</span> & <span className="text-red-600">Control</span>
            </h2>
          </div>

          {/* Dashboard-style Layout */}
          <div className="bg-white rounded-3xl p-8 text-white relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="text-center border-2 border-red-800 p-4 rounded-xl">
                  <div className="bg-red-50 rounded-2xl p-6 mb-4">
                    <Users className="h-12 w-12 mx-auto text-red-800" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Need real people working as extensions of their team</h3>
                </div>
                
                <div className="text-center border-2 border-red-800 p-4 rounded-xl">
                  <div className="bg-red-50 rounded-2xl p-6 mb-4">
                    <DollarSign className="h-12 w-12 mx-auto text-red-800" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Want cost-efficiency without compromising quality</h3>
                </div>
                
                <div className="text-center border-2 border-red-800 p-4 rounded-xl">
                  <div className="bg-red-50 rounded-2xl p-6 mb-4">
                    <TrendingUp className="h-12 w-12 mx-auto text-red-800" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Need to scale ops without bloated overhead</h3>
                </div>

                <div className="text-center border-2 border-red-800 p-4 rounded-xl">
                  <div className="bg-red-50 rounded-2xl p-6 mb-4">
                    <Target className="h-12 w-12 mx-auto text-red-800" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Care about retention, brand consistency, and performance metrics</h3>
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
        className="py-20 bg-gradient-to-br from-red-800 to-red-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('metrics') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-white text-black backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20 animate-pulse-glow">
              <Target className="h-4 w-4 text-white" />
              <span className="text-sm text-black">Use WorkForge™ To</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              🧩 Measurable <span className="text-red-100">Impact</span> On Your Operations
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
                    <div className="flex items-center justify-center w-12 h-12 bg-[#B41F1F] rounded-xl mb-4 mx-auto text-white">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">{metric.number}</div>
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
                  <CheckCircle className="h-5 w-5 text-[#B41F1F] mt-1 flex-shrink-0" />
                  <span className="text-black">Extend your team without adding office overhead</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#B41F1F] mt-1 flex-shrink-0" />
                  <span className="text-black">Gain operational support without sacrificing control or quality</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#B41F1F] mt-1 flex-shrink-0" />
                  <span className="text-black">Scale fast with zero HR, payroll, or compliance burden</span>
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
              <Building2 className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">Industries That Trust WorkForge™</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Specialized <span className="text-red-800">Industry Expertise</span>
            </h2>
          </div>

          {/* Flowing Industry Layout */}
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-red-50 to-red-50' : 'from-red-50 to-red-50'} rounded-2xl p-8`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl ${index % 2 === 0 ? 'bg-red-800' : 'bg-red-600'} text-white`}>
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                
                <div className="w-2 h-16 bg-gradient-to-b from-red-800 to-red-600 rounded-full"></div>
                
                <div className="flex-1">
                  <div className="h-32 bg-transparent rounded-2xl flex items-center justify-center">
                    <span className="text-white text-sm">Industry Visual</span>
                  </div>
                </div>
              </div>
            ))}
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
              <Settings className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">Your Systems. Your Tools.</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Seamless <span className="text-red-800">Integration</span> With Your Stack
            </h2>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-red-800/10 rounded-xl mb-4 mx-auto text-red-800">
                      {integration.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{integration.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {integration.platforms.map((platform, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-[#fff4f4] rounded-lg px-3 py-1">
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

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <Lock className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">Security & Governance</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              🔒 Enterprise-Grade <span className="text-red-800">Security</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-red-800" />
                <h3 className="text-lg font-semibold text-gray-900">ISO-Aligned Policies</h3>
              </div>
              <p className="text-gray-600">All WorkForge™ talent operates under ISO-aligned policies</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Stethoscope className="h-6 w-6 text-red-800" />
                <h3 className="text-lg font-semibold text-gray-900">HIPAA-Aware</h3>
              </div>
              <p className="text-gray-600">HIPAA-aware for healthcare roles</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-red-800" />
                <h3 className="text-lg font-semibold text-gray-900">Access Controls</h3>
              </div>
              <p className="text-gray-600">NDAs, password managers, and role-based access controls enforced</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
              <CheckSquare className="h-4 w-4 text-red-800" />
              <span className="text-sm text-gray-700">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Simple <span className="text-red-800">4-Step Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your needs, workflows, and tech stack</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Role Matching</h3>
              <p className="text-gray-600">We curate and propose your dedicated team</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Training</h3>
              <p className="text-gray-600">SOP alignment, tool access, and pilot runs</p>
            </div>

            <div className="text-center">
              <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Embedded Ops</h3>
              <p className="text-gray-600">Daily standups, weekly reviews, performance reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-10 border-2 border-red-800 mb-10 max-w-7xl mx-auto" style={{borderRadius:'40px'}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="text-6xl text-black mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-black mb-6 leading-relaxed -mt-10">
              It's like we hired locally, but better. Our SDR productivity jumped 42% in 60 days.
            </blockquote>
            <cite className="text-black font-medium -mt-16">
              — VP Operations, U.S.-based SaaS company
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-800 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-base text-white">Ready to Forge Your Dream Team?</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Let's build your <span className="text-red-100">virtual workforce</span> today
          </h2>

          <p className="text-lg text-red-100 mb-8 leading-relaxed">
            Start with just one role or scale an entire virtual department
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="flex justify-center items-center group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20">
              <FileText className="mr-2 h-5 w-5" />
              See Sample SOPs
            </button>
          </div>

          <div className="mt-8 text-red-100 text-sm">
            <Zap className="h-4 w-4 inline mr-1" />
            Get your dedicated team in 7-10 business days
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
          0%, 100% { box-shadow: 0 0 20px #550203; }
          50% { box-shadow: 0 0 40px #7A0304; }
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

export default WorkForgePage;