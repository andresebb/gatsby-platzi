import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components/"
import { SEO, Products } from "../components"

/*Los querys de graphql solo se pueden ejecutar en las paginas(de esta manera, 
  en los componentes se usa ya se staticquery o useStaticquery
*/
export const query = graphql`
  query {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }

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
`

//El query le llega  a la pagina como un prop
const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        descripcion={data.allSite.edges[0].node.siteMetadata.descripcion}
      />
      <Products products={data.allStripePrice.edges} />
    </>
  )
}
export default IndexPage
