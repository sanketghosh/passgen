export default function Navbar() {
  return (
    <nav className="py-4 w-full flex items-center justify-between">
      <div className="text-lg md:text-xl font-bold uppercase flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="">Passmancer</span>
      </div>
      <button className="text-[13px] md:text-sm px-4 py-2 bg-zinc-900 text-gray-50 rounded-full hover:bg-opacity-90 font-medium transition-all">
        share app
      </button>
    </nav>
  );
}
