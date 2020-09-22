import React from "react"
import { StyledJumbo } from "../styles/components"
import Image from "./image"

const Jumbo = (props) => {
  return (
    <StyledJumbo>
      <h2>Consigue el mejor swag exlusivo y especial de Platzi</h2>
      <small>{props.descripcion}</small>
      <Image name="icon" />
    </StyledJumbo>
  )
}

export default Jumbo
