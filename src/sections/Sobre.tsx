import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Target, Lightbulb, Users, Award, TrendingUp, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada solução é desenvolvida com métricas claras e objetivos mensuráveis.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação Constante',
    description: 'Estamos sempre na vanguarda, explorando novas tecnologias e abordagens.',
  },
  {
    icon: Users,
    title: 'Parceria Real',
    description: 'Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros.',
  },
  {
    icon: Award,
    title: 'Excelência Técnica',
    description: 'Equipe de especialistas com profunda expertise em IA e finanças.',
  },
];

const team = [
  { role: 'CEO Founder', name: 'Amós Fernandes' },
  { role: 'CEO Presidente', name: 'Dr. Paulo' },
  { role: 'CTO', name: 'Dã Garcia & Michel Oliveira' },
];

export function Sobre() {
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
      id="sobre"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                Sobre Nós
              </span>
            </div>

            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Tecnologia avançada com{' '}
              <span className="text-gradient">simplicidade</span>
            </h2>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 space-y-4 text-slate-600 leading-relaxed">
              <p>
                A VerticalAgent existe para unir tecnologia avançada e simplicidade. 
                Desenvolvemos agentes de IA e funcionários virtuais que ampliam capacidades 
                humanas, melhoram resultados e geram impacto real em finanças e negócios.
              </p>
              <p>
                Nossa equipe combina expertise em inteligência artificial, finanças 
                quantitativas e desenvolvimento de produtos para criar soluções que 
                transformam a maneira como empresas e pessoas gerenciam seus investimentos 
                e operações financeiras.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div className="text-sm text-slate-500">Anos de experiência</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <div className="text-sm text-slate-500">Clientes atendidos</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Heart className="w-5 h-5" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <div className="text-sm text-slate-500">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`reveal opacity-0 translate-y-6 transition-all duration-700 p-6 border-0 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 group`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-700 mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Nossa Equipe de Liderança</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-blue-400 text-sm">{member.role}</p>
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
