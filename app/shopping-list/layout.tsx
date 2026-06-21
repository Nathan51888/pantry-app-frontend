export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="grow bg-white h-full mx-auto px-64">
                <h1 className="font-bold">Shopping Layout</h1>
                {children}
            </div>
        </>
    )
}
