'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Warm, welcoming shared spaces',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    description: 'Beautiful living areas for modern, comfortable rentals.',
  },
  {
    title: 'Stylish homes with natural light',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    description: 'Bright interiors designed for every lifestyle.',
  },
  {
    title: 'Relaxing lounges and cozy corners',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    description: 'Spaces made to feel like home from the first visit.',
  },
  {
    title: 'Curated details for modern living',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    description: 'A high-end experience for renters and owners alike.',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-gray-300 dark:border-white/10 shadow-2xl shadow-black/20 bg-white/50 dark:bg-slate-900/50">
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-700 ${
              index === activeIndex
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-95 z-0'
            }`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 dark:from-slate-950/90 via-black/30 dark:via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-black dark:text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-gray-600 dark:text-slate-300">Featured stay</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {slide.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-700 dark:text-slate-200 sm:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 sm:px-6">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-10 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-black dark:bg-white' : 'bg-black/30 dark:bg-white/30 hover:bg-black/70 dark:hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950/70 px-3 py-2 text-sm font-semibold text-black dark:text-white transition hover:bg-gray-100 dark:hover:bg-slate-900"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-gray-300 dark:border-white/20 bg-black dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-slate-950 transition hover:bg-gray-800 dark:hover:bg-slate-100"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
