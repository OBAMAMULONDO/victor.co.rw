export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      {/* Outer Flex Container controlling the 3 sections */}
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo */}
        <div>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Victor<span className="text-amber-500">.dev</span>
          </h1>
        </div>

        {/* 2. Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-base font-semibold text-zinc-700 dark:text-zinc-300">
            <li>
              <a href="#home" className="hover:text-amber-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-amber-500 transition">
                Service
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-sm hover:opacity-90 transition cursor-pointer"
          >
            Contact Me
          </a>
        </div>

      </div>
    </header>
  );
}