export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-3 rounded-3xl border-2 border-black bg-white px-64">
      <h1 className="font-bold">Shopping Layout</h1>
      {children}
    </div>
  );
}
