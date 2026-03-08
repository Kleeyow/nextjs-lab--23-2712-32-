'use client';
import { useCart } from "@/lib/cart-context";

// Hardcoded products
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
];

export default function ShopPage() {
  const { items, total, addItem } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{p.name}</h2>
            <p>${p.price}</p>
            <button
              onClick={() => addItem(p)}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <p className="mt-4 font-bold">
        Cart: {items.length} items | Total: ${total}
      </p>
    </div>
  );
}