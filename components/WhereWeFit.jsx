"use client"
import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Clock, 
  UserCheck, 
  Bot, 
} from 'lucide-react';
import { 
  Database, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Slack, 
  Zap, 
  Cloud, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
  Shield,
  Activity
} from 'lucide-react';

const WhereWeFit = () => {
  const applications = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Inbound & Outbound Call Handling',
      description: 'Handle customer calls across time zones with fluent agents trained on your scripts, processes, and CRM tools.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Virtual Back Office',
      description: 'From data entry and billing to appointment confirmations — NGT\'s virtual teams become an extension of your internal staff.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Multilingual Customer Support',
      description: 'Support customers in English, Arabic, or both — with fully localized agents and cultural context built in.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Overflow & After-Hours Coverage',
      description: 'Never miss a conversation. Our offshore teams step in exactly when your in-house capacity stops.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'SLA-Driven Ticket Resolution',
      description: 'We operate under strict SLA commitments to ensure every issue is closed on time, documented, and tracked.'
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Process-Specific Staffing',
      description: 'Need a claims specialist? Or an order verification rep? NGT deploys trained personnel matched to your unique workflow.'
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: 'Intelligent Routing & First-Line Automation',
      description: 'Niblo, our smart AI agent, handles routine queries and routes calls or tickets — saving your human agents for what matters.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Compliance-Backed Execution',
      description: 'We handle sensitive tasks (healthcare, finance, logistics) under documented protocols — including HIPAA and PCI-ready setups.'
    }
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);
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

  const integrationTools = [
    {
      name: 'Salesforce',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      category: 'CRM',
      description: 'Customer relationship management'
    },
    {
      name: 'Zendesk',
      icon: <MessageSquare className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      category: 'Support',
      description: 'Customer support platform'
    },
    {
      name: 'HubSpot',
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      category: 'Marketing',
      description: 'Inbound marketing & sales'
    },
    {
      name: 'Freshdesk',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      category: 'Helpdesk',
      description: 'Customer service software'
    },
    {
      name: 'Slack',
      icon: <Slack className="h-8 w-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      category: 'Communication',
      description: 'Team collaboration hub'
    },
    {
      name: 'Asana',
      icon: <Settings className="h-8 w-8" />,
      gradient: 'from-pink-500 to-rose-500',
      category: 'Project Mgmt',
      description: 'Work management platform'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Setup',
      description: 'Deploy in minutes, not months'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Connection',
      description: 'Enterprise-grade security protocols'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-time Sync',
      description: 'Live data synchronization across platforms'
    }
  ];

  const ConnectionLine = ({ delay = 0 }) => (
    <div 
      className="absolute w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60"
      style={{
        animation: `data-stream 3s ease-in-out infinite ${delay}s`,
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    />
  );
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where We Plug In — And Take the Load Off
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're overwhelmed by customer tickets, scaling your call center, or running 
            behind on backend processes — NGT integrates directly into your workflows to keep your 
            operations seamless, responsive, and future-ready.
          </p>
        </div> */}
         <div className="text-center mb-20">
 <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-1 mb-6 animate-pulse-glow">
                    <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
                    <span className="text-lg font-bold text-gray-700">Plug In</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl  text-gray-900 mb-8 leading-tight font-space">
                    Where We<span className="text-[#2563EB]"> Plug In </span>And Take <br/> the Load Off
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed -mt-6">
                     Whether you're overwhelmed by customer tickets, scaling your call center, or running 
            behind on backend processes — NGT integrates directly into your workflows to keep your 
            operations seamless, responsive, and future-ready.
                  </p>
                  
                  <div className="w-32 h-2 bg-[#2563EB] mx-auto rounded-full mt-6"></div>
                  
                </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 text-black group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {app.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>

  














   <section 
  ref={sectionRef}
  className="relative overflow-hidden mt-28"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className={`rounded-3xl p-6 sm:p-8 md:p-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>

      {/* Header */}
      <div className="text-center mb-12">
 <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
          <Globe className="h-5 w-5 text-blue-500 animate-pulse" />
          <span className="text-base text-mg font-bold text-gray-700">Seamless Integration</span>
          <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
        </div>

        <h3 className="text-3xl sm:text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
          Works With Your <span className="text-[#2563EB]">Existing Stack</span>
        </h3>


        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed -mt-2">
          NGT integrates seamlessly with your current tools — no disruption, just enhancement. 
          Connect your favorite platforms and supercharge your workflow.
        </p>
        <div className="flex justify-center mb-6 mt-6">
          <div className="w-24 h-1.5 bg-[#2563EB] rounded-full animate-gradient-shift bg-300%"></div>
        </div>
      </div>

      {/* Benefits Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="glass-morphism rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group bg-white"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Integration Tools Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center relative z-10">
          {integrationTools.map((tool, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${tool.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group-hover:scale-110 sm:group-hover:scale-125 `}
                   style={{ animationDelay: `${index * 0.5}s` }}>
                {tool.icon}
              </div>
              
              {/* Tool Info Card */}
              <div className={`absolute -top-20 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                hoveredTool === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <div className="glass-morphism rounded-xl p-4 shadow-lg min-w-max">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{tool.description}</p>
                    <span className="inline-block bg-gradient-primary/10 text-blue-600 rounded-full px-3 py-1 text-xs font-bold">
                      {tool.category}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Tool Label */}
              <div className="text-center mt-3">
                <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
              
              {/* Connection indicator */}
              {hoveredTool === index && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto">
            Let's Map NGT Into Your Workflow
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div> */}
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

export default WhereWeFit;