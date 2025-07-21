'use client'
import React , {useState , useEffect} from 'react';
import { TrendingUp, Shield, Clock, Globe, Zap } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      industry: 'US-Based DTC Brand (E-commerce)',
      problem: 'High abandonment rates due to delayed customer responses',
      solution: '24/7 multilingual inbound team via Engage360',
      result: '34% increase in first-contact resolution, 21% rise in repeat purchases',
      color: 'blue'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      industry: 'GCC Healthcare Provider',
      problem: 'Sensitive patient record processing with compliance risks',
      solution: 'HIPAA-compliant offshore claims team via BackGrid',
      result: 'Reduced in-house overhead by 60%, ensured full data audit trails',
      color: 'green'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      industry: 'Logistics SaaS Company (Remote Ops)',
      problem: 'Overstretched internal team handling onboarding & ticketing',
      solution: 'WorkForge virtual staff embedded across 2 time zones',
      result: 'SLA compliance improved by 45%, onboarding time cut by 3 days',
      color: 'purple'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      industry: 'Financial Services Firm (Middle East)',
      problem: 'Limited regional language support, missed SLAs',
      solution: 'Bilingual call center with QA layers across GCC hours',
      result: '92% CSAT in 3 months, SLA adherence rose to 98%',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colors[color] || colors.blue;
  };

const words = ['From Chaos', 'To Clarity'];
const [displayedText, setDisplayedText] = useState('');


const [currentIndex, setCurrentIndex] = useState(0);
const [fadeIn, setFadeIn] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFadeIn(false); // Start fading out
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length); // Switch word
      setFadeIn(true); // Fade in new word
    }, 500); // Wait before changing text
  }, 3000); // Total cycle time

  return () => clearInterval(interval);
}, []);


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Chaos to Clarity — How NGT Transforms Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Across industries and regions, growing companies partner with NGT to turn broken 
            customer processes into smooth, scalable operations. Here's what that transformation looks like.
          </p>
        </div> */}
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="text-center mb-20 flex flex-col justify-center items-center">
 <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
            <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
            <span className="text-md font-bold text-gray-700">Service Architecture</span>
          </div>
<h2 className="relative text-3xl md:text-4xl text-gray-900 mb-8 text-center flex justidy-center items-center mx-auto">
  {/* Animated Word (Overlayed Above Transforms) */}
 From Chaos<p className='text-blue-700 ml-2'>To Clarity</p>

  {/* Static Line */}
</h2>



          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed -mt-6">
            How NGT Transforms Operations
          </p>

          <div className="w-32 h-2 bg-[#2563EB] mx-auto rounded-full mt-4"></div>
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-8 -mt-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
            >
              {/* Icon and Industry */}
              <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl border-2 flex items-center justify-center ${getColorClasses(caseStudy.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {caseStudy.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {caseStudy.industry}
                  </h3>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                  Problem
                </h4>
                <p className="text-gray-700">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  Solution
                </h4>
                <p className="text-gray-700">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Result */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                  Result
                </h4>
                <p className="text-green-800 font-medium">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Average SLA Adherence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-blue-100">Faster Resolution Times</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
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
      `}</style>
    </section>
  );
};

export default CaseStudies;