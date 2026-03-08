import { CartProvider } from "@/lib/cart-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav className="bg-black text-white p-4 flex justify-between">
            <span>Klee Dev</span>
            <div className="space-x-4">
              <a href="/">Home</a>
              <a href="/posts">Posts</a>
              <a href="/shop">Shop</a>
            </div>
          </nav>

          <main className="p-6">{children}</main>

          <footer className="text-center border-t p-4">© {year} Klee Dev</footer>
        </CartProvider>
      </body>
    </html>
  );
}