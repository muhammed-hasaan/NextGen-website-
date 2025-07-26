'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Bot, Zap, Globe, Users, ArrowRight, Sparkles, Brain, MessageCircle, Shield, Activity, Settings, Play, CheckCircle } from 'lucide-react';
// import NibloLogo from "../../public/NibloLogo/niblorobo.jpg";
import Image from 'next/image';

const NibloSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />, title: 'Lightning-Fast Response', subtitle: 'Real-time voice interaction & call handling', description: 'Instant response with sub-second latency using advanced neural networks', gradient: 'from-[#EA4333] to-[#F16F2E]'
    },
    {
      icon: <Globe className="h-8 w-8" />, title: 'Global Communication', subtitle: 'Multilingual understanding (Arabic & English)', description: 'Native language processing with cultural context and regional dialects', gradient: 'from-[#38C677] to-[#A3C83A]'
    },
    {
      icon: <Users className="h-8 w-8" />, title: 'Seamless Handover', subtitle: 'Intelligent escalation to live agents', description: 'Smart escalation with complete context transfer and conversation history', gradient: 'from-[#F3CB1F] to-[#F3882B]'
    },
    {
      icon: <Settings className="h-8 w-8" />, title: 'Infinite Customization', subtitle: 'Fully customizable for your workflows', description: 'Adapts to your SOPs, business rules, and compliance requirements', gradient: 'from-green-400 to-cyan-600'
    }
  ];

  const capabilities = [
    { icon: <Brain className="h-6 w-6" />, text: 'Neural Processing', color: 'text-[#F3CB1F]', bg: 'bg-purple-100' },
    { icon: <MessageCircle className="h-6 w-6" />, text: 'Conversation AI', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: <Shield className="h-6 w-6" />, text: 'Enterprise Security', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: <Activity className="h-6 w-6" />, text: 'Real-time Analytics', color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
 <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-10 bg-white dark:bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header Section */}
    <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
        <Zap className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
        <span className="text-base  text-gray-700">The NGT Difference</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-4xl  text-gray-900 mb-4 leading-tight px-2 flex flex-col sm:flex-row justify-center items-center">
        <div className="flex items-center">
          <Image 
            src="/NibloLogo/niblo.png" 
            alt="niblo logo" 
            width={100} 
            height={100} 
            className="  -mt-3 mr-2 sm:mr-3" 
          />
          <span>The Future of</span>
        </div>
        <span className="text-[#0c5de2] bg-clip-text animate-gradient-shift bg-[#0c5de2] bg-300% sm:ml-2">
          Intelligent Operations
        </span>
      </h2>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4 -mt-2">
        Experience <span className="text-[#0c5de2] font-semibold">Niblo</span> — NGT's revolutionary AI platform that transforms customer operations through intelligent automation.
      </p>
      
      <div className="flex justify-center mb-6 mt-4">
        <div className="w-24 h-1.5 bg-[#0c5de2] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 max-w-md sm:max-w-none mx-auto">
        <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
          <span className="text-xs sm:text-sm font-semibold text-gray-700">Enterprise Ready</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
          <span className="text-xs sm:text-sm font-semibold text-gray-700">SOC 2 Compliant</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
          <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
          <span className="text-xs sm:text-sm font-semibold text-gray-700">AI-Powered</span>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-16 -mt-4">
      {/* Features List */}
      <div className={`space-y-4 sm:space-y-6 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
        {features.map((feature, index) => (
          <div key={index} className="group rounded-xl p-4 sm:p-5 bg-white border border-blue-100 shadow-md relative overflow-hidden transition-all duration-500 hover:shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="flex items-start space-x-3 sm:space-x-4 relative z-10">
              <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#0c5de2] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{feature.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className={`relative w-full max-w-md mx-auto ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
        <div className="w-full aspect-square h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden flex items-center justify-center">
          <img 
            src="/NibloLogo/SayHi.png" 
            alt="Niblo AI" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-md">
        <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 animate-pulse" />
          <h3 className="text-lg sm:text-xl md:text-2xl  text-gray-900">Ready to Experience Niblo?</h3>
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 animate-pulse" />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed px-2">
          Join the future of intelligent operations. Experience how Niblo transforms customer interactions with enterprise-grade AI that learns, adapts, and scales with your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <button className="group bg-[#0c5de2] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <Play className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            <span>Watch Live Demo</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
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
    
    @keyframes animate-fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes animate-slide-left {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes animate-slide-right {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes animate-scale-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes animate-gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</section>
  );
};

export default NibloSection;
