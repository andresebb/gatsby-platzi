/**
 *  * configuramos lo que sucede en el build time para que nuestra aplicación
 * funcione correctamente en producción. Tiene el mismo fin que gatsby-browser.js,
 * solo que este será el código que enviamos a producción.
 * */

import React from "react"
import Layout from "./src/components/Layout"
const { CartProvider } = require("./src/context")

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout>{element}</Layout>
  </CartProvider>
)
