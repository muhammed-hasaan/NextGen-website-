"use client"
import React, { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Phone,
  Users,
  Shield,
  Bot,
  ArrowRight,
  Globe,
  Clock,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Database,
  Settings,
  Lock,
  FileText,
  Rocket,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Star,
  Activity,
  Layers,
  AlertCircle,
  BarChart3,
  Headphones,
  Search,
  Send,
  Workflow,
  Gauge,
  CheckCircle2,
  Eye,
  MonitorSpeaker,
  UserCheck,
  ClipboardCheck,
  MessageSquare,
  Lightbulb,
  Infinity,
  Building,
  Scale,
  Timer,
  ThumbsUp,
  Percent,
  TrendingDown,
  BarChart,
  LineChart,
  PieChart,
  Cpu,
  Network,
  Briefcase,
  ShoppingCart,
  CreditCard,
  Calendar,
  HeartHandshake,
  Stethoscope,
  DollarSign,
  TruckIcon,
  PlayCircle,
  GraduationCap,
  MapIcon,
  ArrowUpRight,
  Zap as ZapIcon,
  Users as UsersIcon,
  Shield as ShieldIcon
} from "lucide-react"

import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Image from "next/image"

function Capabilities() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)

  const words = [
    { text: "Talk", color: "text-blue-600" },
    { text: "Track", color: "text-purple-600" },
    { text: "Resolve", color: "text-green-600" },
    { text: "Repeat", color: "text-orange-600" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const supportLayers = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Support Layer Blocks",
      description: "English and Arabic fluency across all touchpoints — localized voice, context, and care.",
      color: "blue"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Delivery Model",
      description: "Our teams never sleep — ensuring every shift, region, and escalation is covered without delay.",
      color: "purple"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Compliance-First Execution",
      description: "From HIPAA to PCI, we operate with discipline, auditability, and documentation at every layer.",
      color: "green"
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI Automation",
      description: "Niblo AI agent routes tickets, answers routine calls, and reduces load on human agents.",
      color: "orange"
    },
  ]

  const performanceStats = [
    { number: "98%", label: "SLA Success", icon: <Target className="h-5 w-5" /> },
    { number: "45%", label: "Faster Resolution", icon: <Clock className="h-5 w-5" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="h-5 w-5" /> },
    { number: "92%", label: "Client Satisfaction", icon: <Award className="h-5 w-5" /> },
  ]

  const useIntersectionObserver = (ref, threshold = 0.1) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold })

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [ref, threshold])

    return isIntersecting
  }

  const heroRef = useRef()
  const introRef = useRef()
  const layersRef = useRef()
  const engage360Ref = useRef()
  const workforgeRef = useRef()
  const backgridRef = useRef()
  const supportRef = useRef()
  const statsRef = useRef()
  const ctaRef = useRef()

  const heroVisible = useIntersectionObserver(heroRef)
  const introVisible = useIntersectionObserver(introRef)
  const layersVisible = useIntersectionObserver(layersRef)
  const engage360Visible = useIntersectionObserver(engage360Ref)
  const workforgeVisible = useIntersectionObserver(workforgeRef)
  const backgridVisible = useIntersectionObserver(backgridRef)
  const supportVisible = useIntersectionObserver(supportRef)
  const statsVisible = useIntersectionObserver(statsRef)
  const ctaVisible = useIntersectionObserver(ctaRef)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden flex justify-center items-center"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-80 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Badge */}
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow mx-auto">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-base text-gray-700">NGT Capabilities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              <span className="relative">
                <span className={`${words[currentWord].color} transition-all duration-500 inline-block`}>
                  Talk
                </span>
              </span>
              <span className="text-gray-700">. Track. Resolve. Repeat</span>
            </h1>

            {/* Subheadline */}
            <p className="text-md text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed -mt-4">
              NGT powers the entire lifecycle of your customer operations — from live conversations and issue tracking to backend processing and SLA-driven resolution. Delivered through a smart, structured model that flexes with your business and scales globally.            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 -mt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg  flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                <Phone className="h-5 w-5" />
                <span>Start Discovery Call</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 -mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Scale</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Fully Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}

      {/* <section ref={layersRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <section ref={introRef} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
             <h1 className="text-4xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
             Introduction <span className="text-[#0C5DE2] -ml-3">duction</span>
              <br />
              Problems We <span className="text-[#0C5DE2]">Solve</span>
            </h1>  
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              You don't just need a vendor. You need an operations engine that understands when to listen, when to automate, and when to act.
            </p>
            <p className="text-lg text-gray-600">
              NGT delivers multilingual voice support, embedded virtual staff, and compliance-first execution through a 3-layered capability system. Built for reliability. Delivered with intelligence. Powered by people and process — not promises.
            </p>
          </div>
        </div>
      </section>
    </div>
      </section> */}


      <div className={`text-center mb-16 transition-all duration-1000 ${layersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} -mt-40`}>
        <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow mx-auto">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span className="text-base text-gray-700">NGT Lairs</span>
        </div>
        <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
          Three Layers. <span className="text-blue-600">One Seamless Operation.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Each NGT vertical is engineered to solve a specific layer of your operational complexity — yet designed to work as a single, cohesive system.
        </p>
      </div>
      {/* Engage360 Section */}
      <section
        ref={engage360Ref}
        className="py-20 bg-gradient-to-br from-white to-white -mt-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${engage360Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#CFA912] text-white rounded-full px-4 py-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Customer Communication</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  <Image
                    src="/ServicesLogos/New360-bg.png"
                    alt="engage360"
                    width={200}
                    height={200}
                    className="w-auto h-16 md:h-20"
                  />
                </h2>
                <p className="text-md text-gray-900 mb-4 leading-relaxed">
                  Talk to Customers. Like You’re Right There.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Engage360 is your fully-managed call center layer — covering inbound,
                  outbound, and multilingual customer conversations. Whether it’s closing
                  sales, answering support calls, following up with leads, or confirming
                  appointments, Engage360 runs your frontline the way your brand deserves
                  to be heard.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">What We Do:</h3>
                  {[
                    "Inbound & outbound calling",
                    "Helpdesk & customer support",
                    "Lead qualification & callbacks",
                    "Order handling & refunds",
                    "Appointment scheduling",
                    "Overflow & after-hours coverage",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#CFA912]"></div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">Why It Works:</h3>
                  {[
                    "Native English & Arabic support",
                    "24/7 availability across time zones",
                    "CRM + real-time dashboards",
                    "QA voice + SOP adherence",
                    "onboarding for campaigns, pilots",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CFA912]" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center">
              <div className="rounded-2xl p-2 flex justify-center items-center">
                <Image
                  src="/ServicesLogos/Engage360Illustration.png"
                  alt="engage360"
                  width={460}
                  height={460}
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WorkForge Section */}
      <section ref={workforgeRef} className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${workforgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl p-8">
                <Image src="/ServicesLogos/WorkForgeIllustration.png" alt="Work Forge" width={400} height={400} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#550201] text-white rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Virtual Workforce</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
                  <Image src="/ServicesLogos/NewForge-bg.png" alt="engage360" width={200} height={200} />
                </h2>
                <p className="text-md text-gray-900 mb-4 leading-relaxed">
                  Your Virtual Workforce. Embedded in Your Flow.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your Virtual Workforce. Embedded in Your Flow.
                  WorkForge gives you access to trained offshore professionals who operate like full-time staff — inside your tools, workflows, and schedules.
                  From back-office admin to live chat and ticketing, our virtual teams help you run leaner, smarter, and faster without the costs of in-house expansion.
                </p>
              </div>



              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">What We Do:</h3>
                  {[
                    "Inbox management & live chat",
                    "Billing & document processing",
                    "Data entry & record updates",
                    "Ticket triage & resolution",
                    "Order management & CS ops",
                    "Virtual assistants"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#550201]"></div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">Why It Works:</h3>
                  {[
                    "Time-zone aligned staff (US)",
                    "Integrate into CRM-helpdesk-ERP",
                    "Dedicated resources zero Overhead",
                    "SLA-driven task accuracy",
                    "Fully secure, tracked, and performance-managed"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#550201]" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BackGrid Section */}
      <section ref={backgridRef} className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${backgridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#2C4664] text-white rounded-full px-4 py-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Compliance Operations</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
                  <Image src="/ServicesLogos/NewGrid-bg.png" alt="engage360" width={200} height={200} />
                </h2>
                <p className="text-md text-gray-900 mb-4 leading-relaxed">
                  Process Execution. Compliant. Controlled. Auditable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">

                  BackGrid handles your most sensitive, regulation-bound operational workflows — with full process documentation, audit logs, and built-in quality control.
                  It’s where accuracy meets accountability — and where NGT’s reputation for trust begins.
                </p>
              </div>

            =

              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">What We Do:</h3>
                  {[
                    "Claims processing",
                    "Healthcare intake & billing",
                    "Financial documentation",
                    "Order-to-cash processing",
                    "SLA-bound task execution",
                    "Compliance-based workflows"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#284867]"></div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 md:w-1/2">
                  <h3 className="text-gray-900 font-semibold">Why It Works:</h3>
                  {[
                    "HIPAA, PCI &ISO-aligned process",
                    "Multi-stage QA systems",
                    "Documented SOPs for traceability",
                    "Data integrity & secure control",
                    "Ideal for healthcare, finance",
                    "logistics, insurance sectors"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#284867]" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl p-8">
                <Image src="/ServicesLogos/BackGridIllustration.png" alt="engage360" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Infrastructure */}
      <section ref={supportRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
              Built on <span className="text-blue-600">Solid Foundations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core infrastructure designed for reliability, compliance, and global scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportLayers.map((layer, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${layer.color}-100 text-${layer.color}-600 mb-4`}>
                  {layer.icon}
                </div>
                <h3 className="text-lg  text-gray-900 mb-2">{layer.title}</h3>
                <p className="text-sm text-gray-600">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      {/* <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
              Performance That <span className="text-blue-600">Delivers</span>
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results across every metric that matters
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl  text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl  text-white mb-6">
            Ready to Reinvent How Your Operations Run?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            NGT gives you the flexibility of offshore scale, the confidence of structured processes, and the power of multilingual execution — all in one intelligent delivery model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg  transition-all duration-200 hover:scale-105">
              Start Discovery Call
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg  transition-all duration-200 hover:scale-105">
              Get Custom Capability Map
            </button>
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
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
}

export default Capabilities;