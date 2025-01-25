"use client"

import { useCart } from "../hooks/useCart"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/restaurants" className="text-blue-500 hover:underline">
          Browse Restaurants
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-4">
        {cart.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ₹{item.price} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center">
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="mr-2 p-1 border rounded"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

