
import React from 'react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,58,70,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_70%,rgba(46,91,255,0.1),transparent)]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-10">
            <div className="p-1 rounded-full bg-gradient-to-r from-sos-red via-sos-blue to-sos-red">
              <div className="bg-sos-darkgray rounded-full px-6 py-2">
                <span className="text-white font-semibold">Our Vision</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              A Future Where Every Emergency Has an Instant Response
            </span>
          </h2>
          
          <div className="relative mb-16">
            <div className="absolute -left-16 top-0 text-8xl text-sos-red opacity-30">"</div>
            <p className="text-sos-lightgray text-xl md:text-2xl lg:text-3xl italic relative z-10 max-w-4xl mx-auto">
              Advance SOS Max is designed for the future – a connected, community-driven, 
              real-time safety network that empowers citizens and authorities to respond 
              faster and smarter.
            </p>
            <div className="absolute -right-16 bottom-0 text-8xl text-sos-red opacity-30">"</div>
          </div>
          
          <div className="flex flex-col md:flex-row flex-nowrap justify-center items-stretch gap-6 lg:gap-8 mt-20 max-w-7xl mx-auto">
            <div className="flex-1 min-w-0 bg-gradient-to-br from-sos-darkgray to-black p-8 rounded-xl border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-sos-red/10 text-sos-red flex items-center justify-center mx-auto mb-6">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Speed</h3>
              <p className="text-sos-lightgray text-lg text-center">
                Reducing response time from minutes to seconds when every moment matters.
              </p>
            </div>
            
            <div className="flex-1 min-w-0 bg-gradient-to-br from-sos-darkgray to-black p-8 rounded-xl border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-sos-blue/10 text-sos-blue flex items-center justify-center mx-auto mb-6">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Community</h3>
              <p className="text-sos-lightgray text-lg text-center">
                Building networks of trusted helpers and responders in every community.
              </p>
            </div>
            
            <div className="flex-1 min-w-0 bg-gradient-to-br from-sos-darkgray to-black p-8 rounded-xl border border-gray-800">
              <div className="w-16 h-16 rounded-full bg-purple-600/10 text-purple-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Innovation</h3>
              <p className="text-sos-lightgray text-lg text-center">
                Continuously evolving with cutting-edge technology for better outcomes.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-4 bottom-4 w-24 h-24 border border-sos-red/20 rounded-full"></div>
      <div className="absolute right-8 top-8 w-16 h-16 border border-sos-blue/20 rounded-full"></div>
    </section>
  );
};

export default VisionSection;
