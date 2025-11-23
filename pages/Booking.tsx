import React, { useState } from 'react';
import { Check, Calendar, Clock, CreditCard } from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceItem, BookingState } from '../types';
import { BOOKING_HEADER } from '../images/assets';

const services: ServiceItem[] = [
  {
    id: 'consulting',
    title: '직무 심층 상담',
    duration: 30,
    price: '50,000원',
    description: '나에게 맞는 직무 찾기 및 커리어 방향성 수립'
  },
  {
    id: 'resume',
    title: '자소서/이력서 첨삭',
    duration: 60,
    price: '90,000원',
    description: '서류 합격률을 높이는 경험 구조화 및 문장 다듬기'
  },
  {
    id: 'interview',
    title: '실전 모의 면접',
    duration: 90,
    price: '130,000원',
    description: '실제 면접 환경 시뮬레이션 및 피드백 (녹화본 제공)'
  }
];

// Mock Data for Dates and Times
const availableDates = [12, 13, 14, 15, 16, 17, 18];
const availableTimes = ['19:00', '20:00', '21:00'];

const Booking: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingState>({
    serviceId: null,
    date: null,
    timeSlot: null,
    name: '',
    email: '',
    inquiry: '',
  });

  const updateForm = (key: keyof BookingState, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.serviceId) return alert('서비스를 선택해주세요.');
    if (step === 2 && (!formData.date || !formData.timeSlot)) return alert('날짜와 시간을 선택해주세요.');
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('예약이 성공적으로 완료되었습니다! 확인 메일이 발송됩니다.');
    window.location.hash = '/'; // Go home
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="h-64 relative bg-slate-900">
        <img src={BOOKING_HEADER} alt="Booking Header" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">멘토링 예약</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="flex justify-between mb-8 border-b pb-4">
            {['서비스 선택', '일정 선택', '정보 입력'].map((label, idx) => (
              <div key={idx} className={`flex items-center ${step > idx + 1 ? 'text-primary' : step === idx + 1 ? 'text-dark font-bold' : 'text-slate-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step > idx + 1 ? 'bg-primary text-white' : step === idx + 1 ? 'bg-dark text-white' : 'bg-slate-200'}`}>
                  {step > idx + 1 ? <Check size={16} /> : idx + 1}
                </div>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-dark">어떤 도움이 필요하신가요?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {services.map(service => (
                  <div 
                    key={service.id}
                    onClick={() => updateForm('serviceId', service.id)}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all hover:shadow-md ${formData.serviceId === service.id ? 'border-primary bg-blue-50' : 'border-slate-100 hover:border-blue-200'}`}
                  >
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{service.description}</p>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200/50">
                      <span className="text-sm text-slate-500">{service.duration}분</span>
                      <span className="font-bold text-primary">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button onClick={handleNext} disabled={!formData.serviceId} variant="primary">다음 단계</Button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="space-y-8 animate-fade-in">
               <h2 className="text-2xl font-bold text-dark">원하시는 일정을 선택해주세요.</h2>
               <div className="flex flex-col md:flex-row gap-8">
                 {/* Mock Calendar */}
                 <div className="flex-1">
                    <h3 className="font-semibold mb-4 flex items-center"><Calendar className="w-4 h-4 mr-2" /> 날짜 선택 (2024년 5월)</h3>
                    <div className="grid grid-cols-7 gap-2 text-center">
                       {['일', '월', '화', '수', '목', '금', '토'].map(d => (
                         <div key={d} className="text-xs text-slate-400 py-1">{d}</div>
                       ))}
                       {Array.from({length: 11}).map((_, i) => <div key={`empty-${i}`} />)}
                       {availableDates.map(date => (
                         <button 
                            key={date}
                            onClick={() => {
                              updateForm('date', new Date(2024, 4, date));
                              updateForm('timeSlot', null); // Reset time when date changes
                            }}
                            className={`p-2 rounded-lg text-sm hover:bg-blue-50 transition-colors ${
                              formData.date?.getDate() === date 
                              ? 'bg-primary text-white hover:bg-primary shadow-md' 
                              : 'bg-white text-slate-700'
                            }`}
                         >
                           {date}
                         </button>
                       ))}
                    </div>
                 </div>
                 
                 {/* Time Slots */}
                 <div className="flex-1 border-l border-slate-100 pl-0 md:pl-8">
                    <h3 className="font-semibold mb-4 flex items-center"><Clock className="w-4 h-4 mr-2" /> 시간 선택</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {formData.date ? (
                        availableTimes.map(time => (
                          <button
                            key={time}
                            onClick={() => updateForm('timeSlot', time)}
                            className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                              formData.timeSlot === time
                              ? 'border-primary bg-primary text-white'
                              : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                            }`}
                          >
                            {time}
                          </button>
                        ))
                      ) : (
                        <p className="text-sm text-slate-400 col-span-2">날짜를 먼저 선택해주세요.</p>
                      )}
                    </div>
                 </div>
               </div>
               <div className="flex justify-between pt-4">
                <Button onClick={() => setStep(1)} variant="ghost">이전</Button>
                <Button onClick={handleNext} disabled={!formData.date || !formData.timeSlot} variant="primary">다음 단계</Button>
              </div>
            </div>
          )}

          {/* Step 3: User Info */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-dark">예약 정보를 입력해주세요.</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">이름</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      value={formData.name}
                      onChange={e => updateForm('name', e.target.value)}
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      value={formData.email}
                      onChange={e => updateForm('email', e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">사전 질문 / 요청사항</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    value={formData.inquiry}
                    onChange={e => updateForm('inquiry', e.target.value)}
                    placeholder="멘토링을 통해 가장 얻어가고 싶은 점이나, 현재 가장 큰 고민을 적어주세요."
                  />
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl mt-6 border border-slate-200">
                  <h3 className="font-bold text-dark mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" /> 결제 요약
                  </h3>
                  <div className="flex justify-between mb-2 text-slate-600">
                    <span>선택 서비스</span>
                    <span>{services.find(s => s.id === formData.serviceId)?.title}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-slate-600">
                    <span>일정</span>
                    <span>{formData.date?.getMonth()! + 1}월 {formData.date?.getDate()}일 {formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between pt-4 mt-4 border-t border-slate-200 font-bold text-lg text-primary">
                    <span>총 결제금액</span>
                    <span>{services.find(s => s.id === formData.serviceId)?.price}</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" onClick={() => setStep(2)} variant="ghost">이전</Button>
                  <Button type="submit" variant="accent" size="lg" className="px-10">예약 확정 및 결제하기</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;