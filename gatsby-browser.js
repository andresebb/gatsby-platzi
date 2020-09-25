/* En este archivo podemos utilizar algunas APIs o métodos 
predefinidos para configurar el código que debe ejecutarse en el navegador, 
por ejemplo, para añadir vistas, cargar librerías o configurar un store like  redux global para manejar el estado. 

Se ejecuta cuando la pagina ya ha hecho render
*/

/**
 *
 *
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

//Esto envuelve en cada pagina el layout
//Envolvemos toda la app con el provider
import React from "react"
import Layout from "./src/components/Layout"
const { CartProvider } = require("./src/context")

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout>{element}</Layout>
  </CartProvider>
)
