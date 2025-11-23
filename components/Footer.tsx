import React from 'react';
import { Briefcase, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-bold text-xl">
              <Briefcase className="w-6 h-6" />
              <span>CareerUp</span>
            </div>
            <p className="text-sm text-slate-400">
              막막한 취업 준비, 3년 차 현직자가<br/>
              가장 확실한 지름길을 알려드립니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">홈</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">예약하기</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">법적 고지</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">환불 규정</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-slate-500">
              문의: help@careerup.com<br/>
              운영시간: 평일 10:00 - 19:00
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © 2024 CareerUp Mentoring. All rights reserved.
        </div>
      </div>
    </footer>
  );
};