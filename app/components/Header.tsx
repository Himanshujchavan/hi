import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SwiggyClone
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/restaurants" className="hover:underline">
                Restaurants
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:underline flex items-center">
                <ShoppingCart className="mr-1" size={18} />
                Cart
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline flex items-center">
                <User className="mr-1" size={18} />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

