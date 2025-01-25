import Link from "next/link"
import { RestaurantCard } from "./components/RestaurantCard"
import { getFeaturedRestaurants } from "./lib/api"

export default async function Home() {
  const featuredRestaurants = await getFeaturedRestaurants()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to SwiggyClone</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Indian Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
      <div className="mt-8 text-center">
        <Link href="/restaurants" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          View All Restaurants
        </Link>
      </div>
    </div>
  )
}

