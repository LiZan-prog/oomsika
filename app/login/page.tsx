'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setIsSubmitting(false);

    if (loginError) {
      setError(loginError.message);
      return;
    }

    router.push('/dashboard');
  };

  const fields = [
    { name: 'email', label: 'Email', icon: Mail, type: 'email', required: true },
    { name: 'password', label: 'Password', icon: Lock, type: 'password', required: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      <header className="bg-white/80 backdrop-blur p-4 flex justify-between items-center border-b shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Oomsika</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-2 text-center text-slate-800">Login</h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              Welcome back! Please login to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    {field.label}
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500 bg-white">
                    <field.icon className="text-slate-400 mr-2" size={16} />
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      className="w-full py-2 outline-none text-sm"
                    />
                  </div>
                </div>
              ))}

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
              >
                {isSubmitting ? 'Signing in…' : 'Login'}
              </button>

              <p className="text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur p-4 border-t text-center text-sm text-slate-500">
        &copy; 2026 Oomsika. All rights reserved.
      </footer>
    </div>
  );
}
