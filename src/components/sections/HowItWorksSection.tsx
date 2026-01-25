
import React from 'react';
import { User, Monitor, Users, ArrowRight, AlertCircle } from 'lucide-react';

const lifecycleSteps = [
  {
    icon: User,
    title: 'User',
    description: 'User triggers SOS alert with location and video streaming',
    color: 'bg-sos-red',
    details: [
      'One-tap emergency activation',
      'Automatic location sharing',
      'Live video feed transmission',
      'Real-time status updates'
    ]
  },
  {
    icon: Monitor,
    title: 'Admin Panel',
    description: 'Admin receives alert, monitors situation, and coordinates response',
    color: 'bg-sos-blue',
    details: [
      'Real-time alert dashboard',
      'Live video monitoring',
      'Route optimization',
      'Responder assignment'
    ]
  },
  {
    icon: Users,
    title: 'Responder',
    description: 'Responder receives notification and navigates to emergency location',
    color: 'bg-emerald-600',
    details: [
      'Instant notification',
      'Optimized route guidance',
      'Live location tracking',
      'ETA calculation'
    ]
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-sos-darkgray relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="text-xs font-mono text-sos-blue" style={{ 
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 90 - 45}deg)`
            }}>
              {'{'}SOS → Admin → Responder{'}'}
            </div>
          ))}
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">How It Works</span>
          </h2>
          <div className="w-20 h-1 bg-sos-blue mb-6"></div>
          <p className="text-sos-lightgray max-w-2xl text-lg">
            The complete SOS lifecycle from emergency trigger to responder arrival
          </p>
        </div>
        
        {/* Lifecycle Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 mb-12">
            {lifecycleSteps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div className="w-full lg:w-80 relative">
                  <div className="bg-gradient-to-br from-sos-darkgray to-black p-8 rounded-xl border border-gray-800 hover:border-sos-blue/50 group transition-all relative">
                    {/* Icon */}
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-3 text-center group-hover:text-sos-blue transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sos-lightgray text-center mb-6">
                      {step.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-sos-lightgray">
                          <AlertCircle className="w-4 h-4 text-sos-blue mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-sos-blue to-sos-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < lifecycleSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center mx-2">
                    <ArrowRight className="w-8 h-8 text-sos-blue animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Vertical arrows for mobile */}
          <div className="lg:hidden flex flex-col items-center gap-4 mb-8">
            {lifecycleSteps.slice(0, -1).map((_, index) => (
              <ArrowRight key={index} className="w-8 h-8 text-sos-blue rotate-90 animate-pulse" />
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-sos-darkgray glass-effect p-6 rounded-xl border border-gray-800 max-w-3xl">
              <p className="text-sos-lightgray text-lg">
                <span className="text-sos-red font-semibold">Advance SOS Max</span> creates a seamless connection between 
                users in distress, administrators monitoring the system, and responders on the ground. 
                Every second counts, and our integrated platform ensures rapid, coordinated emergency response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
