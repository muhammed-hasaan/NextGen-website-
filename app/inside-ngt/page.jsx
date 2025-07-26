'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Shield,
  Clock,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  BarChart3,
  Workflow,
  UserCheck,
  Building,
  GraduationCap,
  Sparkles,
  Heart,
  Rocket,
  Bot,
  Play,
  FileText,
  TrendingUp,
  Settings,
  Star,
  Zap,
  Eye,
  MessageCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import Image from 'next/image';

const InsideNGT = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedStats, setAnimatedStats] = useState({});
  const [currentWord, setCurrentWord] = useState(0);

  const words = [
    { text: "Precision", color: "text-blue-600" },
    { text: "Performance", color: "text-purple-600" },
    { text: "Excellence", color: "text-green-600" },
    { text: "Innovation", color: "text-orange-600" },
  ];

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const leadershipRef = useRef(null);
  const cultureRef = useRef(null);
  const operationsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
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

    const refs = [heroRef, storyRef, leadershipRef, cultureRef, operationsRef, statsRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Animated counter for stats
  useEffect(() => {
    if (visibleSections.has("stats")) {
      const animateValue = (key, start, end, duration) => {
        const startTime = performance.now();
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(start + (end - start) * progress);
          setAnimatedStats((prev) => ({ ...prev, [key]: current }));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      };

      animateValue("employees", 0, 700, 2000);
      animateValue("countries", 0, 5, 1500);
      animateValue("clients", 0, 150, 2500);
      animateValue("uptime", 0, 99, 2000);
    }
  }, [visibleSections]);

  const images = [
    "/images/inside/event1.jpg", "/images/inside/event2.jpg", "/images/inside/event3.jpg", "/images/inside/event4.jpg",
    "/images/inside/event5.jpg", "/images/inside/event6.jpg", "/images/inside/event7.jpg", "/images/inside/event8.jpg",
    "/images/inside/event9.jpg", "/images/inside/event10.jpg", "/images/inside/event11.jpg", "/images/inside/event12.jpg",
    "/images/inside/event13.jpg", "/images/inside/event14.jpg", "/images/inside/event15.jpg", "/images/inside/event16.jpg"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setFade(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setFade(false); // start fade-out
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true); // fade-in
    }, 200); // match duration below
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };



  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Redesigned with split layout */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Inside NGT</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl  text-gray-900 leading-tight">
                  Where{" "}
                  <span
                    // key={currentWord}
                    className={`text-blue-700 transition-all duration-500 inline-block transform`}
                  >
                    {/* {words[currentWord].text} */}
                    Precision
                  </span>
                  <br />
                  <span className="text-gray-600">Meets Performance</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  We're not just building customer operations. We're reengineering how service is delivered — with human
                  talent, structured process, and intelligent technology working as one.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 transition-all duration-300 hover:scale-105 shadow-xl">
                  <Users className="h-5 w-5" />
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/80 hover:bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 transition-all duration-300 border border-gray-200/50 hover:border-gray-300">
                  <Play className="h-5 w-5" />
                  <span>Our Story</span>
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl  text-gray-900">
                      {animatedStats.employees || 700}+
                    </div>
                    <div className="text-gray-600 text-sm">Team Members</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl  text-gray-900">
                      {animatedStats.countries || 5}
                    </div>
                    <div className="text-gray-600 text-sm">Countries</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl  text-gray-900">
                      {animatedStats.clients || 150}+
                    </div>
                    <div className="text-gray-600 text-sm">Global Clients</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl  text-gray-900">
                      {animatedStats.uptime || 99}.9%
                    </div>
                    <div className="text-gray-600 text-sm">Uptime SLA</div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="flex justify-between items-center text-sm text-gray-600">
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
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section - Asymmetric Layout */}
      <section
        ref={storyRef}
        id="story"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left side - Badge and mission */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
                <Heart className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-700">Our Story</span>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="pl-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl  text-gray-900">Our Mission</h3>
                      <p className="text-gray-600">Make customer operations smarter, faster, and more human</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Story content */}
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-4xl lg:text-5xl  text-gray-900">
                Who We <span className="text-blue-600">Are</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  NGT (NextGen Technologies) is a customer operations company for organizations that refuse to compromise
                  on quality, scalability, or compliance.
                </p>
                <p>
                  We serve businesses across the globe by running their customer support, virtual staffing, and
                  back-office execution — all delivered through a structured, multilingual, and 24/7 global model.
                </p>
                <p>
                  Whether we're handling voice support, managing claims, or deploying smart automation, our mission stays
                  the same: <span className="font-semibold text-gray-900">make customer operations smarter, faster, and more human.</span>
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Global Reach</span>
                  </div>
                  <p className="text-gray-600 text-sm">Serving clients across multiple continents</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">24/7 Operations</span>
                  </div>
                  <p className="text-gray-600 text-sm">Round-the-clock service delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes NGT Different - Diagonal Layout */}
      {/* <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">What Makes Us Different</span>
            </div>
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Built for <span className="text-blue-600">Excellence</span>
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-start-1 lg:col-end-3 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Workflow className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl  text-gray-900 mb-3">Built for BPO. Evolved for Intelligence.</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      NGT merges the rigor of outsourcing with the flexibility of smart automation — creating systems that adapt and perform, not just repeat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-3 lg:col-end-4 flex items-center">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-blue-800 font-semibold">AI-Enhanced Delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-start-1 lg:col-end-2 flex items-center order-2 lg:order-1">
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-purple-800 font-semibold">Workflow-Centric</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-2 lg:col-end-4 space-y-6 order-1 lg:order-2">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl  text-gray-900 mb-3">Designed Around Real Workflows</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We don't deliver service lines in isolation. We build around your workflow — so the handoffs are cleaner, the impact is faster, and the results are trackable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-start-1 lg:col-end-3 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl  text-gray-900 mb-3">Human + Tech by Default</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our delivery is human-first, but AI-enhanced. Niblo, our proprietary agent, supports our teams where automation creates leverage — not disruption.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-3 lg:col-end-4 flex items-center">
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-green-800 font-semibold">Human-First Approach</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-start-1 lg:col-end-2 flex items-center order-2 lg:order-1">
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-orange-800 font-semibold">Global Alignment</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-2 lg:col-end-4 space-y-6 order-1 lg:order-2">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl  text-gray-900 mb-3">GCC + US Aligned</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      With talent pools trained for both Western and regional cultures — and full English-Arabic fluency — we run operations that resonate across markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Section - Side by Side */}
      <section ref={leadershipRef} id="leadership" className="py-32 bg-white -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3 mb-6">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Leadership</span>
            </div>
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Meet Our <span className="text-blue-600">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              NGT is led by seasoned professionals across tech, operations, and service delivery — combining global BPO
              experience with emerging-market agility.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-16">
            {/* CEO */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center text-white text-2xl  flex-shrink-0">
                    FA
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl  text-gray-900 mb-1">Imran Ahmed</h3>
                    <p className="text-blue-600 font-semibold mb-4">Founder, NextGen Technologies</p>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <b>The Visionary Who Saw Tomorrow</b><br />
                        Malik Imran Ahmed – Founder of NextGen Technologies

                      </p>
                      <p>
                        In 2006, Imran Ahmed saw beyond trends — he saw a future where technology uplifts people. From a small setup in Rawalpindi, he founded NGT with a powerful belief:
                      </p>
                      <p>
                        “<i>Technology should let people shine.</i>”

                      </p>
                      <p>
                        He turned outsourcing into opportunity and automation into empowerment.                        </p>
                      <p>
                        Though he’s no longer with us, his vision drives NGT — a global, human-first tech company powering millions of conversations and home to the cutting-edge AI agent, Niblo™.</p>
                      <p>
                        And as Imran would say: “We’re just getting started.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 -mt-10">
              {/* Founder */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center text-white text-2xl  flex-shrink-0">
                      FA
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-1">Malik Farhan Ahmed</h3>
                      <p className="text-blue-600 font-semibold mb-4">CEO, NextGen Technologies</p>
                      <div className="space-y-4 text-gray-600">
                        <p>
                          A visionary entrepreneur with a passion for impact at scale, Farhan launched NGT with a single mission:
                          to create performance-driven operations that deliver real results for clients — and real careers for
                          thousands.
                        </p>
                        <p>
                          Over 7 years, he transformed a small call center into a multi-city operation with over 700 employees,
                          spanning pay-per-call marketing, customer service, digital strategy, and intelligent outsourcing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CERO */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl  flex-shrink-0">
                      ZA
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-1">Malik Zeeshan Ahmed</h3>
                      <p className="text-purple-600 font-semibold mb-4">Managing Director</p>
                      <div className="space-y-4 text-gray-600">
                        <p>
                          Zeeshan brings deep operational expertise and a relentless focus on quality and execution. As MD, he
                          ensures that NGT stays aligned with its core values — integrity, professionalism, and progress.
                        </p>
                        <p>
                          His leadership style is grounded in action: coaching teams, refining delivery, and driving continuous improvement across departments. He led by example — turning challenges into growth and vision into results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MD */}

          </div>
        </div>
      </section>


      {/* Operations Model - Timeline Style */}
      {/* <section ref={operationsRef} id="operations" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Workflow className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">How We Operate</span>
            </div>
            <h2 className="text-3xl lg:text-4xl  text-gray-900 mb-6">
              Our <span className="text-blue-600">Delivery Model</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  area: "Language",
                  delivery: "English & Arabic support for frontline and backend roles",
                  icon: <Globe className="h-6 w-6" />,
                  color: "blue"
                },
                {
                  area: "Time Zones",
                  delivery: "24/7/365 operations with overlap models across US, GCC, and Pakistan",
                  icon: <Clock className="h-6 w-6" />,
                  color: "purple"
                },
                {
                  area: "Security",
                  delivery: "HIPAA, PCI, and ISO-aligned delivery where required",
                  icon: <Shield className="h-6 w-6" />,
                  color: "green"
                },
                {
                  area: "Onboarding",
                  delivery: "7–14 day ramp-up, process alignment, and shadowing",
                  icon: <UserCheck className="h-6 w-6" />,
                  color: "orange"
                },
                {
                  area: "Training",
                  delivery: "SOP-based delivery, QA feedback loops, continuous learning",
                  icon: <GraduationCap className="h-6 w-6" />,
                  color: "red"
                },
                {
                  area: "Tools",
                  delivery: "We work in your stack: Salesforce, Zendesk, Freshdesk, Asana, etc.",
                  icon: <Settings className="h-6 w-6" />,
                  color: "indigo"
                },
                {
                  area: "Reporting",
                  delivery: "Shared dashboards, performance metrics, weekly review loops",
                  icon: <BarChart3 className="h-6 w-6" />,
                  color: "teal"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-600 z-10"></div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-2' : 'pl-2'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                      <div className={`absolute top-6 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100`}></div>

                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${item.color}-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl  text-gray-900 mb-3">{item.area}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.delivery}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section ref={cultureRef} id="culture" className="py-32 bg-white -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Culture at NGT</span>
            </div>
            <h2 className="text-3xl lg:text-4xl  text-gray-900 mb-6">
              NGT <span className="text-blue-600">Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every picture tells a story. From global conferences to internal celebrations, NGT Moments captures the spirit, energy, and connections that define who we are.
            </p>
          </div>




          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={400}
                    className="rounded-xl shadow w-full h-52 object-cover cursor-pointer"
                    onClick={() => openModal(index)}
                  />
                ))}
              </div>
            </div>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <button onClick={closeModal} className="absolute top-5 right-5 text-white text-3xl">&times;</button>
                <button onClick={prevImage} className="absolute left-5 text-white text-4xl">&#10094;</button>

                <div className={`transition-opacity duration-200 ${fade ? "opacity-100" : "opacity-0"}`}>
                  <Image
                    src={images[currentIndex]}
                    alt={`Large Preview ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="max-h-[80vh] w-auto rounded-xl shadow"
                  />
                </div>

                <button onClick={nextImage} className="absolute right-5 text-white text-4xl">&#10095;</button>
              </div>
            )}
          </div>






        </div>
      </section>

      {/* Culture Section - Creative Layout */}
      <section ref={cultureRef} id="culture" className="py-32 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Culture at NGT</span>
            </div>
            <h2 className="text-3xl lg:text-4xl  text-gray-900 mb-6">
              Clarity, Curiosity, and <span className="text-blue-600">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We operate with clarity, curiosity, and commitment. Our culture blends the speed of startups with the
              structure of enterprise-grade outsourcing.
            </p>
          </div>

          {/* Circular arrangement */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative w-[26rem] h-[26rem] mx-auto">
              {/* Center circle */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="text-center text-white">
                  <Heart className="h-8 w-8 mx-auto mb-1" />
                  <p className="text-sm font-semibold">NGT Culture</p>
                </div>
              </div>

              {/* Culture Values with extra spacing from center */}
              {[
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Strong Work Ethics",
                  className: "top-0 left-1/2 -translate-x-1/2", // pushed up
                },
                {
                  icon: <FileText className="h-5 w-5" />,
                  title: "Documented Delivery",
                  className: "top-1/2 right-0 -translate-y-1/2", // pushed right
                },
                {
                  icon: <CheckCircle className="h-5 w-5" />,
                  title: "Clear Handoffs",
                  className: "bottom-0 left-1/2 -translate-x-1/2", // pushed down
                },
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Transparent Growth",
                  className: "top-1/2 left-0 -translate-y-1/2", // pushed left
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`absolute ${value.className} w-28 h-28 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center p-3 group transition-all duration-300 hover:shadow-xl hover:scale-105`}
                >
                  <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">
                    {value.title}
                  </p>
                </div>
              ))}
            </div>


            {/* Detailed descriptions below */}
            <div className="grid md:grid-cols-2 gap-8 mt-20">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Strong Work Ethics</h4>
                    <p className="text-gray-600 text-sm">We believe in doing things right, even when no one is watching.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Documented Delivery</h4>
                    <p className="text-gray-600 text-sm">Every process is documented, every handoff is clear, every result is trackable.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clear Handoffs</h4>
                    <p className="text-gray-600 text-sm">Seamless transitions between teams, shifts, and processes ensure nothing falls through the cracks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent Growth Paths</h4>
                    <p className="text-gray-600 text-sm">Your career progression is clear, supported, and based on merit and performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section - Map Style */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-700">Where We Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Global <span className="text-blue-600">Presence</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Simplified world representation */}
            <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-16 border border-white/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50"></div>

              {/* Location markers */}
              <div className="relative space-y-12">
                <div className="flex justify-between items-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className=" text-gray-900">Operations Hub</h3>
                      <p className="text-gray-600">Islamabad</p>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className=" text-gray-900">Client Hubs</h3>
                      <p className="text-gray-600">Dubai, Riyadh, Dallas</p>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className=" text-gray-900">Service Regions</h3>
                      <p className="text-gray-600">GCC, US, Canada, UK</p>
                    </div>
                  </div>
                </div>

                {/* Connection lines */}
                {/* <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path 
                      d="M100 100 Q200 50 300 100" 
                      stroke="#3B82F6" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <path 
                      d="M100 100 Q200 150 300 100" 
                      stroke="#7C3AED" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl">
              <Rocket className="h-6 w-6 text-white" />
              <span className="text-lg font-semibold text-white">Ready to Partner?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl  text-white leading-tight">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Reliable, Scalable, and Human
              </span>
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Whether you're looking for a long-term partner or exploring your next career move — NGT is built to grow
              with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center justify-center">
                  <Target className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Explore Our Capabilities
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center justify-center">
                  <Users className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Meet Our Teams
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="text-3xl ">NGT</div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Customer operations. Reinvented. Delivered through intelligent automation and human precision.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Solutions</h3>
              <ul className="space-y-3">
                {["Engage360", "WorkForge", "BackGrid", "Niblo AI"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Company</h3>
              <ul className="space-y-3">
                {["Inside NGT", "Careers", "Library", "Sectors"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>hello@ngt.com</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 NextGen Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default InsideNGT;