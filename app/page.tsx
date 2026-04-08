import Link from "next/link";
import Login from "./login/page";
import Signup from "./signup/page";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Oomsika</h1>
        <div className="space-x-4 flex">
          <Link href="/list-property" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-semibold">
            List Your Property
          </Link>
          <Link href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </header>
      <main className="flex-grow p-4 flex items-center justify-center">
        <p className="text-lg text-slate-700">Welcome to Oomsika! Please login or sign up to continue.</p>
      </main>
      <footer className="bg-white p-4 border-t text-center">
        <p>&copy; 2024 Oomsika. All rights reserved.</p>
      </footer>
    </div>
  );
}
