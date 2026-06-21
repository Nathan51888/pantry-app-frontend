import Link from "@mui/material/Link"

const Navbar = () => {
    return (
        <nav className="bg-amber-200 flex gap-2 p-6">
            <Link href="/">Home</Link>
            <Link href="/shopping-list">Shopping List</Link>
        </nav>
    )
}

export default Navbar
