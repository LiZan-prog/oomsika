'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Menu, X, UserCircle } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  activePath?: string;
};

const navLinks: NavLink[] = [
  { label: 'Houses', href: '/houses' },
  { label: 'Lodges', href: '/lodges' },
  { label: 'Apartments', href: '/apartments' },
  { label: 'Hotels', href: '/hotels' },
];

export default function Navbar({ activePath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(activePath ?? '/');

  useEffect(() => {
    if (!activePath && typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, [activePath]);

  const activeHref = useMemo(() => activePath ?? currentPath, [activePath, currentPath]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-white/70 backdrop-blur-xl shadow-sm shadow-slate-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-900 shadow-sm shadow-slate-900/5">
            <span className="text-base font-semibold">O</span>
          </div>
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700">
              Oomsika
            </Link>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Property Marketplace</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      isActive
                        ? 'text-slate-900 border-b-2 border-blue-600 pb-1'
                        : 'hover:text-slate-900 hover:border-b-2 hover:border-slate-200 pb-1'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/list-property"
            className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
          >
            List your Property
          </Link>

          <Link
            href="/login"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="User profile"
          >
            <UserCircle size={24} />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} border-t border-slate-200/10 bg-white/95 backdrop-blur-xl`}
        role="dialog"
        aria-modal="true"
      >
        <div className="space-y-4 px-4 pb-6 pt-4">
          <ul className="space-y-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-2xl px-4 py-3 transition ${
                      isActive
                        ? 'bg-slate-100 text-slate-900'
                        : 'hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="space-y-3 border-t border-slate-200/10 pt-4">
            <Link
              href="/list-property"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              List your Property
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              <UserCircle size={18} />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
