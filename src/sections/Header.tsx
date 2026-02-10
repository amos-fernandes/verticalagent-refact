import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`font-semibold text-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-slate-900'
            }`}>
              VerticalAgent
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('https://verticalagent-ai-redesign-669656231543.europe-west1.run.app/auth', '_blank')}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5562981647087?text=Olá! Quero falar com um agente da VerticalAgent.', '_blank')}
            >
              Fale com um agente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-4 py-3 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-slate-100 mt-2 pt-4 flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => window.open('https://verticalagent-ai-redesign-669656231543.europe-west1.run.app/auth', '_blank')}
            >
              Login
            </Button>
            <Button
              className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-500"
              onClick={() => window.open('https://wa.me/5562981647087?text=Olá! Quero falar com um agente da VerticalAgent.', '_blank')}
            >
              Fale com um agente
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
