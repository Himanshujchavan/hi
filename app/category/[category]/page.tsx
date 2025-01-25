import { notFound } from "next/navigation"
import { RestaurantCard } from "../../components/RestaurantCard"
import { getAllRestaurants } from "../../lib/api"

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const restaurants = await getAllRestaurants()
  const categoryRestaurants = restaurants.filter((restaurant) =>
    restaurant.cuisine.map((c) => c.toLowerCase()).includes(params.category.toLowerCase()),
  )

  if (categoryRestaurants.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 capitalize">{params.category} Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

