import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'A precisão dos modelos e a qualidade da execução elevaram nossa operação a um novo patamar. A VerticalAgent entendeu nossas necessidades e entregou além do esperado.',
    author: 'Gestora de Investimentos',
    company: 'São Paulo',
    rating: 5,
  },
  {
    quote: 'Entrega consistente aliando design e engenharia — foi decisivo para nossa estratégia de dados. A equipe é extremamente profissional e comprometida.',
    author: 'Diretor de Tecnologia',
    company: 'Fintech, Rio de Janeiro',
    rating: 5,
  },
  {
    quote: 'Os agentes de IA da VerticalAgent revolucionaram nosso atendimento ao cliente. Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos clientes.',
    author: 'CEO',
    company: 'Startup de Saúde, Goiânia',
    rating: 5,
  },
  {
    quote: 'Implementação impecável do LindiLAudo. O sistema de laudos médicos com IA reduziu nosso tempo de entrega em 70% sem comprometer a qualidade.',
    author: 'Diretor Clínico',
    company: 'Clínica de Diagnóstico',
    rating: 5,
  },
];

export function Depoimentos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Depoimentos
            </span>
          </div>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 relative max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-xl shadow-slate-200/50 bg-white">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            <div className="relative p-8 lg:p-12">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 transition-opacity duration-500">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-slate-500">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-slate-300 hover:border-blue-300 hover:bg-blue-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-slate-300 hover:border-blue-300 hover:bg-blue-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
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
