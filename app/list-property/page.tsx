'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ListProperty() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    priceZWM: '',
    rooms: '',
    bathrooms: '',
    location: '',
    type: 'house',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Please log in to list a property.');
      return;
    }

    const propertyData = {
      title: formData.title,
      image: formData.image,
      price_zwm: parseInt(formData.priceZWM),
      rooms: parseInt(formData.rooms),
      bathrooms: parseInt(formData.bathrooms),
      location: formData.location,
      type: formData.type,
      owner_id: user.id,
    };

    const { error } = await supabase
      .from('properties')
      .insert(propertyData);

    if (error) {
      console.error('Error listing property:', error);
      alert('Error listing property. Please try again.');
    } else {
      alert('Property listed successfully!');
      setFormData({
        title: '',
        image: '',
        priceZWM: '',
        rooms: '',
        bathrooms: '',
        location: '',
        type: 'house',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm p-6 flex justify-between items-center border-b">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Oomsika</h1>
          <p className="text-sm text-slate-500">List your property for rent</p>
        </div>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Back to Home
        </Link>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">List Your Property</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                Property Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Modern 3-Bedroom House"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="priceZWM" className="block text-sm font-medium text-slate-700 mb-2">
                  Price (ZWM/month)
                </label>
                <input
                  type="number"
                  id="priceZWM"
                  name="priceZWM"
                  value={formData.priceZWM}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="850000"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="house">House</option>
                  <option value="lodge">Lodge</option>
                  <option value="hotel">Hotel</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="rooms" className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="3"
                />
              </div>

              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Bathrooms
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Avondale, Harare"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              List Property
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}