import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" className="text-slate-900" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">
            伝統と革新の<br />
            <span className="text-blue-900">交差点に立つ。</span>
          </h2>
          
          <div className="bg-white p-8 md:p-12 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">
                    「中国経験」×「日本視点」
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    京辰株式会社は、変化の激しい中国市場で培ったダイナミズムと、品質を追求する日本のビジネス精神を融合させます。
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    単なる仲介者ではなく、双方の市場の本質を理解するパートナーとして、ビジネスの潜在能力を最大化します。
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <img 
                    src="https://i.postimg.cc/m2rHnYrF/17fed8f0af69f580c7b159b02d66e1eb.jpg" 
                    alt="Strategic Meeting" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                    <p className="text-white font-medium text-sm">Cross-border Value Creation</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;