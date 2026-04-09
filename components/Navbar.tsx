'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Menu, X, UserCircle, Sun, Moon } from 'lucide-react';

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!activePath && typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, [activePath]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const activeHref = useMemo(() => activePath ?? currentPath, [activePath, currentPath]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 dark:border-slate-700/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-sm shadow-slate-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm shadow-slate-900/5">
            <span className="text-base font-semibold">O</span>
          </div>
          <div>
            <Link href="/" className="font-quicksand text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300">
              Oomsika
            </Link>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Property Marketplace</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      isActive
                        ? 'text-slate-900 dark:text-white border-b-2 border-blue-600 pb-1'
                        : 'hover:text-slate-900 dark:hover:text-white hover:border-b-2 hover:border-slate-200 dark:hover:border-slate-700 pb-1'
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
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:inline-flex"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="hidden rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white md:inline-flex"
          >
            Sign Up
          </Link>

          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            href="/login"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white md:hidden"
            aria-label="User profile"
          >
            <UserCircle size={24} />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm shadow-slate-900/5 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} border-t border-slate-200/10 dark:border-slate-700/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl`}
        role="dialog"
        aria-modal="true"
      >
        <div className="space-y-4 px-4 pb-6 pt-4">
          <ul className="space-y-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-2xl px-4 py-3 transition ${
                      isActive
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
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
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
            >
              <UserCircle size={18} />
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-center text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
