import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <h1 className="text-xl font-semibold tracking-tight">Oomsika</h1>
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-200">
            <Link href="/list-property" className="text-white hover:text-emerald-300">
              List Your Property
            </Link>
            <Link href="/login" className="text-slate-300 hover:text-white">
              Login
            </Link>
            <Link href="/signup" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:border-emerald-300 hover:bg-emerald-500/15 hover:text-emerald-200">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200 ring-1 ring-emerald-300/20">
              Book safe, beautiful stays
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Find your next home, room, or shared space with confidence.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
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
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Start Free
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-white">120+</p>
                <p className="mt-2 text-sm text-slate-400">Trusted hosts</p>
              </div>
              <div className="rounded-3xl bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-white">24/7</p>
                <p className="mt-2 text-sm text-slate-400">Friendly support</p>
              </div>
              <div className="rounded-3xl bg-white/5 px-5 py-4">
                <p className="text-3xl font-semibold text-white">4.9/5</p>
                <p className="mt-2 text-sm text-slate-400">Guest satisfaction</p>
              </div>
            </div>
          </div>

          <HeroCarousel />
        </section>
      </main>
    </div>
  );
}
