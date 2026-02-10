import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Bot, Server, Shield, Zap, LineChart, Lock } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'Agentes de IA sob medida',
    description: 'Automatização inteligente com foco em eficiência e experiência humana. Nossos agentes aprendem e evoluem com seu negócio.',
    features: ['Processamento de linguagem natural', 'Aprendizado contínuo', 'Integração multiplataforma'],
    color: 'blue',
  },
  {
    icon: Server,
    title: 'Infraestrutura confiável',
    description: 'Arquitetura moderna, escalável e segura para alto desempenho. Projetada para crescer com sua demanda.',
    features: ['Escalabilidade automática', 'Alta disponibilidade', 'Monitoramento 24/7'],
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Confiabilidade e segurança',
    description: 'Boas príticas, auditoria e proteção de dados no centro de tudo. Conformidade com LGPD e standards internacionais.',
    features: ['Criptografia de ponta a ponta', 'Conformidade LGPD', 'Auditoria regular'],
    color: 'slate',
  },
];

const additionalFeatures = [
  { icon: Zap, title: 'Processamento Rápido', desc: 'Respostas em milissegundos' },
  { icon: LineChart, title: 'Analytics Avançado', desc: 'Métricas em tempo real' },
  { icon: Lock, title: 'Dados Protegidos', desc: 'Segurança enterprise' },
];

export function Solucoes() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(217 70% 50% / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Nossas Soluções
            </span>
          </div>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Projetadas para clareza, impacto e resultados
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-slate-600">
            Estética minimalista e foco em conversão. Soluções que transformam a maneira como você opera.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 group relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500" />
              
              <div className="relative p-6 lg:p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
