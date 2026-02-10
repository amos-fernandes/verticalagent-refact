import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Solucoes } from './sections/Solucoes';
import { Produtos } from './sections/Produtos';
import { Sobre } from './sections/Sobre';
import { Depoimentos } from './sections/Depoimentos';
import { Clientes } from './sections/Clientes';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';
import { MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solucoes />
        <Produtos />
        <Sobre />
        <Depoimentos />
        <Clientes />
        <Contato />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5562981647087?text=Olá! Quero falar com um agente da VerticalAgent."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 group"
        aria-label="Fale no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Fale no WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
