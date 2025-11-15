import { Menu, Stethoscope, ShieldCheck, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-green-600 text-white grid place-items-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-gray-900">VitalFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#security" className="text-gray-700 hover:text-gray-900 transition">Security</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <ShieldCheck className="h-4 w-4 text-green-600" /> HIPAA Ready
            </a>
            <button className="inline-flex items-center gap-2 rounded-lg border border-green-600 text-green-700 px-3 py-2 text-sm font-medium hover:bg-green-50 transition">
              <LogIn className="h-4 w-4" />
              Sign in
            </button>
            <button className="hidden md:inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-green-700 transition">
              Get started
            </button>
            <button className="md:hidden p-2 rounded-lg border text-gray-700"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
