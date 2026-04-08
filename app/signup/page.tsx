'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Lock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

/** Form data type */
type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormData;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create account. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) {
        setError(signInError.message || 'Account created, but login failed. Please sign in manually.');
        setIsSubmitting(false);
        return;
      }

      setSuccess('Account created! Redirecting to your dashboard...');
      router.push('/dashboard');
      return;
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  const fields: Array<{
    name: keyof FormData;
    label: string;
    icon: React.ComponentType<any>;
    type: string;
  }> = [
    { name: 'name', label: 'Name', icon: User, type: 'text' },
    { name: 'email', label: 'Email', icon: Mail, type: 'email' },
    { name: 'phoneNumber', label: 'Phone Number', icon: Phone, type: 'tel' },
    { name: 'password', label: 'Password', icon: Lock, type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', icon: Lock, type: 'password' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      <header className="bg-white/80 backdrop-blur p-4 flex justify-between items-center border-b shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Oomsika</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-2 text-center text-slate-800">
              Create Account
            </h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              Join Oomsika and find your perfect home.
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
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                      className="w-full py-2 outline-none text-sm"
                    />
                  </div>
                </div>
              ))}

              {error && <p className="text-sm text-red-500 text-center">{error}</p>}
              {success && <p className="text-sm text-green-600 text-center">{success}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>

              <p className="text-center text-sm text-slate-500">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
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
