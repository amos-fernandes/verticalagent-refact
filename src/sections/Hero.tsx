import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-200/25 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Inteligência Artificial de Ponta</span>
              </div>
            </div>

            <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Inteligência Artificial que{' '}
              <span className="text-gradient">entrega resultados reais</span>
            </h1>

            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Funcionários virtuais e agentes de IA para transformar negócios e finanças — com desempenho, precisão e elegância.
            </p>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group"
                onClick={() => window.open('https://wa.me/5562981647087?text=Olá! Quero falar com um agente da VerticalAgent.', '_blank')}
              >
                Fale com um agente
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all duration-300"
                onClick={() => document.querySelector('#solucoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça as soluções
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">99.9%</div>
                <div className="text-sm text-slate-500 mt-1">Uptime</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500 mt-1">Clientes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-500 mt-1">Suporte</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal opacity-0 translate-x-6 transition-all duration-1000 delay-200 relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-300/20 rounded-3xl blur-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <img
                  src="/hero-ai.jpg"
                  alt="Inteligência Artificial VerticalAgent"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl shadow-slate-200/50 p-4 border border-slate-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Agente Online</div>
                    <div className="text-xs text-slate-500">Pronto para atender</div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl shadow-slate-200/50 p-4 border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">+147%</div>
                  <div className="text-xs text-slate-500">Eficiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </section>
  );
}
