'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Database, FileText, CheckCircle, Lock, Users, BarChart3, Settings, Clock, Target, Award, Building2, Stethoscope, CreditCard, ShoppingCart, Home, Building, Eye, Server, FileCheck, Zap, TrendingUp, ArrowRight, Phone, Calendar, Grid3X3, Layers, Search, Upload, Download, CheckSquare, AlertTriangle, Activity, Workflow, HardDrive, Cloud, Key, UserCheck, FileX, Clipboard, PieChart, LineChart, Globe, Mail, Folder, Archive, ScanLine, Calculator, CreditCard as Invoice, Car as IdCard, FormInput, HeartHandshake, MapPin, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const BackGridPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const metricsRef = useRef(null);
  const industriesRef = useRef(null);
  const integrationsRef = useRef(null);
  const processRef = useRef(null);
  const securityRef = useRef(null);

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

    const refs = [heroRef, servicesRef, whyChooseRef, metricsRef, industriesRef, integrationsRef, processRef, securityRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Data Entry & Document Digitization",
      items: [
        "Structured data entry from physical and digital documents",
        "Indexing, tagging, and cloud migration of archived records",
        "Multi-format support: PDFs, handwritten forms, scans, emails"
      ]
    },
    {
      icon: <Invoice className="h-8 w-8" />,
      title: "Invoice Matching & Financial Validation",
      items: [
        "PO-based invoice verification",
        "Three-way matching with automated flagging",
        "Exception reporting and escalation flows"
      ]
    },
    {
      icon: <IdCard className="h-8 w-8" />,
      title: "KYC Processing & ID Verification",
      items: [
        "ID capture, validation, and compliance reporting",
        "AML checklist review and real-time flagging",
        "Full audit trails for financial institutions and government clients"
      ]
    },
    {
      icon: <FormInput className="h-8 w-8" />,
      title: "Form Handling & Data Structuring",
      items: [
        "Application forms, surveys, tax records, insurance claims",
        "Data cleaning, validation, and formatting for analytics readiness"
      ]
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Medical Claim Submission",
      items: [
        "ICD/CPT coding assistance",
        "Claims preparation, submission, and follow-up workflows",
        "HIPAA-secure handling with U.S. payer experience"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Real Estate Listings Management",
      items: [
        "Accurate MLS data input, image tagging, and compliance formatting",
        "Lease document processing and renewal tracking"
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "SLA-Driven Accuracy",
      description: "Our service level agreements guarantee accuracy rates up to 99.9%, with double-layer validation, cross-checking, and spot audits built into every workflow."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Regulatory Confidence",
      description: "Whether you operate in healthcare, finance, or real estate, BackGrid™ is designed to meet HIPAA, ISO 27001, and local compliance requirements."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability Without Complexity",
      description: "Process 500 or 500,000 forms per month — without changing tools, hiring, or chasing SLAs. BackGrid expands with your operational load."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Clean Data for Smarter Decisions",
      description: "Your downstream workflows are only as good as the input. We clean, format, and structure your data so it's analytics-ready, not just stored."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Invisible, But Fully Visible",
      description: "You get live dashboards, audit logs, error tracking, and process status — all through a secure client portal. We remain invisible. You stay fully in control."
    }
  ];

  const metrics = [
    { number: "80%", label: "Eliminate backlogs and reduce turnaround time", icon: <Clock className="h-5 w-5" /> },
    { number: "99.9%", label: "Ensure consistent accuracy across document pipelines", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "100%", label: "Improve audit readiness and reduce compliance risk", icon: <Shield className="h-5 w-5" /> },
    { number: "∞", label: "Scale back-office without hiring or managing teams", icon: <Users className="h-5 w-5" /> }
  ];

  const industries = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      description: "claims, patient records, medical forms"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Banking & Fintech",
      description: "KYC, AML, invoice management"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "eCommerce",
      description: "order forms, logistics documents, invoicing"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "lease files, property listings, ID checks"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Government & NGOs",
      description: "citizen forms, surveys, identity processing"
    }
  ];

  const integrations = [
    {
      category: "Document Management",
      platforms: ["SharePoint", "DocuWare"],
      icon: <Folder className="h-5 w-5" />
    },
    {
      category: "CRMs",
      platforms: ["Salesforce", "Zoho", "HubSpot"],
      icon: <Users className="h-5 w-5" />
    },
    {
      category: "EMR Systems",
      platforms: ["Athena", "Epic"],
      icon: <Stethoscope className="h-5 w-5" />
    },
    {
      category: "RPA Bots",
      platforms: ["UiPath", "Automation Anywhere"],
      icon: <Settings className="h-5 w-5" />
    },
    {
      category: "Secure Protocols",
      platforms: ["SFTP", "encrypted email", "REST APIs"],
      icon: <Lock className="h-5 w-5" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Intake & Analysis",
      description: "We map your current document flows, compliance needs, and data structure",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "2",
      title: "SOP Development",
      description: "We build custom processes with error thresholds, approval chains, and escalation logic",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "3",
      title: "Launch & Automation",
      description: "We go live with SLAs, secure access, and validation workflows",
      icon: <Zap className="h-6 w-6" />
    },
    {
      number: "4",
      title: "Continuous QA",
      description: "Spot checks, logs, exception reporting, and optimization reviews",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const securityFeatures = [
    "HIPAA-readiness for all healthcare workflows",
    "ISO 27001-aligned policies and encryption standards",
    "Two-factor authentication, audit trails, and role-based access",
    "Secure infrastructure hosted on compliant cloud environments"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
    <Header />

      {/* Hero Section - Clean and Minimal */}
      <section
        ref={heroRef}
        id="hero"
        className="relative pt-28 pb-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${visibleSections.has('hero') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
            <div className="inline-flex items-center space-x-3 bg-[#29476C]/10 rounded-full px-6 py-3 mb-10">
              <Lock className="h-5 w-5 text-[#29476C]" />
              <span className="text-sm font-medium text-[#29476C]">Precision Behind the Scenes</span>
            </div>

                                    <Image src="/ServicesLogos/NewGrid-bg.png" alt="360" width={200} height={200} className="text-2xl  text-gray-900 mb-2 -mt-2 mx-auto"/>
            
            <h2 className="text-2xl md:text-5xl text-black mb-8 font-medium">
              Your <span className='text-[#29476C]'> Invisible Infrastructure </span> for Data, <br /> Documents, and Compliance
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              {/* <div className="bg-[#29476C] text-white p-8 rounded-2xl mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">The Backbone of Operations You Never Have to Worry About</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Every great business has an unseen engine — the layer that ensures your forms are processed, your documents are accurate, your compliance is flawless, and your backend never breaks. That's what BackGrid™ does.
                </p>
              </div> */}
              
              <p className="text-lg text-gray-700 leading-relaxed">
                It is your SLA-driven, ISO/HIPAA-ready infrastructure layer, purpose-built for businesses that run on large volumes of structured data, forms, and documentation — and cannot afford a single misstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#29476C] hover:bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Discovery Call
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white hover:bg-gray-50 text-[#29476C] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 border-[#29476C] flex items-center justify-center">
                <FileCheck className="h-5 w-5 mr-2" />
                Get Sample Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean List Layout */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('services') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-[#29476C]/10 rounded-full px-6 py-3 mb-6">
              <Grid3X3 className="h-5 w-5 text-[#29476C]" />
              <span className="text-sm font-medium text-[#29476C]">What BackGrid™ Delivers</span>
            </div>
            <h2 className="text-4xl  text-black mb-4">
              Complete Backend Infrastructure
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 hover:bg-[#29476C]/5 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-[#29476C] text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <h3 className="text-xl  text-black group-hover:text-[#29476C] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#29476C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <p className="text-gray-600 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Simple Two Column */}
      <section
        ref={whyChooseRef}
        id="why-choose"
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('why-choose') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 mb-6 shadow-lg">
              <Award className="h-5 w-5 text-[#29476C]" />
              <span className="text-sm font-medium text-[#29476C]">Why BackGrid™ Is Built for Mission-Critical Ops</span>
            </div>
            <h2 className="text-4xl  text-black mb-4">
              Enterprise-Grade Reliability
            </h2>
          </div>

          <div className="space-y-12">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#29476C] rounded-xl text-white mr-4">
                      {feature.icon}
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl  text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
                
                <div className="flex-1">
                  <div className="h-48 bg-gradient-to-br from-[#29476C]/10 to-[#29476C]/5 rounded-2xl flex items-center justify-center">
                    <div className="text-[#29476C]/30">
                      {React.cloneElement(feature.icon, { className: "h-24 w-24" })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section - Simple Grid */}
      <section
        ref={metricsRef}
        id="metrics"
        className="py-20 bg-[#29476C]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('metrics') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <BarChart3 className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Use BackGrid™ To</span>
            </div>
            <h2 className="text-4xl  text-white mb-4">
              Measurable Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto text-white">
                    {metric.icon}
                  </div>
                  <div className="text-4xl  text-white mb-4">{metric.number}</div>
                  <div className="text-sm text-blue-100 leading-relaxed">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg text-white">
                <Database className="h-5 w-5 inline mr-2" />
                Feed clean, structured data to your CRM, ERP, or analytics tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Simple List */}
   <section
  ref={industriesRef}
  id="industries"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div
      className={`text-center mb-20 transition-all duration-1000 ${
        visibleSections.has("industries") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center space-x-3 bg-[#29476C]/10 rounded-full px-6 py-2 mb-5 shadow-sm">
        <Building2 className="h-5 w-5 text-[#29476C]" />
        <span className="text-sm  text-[#29476C] tracking-wide uppercase">
          Industries We Support
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl  text-gray-900">
        Specialized Expertise
      </h2>
    </div>

    {/* Industries Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#29476C]/30 transition-all shadow-sm hover:shadow-lg group text-center"
        >
          {/* Icon Container */}
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#29476C]/10 group-hover:bg-[#29476C] text-[#29476C] group-hover:text-white transition-all duration-300">
            {industry.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg  text-gray-800 group-hover:text-[#29476C] mb-2 transition-colors">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {industry.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Integrations Section - Simple Grid */}
    
         <section
              ref={integrationsRef}
              id="integrations"
              className="py-20 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('integrations') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
                    <Settings className="h-4 w-4 text-[#29476C]" />
                    <span className="text-sm text-gray-700">System Integrations</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                    We plug  <span className="text-[#29476C]">directly into</span> your workflows
                  </h2>
                </div>
      
                {/* Clean Grid Layout */}
                <div className="grid md:grid-cols-5 gap-6">
                  {integrations.map((integration, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-60 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-center w-12 h-12 bg-[#E9ECF0] rounded-xl mb-4 mx-auto text-[#29476C]">
                            {integration.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{integration.category}</h3>
                        </div>
                        <div className="space-y-2">
                          {integration.platforms.map((platform, idx) => (
                            <div key={idx} className="text-sm text-gray-600 bg-[#E9ECF0] rounded-lg px-3 py-1">
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

      {/* Process Section - Clean Timeline */}
      <section
        ref={processRef}
        id="process"
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('process') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-[#29476C]/10 rounded-full px-6 py-3 mb-6">
              <Workflow className="h-5 w-5 text-[#29476C]" />
              <span className="text-sm font-medium text-[#29476C]">How It Works</span>
            </div>
            <h2 className="text-4xl  text-black mb-4">
              Simple 4-Step Process
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#29476C]/20 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center relative transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : ''
                  }`}
                >
                  <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center  text-2xl transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-[#29476C] text-white shadow-lg' 
                      : 'bg-white text-[#29476C] border-4 border-[#29476C]'
                  }`}>
                    {step.number}
                  </div>
                  
                  <div className={`bg-gray-50 rounded-2xl p-6 transition-all duration-300 ${
                    activeStep === index ? 'bg-[#29476C]/5 shadow-lg' : ''
                  }`}>
                    <div className={`p-3 rounded-xl mb-4 mx-auto w-fit transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-[#29476C] text-white' 
                        : 'bg-[#29476C]/10 text-[#29476C]'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg  text-black mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#29476C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="text-6xl text-white/30 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed -mt-8">
              We migrated 20 years of paper files into a structured digital system with 99.97% accuracy — and not a single missed deadline.
            </blockquote>
            <cite className="text-blue-200 font-medium text-lg">
              — COO, Regional Healthcare Network
            </cite>
          </div>
        </div>
      </section>

      {/* Security Section - Simple List */}
      <section
        ref={securityRef}
        id="security"
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('security') ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-3 bg-[#29476C]/10 rounded-full px-6 py-3 mb-6">
              <Lock className="h-5 w-5 text-[#29476C]" />
              <span className="text-sm font-medium text-[#29476C]">Security You Can Trust</span>
            </div>
            <h2 className="text-4xl  text-black mb-4">
              Enterprise Security Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-[#29476C] rounded-lg text-white flex-shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1 hover:bg-[#29476C]/5 transition-all duration-300">
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#29476C]/10 rounded-lg px-6 py-3 border-2 border-[#29476C]/20">
                <Shield className="h-6 w-6 text-[#29476C]" />
                <span className="font-semibold text-[#29476C]">HIPAA-Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#29476C]/10 rounded-lg px-6 py-3 border-2 border-[#29476C]/20">
                <Award className="h-6 w-6 text-[#29476C]" />
                <span className="font-semibold text-[#29476C]">ISO 27001-Aligned</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#29476C]/10 rounded-lg px-6 py-3 border-2 border-[#29476C]/20">
                <Lock className="h-6 w-6 text-[#29476C]" />
                <span className="font-semibold text-[#29476C]">Data Secured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#29476C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Settings className="h-5 w-5 text-white" />
            <span className="text-base font-medium text-white">Ready to Offload the Back Office?</span>
          </div>

          <h2 className="text-4xl  text-white mb-8">
            Transform Your Backend Operations
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group bg-white text-[#29476C] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a discovery call with a BackGrid™ infrastructure consultant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="space-y-4 text-blue-100">
            <div className="flex items-center justify-center">
              <FileCheck className="h-5 w-5 mr-2" />
              <span>Get a sample workflow audit and SLA plan</span>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="h-5 w-5 mr-2" />
              <span>Start with one use case or digitize your entire backend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer />
    </div>
  );
};

export default BackGridPage;