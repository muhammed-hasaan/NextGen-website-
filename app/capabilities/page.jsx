// "use client"
// import React, { useState, useEffect, useRef } from "react"
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Sparkles,
//   Zap,
//   Phone,
//   Users,
//   Shield,
//   Bot,
//   ArrowRight,
//   Globe,
//   Clock,
//   Target,
//   TrendingUp,
//   Award,
//   CheckCircle,
//   Database,
//   Settings,
//   Lock,
//   FileText,
//   Rocket,
//   Mail,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Facebook,
//   Star,
//   Activity,
//   Layers,
//   AlertCircle,
//   BarChart3,
//   Headphones,
//   Search,
//   Send,
//   Workflow,
//   Gauge,
//   CheckCircle2,
//   Eye,
//   MonitorSpeaker,
//   UserCheck,
//   ClipboardCheck,
//   MessageSquare,
//   Lightbulb,
//   Infinity,
//   Building,
//   Scale,
//   Timer,
//   ThumbsUp,
//   Percent,
//   TrendingDown,
//   BarChart,
//   LineChart,
//   PieChart,
//   Cpu,
//   Network,
//   Briefcase,
//   ShoppingCart,
//   CreditCard,
//   Calendar,
//   HeartHandshake,
//   Stethoscope,
//   DollarSign,
//   TruckIcon,
//   PlayCircle,
//   GraduationCap,
//   MapIcon,
//   ArrowUpRight,
//   Zap as ZapIcon,
//   Users as UsersIcon,
//   Shield as ShieldIcon
// } from "lucide-react"

// import Header from "@/components/Header.jsx"
// import Footer from "@/components/Footer.jsx"

// function Capabilities() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeService, setActiveService] = useState(0)
//   const [currentWord, setCurrentWord] = useState(0)

//   const words = [
//     { text: "Talk", color: "text-blue-600" },
//     { text: "Track", color: "text-purple-600" },
//     { text: "Resolve", color: "text-green-600" },
//     { text: "Repeat", color: "text-orange-600" },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length)
//     }, 2500)
//     return () => clearInterval(interval)
//   }, [])

//   const services = [
//     {
//       id: "engage360",
//       icon: <Phone className="h-6 w-6" />,
//       title: "Engage360",
//       subtitle: "Customer-First Communication",
//       description: "Fully-managed call center operations covering inbound, outbound, and multilingual customer conversations with enterprise-grade reliability.",
//       gradient: "from-blue-500 to-cyan-500",
//       color: "blue",
//       features: [
//         "24/7 inbound & outbound calling",
//         "Multilingual support (English & Arabic)",
//         "CRM integration & real-time dashboards",
//         "Quality assurance & SOP compliance",
//         "Appointment scheduling & follow-ups"
//       ],
//       stats: { number: "< 30s", label: "Response Time" },
//       benefits: [
//         "Native language fluency",
//         "Global time zone coverage",
//         "Scalable team deployment",
//         "Performance analytics"
//       ]
//     },
//     {
//       id: "workforge",
//       icon: <Users className="h-6 w-6" />,
//       title: "WorkForge",
//       subtitle: "Virtual Workforce Excellence",
//       description: "Dedicated offshore professionals integrated seamlessly into your workflows, tools, and schedules for maximum operational efficiency.",
//       gradient: "from-purple-500 to-pink-500",
//       color: "purple",
//       features: [
//         "Virtual assistants & admin support",
//         "Live chat & customer service",
//         "Data entry & document processing",
//         "Order management & billing",
//         "Technical support & helpdesk"
//       ],
//       stats: { number: "700+", label: "Professionals" },
//       benefits: [
//         "Time-zone aligned staff",
//         "Zero overhead costs",
//         "Integrated workflows",
//         "Performance tracking"
//       ]
//     },
//     {
//       id: "backgrid",
//       icon: <Shield className="h-6 w-6" />,
//       title: "BackGrid",
//       subtitle: "Compliance-First Operations",
//       description: "Secure, auditable process execution for sensitive operations with full regulatory compliance and documentation standards.",
//       gradient: "from-green-500 to-teal-500",
//       color: "green",
//       features: [
//         "HIPAA & PCI compliant processes",
//         "Claims & healthcare processing",
//         "Financial documentation",
//         "Audit trails & quality control",
//         "Regulatory compliance management"
//       ],
//       stats: { number: "99.9%", label: "Compliance Rate" },
//       benefits: [
//         "Multi-layer security",
//         "Audit documentation",
//         "Risk mitigation",
//         "Regulatory alignment"
//       ]
//     },
//   ]

//   const supportLayers = [
//     {
//       icon: <Globe className="h-5 w-5" />,
//       title: "Global Reach",
//       description: "Native English and Arabic support with cultural context",
//       color: "blue"
//     },
//     {
//       icon: <Clock className="h-5 w-5" />,
//       title: "24/7 Operations",
//       description: "Round-the-clock availability across all time zones",
//       color: "purple"
//     },
//     {
//       icon: <Shield className="h-5 w-5" />,
//       title: "Compliance Ready",
//       description: "Full regulatory adherence with audit trails",
//       color: "green"
//     },
//     {
//       icon: <Bot className="h-5 w-5" />,
//       title: "AI Enhanced",
//       description: "Niblo AI integration for intelligent automation",
//       color: "orange"
//     },
//   ]

//   const performanceStats = [
//     { number: "98%", label: "SLA Success", icon: <Target className="h-5 w-5" /> },
//     { number: "45%", label: "Faster Resolution", icon: <Clock className="h-5 w-5" /> },
//     { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="h-5 w-5" /> },
//     { number: "92%", label: "Client Satisfaction", icon: <Award className="h-5 w-5" /> },
//   ]

//   const useIntersectionObserver = (ref, threshold = 0.1) => {
//     const [isIntersecting, setIntersecting] = useState(false)

//     useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold })

//       if (ref.current) {
//         observer.observe(ref.current)
//       }

//       return () => observer.disconnect()
//     }, [ref, threshold])

//     return isIntersecting
//   }

//   const heroRef = useRef()
//   const servicesRef = useRef()
//   const supportRef = useRef()
//   const statsRef = useRef()
//   const nibloRef = useRef()

//   const heroVisible = useIntersectionObserver(heroRef)
//   const servicesVisible = useIntersectionObserver(servicesRef)
//   const supportVisible = useIntersectionObserver(supportRef)
//   const statsVisible = useIntersectionObserver(statsRef)
//   const nibloVisible = useIntersectionObserver(nibloRef)

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
      
//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden min-h-screen flex justify-center items-center"
//       >
//         {/* Subtle Background Elements */}
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//           <div className="absolute top-80 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//           {/* <div className="absolute bottom-2 left-1/5 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div> */}
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
//             {/* Badge */}
            
//               <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow mx-auto">
//               <Sparkles className="h-4 w-4 text-blue-500" />
//               <span className="text-base  text-gray-700">NGT Capabilities</span>
//             </div>
//             {/* <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
//               <Sparkles className="h-4 w-4" />
//                           <span className="text-base  text-gray-700">NGT Capabilities</span>
//                         </div> */}

//             {/* Main Headline */}
//             <h1 className="text-4xl md:text-4xl lg:text-5xl  text-gray-900 mb-6 leading-tight">
//               <span className="relative">
//                 <span
//                   key={currentWord}
//                   className={`text-[#0f67ce] transition-all duration-500 inline-block`}
//                 >
//                   {words[currentWord].text}
//                 </span>
//               </span>
//               <span className="text-gray-700">. Track. Resolve. Repeat.</span>
//             </h1>

//             {/* Subheadline */}
//             <p className="text-md text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed -mt-4">
//               Complete customer operations lifecycle powered by multilingual expertise, 
//               virtual workforce, and compliance-first execution
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 -mt-4">
//               <button className="group bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105">
//                 <Phone className="h-5 w-5" />
//                 <span>Start Discovery Call</span>
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               {/* <button className="group bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 border border-gray-200 hover:border-gray-300">
//                 <Target className="h-5 w-5" />
//                 <span>Get Capability Map</span>
//               </button> */}
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 -mt-4">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span>24/7 Active</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Globe className="h-4 w-4" />
//                 <span>Global Scale</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Shield className="h-4 w-4" />
//                 <span>Fully Compliant</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={servicesRef} className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//                          <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow mx-auto">
//               <Sparkles className="h-4 w-4 text-blue-500" />
//               <span className="text-base  text-gray-700">NGT Capabilities</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
//               Three Layers. <span className="text-blue-600">One System.</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto -mt-4">
//               Each vertical solves specific operational challenges while working as a cohesive whole
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`group relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 {/* Service Icon & Title */}
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white`}>
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl  text-gray-900">{service.title}</h3>
//                     <p className="text-sm text-gray-600">{service.subtitle}</p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-3 mb-6">
//                   {service.features.slice(0, 3).map((feature, idx) => (
//                     <div key={idx} className="flex items-center space-x-3">
//                       <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Stats */}
//                 <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                   <div className="text-center">
//                     <div className={`text-2xl  text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
//                       {service.stats.number}
//                     </div>
//                     <div className="text-sm text-gray-600">{service.stats.label}</div>
//                   </div>
//                 </div>

//                 {/* Learn More */}
//                 {/* <button className="w-full text-left group-hover:text-blue-600 transition-colors duration-200 flex items-center justify-between">
//                   <span className="font-medium">Learn More</span>
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </button> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Support Infrastructure */}
//       <section ref={supportRef} className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
//               Built on <span className="text-blue-600">Solid Foundations</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Core infrastructure designed for reliability, compliance, and global scale
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {supportLayers.map((layer, index) => (
//               <div
//                 key={index}
//                 className={`text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${layer.color}-100 text-${layer.color}-600 mb-4`}>
//                   {layer.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{layer.title}</h3>
//                 <p className="text-sm text-gray-600">{layer.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Niblo AI Section */}
//       <section ref={nibloRef} className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${nibloVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             {/* Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
//                 <Bot className="h-4 w-4" />
//                 <span className="text-sm font-medium">AI Enhancement</span>
//               </div>

//               <div>
//                 <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
//                   Meet <span className="text-orange-600">Niblo AI</span>
//                 </h2>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   Our proprietary AI agent that intelligently augments human operations with 
//                   smart routing, automated responses, and seamless handoffs to live agents.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   "Real-time voice interaction",
//                   "Multilingual understanding",
//                   "Intelligent call routing",
//                   "Seamless human handoff"
//                 ].map((feature, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
//                 <span>Explore Niblo</span>
//                 <ArrowUpRight className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Visual */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
//                 <div className="text-center">
//                   <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6">
//                     <Bot className="h-10 w-10" />
//                   </div>
//                   <h3 className="text-xl  text-gray-900 mb-2">Niblo AI Agent</h3>
//                   <p className="text-gray-600 mb-6">Always learning, always improving</p>
                  
//                   <div className="grid grid-cols-2 gap-4 text-sm">
//                     <div className="bg-gray-50 rounded-lg p-3">
//                       <div className="text-orange-600 font-semibold">Real-time</div>
//                       <div className="text-gray-600">Response</div>
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-3">
//                       <div className="text-orange-600 font-semibold">24/7</div>
//                       <div className="text-gray-600">Available</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Performance Stats */}
//       <section ref={statsRef} className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             <h2 className="text-3xl md:text-4xl  text-gray-900 mb-4">
//               Performance That <span className="text-blue-600">Delivers</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Measurable results across every metric that matters
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {performanceStats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`text-center p-6 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl  text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl  text-white mb-6">
//             Ready to Transform Your Operations?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//             NGT delivers multilingual scale, structured processes, and intelligent execution 
//             in one seamless platform.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
//               Start Discovery Call
//             </button>
//             <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
//               Get Custom Map
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
  

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//         <style jsx>{`
//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
        
//         .animate-float-slow {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-medium {
//           animation: float 4s ease-in-out infinite;
//         }
        
//         .animate-float-fast {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
//           50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Capabilities;


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
      title: "Global Reach",
      description: "Native English and Arabic support with cultural context",
      color: "blue"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Operations",
      description: "Round-the-clock availability across all time zones",
      color: "purple"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Compliance Ready",
      description: "Full regulatory adherence with audit trails",
      color: "green"
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI Enhanced",
      description: "Niblo AI integration for intelligent automation",
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
  const engage360Ref = useRef()
  const workforgeRef = useRef()
  const backgridRef = useRef()
  const supportRef = useRef()
  const statsRef = useRef()
  const nibloRef = useRef()

  const heroVisible = useIntersectionObserver(heroRef)
  const engage360Visible = useIntersectionObserver(engage360Ref)
  const workforgeVisible = useIntersectionObserver(workforgeRef)
  const backgridVisible = useIntersectionObserver(backgridRef)
  const supportVisible = useIntersectionObserver(supportRef)
  const statsVisible = useIntersectionObserver(statsRef)
  const nibloVisible = useIntersectionObserver(nibloRef)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden min-h-screen flex justify-center items-center"
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
                <span
                  key={currentWord}
                  className={`text-[#0f67ce] transition-all duration-500 inline-block`}
                >
                  {words[currentWord].text}
                </span>
              </span>
              <span className="text-gray-700">. Track. Resolve. Repeat.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-md text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed -mt-4">
              Complete customer operations lifecycle powered by multilingual expertise, 
              virtual workforce, and compliance-first execution
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 -mt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105">
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

      {/* Engage360 Section */}
      <section ref={engage360Ref} className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${engage360Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#CFA912] text-white rounded-full px-4 py-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Customer Communication</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {/* <span className="text-[#CFA912]">Engage360</span> */}
                                <Image src="/ServicesLogos/New360-bg.png" alt="engage360" width={200} height={200}/>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fully-managed call center operations covering inbound, outbound, and multilingual 
                  customer conversations with enterprise-grade reliability.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "24/7 inbound & outbound calling",
                  "Multilingual support (English & Arabic)",
                  "CRM integration & real-time dashboards",
                  "Quality assurance & SOP compliance",
                  "Appointment scheduling & follow-ups"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#CFA912]"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#CFA912]">{'< 30s'}</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#CFA912]">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className=" rounded-2xl p-2 flex justify-center items-center">
                            <Image src="/ServicesLogos/Engage360Illustration.png" alt="engage360" width={500} height={500}/>


                  {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-6">
                    <Phone className="h-10 w-10" />
                  </div>
                  <p className="text-gray-600 mb-6">Native language fluency with global coverage</p>
                  n
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-blue-600 font-semibold">English</div>
                      <div className="text-gray-600">Native</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-blue-600 font-semibold">Arabic</div>
                      <div className="text-gray-600">Native</div>
                    </div>
                  </div> */}
              </div>     </div>
          </div>
        </div>
      </section>

      {/* WorkForge Section */}
      <section ref={workforgeRef} className="py-20 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${workforgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl p-8 ">
              <Image src="/ServicesLogos/WorkForgeIllustration.png" alt="Work Forge" width={400} height={400}/>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-[#550201] text-white rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Virtual Workforce</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {/* <span className="text-[#520401]">WorkForge</span> */}
                                                  <Image src="/ServicesLogos/NewForge-bg.png" alt="engage360" width={200} height={200}/>

                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dedicated offshore professionals integrated seamlessly into your workflows, 
                  tools, and schedules for maximum operational efficiency.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Virtual assistants & admin support",
                  "Live chat & customer service",
                  "Data entry & document processing",
                  "Order management & billing",
                  "Technical support & helpdesk"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#520401]"></div>
                    <span className="text-[#520401]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#520401]">700+</div>
                  <div className="text-sm text-gray-600">Professionals</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#520401]">100%</div>
                  <div className="text-sm text-gray-600">Integration</div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {/* <span className="text-[#284867]">BackGrid</span> */}
                                                                    <Image src="/ServicesLogos/NewGrid-bg.png" alt="engage360" width={200} height={200}/>

                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Secure, auditable process execution for sensitive operations with full 
                  regulatory compliance and documentation standards.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "HIPAA & PCI compliant processes",
                  "Claims & healthcare processing",
                  "Financial documentation",
                  "Audit trails & quality control",
                  "Regulatory compliance management"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#284867]"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#284867]">99.9%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#284867]">100%</div>
                  <div className="text-sm text-gray-600">Audit Ready</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className=" rounded-2xl p-8 ">
                             <Image src="/ServicesLogos/BackGridIllustration.png" alt="engage360" width={500} height={500}/>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Infrastructure */}
      <section ref={supportRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{layer.title}</h3>
                <p className="text-sm text-gray-600">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niblo AI Section */}
      {/* <section ref={nibloRef} className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${nibloVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Bot className="h-4 w-4" />
                <span className="text-sm font-medium">AI Enhancement</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet <span className="text-orange-600">Niblo AI</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our proprietary AI agent that intelligently augments human operations with 
                  smart routing, automated responses, and seamless handoffs to live agents.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Real-time voice interaction",
                  "Multilingual understanding",
                  "Intelligent call routing",
                  "Seamless human handoff"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                <span>Explore Niblo</span>
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6">
                    <Bot className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Niblo AI Agent</h3>
                  <p className="text-gray-600 mb-6">Always learning, always improving</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-orange-600 font-semibold">Real-time</div>
                      <div className="text-gray-600">Response</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-orange-600 font-semibold">24/7</div>
                      <div className="text-gray-600">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Performance Stats */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            NGT delivers multilingual scale, structured processes, and intelligent execution 
            in one seamless platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Start Discovery Call
            </button>
            {/* <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Get Custom Map
            </button> */}
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