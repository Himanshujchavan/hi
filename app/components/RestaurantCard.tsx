import Image from "next/image"
import Link from "next/link"
import type { Restaurant } from "../types"
import { getMenuItems } from "../lib/api"

export async function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const menuItems = await getMenuItems(restaurant.id)
  const samplePrice = menuItems.length > 0 ? menuItems[0].price : null

  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{restaurant.name}</h3>
          <p className="text-gray-600 mb-2">{restaurant.cuisine.join(", ")}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-yellow-500 mr-1">★</span>
              <span>{restaurant.rating}</span>
              <span className="mx-2">•</span>
              <span>{restaurant.deliveryTime} mins</span>
            </div>
            {samplePrice && <span className="text-gray-600">From ₹{samplePrice}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}

