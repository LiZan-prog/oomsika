'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import HeroCarousel from "../components/HeroCarousel";
import Navbar from "../components/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideFromLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const slideFromRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200 ring-1 ring-emerald-300/20">
              Book safe, beautiful stays
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                Find your next home, room, or shared space with confidence.
              </h1>
              <p className="max-w-xl text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
                Oomsika helps renters and hosts connect through curated properties, trusted neighbourhoods, and a seamless listing experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/list-property"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                List Your Property
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-6 py-3 text-sm font-semibold text-black dark:text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Start Free
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-gray-100 dark:bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-black dark:text-white">120+</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">Trusted hosts</p>
              </div>
              <div className="rounded-3xl bg-gray-100 dark:bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-black dark:text-white">24/7</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">Friendly support</p>
              </div>
              <div className="rounded-3xl bg-gray-100 dark:bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-black dark:text-white">4.9/5</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">Guest satisfaction</p>
              </div>
            </div>
          </div>

          <HeroCarousel />
        </section>

        <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div className="space-y-6" {...slideFromLeft}>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Discover Your Perfect Home
            </h2>
            <p className="max-w-xl text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
              Browse through our curated collection of homes. From cozy apartments to spacious houses, find the ideal place that fits your lifestyle and budget with just a few clicks.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Verified listings with detailed photos and descriptions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Easy filtering by location, price, and amenities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Direct communication with trusted hosts</span>
              </li>
            </ul>
          </motion.div>
          <motion.div className="relative" {...slideFromRight}>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
              alt="Beautiful modern home interior"
              className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
        </section>

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div className="relative order-2 lg:order-1" {...slideFromLeft}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
              alt="Cozy lodge in nature"
              className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
          <motion.div className="space-y-6 order-1 lg:order-2" {...slideFromRight}>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Escape to Scenic Lodges
            </h2>
            <p className="max-w-xl text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
              Experience nature's beauty in our handpicked lodges. Perfect for weekend getaways or extended stays, with all the comforts of home surrounded by stunning landscapes.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Secluded locations with breathtaking views</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Fully equipped with modern amenities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Flexible booking options for any duration</span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div className="space-y-6" {...slideFromLeft}>
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Luxury Hotel Experiences
            </h2>
            <p className="max-w-xl text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
              Indulge in world-class hospitality at our partner hotels. Whether for business or leisure, enjoy premium services and exceptional comfort in prime locations.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>High-end amenities and concierge services</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Central locations with easy access to attractions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Exclusive deals and member benefits</span>
              </li>
            </ul>
          </motion.div>
          <motion.div className="relative" {...slideFromRight}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Luxurious hotel room"
              className="h-96 w-full rounded-3xl object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
        </section>

        <motion.section className="rounded-3xl bg-gray-100 dark:bg-white/5 px-8 py-12 text-center" {...fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
            Join thousands of satisfied renters who have found their ideal homes, lodges, and hotels through Oomsika. Start your search today and experience the convenience of modern property finding.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get Started Free
            </Link>
            <Link
              href="/list-property"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
            >
              List Your Property
            </Link>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-100 dark:bg-slate-950 border-t border-gray-300 dark:border-white/10 py-8 text-center">
        <p className="text-gray-500 dark:text-slate-400">&copy; 2024 Oomsika. All rights reserved.</p>
      </footer>
    </div>
  );
}
