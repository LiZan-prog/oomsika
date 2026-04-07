export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Oomsika</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-grow p-4">
        <p>
          Oomsika
        </p>
      </main>
      <footer className="bg-white p-4 border-t text-center">
        <p>&copy; 2024 Oomsika. All rights reserved.</p>
      </footer>
    </div>
  );
}