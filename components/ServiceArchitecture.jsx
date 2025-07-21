'use client'
import React from 'react';
import { Phone, Users, Shield, ArrowRight, Zap } from 'lucide-react';

const ServiceArchitecture = () => {
  const services = [
    {
      id: 'engage360',
      icon: <Phone className="h-8 w-8" />,
      title: 'Engage360',
      subtitle: 'Frontline Experience & Call Center Operations',
      description: 'Customer conversations, redefined.',
      details: 'Engage360 delivers scalable inbound and outbound call center support across English and Arabic languages. From tier-1 helpdesk to appointment scheduling, lead response, and retention campaigns — we run frontline experiences that feel local, responsive, and 24/7-ready.',
      useCases: [
        'Inbound customer service',
        'Cold/warm outbound calling', 
        'Lead qualification & follow-ups',
        'After-hours & overflow coverage'
      ],
      gradient: 'from-[#CFA912] to-[#CFA912]'
    },
    {
      id: 'workforge',
      icon: <Users className="h-8 w-8" />,
      title: 'WorkForge',
      subtitle: 'Virtual Staffing & Operational Support',
      description: 'Smart talent. Integrated into your team.',
      details: 'WorkForge embeds dedicated offshore professionals into your daily workflows — fully aligned with your SOPs, time zones, and KPIs. Whether it\'s back-office support, order processing, or live chat — we help you scale without the hiring burden.',
      useCases: [
        'Virtual assistants & admin support',
        'Data entry & processing',
        'Finance & billing support',
        'Live chat & ticket handling'
      ],
      gradient: 'from-[#550201] to-[#550201]'
    },
    {
      id: 'backgrid',
      icon: <Shield className="h-8 w-8" />,
      title: 'BackGrid',
      subtitle: 'Compliance-First Business Process Outsourcing',
      description: 'Secure. Structured. Scalable.',
      details: 'BackGrid is where we handle high-stakes, compliance-sensitive workflows. From healthcare to finance and logistics, we deliver structured BPO solutions built for HIPAA, PCI, and data security protocols — with dedicated QA layers and documentation.',
      useCases: [
        'HIPAA-compliant data handling',
        'Claims & policy processing',
        'Order-to-cash workflows',
        'SLA-bound project execution'
      ],
      gradient: 'from-[#27476D] to-[#27476D]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
         <div className={`text-center mb-16  transform transition-all duration-2000 `}>
          <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-2 mb-6 animate-pulse-glow">
            <Zap className="h-4 w-4 text-[#0C5DE2] animate-pulse" />
            <span className="text-base font-bold text-gray-700">Engine Layers</span>
          </div>
          
          <h2 className="text-4xl md:text-4xl  text-gray-900 mb-6">
             One Engine.
            <span className="text-[#0C5DE2] pr-3 ">
              Three 
            </span>
             Layers.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed -mt-2">
            NGT's service model is designed as a modular system — each layer built to solve 
            a critical part of your customer operations, from frontlines to backend. You can 
            engage one, two, or all three — each flexes to your scale, market, and workflow needs.
          </p>
          <br />
          <div className="w-24 h-1.5 bg-[#0C5DE2] mx-auto rounded-full mb-6 animate-pulse-glow"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 -mt-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{service.subtitle}</p>
                  <p className="text-lg font-semibold">{service.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.details}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <button className="group/btn w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto">
            See Real-World Use Cases
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

export default ServiceArchitecture;