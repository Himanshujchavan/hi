import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import { FoodCategoryNav } from "./components/FoodCategoryNav"
import Footer from "./components/Footer"
import { CartProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SwiggyClone",
  description: "Your favorite Indian food, delivered fast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <FoodCategoryNav />
          <main className="min-h-screen p-4 md:p-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

