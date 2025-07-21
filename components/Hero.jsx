"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, Globe, Users, Clock, Shield } from 'lucide-react';
import ParticlesCanvas from './CanvasBgHero';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [masked, setMasked] = useState(true);
  const videoRef = useRef(null);

  const words = [
    'Reinvented',
    'Redefined', 
    'Optimized',
    'Scaled',
    'Human-Led',
    'AI-Enabled',
    'Multilingual',
    'Always-On',
    'Compliant',
    'Global'
  ];

  const stats = [
    { icon: Clock, number: '24/7', label: 'Always-On Support', color: 'text-blue-600' },
    { icon: Users, number: '700+', label: 'Expert Agents', color: 'text-purple-600' },
    { icon: Globe, number: '17+', label: 'Industries Served', color: 'text-teal-600' },
    { icon: Shield, number: '5+', label: 'Continents', color: 'text-indigo-600' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Ensure video plays correctly
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented, attempting with muted:", error);
      });
    }
  }, []);

  useEffect(() => {
    let typingInterval;
    let wordTimer;

    const startTypingEffect = () => {
      setIsTyping(true);
      setDisplayText('');
      let charIndex = 0;
      const currentWord = words[currentWordIndex];

      typingInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Set timeout before moving to next word
          wordTimer = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 3000); // Wait 1 second before starting next word
        }
      }, 100); // Typing speed (100ms per character)
    };

    startTypingEffect();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(wordTimer);
    };
  }, [currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white inert-0 z-0 ">
      {/* <ParticlesCanvas masked={masked} className="absolute" /> */}

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-8 left-[300px] w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-[#0C5DE2] text-sm font-medium shadow-lg animate-scale-in">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Next-Gen Customer Operations
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl xl:text-5xl text-gray-900">
                Customer Operations.
              </h1>
              <div className="relative h-16 md:h-20 overflow-hidden" style={{marginTop:'6px'}}>
                <span 
                  className="text-4xl md:text-4xl xl:text-5xl text-gradient text-[#0C5DE2]"
                >
                  {displayText}
                  <span className={`inline-block w-1 h-8 bg-[#0C5DE2] ml-1 animate-pulse ${isTyping ? 'opacity-100' : 'opacity-0'}`}></span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl lg:text-xl text-gray-600 font-light leading-relaxed animate-fade-in-up " style={{ animationDelay: '0.6s', marginTop:'-10px' }}>
              Where intelligent automation meets human precision.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-in-up  " style={{ animationDelay: '0.9s', marginTop:'1px' }}>
              NGT delivers multilingual call centre support, virtual staffing, and backend operations 
              through structured offshore teams — driving reliable, 24/7 performance across the globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <button className="group relative bg-[#0C5DE2] hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#0C5DE2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-[15px] relative flex items-center">
                  Make My Operations Smarter
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>

              {/* <button className="text-[15px] text-sm md:text-[14px] group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-white/50 hover:bg-white/80">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform duration-200" />
                See the Intelligence Behind
              </button> */}
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative w-full pt-[90%] rounded-2xl overflow-hidden animate-glow">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/HeroVideo/HeroVideo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer hover:border-blue-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;