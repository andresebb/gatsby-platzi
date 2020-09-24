import React, { useState } from "react"
import priceFormat from "../utils/PriceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/Components"
import { SEO, Stars } from "./"

export default function ProductDetails({
  id,
  unit_amount,
  product: { name, metadata },
}) {
  const price = priceFormat(unit_amount)
  const resetPrice = price.split("$")
  const newPrice = parseInt(resetPrice[1])
  const [precio, setPrecio] = useState({
    precioInicial: newPrice,
    dinero: newPrice,
  })
  const [size, setSize] = useState(2)
  const [quantity, setQuantity] = useState(1)

  const quitPriceAndQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setPrecio({ ...precio, dinero: precio.dinero - precio.precioInicial })
    }
  }
  const setPriceAndQty = () => {
    setQuantity(quantity + 1)
    setPrecio({ ...precio, dinero: precio.dinero + precio.precioInicial })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD: {precio.dinero}</b>
        <Stars />
        <small>{metadata.descripcion}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity:</p>
        <QtySelect>
          <button onClick={quitPriceAndQty}>-</button>
          <input type="text" disabled value={quantity} />
          <button onClick={setPriceAndQty}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}
