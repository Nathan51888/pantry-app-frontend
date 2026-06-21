"use client"

import Link from "@mui/material/Link"

const Navbar = () => {
    return (
        <nav className="bg-gray-300 flex gap-2 p-6">
            <Link href="/">Home</Link>
            <Link href="/shopping-list">Shopping List</Link>
            <Link href="/pantry">Pantry</Link>
        </nav>
    )
}

export default Navbar
