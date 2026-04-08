import Link from 'next/link';
import ListingCard from '@/components/ListingCard';

const mockListings = [
  {
    id: '1',
    title: 'Modern 3-Bedroom House',
    image: 'https://images.unsplash.com/photo-1570129477492-45ba003d0381?w=500&h=400&fit=crop',
    priceZWM: 850000,
    rooms: 3,
    bathrooms: 2,
    location: 'Avondale, Harare',
    type: 'house' as const,
  },
  {
    id: '2',
    title: 'Luxury 2-Bedroom Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
    priceZWM: 1200000,
    rooms: 2,
    bathrooms: 2,
    location: 'Belgravia, Harare',
    type: 'house' as const,
  },
  {
    id: '3',
    title: 'Cozy 2-Bedroom Lodge',
    image: 'https://images.unsplash.com/photo-1531635186387-701cecc2b0a7?w=500&h=400&fit=crop',
    priceZWM: 450000,
    rooms: 2,
    bathrooms: 1,
    location: 'Chisipite, Harare',
    type: 'lodge' as const,
  },
  {
    id: '4',
    title: 'Hilltop Hotel Suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    priceZWM: 550000,
    rooms: 1,
    bathrooms: 1,
    location: 'CBD, Harare',
    type: 'hotel' as const,
  },
  {
    id: '5',
    title: 'Spacious Family Home',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
    priceZWM: 2100000,
    rooms: 4,
    bathrooms: 3,
    location: 'Mount Pleasant, Harare',
    type: 'house' as const,
  },
  {
    id: '6',
    title: 'Budget-Friendly Studio',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
    priceZWM: 280000,
    rooms: 1,
    bathrooms: 1,
    location: 'Eastlea, Harare',
    type: 'lodge' as const,
  },
];

export default function Dashboard() {
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
            {mockListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

