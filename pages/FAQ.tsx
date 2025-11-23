import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { FaqItem } from '../types';
import { FAQ_BG } from '../images/assets';

const faqList: FaqItem[] = [
  {
    id: '1',
    question: '비전공자인데 직무 상담을 받아도 될까요?',
    answer: '네, 물론입니다! 비전공자일수록 초기 방향 설정이 중요합니다. 전공과 무관하게 본인의 경험을 살려 진입할 수 있는 직무를 함께 탐색하고, 필요한 역량을 쌓는 로드맵을 그려드립니다.'
  },
  {
    id: '2',
    question: '멘토링은 어떤 방식으로 진행되나요?',
    answer: '모든 멘토링은 Zoom(화상 회의)을 통해 1:1 비대면으로 진행됩니다. 예약 확정 시 입력하신 이메일과 문자로 접속 링크를 보내드립니다. 화면 공유를 통해 자소서나 포트폴리오를 실시간으로 보면서 피드백을 드립니다.'
  },
  {
    id: '3',
    question: '예약 시간 변경이나 취소는 언제까지 가능한가요?',
    answer: '원활한 일정 조율을 위해 멘토링 시작 24시간 전까지만 변경 및 100% 환불 취소가 가능합니다. 당일 취소나 노쇼(No-Show)의 경우 환불이 어렵습니다.'
  },
  {
    id: '4',
    question: '모의 면접 녹화본은 언제 받을 수 있나요?',
    answer: '멘토링 종료 후 24시간 이내에 다운로드 링크를 이메일로 보내드립니다. 녹화본은 본인의 태도나 습관을 객관적으로 복기하는 데 큰 도움이 됩니다. (개인 소장용으로만 사용 가능합니다)'
  },
  {
    id: '5',
    question: '자소서 첨삭은 미리 보내드려야 하나요?',
    answer: '네, 효율적인 시간 활용을 위해 멘토링 시작 최소 24시간 전까지 작성하신 초안을 보내주셔야 합니다. 사전에 멘토가 검토한 뒤, 멘토링 시간에는 심층적인 피드백 위주로 진행됩니다.'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="h-64 relative bg-slate-900 overflow-hidden">
        <img src={FAQ_BG} alt="FAQ Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-2">무엇을 도와드릴까요?</h1>
          <p className="text-slate-300">자주 묻는 질문을 확인하고 궁금증을 해결하세요.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="space-y-4">
          {faqList.map((item) => (
            <div 
              key={item.id} 
              className={`border rounded-xl transition-all duration-200 overflow-hidden ${openId === item.id ? 'border-primary shadow-md bg-blue-50/30' : 'border-slate-200 bg-white hover:border-blue-300'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className={`font-bold text-lg ${openId === item.id ? 'text-primary' : 'text-slate-800'}`}>
                  Q. {item.question}
                </span>
                {openId === item.id ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                  <div className="flex">
                    <span className="font-bold text-secondary mr-2">A.</span>
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-50 rounded-2xl p-10 text-center border border-slate-100">
          <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-dark mb-2">아직 궁금한 점이 있으신가요?</h3>
          <p className="text-slate-600 mb-8">궁금증이 해결되셨다면, 이제 커리어를 성장시킬 시간입니다.</p>
          <div className="flex justify-center gap-4">
             <Link to="/booking">
                <Button variant="primary">멘토링 예약하기</Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;