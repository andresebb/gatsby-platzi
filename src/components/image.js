import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

/* gatsby-image:
Utiliza la información de gatsby-transformer-sharp para 
cargar las versiones más livianas de nuestras imágenes 
(utilizando el tamaño y formato que mejor se adapten al usuario) 
y luego cambiarlas por las versiones actualizadas de mejor calidad, 
todo esto con el fin de mejorar el tiempo de carga inicial de nuestra aplicación. */

/* <StaticQuery "Que trae de grapql" | render />*/

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_DATA {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <Img fluid={data[name].childImageSharp.fluid} />}
    />
  )
}

export default Image
