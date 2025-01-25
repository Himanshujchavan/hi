"use client"

import type { ReactNode } from "react"
import { useCart } from "./hooks/useCart"

export function CartProvider({ children }: { children: ReactNode }) {
  const cartState = useCart()
  return <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
}

import { createContext } from "react"

export const CartContext = createContext<ReturnType<typeof useCart> | null>(null)

