/* configuramos todo lo que tiene que ver con la construcción 
de nuestro sitio web con Gatsby. Podemos generar vistas en función 
de nuestra información proveniente de GraphQL, incluso utilizando APIs externas a nuestra aplicación.*/

/* 
A traves de este proceso, gatsby genera
una pagina para ese producto al momento de hacer click en 
ese producto
*/

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    {
      allStripePrice {
        edges {
          node {
            unit_amount
            id
            product {
              name
              metadata {
                img
                descripcion
                wear
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
