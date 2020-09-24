import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/* gatsby-image:
Utiliza la información de gatsby-transformer-sharp para 
cargar las versiones más livianas de nuestras imágenes 
(utilizando el tamaño y formato que mejor se adapten al usuario) 
y luego cambiarlas por las versiones actualizadas de mejor calidad, 
todo esto con el fin de mejorar el tiempo de carga inicial de nuestra aplicación. */

/* 
  EL staticQuery lo podemos usar donde sea,
  Es la forma de hacer peticiones a graphql desde componentes
<StaticQuery "Que trae de grapql" | render />*/

const Image = ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query GET_DATA {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image
