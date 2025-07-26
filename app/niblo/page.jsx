"use client"

import { useState, useEffect, useRef } from "react"
import {
  Phone,
  MessageSquare,
  Bot,
  Brain,
  Star,
  CheckCircle,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Target,
  BarChart3,
  MessageCircle,
  Settings,
  Database,
  Play,
  Eye,
  TrendingDown,
  FileText,
  Lock,
  CheckSquare,
  Network,
  Workflow,
  Mail,
  Smartphone,
  Languages,
  RotateCcw,
  Timer,
  FileCheck,
  Cloud,
  Rocket,
  Menu,
  X,
} from "lucide-react"

const NibloPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [currentCapabilityIndex, setCurrentCapabilityIndex] = useState(0)
  const [activeThinkingStep, setActiveThinkingStep] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const heroRef = useRef(null)
  const intelligenceRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const thinkingRef = useRef(null)
  const enterpriseRef = useRef(null)
  const comparisonRef = useRef(null)
  const metricsRef = useRef(null)
  const channelsRef = useRef(null)
  const deploymentRef = useRef(null)

  // Colors
  const colors = {
    orange: "#F96640",
    green: "#15A677",
    yellow: "#FAB640",
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const refs = [
      heroRef,
      intelligenceRef,
      capabilitiesRef,
      thinkingRef,
      enterpriseRef,
      comparisonRef,
      metricsRef,
      channelsRef,
      deploymentRef,
    ]
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCapabilityIndex((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThinkingStep((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const intelligenceStack = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Cognition Engine",
      description: "Understands and resolves intent in natural language",
      color: colors.orange,
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Memory Core",
      description: "Remembers users, preferences, past actions",
      color: colors.green,
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Trigger Network",
      description: "Initiates backend workflows and executes tasks",
      color: colors.yellow,
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Feedback Loops",
      description: "Continuously learns from outcomes and sentiment",
      color: colors.orange,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Persona Framework",
      description: "Speaks in your brand tone, adjusts to emotion, and context",
      color: colors.green,
    },
  ]

  const capabilities = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversational Frontline Agent",
      description: "Handles Tier-1 support across web, voice, WhatsApp, Messenger, and more",
      color: colors.orange,
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Lifecycle Orchestrator",
      description: "Automates onboarding, order tracking, renewals, and follow-ups",
      color: colors.green,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Workflow Trigger",
      description: "Pulls records, fills forms, sends reminders, escalates issues to humans",
      color: colors.yellow,
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "CX Intelligence Hub",
      description: "Tracks issues, identifies FAQ gaps, and visualizes customer sentiment",
      color: colors.orange,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Enforcer",
      description: "Monitors data flow and applies rules in HIPAA, ISO-ready environments",
      color: colors.green,
    },
  ]

  const thinkingSteps = [
    {
      title: "Perception",
      description: "Understands text, voice, intent, and sentiment",
      icon: <Eye className="h-5 w-5" />,
      color: colors.orange,
    },
    {
      title: "Memory",
      description: "Retains historical context across channels",
      icon: <Database className="h-5 w-5" />,
      color: colors.green,
    },
    {
      title: "Reasoning",
      description: "Chooses the optimal action or escalation path",
      icon: <Brain className="h-5 w-5" />,
      color: colors.yellow,
    },
    {
      title: "Execution",
      description: "Sends responses, API calls, updates, or internal triggers",
      icon: <Zap className="h-5 w-5" />,
      color: colors.orange,
    },
    {
      title: "Reflection",
      description: "Learns from outcome and adjusts for next time",
      icon: <RotateCcw className="h-5 w-5" />,
      color: colors.green,
    },
  ]

  const enterpriseFeatures = [
    { title: "HIPAA-Ready, ISO-Aligned", icon: <Shield className="h-5 w-5" /> },
    { title: "End-to-End Data Encryption", icon: <Lock className="h-5 w-5" /> },
    { title: "Audit Logging & Role-Based Access", icon: <FileCheck className="h-5 w-5" /> },
    { title: "API Sync with CRMs, ERPs, Knowledge Bases", icon: <Network className="h-5 w-5" /> },
    { title: "Secure Architecture across Cloud and On-Prem", icon: <Cloud className="h-5 w-5" /> },
  ]

  const metrics = [
    {
      number: "60%",
      label: "Reduce ticket volume",
      icon: <TrendingDown className="h-5 w-5" />,
      color: colors.green,
    },
    {
      number: "35%",
      label: "Increase first-contact resolution",
      icon: <Target className="h-5 w-5" />,
      color: colors.orange,
    },
    {
      number: "40%",
      label: "Improve NPS and CSAT",
      icon: <Star className="h-5 w-5" />,
      color: colors.yellow,
    },
    {
      number: "50%",
      label: "Cut handling time",
      icon: <Timer className="h-5 w-5" />,
      color: colors.green,
    },
  ]

  const channels = [
    { name: "Web Chat", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "WhatsApp", icon: <MessageCircle className="h-5 w-5" /> },
    { name: "Voice IVR", icon: <Phone className="h-5 w-5" /> },
    { name: "Messenger", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "SMS", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Email", icon: <Mail className="h-5 w-5" /> },
  ]

  const deploymentSteps = [
    { number: "1", title: "Select use case and channels", icon: <Target className="h-5 w-5" /> },
    { number: "2", title: "Load your SOPs, FAQs, and flows", icon: <FileText className="h-5 w-5" /> },
    { number: "3", title: "Integrate with CRMs, Helpdesk, or ERP", icon: <Network className="h-5 w-5" /> },
    { number: "4", title: "Customize persona and escalation logic", icon: <Settings className="h-5 w-5" /> },
    { number: "5", title: "Go live in under 7 days", icon: <Rocket className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.orange }}
              >
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Niblo™</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#intelligence" className="text-gray-600 hover:text-gray-900 font-medium">
                Intelligence
              </a>
              <a href="#capabilities" className="text-gray-600 hover:text-gray-900 font-medium">
                Capabilities
              </a>
              <a href="#enterprise" className="text-gray-600 hover:text-gray-900 font-medium">
                Enterprise
              </a>
              <a href="#deployment" className="text-gray-600 hover:text-gray-900 font-medium">
                Deploy
              </a>
              <button
                className="px-6 py-2 rounded-lg text-white font-semibold transition-colors"
                style={{ backgroundColor: colors.orange }}
              >
                Get Started
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#intelligence" className="block text-gray-600 font-medium">
                Intelligence
              </a>
              <a href="#capabilities" className="block text-gray-600 font-medium">
                Capabilities
              </a>
              <a href="#enterprise" className="block text-gray-600 font-medium">
                Enterprise
              </a>
              <a href="#deployment" className="block text-gray-600 font-medium">
                Deploy
              </a>
              <button
                className="w-full px-6 py-2 rounded-lg text-white font-semibold"
                style={{ backgroundColor: colors.orange }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-full bg-white border border-gray-200">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.green }}></div>
              <Bot className="h-4 w-4" style={{ color: colors.orange }} />
              <span className="text-sm text-gray-600 font-medium">Autonomous AI Agent • Live & Learning</span>
            </div>

            {/* Logo */}
            <div
              className="w-48 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.orange }}
            >
              <span className="text-white text-3xl font-bold">Niblo™</span>
            </div>

            {/* Headlines */}
            <div className="mb-8">
              <h1 className="text-xl md:text-2xl text-gray-600 mb-4">Not an Assistant. Not a Bot.</h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                A Mission-Critical <span style={{ color: colors.orange }}>AI Operative</span>
              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-700">Built for the Frontlines</h3>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Niblo™ stands for <strong>Next Gen Intelligent Bot for Lifecycle and Operations</strong>. But this isn't
                just a bot — it's an autonomous AI agent designed to operate across your entire customer lifecycle and
                operations layer.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  <span style={{ color: colors.orange }}>He doesn't just respond. He acts. He decides. He learns.</span>
                </p>
                <p className="text-gray-600">
                  Where traditional bots follow scripts, Niblo operates with intention — bridging customer experience,
                  backend execution, and real-time intelligence through one intelligent core.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.orange }}
              >
                <Bot className="h-5 w-5" />
                <span>Book a Niblo Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-white text-gray-800 font-semibold text-lg border border-gray-200 hover:shadow-lg transition-all">
                <Play className="h-5 w-5" />
                <span>See Niblo In Action</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Stack Section */}
      <section ref={intelligenceRef} id="intelligence" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("intelligence") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-gray-50 border border-gray-200">
              <Brain className="h-4 w-4" style={{ color: colors.green }} />
              <span className="text-sm text-gray-600 font-medium">Powered by a Living Intelligence Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🧬 <span style={{ color: colors.green }}>Autonomous Intelligence</span>, Not Rule-Based Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five interconnected layers that work together to create truly intelligent responses
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {intelligenceStack.map((component, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: component.color }}
                >
                  {component.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} id="capabilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200">
              <Zap className="h-4 w-4" style={{ color: colors.yellow }} />
              <span className="text-sm text-gray-600 font-medium">What Niblo Actually Does</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🧩 Niblo isn't just chat. <span style={{ color: colors.yellow }}>He is mission-capable</span>
            </h2>
          </div>

          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  currentCapabilityIndex === index
                    ? "border-gray-300 bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                onClick={() => setCurrentCapabilityIndex(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-lg text-white"
                    style={{ backgroundColor: currentCapabilityIndex === index ? capability.color : "#e5e7eb" }}
                  >
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 mr-2" style={{ color: colors.green }} />
                      <h3 className="text-lg font-semibold text-gray-900">{capability.title}</h3>
                    </div>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Niblo Thinks Section */}
      <section ref={thinkingRef} id="thinking" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("thinking") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-gray-50 border border-gray-200">
              <Brain className="h-4 w-4" style={{ color: colors.orange }} />
              <span className="text-sm text-gray-600 font-medium">How Niblo Thinks and Operates</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🤖 Every interaction passes through <span style={{ color: colors.orange }}>five layers</span> of
              decision-making
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This is not a static experience. Niblo evolves with every interaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {thinkingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeThinkingStep === index ? "text-white shadow-lg" : "bg-gray-100 text-gray-600"
                  }`}
                  style={{ backgroundColor: activeThinkingStep === index ? step.color : undefined }}
                >
                  {step.icon}
                </div>

                <div
                  className={`bg-gray-50 rounded-xl p-6 transition-all duration-300 ${
                    activeThinkingStep === index ? "shadow-lg border-2" : "border border-gray-200"
                  }`}
                  style={{ borderColor: activeThinkingStep === index ? step.color : undefined }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section ref={enterpriseRef} id="enterprise" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("enterprise") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm text-white font-medium">Enterprise-Grade from Day One</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🔐 Built for Enterprise <span style={{ color: colors.green }}>Security & Compliance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: colors.green }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{feature.title}</h3>
                <div className="w-full h-1 rounded-full" style={{ backgroundColor: colors.green }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={comparisonRef} id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("comparison") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-gray-50 border border-gray-200">
              <BarChart3 className="h-4 w-4" style={{ color: colors.yellow }} />
              <span className="text-sm text-gray-600 font-medium">Why Niblo Is a Leap Ahead</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              💥 <span style={{ color: colors.yellow }}>Advanced Capabilities</span> vs Traditional Solutions
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-900">Capability</th>
                    <th className="text-center p-6 font-semibold" style={{ color: colors.orange }}>
                      Niblo
                    </th>
                    <th className="text-center p-6 font-semibold text-gray-600">Traditional Bot</th>
                    <th className="text-center p-6 font-semibold text-gray-600">RPA</th>
                    <th className="text-center p-6 font-semibold text-gray-600">IVR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-6 font-medium text-gray-900">Memory-Based Conversations</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-6 font-medium text-gray-900">Real-Time Workflow Execution</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-gray-900">Multi-Language Support</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span style={{ color: colors.yellow }} className="text-2xl">
                        ⚠️
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span style={{ color: colors.yellow }} className="text-2xl">
                        ⚠️
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-6 font-medium text-gray-900">Sentiment-Driven Adaptation</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-gray-900">Full Lifecycle Integration</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-6 w-6 mx-auto" style={{ color: colors.green }} />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-500 text-2xl">❌</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsRef} id="metrics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("metrics") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200">
              <Target className="h-4 w-4" style={{ color: colors.green }} />
              <span className="text-sm text-gray-600 font-medium">Business Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🚀 Measurable <span style={{ color: colors.green }}>Business Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: metric.color }}
                >
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Benefits:</h3>
              <div
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: colors.green }}
              >
                <Zap className="h-5 w-5" />
                <span>Achieve ROI within the first 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section ref={channelsRef} id="channels" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("channels") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-gray-50 border border-gray-200">
              <Globe className="h-4 w-4" style={{ color: colors.orange }} />
              <span className="text-sm text-gray-600 font-medium">Multilingual, Multi-Channel, Multi-Tasking</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🌍 One AI Agent, <span style={{ color: colors.orange }}>Every Channel</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Channels */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" style={{ color: colors.orange }} />
                Channels
              </h3>
              <div className="space-y-3">
                {channels.map((channel, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <div className="text-gray-600">{channel.icon}</div>
                    <span className="text-gray-700 font-medium">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Languages className="h-6 w-6 mr-2" style={{ color: colors.green }} />
                Languages
              </h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌐</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">English, Arabic, Spanish + 50+ more</p>
                  <p className="text-gray-600">Including dialect customization</p>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <CheckSquare className="h-6 w-6 mr-2" style={{ color: colors.yellow }} />
                Tasks
              </h3>
              <div className="space-y-2">
                {["Tier-1 resolution", "Onboarding", "KYC", "Claims", "Form filling", "Analytics", "Escalations"].map(
                  (task, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 border border-gray-200"
                    >
                      <CheckCircle className="h-4 w-4" style={{ color: colors.green }} />
                      <span className="text-gray-700 text-sm font-medium">{task}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section ref={deploymentRef} id="deployment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("deployment") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200">
              <Rocket className="h-4 w-4" style={{ color: colors.yellow }} />
              <span className="text-sm text-gray-600 font-medium">Fast, Flexible Deployment</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ⚙️ Get started in <span style={{ color: colors.yellow }}>5 simple steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {deploymentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white"
                    style={{ backgroundColor: colors.orange }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: colors.green }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: colors.green }}
            >
              <Timer className="h-5 w-5" />
              <span>Go live in under 7 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="text-6xl mb-4" style={{ color: colors.orange }}>
                  "
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed -mt-8">
                  It's not just support automation. It's like having a 24/7 AI employee that never forgets, never slows
                  down, and never drops the ball.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.orange }}
                  >
                    CX
                  </div>
                  <div className="text-left">
                    <cite className="text-gray-900 font-semibold block">Head of CX</cite>
                    <span className="text-gray-600">Fintech Enterprise, UAE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="text-6xl mb-4" style={{ color: colors.green }}>
                  "
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed -mt-8">
                  Our operations used to be human-led, software-assisted. With Niblo, it's intelligence-led,
                  human-refined. Game changer.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.green }}
                  >
                    CO
                  </div>
                  <div className="text-left">
                    <cite className="text-gray-900 font-semibold block">COO</cite>
                    <span className="text-gray-600">U.S. Healthcare Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.green }}></div>
            <span className="text-white font-medium">Activate Niblo Today</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            🎯 Whether you're handling thousands of support queries, managing backend processes, or scaling customer
            journeys — <span style={{ color: colors.orange }}>Niblo is built to help you do more with less</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all"
              style={{ backgroundColor: colors.orange }}
            >
              <Bot className="h-5 w-5" />
              <span>Book a personalized Niblo demo</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20">
              <Target className="h-5 w-5" />
              <span>Choose your use case</span>
            </button>
          </div>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5" style={{ color: colors.yellow }} />
              <span>Launch your first autonomous AI agent</span>
            </div>
            <div className="text-xl font-semibold text-white">
              The future of business is autonomous. The name is Niblo.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NibloPage
