'use client';

import { useState } from 'react';
import { Heart, Bed, Bath } from 'lucide-react';
import Image from 'next/image';

type ListingCardProps = {
  id: string;
  title: string;
  image: string;
  priceZWM: number;
  rooms: number;
  bathrooms: number;
  location: string;
  type: 'house' | 'lodge' | 'hotel';
};

export default function ListingCard({
  id,
  title,
  image,
  priceZWM,
  rooms,
  bathrooms,
  location,
  type,
}: ListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    // TODO: Save to database or local storage
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-slate-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Type Badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
          {type}
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-slate-100 transition-colors"
        >
          <Heart
            size={20}
            className={isFavorited ? 'fill-red-500 text-red-500' : 'text-slate-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-3">{location}</p>

        {/* Price */}
        <div className="text-2xl font-bold text-blue-600 mb-4">
          ZWM {priceZWM.toLocaleString()}
          <span className="text-sm text-slate-500 font-normal">/month</span>
        </div>

        {/* Room & Bathroom Info */}
        <div className="flex gap-4 border-t pt-3">
          <div className="flex items-center gap-2 text-slate-600">
            <Bed size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{rooms} rooms</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Bath size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{bathrooms} baths</span>
          </div>
        </div>

        {/* View Details Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
