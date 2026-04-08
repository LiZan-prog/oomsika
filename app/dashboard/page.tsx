import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import ListingCard from '@/components/ListingCard';

async function getListings() {
  const { data, error } = await supabase
    .from('properties')
    .select('*');

  if (error) {
    console.error('Error fetching listings:', error);
    return [];
  }

  return data.map((property) => ({
    id: property.id,
    title: property.title,
    image: property.image,
    priceZWM: property.price_zwm,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    location: property.location,
    type: property.type,
  }));
}

export default async function Dashboard() {
  const listings = await getListings();
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm p-6 flex justify-between items-center border-b">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Oomsika</h1>
          <p className="text-sm text-slate-500">Find your perfect home near you</p>
        </div>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Sign Out
        </Link>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nearby Listings
            </h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search by location or property type..."
                className="flex-grow px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

