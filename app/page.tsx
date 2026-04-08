import { Link } from "lucide-react";
import Login from "./login/page";
import Signup from "./signup/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Oomsika</h1>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
        </div>
        <div className="space-x-4">
          <Link href="/signup">Sign Up</Link>
        </div>
      </header>
      <main className="flex-grow p-4">
        <p>Welcome to Oomsika! Please login or sign up to continue.</p>
      </main>
      <footer className="bg-white p-4 border-t text-center">
        <p>&copy; 2024 Oomsika. All rights reserved.</p>
      </footer>
    </div>
  );
}