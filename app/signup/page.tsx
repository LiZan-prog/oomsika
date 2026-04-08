
import { useState, ChangeEvent, FormEvent } from 'react';
import { User, Mail, Phone, Briefcase, Lock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

/** Form data type */
type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  /**Handle input change */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** Handle form submit */
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.from('users').insert({
      name: formData.name,
      email: formData.email,
      phone_number: formData.phoneNumber,
      password: formData.password,
    });

    if (error) {
      setError('Failed to create account. Please try again.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
  };

  /** Fields */
  const fields: {
    name: keyof FormData;
    label: string;
    icon: any;
    type: string;
  }[] = [
    { name: 'name', label: 'Name', icon: User, type: 'text' },
    { name: 'email', label: 'Email', icon: Mail, type: 'email' },
    { name: 'phoneNumber', label: 'Phone Number', icon: Phone, type: 'tel' },
    { name: 'password', label: 'Password', icon: Lock, type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', icon: Lock, type: 'password' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur p-4 flex justify-between items-center border-b shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Oomsika</h1>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-2 text-center text-slate-800">
              Create Account
            </h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              Join Oomsika and find your perfect home
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

              {/* Error Message */}
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
              >
                Create Account
              </button>

              {/* Footer link */}
              <p className="text-center text-sm text-slate-500">
                Already have an account?{' '}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur p-4 border-t text-center text-sm text-slate-500">
        &copy; 2026 Oomsika. All rights reserved.
      </footer>
    </div>
  );
}
