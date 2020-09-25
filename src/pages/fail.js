import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

const Fail = () => {
  return (
    <>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>No se pudo procesar tu compra</h2>
        <p>Espero lo disfurtes, lucelo con orgullo</p>
        <p>Te esperamos de vuelta no pares de aprender!</p>
        <span rol="img">❤</span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Fail
