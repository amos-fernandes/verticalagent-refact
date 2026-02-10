import { Brain, Linkedin, Instagram, Github, Twitter, Heart } from 'lucide-react';

const footerLinks = {
  solucoes: [
    { label: 'Agentes de IA', href: '#produtos' },
    { label: 'Infraestrutura', href: '#solucoes' },
    { label: 'Segurança', href: '#solucoes' },
    { label: 'Consultoria', href: '#contato' },
  ],
  produtos: [
    { label: 'Agentes Verticais', href: '#produtos' },
    { label: 'LindiLAudo', href: '#produtos' },
    { label: 'Modelos LSTM', href: '#produtos' },
    { label: 'Créd+', href: '#produtos' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Equipe', href: '#sobre' },
    { label: 'Carreiras', href: '#contato' },
    { label: 'Contato', href: '#contato' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-xl">VerticalAgent</span>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Elegância tecnológica com toque humano. IA aplicada a resultados concretos para transformar negócios e finanças.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Soluções</h4>
              <ul className="space-y-3">
                {footerLinks.solucoes.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Produtos</h4>
              <ul className="space-y-3">
                {footerLinks.produtos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} VerticalAgent. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> em Goiânia, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
