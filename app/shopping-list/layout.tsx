import Link from "next/link"

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Link href="/">Home</Link>
            <div>ShoppingLayout</div>
            {children}
        </>
    )
}
