import Image from "next/image"
import { notFound } from "next/navigation"
import { getRestaurant, getMenuItems } from "../../lib/api"
import { MenuItem } from "../../types"
import { AddToCartButton } from "../../components/AddToCartButton"

export default async function RestaurantPage({ params }: { params: { id: string } }) {
  const restaurant = await getRestaurant(params.id)

  if (!restaurant) {
    notFound()
  }

  const menuItems = await getMenuItems(params.id)

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <div className="relative h-64 mb-4">
          <Image
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-gray-600 mb-2">{restaurant.cuisine.join(", ")}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{restaurant.rating}</span>
          <span className="mx-2">•</span>
          <span>{restaurant.deliveryTime} mins</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <div className="grid gap-4">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function MenuItem({ item }: { item: MenuItem }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="font-bold mt-2">₹{item.price}</p>
      </div>
      <AddToCartButton item={item} />
    </div>
  )
}

