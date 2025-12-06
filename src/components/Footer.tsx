export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-indigo-400">
            Privacy
          </a>
          <a href="#" className="hover:text-indigo-400">
            Terms
          </a>
          <a href="#" className="hover:text-indigo-400">
            Support
          </a>
        </div>
        <p>&copy; 2025 ROAVAI. All rights reserved.</p>
        <p className="text-sm mt-2">Built with Next.js & AI ❤️</p>
      </div>
    </footer>
  );
}
