import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative z-10 pt-28 md:pt-0">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 mb-6">
            <span className="h-px w-8 bg-blue-900"></span>
            <span className="text-blue-900 font-bold text-xs tracking-[0.2em] uppercase">Global Innovation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.2]">
            中国の経験、<br />
            <span className="text-blue-900 relative">
              日本の視点
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            で<br />
            未来を拓く。
          </h1>
          
          <p className="text-slate-500 text-lg mb-10 leading-loose">
            世界500強企業の知見とリソースを融合。<br />
            京辰株式会社は、日中市場の新たな価値創造と<br />
            ビジネスの架け橋となるパートナーです。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              事業内容を見る
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors duration-300"
            >
              お問い合わせ
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Globe size={18} />
              <span className="text-xs tracking-wider">CROSS-BORDER</span>
            </div>
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="text-xs tracking-wider">CONSULTING & MARKETING</div>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[2s]"
        />
        
        {/* Decorational Elements */}
        <div className="absolute bottom-0 left-0 bg-white w-24 h-24 z-20 hidden md:block">
           <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-tl-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;