"use client"

import { useState } from "react"
import type { MenuItem } from "../types"
import { useCart } from "../hooks/useCart"

export function AddToCartButton({ item }: { item: MenuItem }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...item, quantity })
    setQuantity(1)
  }

  return (
    <div className="flex items-center">
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mr-2 p-1 border rounded"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}

