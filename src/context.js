//Creando el contexto
import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  //Agregar al carrito
  const addToCart = element => {
    const exist = cart.find(item => item.id === element.id)
    if (exist) {
      setCart(
        cart.map(item =>
          item.id === exist.id
            ? { ...item, quantity: item.quantity + element.quantity }
            : item
        )
      )
    } else {
      setCart([...cart, element])
    }
  }
  //En value se le agrega las propiedades que se le van a proveer a toda la app
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
