'use client';

import { useLanguage } from '@/lib/language';
import { testimonials } from '@/data/products';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useRef } from 'react';

const Testimonials = () => {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('What Our Clients Say', '客户评价')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Trusted by researchers and companies worldwide for quality, purity, and reliability.',
              '全球研究人员和企业信赖的品质、纯度和可靠性。'
            )}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-700 transition-colors hidden md:flex"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 snap-start"
              >
                <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-6">
                  {language === 'zh' ? item.textZh : item.text}
                </p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-700 transition-colors hidden md:flex"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
