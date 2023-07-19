export default function Header() {
  return (
    <header className="flex items-center justify-center flex-col py-5 select-none gap-1">
      <h1 className="text-3xl md:text-5xl font-koulen font-extrabold gradientText text-center">
        Elevate Your <br className="max-md:hidden" />
        <span className="text-zinc-900">Password Protection</span>
      </h1>
      <p className="text-sm md:text-base font-medium text-center max-w-md mt-2 text-gray-500">
        Unleash the Power of Ironclad Passwords and Defend Your Digital Realm
        with Passmancer
      </p>
    </header>
  );
}
