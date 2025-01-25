import { RestaurantCard } from "../components/RestaurantCard"
import { getAllRestaurants } from "../lib/api"

export default async function RestaurantsPage() {
  const restaurants = await getAllRestaurants()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">All Indian Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

