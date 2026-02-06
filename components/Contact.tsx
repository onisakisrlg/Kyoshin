import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Building2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact & Access</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              ビジネスパートナーシップ、採用、その他のお問い合わせは<br />
              以下の連絡先よりお気軽にご連絡ください。
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                  <Building2 size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Company</h4>
                  <p className="text-xl font-medium">{COMPANY_INFO.name}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Address</h4>
                  <p className="text-lg text-slate-300">
                    〒{COMPANY_INFO.zip}<br/>
                    {COMPANY_INFO.address}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 mt-2 hover:text-blue-300 transition-colors"
                  >
                    Googleマップで開く <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                  <Phone size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="h-[400px] md:h-[500px] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative group">
            <iframe 
              width="100%" 
              height="100%" 
              title="Kyoshin K.K. Office Location"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=岡山県岡山市北区富町1-20-14&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            {/* Overlay hint */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg pointer-events-none">
              OFFICE LOCATION
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;