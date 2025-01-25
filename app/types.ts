export interface Restaurant {
  id: string
  name: string
  cuisine: string[]
  rating: number
  deliveryTime: number
  image: string
}

export interface MenuItem {
  id: string
  name: string
  price: number
  description: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

