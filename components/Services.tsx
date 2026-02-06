import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">事業内容</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            3つのコア事業を通じて、日中ビジネスの課題を解決し、<br />
            新たな成長機会を創出します。
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const isPortrait = service.orientation === 'portrait';

            return (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className={`w-full md:w-1/2 flex ${isPortrait ? 'justify-center' : 'block'}`}>
                  <div className={`relative group ${isPortrait ? 'w-[280px] md:w-[320px]' : 'w-full'}`}>
                    {/* Decorative Border */}
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-slate-100 rounded-2xl transform translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    
                    {/* Image Container */}
                    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                      isPortrait 
                        ? 'aspect-[9/19.5] w-full' // Phone screen ratio
                        : 'h-[300px] md:h-[400px]' // Standard landscape
                    }`}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                      <service.icon size={24} />
                    </div>
                    <span className="text-blue-900 font-bold tracking-wider uppercase text-sm">
                      {service.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-900 font-medium group cursor-pointer">
                    <span className="border-b border-transparent group-hover:border-blue-900 transition-colors">
                      詳細を見る
                    </span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;