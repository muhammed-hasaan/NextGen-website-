"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronDown,
  Sparkles,
  Users,
  Globe,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Heart,
  Building,
  Briefcase,
  Rocket,
  Send,
  Search,
  Award,
  Shield,
  Bot,
  Play,
  Star,
  Eye,
  MousePointer,
  Code,
  Headphones,
  BarChart3,
} from "lucide-react"
import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"

function Careers() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [animatedStats, setAnimatedStats] = useState({})

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const cultureRef = useRef(null)
  const departmentsRef = useRef(null)
  const jobsRef = useRef(null)
  const processRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Intersection Observer for animations
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

    const refs = [heroRef, statsRef, cultureRef, departmentsRef, jobsRef, processRef]
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Animated counter for stats
  useEffect(() => {
    if (visibleSections.has("stats")) {
      const animateValue = (key, start, end, duration) => {
        const startTime = performance.now()
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const current = Math.floor(start + (end - start) * progress)

          setAnimatedStats((prev) => ({ ...prev, [key]: current }))

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }

      animateValue("members", 0, 700, 2000)
      animateValue("countries", 0, 5, 1500)
      animateValue("satisfaction", 0, 95, 2500)
    }
  }, [visibleSections])

  const navigation = [
    { name: "Capabilities", href: "/capabilities" },
    {
      name: "Solutions",
      href: "#",
      dropdown: [
        { name: "Engage360", href: "/engage360", icon: <Phone className="h-4 w-4" /> },
        { name: "WorkForge", href: "/workforge", icon: <Users className="h-4 w-4" /> },
        { name: "BackGrid", href: "/backgrid", icon: <Shield className="h-4 w-4" /> },
        { name: "Niblo AI", href: "/niblo", icon: <Bot className="h-4 w-4" /> },
      ],
    },
    { name: "Sectors", href: "/sectors" },
    { name: "Library", href: "/library" },
    { name: "Inside NGT", href: "/inside-ngt" },
    { name: "Careers", href: "/careers" },
  ]

const departments = [
  { id: "all", name: "All Departments", count: 24 },
  { id: "voice-operations", name: "Voice Operations", count: 8 },
  { id: "hr", name: "Human Resources", count: 8 },
  { id: "qc", name: "Quality Control", count: 8 },
  { id: "csr", name: "Customer Service Representative", count: 8 },
  { id: "csa", name: "Customer Support Associate", count: 8 },
  { id: "virtual-staffing", name: "Virtual Staffing", count: 6 },
  { id: "finance", name: "Finance", count: 6 },
  { id: "compliance-process", name: "Compliance & Process", count: 4 },
  { id: "operations-management", name: "Operations Management", count: 3 },
  { id: "training-quality", name: "Training & Quality", count: 3 },
];



const locations = [
  { id: "all", name: "All Locations" },
  { id: "sargodha", name: "Sargodha" },
  { id: "islamabad", name: "Islamabad" },
];


const jobOpenings = [
  {
    id: 1,
    title: "Customer Support Executive (Night Shift)",
    department: "voice-operations",
    location: "islamabad",
    type: "Full-time",
    experience: "1-3 years",
    shift: "Night Shift",
    description: "Handle inbound and outbound calls ensuring customer satisfaction.",
    requirements: ["Good English communication", "Call center experience"],
    color: "blue",
    salary: "$600-900",
    urgent: true,
  },
  {
    id: 2,
    title: "HR Assistant",
    department: "hr",
    location: "sargodha",
    type: "Full-time",
    experience: "1-2 years",
    shift: "Day Shift",
    description: "Assist with recruitment, onboarding, and HR admin tasks.",
    requirements: ["Basic HR knowledge", "MS Office proficiency"],
    color: "purple",
    salary: "$500-700",
    urgent: false,
  },
  {
    id: 3,
    title: "Quality Control Specialist",
    department: "qc",
    location: "islamabad",
    type: "Full-time",
    experience: "2-4 years",
    shift: "Evening Shift",
    description: "Monitor service quality and generate quality reports.",
    requirements: ["QA knowledge", "Attention to detail"],
    color: "green",
    salary: "$700-1000",
    urgent: false,
  },
  {
    id: 4,
    title: "Customer Service Representative",
    department: "csr",
    location: "sargodha",
    type: "Full-time",
    experience: "0-1 years",
    shift: "Night Shift",
    description: "Assist customers on voice calls and chats.",
    requirements: ["Fluent English", "Customer service attitude"],
    color: "orange",
    salary: "$450-600",
    urgent: true,
  },
  {
    id: 5,
    title: "Customer Support Associate (E-commerce)",
    department: "csa",
    location: "islamabad",
    type: "Full-time",
    experience: "1-3 years",
    shift: "Night Shift",
    description: "Manage online orders, refunds, and product inquiries.",
    requirements: ["E-commerce knowledge", "CRM tools"],
    color: "indigo",
    salary: "$500-800",
    urgent: false,
  },
  {
    id: 6,
    title: "Virtual Assistant (Back Office)",
    department: "virtual-staffing",
    location: "sargodha",
    type: "Full-time",
    experience: "1-2 years",
    shift: "Day Shift",
    description: "Assist teams with data entry and back-office tasks.",
    requirements: ["MS Office", "Attention to detail"],
    color: "teal",
    salary: "$450-700",
    urgent: false,
  },
  {
    id: 7,
    title: "Junior Accountant",
    department: "finance",
    location: "islamabad",
    type: "Full-time",
    experience: "1-3 years",
    shift: "Day Shift",
    description: "Handle invoices, ledgers, and basic reconciliations.",
    requirements: ["Accounting basics", "Excel"],
    color: "pink",
    salary: "$600-900",
    urgent: false,
  },
  {
    id: 8,
    title: "Compliance Assistant",
    department: "compliance-process",
    location: "sargodha",
    type: "Full-time",
    experience: "1-2 years",
    shift: "Day Shift",
    description: "Assist in compliance documentation and audits.",
    requirements: ["Detail oriented", "Basic compliance knowledge"],
    color: "red",
    salary: "$500-800",
    urgent: false,
  },
  {
    id: 9,
    title: "Operations Supervisor",
    department: "operations-management",
    location: "islamabad",
    type: "Full-time",
    experience: "3-5 years",
    shift: "Day Shift",
    description: "Oversee daily operations and manage team performance.",
    requirements: ["Leadership skills", "Process improvement"],
    color: "cyan",
    salary: "$900-1200",
    urgent: false,
  },
  {
    id: 10,
    title: "Trainer (Customer Support)",
    department: "training-quality",
    location: "sargodha",
    type: "Full-time",
    experience: "2-4 years",
    shift: "Day Shift",
    description: "Conduct training sessions and refreshers for new agents.",
    requirements: ["Public speaking", "Training design"],
    color: "lime",
    salary: "$600-900",
    urgent: true,
  },
  // 10 more jobs (11-20) with similar style:
  {
    id: 11,
    title: "Senior Customer Support Executive",
    department: "voice-operations",
    location: "islamabad",
    type: "Full-time",
    experience: "3-5 years",
    shift: "Night Shift",
    description: "Manage escalated customer issues and mentor team members.",
    requirements: ["Advanced communication", "Team leadership"],
    color: "blue",
    salary: "$900-1300",
    urgent: false,
  },
  {
    id: 12,
    title: "HR Officer",
    department: "hr",
    location: "sargodha",
    type: "Full-time",
    experience: "2-3 years",
    shift: "Day Shift",
    description: "Coordinate employee relations and HR reporting.",
    requirements: ["HRIS knowledge", "Communication skills"],
    color: "purple",
    salary: "$600-900",
    urgent: false,
  },
  {
    id: 13,
    title: "Quality Analyst",
    department: "qc",
    location: "islamabad",
    type: "Full-time",
    experience: "2-3 years",
    shift: "Evening Shift",
    description: "Audit calls and prepare quality feedback reports.",
    requirements: ["Auditing", "Report writing"],
    color: "green",
    salary: "$700-1000",
    urgent: false,
  },
  {
    id: 14,
    title: "Customer Service Specialist",
    department: "csr",
    location: "sargodha",
    type: "Full-time",
    experience: "1-2 years",
    shift: "Night Shift",
    description: "Support customers via phone and chat platforms.",
    requirements: ["English fluency", "Problem-solving"],
    color: "orange",
    salary: "$500-800",
    urgent: true,
  },
  {
    id: 15,
    title: "E-commerce Support Associate",
    department: "csa",
    location: "islamabad",
    type: "Full-time",
    experience: "1-3 years",
    shift: "Night Shift",
    description: "Manage orders, returns, and customer questions for e-commerce clients.",
    requirements: ["CRM tools", "E-commerce workflow knowledge"],
    color: "indigo",
    salary: "$600-900",
    urgent: false,
  },
  {
    id: 16,
    title: "Virtual Research Assistant",
    department: "virtual-staffing",
    location: "sargodha",
    type: "Full-time",
    experience: "1-2 years",
    shift: "Day Shift",
    description: "Conduct online research and data gathering tasks.",
    requirements: ["Internet research", "Accuracy"],
    color: "teal",
    salary: "$450-700",
    urgent: false,
  },
  {
    id: 17,
    title: "Finance Associate",
    department: "finance",
    location: "islamabad",
    type: "Full-time",
    experience: "2-3 years",
    shift: "Day Shift",
    description: "Assist in preparing financial reports and data analysis.",
    requirements: ["Excel", "Accounting knowledge"],
    color: "pink",
    salary: "$700-1000",
    urgent: false,
  },
  {
    id: 18,
    title: "Compliance Coordinator",
    department: "compliance-process",
    location: "sargodha",
    type: "Full-time",
    experience: "2+ years",
    shift: "Day Shift",
    description: "Coordinate compliance processes and maintain documentation.",
    requirements: ["Process knowledge", "Documentation"],
    color: "red",
    salary: "$600-900",
    urgent: false,
  },
  {
    id: 19,
    title: "Assistant Operations Manager",
    department: "operations-management",
    location: "islamabad",
    type: "Full-time",
    experience: "3-4 years",
    shift: "Day Shift",
    description: "Assist in managing daily operations and team supervision.",
    requirements: ["Leadership", "Process monitoring"],
    color: "cyan",
    salary: "$900-1300",
    urgent: false,
  },
  {
    id: 20,
    title: "Training Coordinator",
    department: "training-quality",
    location: "sargodha",
    type: "Full-time",
    experience: "2+ years",
    shift: "Day Shift",
    description: "Organize training sessions and keep training records updated.",
    requirements: ["Coordination", "MS Office"],
    color: "lime",
    salary: "$600-900",
    urgent: true,
  },
];


  const workCulture = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Exposure",
      description: "Work with top-tier brands from the US, GCC, and beyond on complex, meaningful projects.",
      color: "blue",
      metric: "50+ Countries",
      bgPattern: "dots",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth-Focused",
      description: "Continuous learning with mentorship, performance feedback, and clear leadership tracks.",
      color: "purple",
      metric: "85% Promoted",
      bgPattern: "lines",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Flexible & Accountable",
      description: "Full-time, hybrid, and shift-based roles with full ownership and trusted autonomy.",
      color: "green",
      metric: "24/7 Support",
      bgPattern: "grid",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multicultural Environment",
      description: "Collaborate across languages, geographies, and cultures in a truly global setting.",
      color: "orange",
      metric: "15+ Languages",
      bgPattern: "waves",
    },
  ]

  const departmentDetails = [
    {
      id: "voice-operations",
      title: "Voice Operations",
      subtitle: "Engage360",
      description: "Call center agents, QA analysts, voice trainers, shift leads",
      icon: <Headphones className="h-6 w-6" />,
      color: "blue",
      openings: 8,
      growth: "+25%",
    },
    {
      id: "virtual-staffing",
      title: "Virtual Staffing",
      subtitle: "WorkForge",
      description: "Chat agents, support reps, ticket handlers, assistants, analysts",
      icon: <MousePointer className="h-6 w-6" />,
      color: "purple",
      openings: 6,
      growth: "+40%",
    },
    {
      id: "compliance-process",
      title: "Compliance & Process",
      subtitle: "BackGrid",
      description: "Data processors, claim handlers, compliance auditors, QA leads",
      icon: <Shield className="h-6 w-6" />,
      color: "green",
      openings: 4,
      growth: "+15%",
    },
    {
      id: "operations-management",
      title: "Operations Management",
      subtitle: "Leadership",
      description: "Supervisors, workforce planners, shift managers, SLA monitors",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "orange",
      openings: 3,
      growth: "+20%",
    },
    {
      id: "training-quality",
      title: "Training & Quality",
      subtitle: "Excellence",
      description: "Process trainers, knowledge managers, QA evaluators",
      icon: <Award className="h-6 w-6" />,
      color: "indigo",
      openings: 3,
      growth: "+30%",
    },
    {
      id: "product-engineering",
      title: "Product & Engineering",
      subtitle: "Niblo AI",
      description: "Bot trainers, AI analysts, conversational designers, integration support",
      icon: <Code className="h-6 w-6" />,
      color: "teal",
      openings: 5,
      growth: "+60%",
    },
  ]

  const hiringProcess = [
    {
      step: "01",
      title: "Apply Online",
      description: "Submit your application through our streamlined portal.",
      icon: <Send className="h-5 w-5" />,
      duration: "2 mins",
      color: "blue",
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Brief interview to assess communication and basic fit.",
      icon: <Eye className="h-5 w-5" />,
      duration: "30 mins",
      color: "purple",
    },
    {
      step: "03",
      title: "Skill Assessment",
      description: "Role-specific evaluation of technical and soft skills.",
      icon: <Target className="h-5 w-5" />,
      duration: "1 hour",
      color: "green",
    },
    {
      step: "04",
      title: "Final Interview",
      description: "Meet your future team and discuss role expectations.",
      icon: <Users className="h-5 w-5" />,
      duration: "45 mins",
      color: "orange",
    },
    {
      step: "05",
      title: "Onboarding",
      description: "Structured training and integration with your team.",
      icon: <Rocket className="h-5 w-5" />,
      duration: "1 week",
      color: "indigo",
    },
  ]

  const stats = [
    {
      number: "700+",
      label: "Team Members",
      icon: <Users className="h-5 w-5" />,
      key: "members",
      suffix: "+",
      color: "blue",
    },
    {
      number: "5",
      label: "Countries",
      icon: <Globe className="h-5 w-5" />,
      key: "countries",
      suffix: "",
      color: "blue",
    },
    {
      number: "24/7",
      label: "Operations",
      icon: <Clock className="h-5 w-5" />,
      key: "operations",
      suffix: "/7",
      color: "blue",
    },
    {
      number: "95%",
      label: "Satisfaction",
      icon: <Heart className="h-5 w-5" />,
      key: "satisfaction",
      suffix: "%",
      color: "blue",
    },
  ]

  const filteredJobs = jobOpenings.filter((job) => {
    const departmentMatch = selectedDepartment === "all" || job.department === selectedDepartment
    const locationMatch = selectedLocation === "all" || job.location === selectedLocation
    return departmentMatch && locationMatch
  })

  const getColorClasses = (color, variant = "light") => {
    const colors = {
      blue: {
        light: "bg-blue-50 text-blue-600 border-blue-200",
        gradient: "from-blue-500 to-blue-600",
        hover: "hover:bg-blue-100",
        ring: "focus:ring-blue-500",
      },
      purple: {
        light: "bg-purple-50 text-purple-600 border-purple-200",
        gradient: "from-purple-500 to-purple-600",
        hover: "hover:bg-purple-100",
        ring: "focus:ring-purple-500",
      },
      green: {
        light: "bg-green-50 text-green-600 border-green-200",
        gradient: "from-green-500 to-green-600",
        hover: "hover:bg-green-100",
        ring: "focus:ring-green-500",
      },
      orange: {
        light: "bg-orange-50 text-orange-600 border-orange-200",
        gradient: "from-orange-500 to-orange-600",
        hover: "hover:bg-orange-100",
        ring: "focus:ring-orange-500",
      },
      indigo: {
        light: "bg-indigo-50 text-indigo-600 border-indigo-200",
        gradient: "from-indigo-500 to-indigo-600",
        hover: "hover:bg-indigo-100",
        ring: "focus:ring-indigo-500",
      },
      teal: {
        light: "bg-teal-50 text-teal-600 border-teal-200",
        gradient: "from-teal-500 to-teal-600",
        hover: "hover:bg-teal-100",
        ring: "focus:ring-teal-500",
      },
    }
    return colors[color]?.[variant] || colors.blue[variant]
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Cursor Follower */}
      <Header />
      <div
        className="fixed w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isScrolled ? 0.8 : 1})`,
        }}
      />

      {/* Header */}

      {/* Hero Section */}
      {/* <section
        ref={heroRef}
        id="hero"
        className="relative pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
      >
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-float-fast" />
        </div>

        
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        
        <div className="absolute top-32 left-16 animate-float-slow">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-110 transition-transform duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">700+ Team Members</span>
            </div>
          </div>
        </div>

        <div className="absolute top-48 right-16 animate-float-medium">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-110 transition-transform duration-300">
            <div className="flex items-center space-x-3">
              <Globe className="h-4 w-4 text-blue-500 animate-spin-slow" />
              <span className="text-sm font-medium text-gray-700">Global Opportunities</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-24 animate-float-fast">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-110 transition-transform duration-300">
            <div className="flex items-center space-x-3">
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">95% Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-xl border border-gray-200/50 hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-5 w-5 text-blue-600 animate-spin-slow" />
              <span className="text-lg font-semibold text-gray-800">Join Our Global Team</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl  text-gray-900 leading-tight mb-8 animate-fade-in-up">
              Where Ambition Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient">
               Where Ambition Meets Opportunity
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up max-w-4xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              At NGT, we don't just build customer operations — we build careers. Join a team that values your growth
              and empowers you to make a global impact.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center">
                  <Search className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Explore Positions
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>

              <button className="group relative overflow-hidden bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center">
                  <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Our Culture
                </div>
              </button>
            </div>
          </div>
        </div>
      </section> */}

          <section
              ref={heroRef}
              className="relative pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden min-h-screen flex justify-center items-center"
            >
              {/* Subtle Background Elements */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
              </div>
      
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center transition-all duration-1000 `}>
                  
                  {/* Badge */}
                  
            <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
                          <Globe className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
                          <span className="text-base  text-gray-700">Join Our Global Team</span>
                        </div>
      
                  {/* Main Headline */}
                  <h1 className="text-4xl md:text-4xl lg:text-5xl  text-gray-900 mb-6 leading-tight">
                    <span className="relative">
                      {/* <span
                        key={currentWord}
                        className={`${words[currentWord].color} transition-all duration-500 inline-block`}
                      >
                        {words[currentWord].text}
                      </span> */}
                    </span>
                    <span className="text-gray-700">Where Ambition Meets Opportunity</span>
                  </h1>
      
                  {/* Subheadline */}
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    At NGT, we don't just build customer operations — we build careers. Join a team that values your growth
              and empowers you to make a global impact.
                  </p>
      
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                      <Phone className="h-5 w-5" />
                      <span>Explore positions</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 border border-gray-200 hover:border-gray-300">
                      <Target className="h-5 w-5" />
                      <span>Out Culture</span>
                    </button>
                  </div>
      
                  {/* Trust Indicators */}
                  <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
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

      {/* Stats Section */}
      {/* <section ref={statsRef} id="stats" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group hover:scale-105 transition-all duration-500 animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-[#0c5de2] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl  text-gray-900 mb-2">
                  {stat.key === "members" && animatedStats.members
                    ? `${animatedStats.members}${stat.suffix}`
                    : stat.key === "countries" && animatedStats.countries
                      ? `${animatedStats.countries}${stat.suffix}`
                      : stat.key === "satisfaction" && animatedStats.satisfaction
                        ? `${animatedStats.satisfaction}${stat.suffix}`
                        : stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div
                  className={`w-full h-1 bg-gradient-to-r ${getColorClasses(stat.color, "gradient")} rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Work Culture Section */}
      <section
        ref={cultureRef}
        id="culture"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("culture") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6  border border-gray-200/100">
              <Heart className="h-5 w-5 text-[#0F67CE] animate-pulse" />
              <span className="text-lg font-semibold text-gray-700">Work Culture</span>
            </div>
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
              What It's Like to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F67CE] to-[#0F67CE]">
                Work Here
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience a culture that values growth, collaboration, and global impact across all our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workCulture.map((culture, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-4 animate-scale-in border border-gray-100 overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 opacity-5 ${
                    culture.bgPattern === "dots"
                      ? "bg-dots-pattern"
                      : culture.bgPattern === "lines"
                        ? "bg-lines-pattern"
                        : culture.bgPattern === "grid"
                          ? "bg-grid-pattern"
                          : "bg-waves-pattern"
                  }`}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(culture.color, "gradient")} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${getColorClasses(culture.color, "gradient")} rounded-2xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg text-white`}
                  >
                    {culture.icon}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl  text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {culture.title}
                    </h3>
                    <span
                      className={`text-xs  px-3 py-1 rounded-full ${getColorClasses(culture.color, "light")}`}
                    >
                      {culture.metric}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {culture.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClasses(culture.color, "gradient")} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* Job Openings Section */}
      <section
        ref={jobsRef}
        id="jobs"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("jobs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
           
             <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6  border border-gray-200/100">
              <Briefcase className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-lg font-semibold text-gray-700">Open Positions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
              Current{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f67ce] to-[#0f67ce]">
                Opportunities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover roles that match your skills and career aspirations across our global operations.
            </p>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none cursor-pointer hover:border-blue-300 transition-colors duration-200"
                >
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none cursor-pointer hover:border-blue-300 transition-colors duration-200"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Enhanced Job Listings */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border border-gray-100 overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Urgent Badge */}
                {/* {job.urgent && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs  px-3 py-1 rounded-full animate-pulse mb-10">
                    URGENT
                  </div>
                )} */}

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(job.color, "gradient")} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${getColorClasses(job.color, "gradient")} rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg text-white`}
                    >
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className={`text-right`}>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{job.type}</div>
                      <div className="text-xs text-gray-500 mb-1">{job.experience}</div>
                      <div className="text-xs  text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl  text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {job.title}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {locations.find((l) => l.id === job.location)?.name}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.shift}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`group/btn relative overflow-hidden w-full bg-[#0f67ce] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl  text-gray-900 mb-4">No positions found</h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your filters or check back later for new opportunities.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment("all")
                  setSelectedLocation("all")
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Departments Section */}
      <section ref={departmentsRef} id="departments" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("departments") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
          
             <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6  border border-gray-200/100">
              <Building className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-lg font-semibold text-gray-700">Departments</span>
            </div>
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f67ce] to-[#0f67ce]">
                Perfect Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore opportunities across our specialized departments and find where your skills can make the biggest
              impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentDetails.map((dept, index) => (
              <div
                key={dept.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-scale-in border border-gray-100 overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(dept.color, "gradient")} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${getColorClasses(dept.color, "gradient")} rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg text-white`}
                    >
                      {dept.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {dept.subtitle}
                      </span>
                      <div className="flex items-center space-x-2 mt-2">
                        <span
                          className={`text-xs  px-2 py-1 rounded-full ${getColorClasses(dept.color, "light")}`}
                        >
                          {dept.openings} openings
                        </span>
                        <span className="text-xs  text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {dept.growth}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl  text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {dept.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {dept.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">Team Growth</span>
                      <span className="text-xs  text-green-600">{dept.growth}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClasses(dept.color, "gradient")} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}
                        style={{ width: `${Number.parseInt(dept.growth)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Enhanced Hiring Process Section */}
      <section ref={processRef} id="process" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
             <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6  border border-gray-200/100">
              <Rocket className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-lg font-semibold text-gray-700">Hiring Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
              Your Journey{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f67ce] to-[#0f67ce]">to NGT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined process is designed to find the perfect match for both you and our team.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {hiringProcess.map((process, index) => (
              <div
                key={index}
                className={`text-center group animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getColorClasses(process.color, "gradient")} rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg text-white`}
                  >
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs  text-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < hiringProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
                  )}
                </div>

                <h3 className="text-lg  text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {process.description}
                </p>

                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(process.color, "light")}`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {process.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-xl">
            <Star className="h-6 w-6 text-yellow-400 animate-spin-slow" />
            <span className="text-lg font-semibold text-white">Ready to Join Us?</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl  text-white mb-6 leading-tight">
            Start Your Global Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#fff] animate-gradient">
              Journey
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join a team that values your growth, celebrates your achievements, and empowers you to make a difference
            worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Search className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Browse All Positions
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>

            <button className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Join Talent Pool
                <Sparkles className="h-5 w-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

    <Footer />

      {/* Enhanced Styles */}
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
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
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
  )
}

export default Careers
