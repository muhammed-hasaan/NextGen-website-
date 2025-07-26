'use client'
import React, { useState, useEffect } from 'react';
import {
  CheckCircle, X, ArrowRight, Zap, Shield, Globe, Users, TrendingUp, Award,
  Clock, Target, Star, Sparkles, Layers, BarChart3, Infinity, Brain,
  Rocket, Diamond, Crown, Gauge, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const WhyNGT = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const challenges = [
    { text: 'Inconsistent support quality', icon: <X className="h-4 w-4" /> },
    { text: 'Missed SLAs and deadlines', icon: <X className="h-4 w-4" /> },
    { text: 'Limited coverage hours', icon: <X className="h-4 w-4" /> },
    { text: 'Rigid BPO contracts', icon: <X className="h-4 w-4" /> },
    { text: 'Poor operational visibility', icon: <X className="h-4 w-4" /> },
    { text: 'Disconnected team workflows', icon: <X className="h-4 w-4" /> }
  ];

  const solutions = [
    { text: 'Always-on 24/7 support', icon: <CheckCircle className="h-4 w-4" /> },
    { text: 'Arabic + English fluency', icon: <CheckCircle className="h-4 w-4" /> },
    { text: 'Infinitely scalable teams', icon: <CheckCircle className="h-4 w-4" /> },
    { text: 'Flexible operation models', icon: <CheckCircle className="h-4 w-4" /> },
    { text: 'Real-time dashboards', icon: <CheckCircle className="h-4 w-4" /> },
    { text: 'Integrated smart workflows', icon: <CheckCircle className="h-4 w-4" /> }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast Response',
      description: 'Instant response times with AI-powered intelligent routing and priority handling',
      gradient: 'from-yellow-400 to-orange-500',
      stats: '< 30s avg response'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'HIPAA, PCI, and ISO compliant operations with military-grade data protection',
      gradient: 'from-green-400 to-teal-500',
      stats: '100% compliance rate'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Reach',
      description: '24/7 multilingual support across continents with local cultural understanding',
      gradient: 'from-blue-400 to-purple-500',
      stats: '5 continents covered'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Teams',
      description: 'Trained professionals specialized in your industry with continuous skill development',
      gradient: 'from-pink-400 to-red-500',
      stats: '700+ specialists'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Proven Results',
      description: 'Measurable improvements in customer satisfaction and operational efficiency',
      gradient: 'from-indigo-400 to-blue-500',
      stats: '98% client retention'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Multi-layer quality control with real-time monitoring and performance optimization',
      gradient: 'from-purple-400 to-pink-500',
      stats: '99.9% accuracy'
    }
  ];

  return (
    <section className="pt-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-teal-400/8 to-blue-400/8 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute bottom-32 right-40 w-56 h-56 bg-gradient-to-r from-pink-400/8 to-red-400/8 rounded-full blur-3xl animate-float-medium"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3 animate-grid-move"></div>

        {/* Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
            <Zap className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
            <span className="text-base  text-gray-700">The NGT Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl  text-gray-900 mb-6 leading-tight">
            Why Companies Are{' '}
            <span className="text-[#0C5DE2]">
              Rethinking BPO
            </span>
            <br className="hidden sm:block" /> and Choosing NGT
          </h2>

          <div className="w-24 h-1.5 bg-[#0C5DE2] mx-auto rounded-full mb-6 animate-pulse-glow"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center -mt-10">

          <div className="w-[50%]  animate-slide-right" >
            <div className="bg-white rounded-2xl  relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full -mr-12 -mt-12"></div>

              <div className="relative z-10">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Traditional BPO models can't keep up with modern customer expectations. Delayed responses, disconnected
                  teams, poor visibility, and a one-size-fits-all mindset hold back real growth.
                </p>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C5DE2] rounded-xl flex items-center justify-center animate-pulse-glow">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <p className="text-xl sm:text-2xl text-black">That's where NGT comes in.</p>
                </div>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We partner with scaling businesses globally to deliver high-performance customer operations that are
                  multilingual, always-on, and intelligence-backed — without the overhead or rigidity of legacy call
                  centers.
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From agile support teams to deeply optimized workflows, NGT offers a hybrid operations model that flexes
                  with your business, speaks your customer's language, and keeps you ahead in a 24/7 world.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] lg:w-1/2 animate-slide-left flex justify-end items-center">
          <Image src="/images/NGT-Customers.png" alt='ngt customers' width={450} height={450} />
            {/* <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex justify-center items-center h-full border border-gray-200">
              <div className="grid grid-cols-2 gap-6 w-full">

                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center shadow">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="ml-3 text-lg font-semibold text-red-700">Problems</span>
                  </div>

                  {challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-red-50 rounded-xl border border-red-100 hover:bg-red-100 transition duration-200"
                    >
                      <div className="w-6 h-6 bg-red-200 text-red-700 rounded-md flex items-center justify-center mr-3 shadow-sm">
                        {challenge.icon}
                      </div>
                      <span className="text-sm sm:text-base text-red-800 font-medium">{challenge.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shadow">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="ml-3 text-lg font-semibold text-green-700">Solutions</span>
                  </div>

                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition duration-200"
                    >
                      <div className="w-6 h-6 bg-green-200 text-green-800 rounded-md flex items-center justify-center mr-3 shadow-sm">
                        {solution.icon}
                      </div>
                      <span className="text-sm sm:text-base text-green-800 font-medium">{solution.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>

        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 mt-12 sm:mt-20 bg-blue-200 p-6 sm:p-10 rounded-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center animate-scale-in relative overflow-hidden transition-all duration-700 hover:scale-105 bg-white`}
            >
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full -mr-6 sm:-mr-8 -mt-6 sm:-mt-8 animate-float-slow"></div>

              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300 relative z-10 animate-pulse-glow`}>
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl  text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                {feature.description}
              </p>

              <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-2 py-1 sm:px-3 sm:py-1.5">
                <Clock className="h-3 w-3 text-blue-600" />
                <span className="text-xs  text-blue-600">{feature.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    
    @keyframes animate-grid-move {
      from { background-position: 0 0; }
      to { background-position: 50px 50px; }
    }
    
    @keyframes animate-particle-float {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(0) translateX(20px); }
      75% { transform: translateY(20px) translateX(10px); }
    }
    
    @keyframes animate-scale-in {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes animate-slide-right {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes animate-slide-left {
      from { transform: translateX(20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `}</style>
    </section>
  );
};

export default WhyNGT;