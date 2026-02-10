import { useEffect, useRef } from 'react';
import { Building2, Landmark, GraduationCap, Briefcase, Home, BookOpen } from 'lucide-react';

const clients = [
  {
    name: 'Governo de Goiás',
    icon: Landmark,
    href: 'https://www.goias.gov.br/',
  },
  {
    name: 'SEFAZ GO',
    icon: Building2,
    href: 'https://www.sefaz.go.gov.br/',
  },
  {
    name: 'SENAC',
    icon: BookOpen,
    href: 'https://www.senac.br/',
  },
  {
    name: 'MDR',
    icon: Home,
    href: 'https://www.gov.br/mdr/pt-br',
  },
  {
    name: 'MEC',
    icon: GraduationCap,
    href: 'https://www.gov.br/mec/pt-br',
  },
  {
    name: 'Ministério do Trabalho',
    icon: Briefcase,
    href: 'https://www.gov.br/trabalho-e-emprego/pt-br',
  },
];

export function Clientes() {
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
      id="clientes"
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              Nossos Clientes
            </span>
          </div>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Confiam na VerticalAgent
          </h2>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-slate-600">
            Organizações que transformam seus processos e operações com nossa tecnologia de IA avançada.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:shadow-md group-hover:shadow-blue-500/10 transition-all duration-300">
                    <client.icon className="w-7 h-7 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <span className="text-xs text-center text-slate-500 group-hover:text-slate-700 font-medium transition-colors">
                    {client.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>+50 organizações atendidas em todo o Brasil</span>
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
