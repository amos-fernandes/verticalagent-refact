import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, FileText, CreditCard, TrendingUp, ExternalLink } from 'lucide-react';

const products = [
  {
    id: 'agentes-verticais',
    icon: Brain,
    title: 'Agentes Verticais',
    subtitle: 'Funcionários Virtuais de IA',
    description: 'Agentes de IA especializados por setor, treinados para executar tarefas complexas com precisão humana. Nossos agentes verticais são capazes de processar documentos, responder consultas, realizar análises e integrar-se aos seus sistemas existentes.',
    image: '/agentes-verticais.jpg',
    features: [
      'Atendimento ao cliente 24/7',
      'Processamento de documentos',
      'Análise de dados em tempo real',
      'Integração com CRM e ERP',
    ],
    cta: 'Conhecer Agentes',
    link: '#contato',
    badge: 'Novo',
    color: 'blue',
  },
  {
    id: 'lindilaudo',
    icon: FileText,
    title: 'LindiLAudo',
    subtitle: 'IA para Laudos Médicos',
    description: 'Sistema inteligente de análise e geração de laudos médicos. Reduz o tempo de elaboração em até 70% enquanto mantém a precisão clínica. Compatível com DICOM e integrado aos principais PACS do mercado.',
    image: '/lindilaudo.jpg',
    features: [
      'Reconhecimento de padrões radiológicos',
      'Sugestão de diagnósticos diferenciais',
      'Integração DICOM/PACS',
      'Conformidade com regulamentações',
    ],
    cta: 'Solicitar Demo',
    link: '#contato',
    badge: 'Healthcare',
    color: 'emerald',
  },
  {
    id: 'lstm',
    icon: TrendingUp,
    title: 'Modelos LSTM Supervisionados',
    subtitle: 'Previsão Financeira Avançada',
    description: 'Redes neurais recorrentes de longo prazo para previsão de preços e análise de séries temporais. Engenharia de atributos avançada e balanceamento de classes para máxima precisão preditiva.',
    image: '/lstm-models.jpg',
    features: [
      'Previsão de preços em tempo real',
      'Análise técnica automatizada',
      'Detecção de anomalias',
      'Backtesting robusto',
    ],
    cta: 'Saiba Mais',
    link: '#contato',
    badge: 'Fintech',
    color: 'indigo',
  },
];

const apps = [
  {
    icon: CreditCard,
    title: 'Créd+',
    description: 'Cartão de crédito autossustentável com gestão inteligente de limites e benefícios personalizados.',
    image: '/credmais-app.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Pé de Dinheiro',
    description: 'Gestão de finanças e investimentos pessoais com recomendações baseadas em IA.',
    image: '/pededinheiro-app.jpg',
  },
];

export function Produtos() {
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
      id="produtos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Produtos e Soluções
            </span>
          </div>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Tecnologias de ponta para seu negócio
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-slate-600">
            Conjunto completo de tecnologias e modelos para operar com precisão e escala.
          </p>
        </div>

        {/* Main Products */}
        <div className="space-y-12 mb-20">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`reveal opacity-0 translate-y-6 transition-all duration-700 overflow-hidden border-0 shadow-xl shadow-slate-200/50`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent lg:bg-gradient-to-t" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.color === 'emerald' 
                        ? 'bg-emerald-500 text-white' 
                        : product.color === 'indigo'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      product.color === 'emerald'
                        ? 'bg-emerald-100'
                        : product.color === 'indigo'
                        ? 'bg-indigo-100'
                        : 'bg-blue-100'
                    }`}>
                      <product.icon className={`w-6 h-6 ${
                        product.color === 'emerald'
                          ? 'text-emerald-600'
                          : product.color === 'indigo'
                          ? 'text-indigo-600'
                          : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                      <p className="text-sm text-slate-500">{product.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          product.color === 'emerald'
                            ? 'bg-emerald-100'
                            : product.color === 'indigo'
                            ? 'bg-indigo-100'
                            : 'bg-blue-100'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            product.color === 'emerald'
                              ? 'bg-emerald-500'
                              : product.color === 'indigo'
                              ? 'bg-indigo-500'
                              : 'bg-blue-500'
                          }`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Button
                      className={`group ${
                        product.color === 'emerald'
                          ? 'bg-emerald-600 hover:bg-emerald-700'
                          : product.color === 'indigo'
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white`}
                      onClick={() => document.querySelector(product.link)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {product.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Apps Section */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-600">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Aplicativos Disponíveis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <Card
                key={app.title}
                className="group overflow-hidden border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <app.icon className="w-5 h-5" />
                      <span className="font-semibold">{app.title}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4">{app.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn"
                    onClick={() => window.open('https://wa.me/5562981647087?text=Olá! Quero saber mais sobre o app ' + app.title, '_blank')}
                  >
                    Saiba mais
                    <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
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
