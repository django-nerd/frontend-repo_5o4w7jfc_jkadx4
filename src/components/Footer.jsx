export default function Footer() {
  return (
    <footer className="py-12 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© 2025 VitalFlow Health, Inc.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Security</a>
        </nav>
      </div>
    </footer>
  );
}
