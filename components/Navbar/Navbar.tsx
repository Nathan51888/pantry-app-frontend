"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex min-h-full min-w-xs gap-6 bg-white p-6 px-20">
      <Link href="/">Home</Link>
      <Link href="/shopping-list">Shopping List</Link>
      <Link href="/pantry">Pantry</Link>
    </nav>
  );
};

export default Navbar;
