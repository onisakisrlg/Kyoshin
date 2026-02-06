import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide">
        <div className="mb-4 md:mb-0">
          <span className="font-semibold text-slate-400">{COMPANY_INFO.name}</span>
          <span className="mx-2">|</span>
          <span>Okayama, Japan</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        
        <div className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Kyoshin K.K.
        </div>
      </div>
    </footer>
  );
};

export default Footer;