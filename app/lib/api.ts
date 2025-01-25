import type { Restaurant, MenuItem } from "../types"

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Taj Mahal Delights",
    cuisine: ["Indian", "North Indian"],
    rating: 4.5,
    deliveryTime: 30,
    image: "/images/restaurants/taj-mahal-delights.jpg",
  },
  {
    id: "2",
    name: "Spice Paradise",
    cuisine: ["Indian", "South Indian"],
    rating: 4.3,
    deliveryTime: 35,
    image: "/images/restaurants/spice-paradise.jpg",
  },
  {
    id: "3",
    name: "Curry House",
    cuisine: ["Indian", "Curry"],
    rating: 4.7,
    deliveryTime: 25,
    image: "/images/restaurants/curry-house.jpg",
  },
  {
    id: "4",
    name: "Bombay Street Food",
    cuisine: ["Indian", "Street Food"],
    rating: 4.6,
    deliveryTime: 20,
    image: "/images/restaurants/bombay-street-food.jpg",
  },
  {
    id: "5",
    name: "Tandoori Nights",
    cuisine: ["Indian", "Tandoori"],
    rating: 4.4,
    deliveryTime: 40,
    image: "/images/restaurants/tandoori-nights.jpg",
  },
  {
    id: "6",
    name: "Dosa Diner",
    cuisine: ["Indian", "South Indian"],
    rating: 4.8,
    deliveryTime: 30,
    image: "/images/restaurants/dosa-diner.jpg",
  },
  {
    id: "7",
    name: "Biryani Bliss",
    cuisine: ["Indian", "Biryani"],
    rating: 4.5,
    deliveryTime: 45,
    image: "/images/restaurants/biryani-bliss.jpg",
  },
  {
    id: "8",
    name: "Punjabi Dhaba",
    cuisine: ["Indian", "Punjabi"],
    rating: 4.2,
    deliveryTime: 35,
    image: "/images/restaurants/punjabi-dhaba.jpg",
  },
  {
    id: "9",
    name: "Chaat Corner",
    cuisine: ["Indian", "Chaat"],
    rating: 4.6,
    deliveryTime: 25,
    image: "/images/restaurants/chaat-corner.jpg",
  },
  {
    id: "10",
    name: "Veggie Delight",
    cuisine: ["Indian", "Vegetarian"],
    rating: 4.4,
    deliveryTime: 30,
    image: "/images/restaurants/veggie-delight.jpg",
  },
  {
    id: "11",
    name: "Masala Magic",
    cuisine: ["Indian", "Fusion"],
    rating: 4.7,
    deliveryTime: 40,
    image: "/images/restaurants/masala-magic.jpg",
  },
  {
    id: "12",
    name: "Thali Paradise",
    cuisine: ["Indian", "Thali"],
    rating: 4.5,
    deliveryTime: 35,
    image: "/images/restaurants/thali-paradise.jpg",
  },
]

const menuItems: { [key: string]: MenuItem[] } = {
  "1": [
    { id: "1", name: "Butter Chicken", price: 299, description: "Creamy tomato-based curry with tender chicken" },
    { id: "2", name: "Naan Bread", price: 49, description: "Soft, fluffy Indian flatbread" },
    { id: "3", name: "Vegetable Samosas", price: 99, description: "Crispy pastry filled with spiced vegetables" },
  ],
  "2": [
    { id: "1", name: "Masala Dosa", price: 199, description: "Crispy rice crepe filled with spiced potatoes" },
    { id: "2", name: "Idli Sambar", price: 149, description: "Steamed rice cakes with lentil soup" },
    { id: "3", name: "Mango Lassi", price: 79, description: "Refreshing yogurt drink with mango" },
  ],
  "3": [
    { id: "1", name: "Chicken Tikka Masala", price: 279, description: "Grilled chicken in a creamy tomato sauce" },
    { id: "2", name: "Palak Paneer", price: 229, description: "Cottage cheese cubes in a spinach gravy" },
    { id: "3", name: "Garlic Naan", price: 59, description: "Naan bread topped with garlic and herbs" },
  ],
  "4": [
    { id: "1", name: "Vada Pav", price: 49, description: "Spicy potato fritter in a bun" },
    { id: "2", name: "Pani Puri", price: 79, description: "Crispy hollow puri filled with flavored water" },
    { id: "3", name: "Bhel Puri", price: 89, description: "Puffed rice mixed with vegetables and tangy chutneys" },
  ],
  "5": [
    { id: "1", name: "Tandoori Chicken", price: 329, description: "Marinated chicken cooked in a tandoor oven" },
    {
      id: "2",
      name: "Chicken Tikka",
      price: 299,
      description: "Grilled chicken pieces marinated in yogurt and spices",
    },
    { id: "3", name: "Naan", price: 49, description: "Leavened oven-baked flatbread" },
  ],
  "6": [
    { id: "1", name: "Masala Dosa", price: 199, description: "Crispy crepe filled with spiced potatoes" },
    { id: "2", name: "Rava Dosa", price: 179, description: "Crispy crepe made from semolina" },
    { id: "3", name: "Uttapam", price: 149, description: "Thick pancake with various toppings" },
  ],
  "7": [
    { id: "1", name: "Chicken Biryani", price: 299, description: "Basmati rice cooked with chicken and spices" },
    { id: "2", name: "Vegetable Biryani", price: 249, description: "Basmati rice cooked with vegetables and spices" },
    { id: "3", name: "Raita", price: 79, description: "Yogurt dip with cucumber and spices" },
  ],
  "8": [
    { id: "1", name: "Butter Chicken", price: 299, description: "Creamy tomato-based curry with tender chicken" },
    { id: "2", name: "Dal Makhani", price: 229, description: "Creamy black lentil curry" },
    { id: "3", name: "Roti", price: 39, description: "Whole wheat flatbread" },
  ],
  "9": [
    { id: "1", name: "Pani Puri", price: 79, description: "Crispy hollow puri filled with flavored water" },
    { id: "2", name: "Dahi Puri", price: 99, description: "Pani Puri topped with yogurt" },
    { id: "3", name: "Sev Puri", price: 89, description: "Pani Puri topped with sev (crispy chickpea noodles)" },
  ],
  "10": [
    { id: "1", name: "Palak Paneer", price: 229, description: "Cottage cheese cubes in a spinach gravy" },
    { id: "2", name: "Aloo Gobi", price: 199, description: "Potato and cauliflower curry" },
    { id: "3", name: "Vegetable Biryani", price: 249, description: "Basmati rice cooked with vegetables and spices" },
  ],
  "11": [
    { id: "1", name: "Butter Chicken Pizza", price: 349, description: "Pizza with butter chicken topping" },
    { id: "2", name: "Paneer Tikka Wrap", price: 249, description: "Wrap with paneer tikka and vegetables" },
    { id: "3", name: "Indian Nachos", price: 299, description: "Nachos with Indian spices and toppings" },
  ],
  "12": [
    { id: "1", name: "Veg Thali", price: 299, description: "Vegetarian platter with various dishes" },
    { id: "2", name: "Non-Veg Thali", price: 349, description: "Non-vegetarian platter with various dishes" },
    { id: "3", name: "Naan", price: 49, description: "Leavened oven-baked flatbread" },
  ],
}

export async function getFeaturedRestaurants(): Promise<Restaurant[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return restaurants.slice(0, 6)
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return restaurants
}

export async function getRestaurant(id: string): Promise<Restaurant | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return restaurants.find((r) => r.id === id)
}

export async function getMenuItems(restaurantId: string): Promise<MenuItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return menuItems[restaurantId] || []
}

