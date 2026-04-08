import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Oomsika Dashboard</h1>
          <p className="text-sm text-slate-500">Your home management hub.</p>
        </div>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Home
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Welcome to your dashboard
          </h2>
          <p className="text-slate-600 mb-8">
            You are now logged in. From here you can manage your account, explore listings, and continue building your experience.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/login"
              className="block rounded-2xl border border-slate-200 px-6 py-5 text-center text-slate-900 hover:bg-slate-50"
            >
              View account settings
            </Link>
            <Link
              href="/"
              className="block rounded-2xl bg-blue-600 px-6 py-5 text-center text-white hover:bg-blue-700"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
