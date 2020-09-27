import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import { CartContext } from "../context"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51HTcrZHu94wrZKIKzR0OEW1lIydXOEN0tpCsixuceKg3cEMtmCkxk6hIetcf63avXEiq4mn8pXtuOpJLs8uef6rm00tGcDL9W5"
)
debugger

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  //Obtener el total
  const getTotal = () => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + current.precio.precioInicial * current.quantity,
        0
      )
    )
  }

  useEffect(() => {
    getTotal()
    /* setStripe(window.Stripe(process.env.STRIPE_PK)) */
  }, [])

  //Configurando Stripe
  const handleSubmit = async e => {
    e.preventDefault()

    let prod = cart.map(({ id, quantity }) => ({
      price: id,
      quantity: quantity,
    }))

    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: prod,
      mode: "payment",
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/fail",
    })
    if (error) {
      throw error
    }
  }

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => {
            return (
              <tr key={swag.id}>
                <td>
                  <img src={swag.metadata.img} alt="" />
                  {swag.name}
                </td>
                <td>USD {swag.precio.precioInicial}</td>
                <td>{swag.quantity}</td>
                <td>{swag.quantity * swag.precio.precioInicial}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal :</h3>
          <small>{total}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={cart.length === 0}>
            Comprar
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}
