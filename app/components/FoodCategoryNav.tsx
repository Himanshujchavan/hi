"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Biryani", image: "/images/categories/biryani.jpg" },
  { name: "Curry", image: "/images/categories/curry.jpg" },
  { name: "Dosa", image: "/images/categories/dosa.jpg" },
  { name: "Tandoori", image: "/images/categories/tandoori.jpg" },
  { name: "Chaat", image: "/images/categories/chaat.jpg" },
  { name: "Thali", image: "/images/categories/thali.jpg" },
  { name: "Desserts", image: "/images/categories/desserts.jpg" },
  { name: "Drinks", image: "/images/categories/drinks.jpg" },
]

export function FoodCategoryNav() {
  const [activeCategory, setActiveCategory] = useState("")

  return (
    <nav className="bg-white shadow-md py-4 mb-8 overflow-x-auto">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6">
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={`/category/${category.name.toLowerCase()}`}>
                <div
                  className={`flex flex-col items-center cursor-pointer ${
                    activeCategory === category.name ? "text-orange-500" : "text-gray-600"
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

