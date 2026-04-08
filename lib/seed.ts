import { supabase } from './supabase';

const mockUsers = [
  {
    email: 'owner1@example.com',
    password: 'password123',
    full_name: 'John Doe',
  },
  {
    email: 'owner2@example.com',
    password: 'password123',
    full_name: 'Jane Smith',
  },
  {
    email: 'owner3@example.com',
    password: 'password123',
    full_name: 'Bob Johnson',
  },
];

const mockProperties = [
  {
    title: 'Modern 3-Bedroom House',
    image: 'https://images.unsplash.com/photo-1570129477492-45ba003d0381?w=500&h=400&fit=crop',
    price_zwm: 850000,
    rooms: 3,
    bathrooms: 2,
    location: 'Avondale, Harare',
    type: 'house',
  },
  {
    title: 'Luxury 2-Bedroom Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
    price_zwm: 1200000,
    rooms: 2,
    bathrooms: 2,
    location: 'Belgravia, Harare',
    type: 'house',
  },
  {
    title: 'Cozy 2-Bedroom Lodge',
    image: 'https://images.unsplash.com/photo-1531635186387-701cecc2b0a7?w=500&h=400&fit=crop',
    price_zwm: 450000,
    rooms: 2,
    bathrooms: 1,
    location: 'Chisipite, Harare',
    type: 'lodge',
  },
  {
    title: 'Hilltop Hotel Suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    price_zwm: 550000,
    rooms: 1,
    bathrooms: 1,
    location: 'CBD, Harare',
    type: 'hotel',
  },
  {
    title: 'Spacious Family Home',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
    price_zwm: 2100000,
    rooms: 4,
    bathrooms: 3,
    location: 'Mount Pleasant, Harare',
    type: 'house',
  },
  {
    title: 'Budget-Friendly Studio',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
    price_zwm: 280000,
    rooms: 1,
    bathrooms: 1,
    location: 'Eastlea, Harare',
    type: 'lodge',
  },
];

async function seedData() {
  console.log('Seeding mock data...');

  // Create users
  for (const user of mockUsers) {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          full_name: user.full_name,
        },
      },
    });

    if (error) {
      console.error('Error creating user:', error);
    } else {
      console.log('Created user:', data.user?.email);

      // Assign properties to this user
      const userId = data.user?.id;
      if (userId) {
        const propertiesForUser = mockProperties.slice(0, 2); // Assign 2 properties per user
        for (const property of propertiesForUser) {
          const { error: propError } = await supabase
            .from('properties')
            .insert({
              ...property,
              owner_id: userId,
            });

          if (propError) {
            console.error('Error creating property:', propError);
          } else {
            console.log('Created property:', property.title);
          }
        }
      }
    }
  }

  console.log('Seeding complete!');
}

seedData().catch(console.error);