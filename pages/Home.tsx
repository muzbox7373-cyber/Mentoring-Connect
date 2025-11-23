import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { HERO_BG, MENTOR_PROFILE, FEATURE_ICON_1, FEATURE_ICON_2, FEATURE_ICON_3 } from '../images/assets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/30">
              취업 준비생 만족도 98%
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              막막한 커리어,<br/>
              <span className="text-secondary">3년의 시행착오</span>를<br/>
              30분 만에 줄여드립니다.
            </h1>
            <p className="text-lg text-slate-300 max-w-lg">
              대기업 현직자가 알려주는 실무 노하우와 검증된 커리어 로드맵.
              더 이상 혼자 고민하며 시간을 낭비하지 마세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/booking">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  지금 바로 멘토링 예약하기
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:border-white">
                  자세히 알아보기
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-400 mt-4 flex items-center justify-center md:justify-start">
              <Users className="w-4 h-4 mr-2" />
              이번 달 예약 마감까지 <span className="text-accent font-bold mx-1">3자리</span> 남았습니다.
            </p>
          </div>

          <div className="hidden md:block md:w-5/12 relative mt-12 md:mt-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img 
                  src={MENTOR_PROFILE} 
                  alt="Mentor Profile" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-xl">James Kim</p>
                  <p className="text-slate-300 text-sm">Product Manager @ Tech Giant</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">혹시 이런 고민을 하고 계신가요?</h2>
            <p className="text-slate-600">열심히 준비하고 있지만, 방향이 맞는지 확신이 서지 않는다면 전문가의 진단이 필요합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">서류 합격률 0%의 늪</h3>
              <p className="text-slate-600">수십 군데 지원했지만 연락이 오지 않나요? 스펙의 문제가 아니라 자소서의 핏(Fit) 문제일 수 있습니다.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">물경력에 대한 불안감</h3>
              <p className="text-slate-600">입사는 했지만 성장하고 있다는 느낌이 들지 않나요? 이직을 위한 포트폴리오 전략이 필요합니다.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">면접만 가면 탈락</h3>
              <p className="text-slate-600">준비한 답변만 외우고 계신가요? 면접관의 의도를 파악하고 대화하는 기술을 배워야 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">차별화된 멘토링 커리큘럼</h2>
            <p className="text-slate-600">단순한 조언이 아닌, 실행 가능한 Action Plan을 제공합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_ICON_1} alt="Service 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-2">1:1 직무 심층 상담</h3>
                <p className="text-slate-600 mb-6 text-sm">내 성향과 경험을 분석하여 가장 적합한 직무와 산업군을 매칭해드립니다.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 강점/약점 분석 리포트</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 현직자 현실 조언</li>
                </ul>
                <Link to="/booking">
                  <Button variant="outline" fullWidth>자세히 보기</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ring-2 ring-primary ring-offset-2">
              <div className="bg-primary text-white text-xs font-bold px-3 py-1 absolute mt-4 ml-4 rounded-full z-10">BEST</div>
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_ICON_2} alt="Service 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-2">자소서/포트폴리오 첨삭</h3>
                <p className="text-slate-600 mb-6 text-sm">인사담당자의 눈에 띄는 매력적인 서류로 재탄생시켜 드립니다.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 문항별 의도 파악</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 경험 구조화 (STAR 기법)</li>
                </ul>
                <Link to="/booking">
                  <Button variant="primary" fullWidth>신청하기</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_ICON_3} alt="Service 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-2">실전 모의 면접</h3>
                <p className="text-slate-600 mb-6 text-sm">실제 면접과 동일한 환경에서 진행하며, 답변 태도와 내용을 교정합니다.</p>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 꼬리물기 질문 대비</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-secondary mr-2" /> 모의 면접 녹화본 제공</li>
                </ul>
                <Link to="/booking">
                  <Button variant="outline" fullWidth>자세히 보기</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">수강생 리얼 후기</h2>
            <p className="text-slate-600">이미 많은 분들이 원하는 커리어를 시작했습니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4 leading-relaxed">"비전공자라 막막했는데, 멘토님 덕분에 제 경험을 직무 역량으로 연결하는 법을 배웠어요. 덕분에 원하던 IT 기업에 합격했습니다!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full flex-shrink-0 mr-3 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">김OO 님</p>
                  <p className="text-xs text-slate-500">서비스 기획 직무 합격</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4 leading-relaxed">"면접만 보면 긴장해서 탈락했는데, 모의 면접 때 지적해주신 나쁜 습관을 고치고 나니 최종 합격까지 갔습니다. 정말 감사합니다."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full flex-shrink-0 mr-3 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">이OO 님</p>
                  <p className="text-xs text-slate-500">마케팅 직무 합격</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4 leading-relaxed">"단순 첨삭이 아니라, 제 커리어 로드맵 전체를 봐주셔서 좋았습니다. 30분이 3시간처럼 알찼어요."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full flex-shrink-0 mr-3 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=3" alt="User" />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">박OO 님</p>
                  <p className="text-xs text-slate-500">영업 관리 직무 합격</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            당신의 커리어 터닝포인트,<br/>
            지금 시작하세요.
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            고민하는 시간에도 기회는 흘러갑니다.
          </p>
          <Link to="/booking">
            <Button variant="accent" size="lg" className="shadow-xl shadow-orange-900/20">
              멘토링 신청하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;