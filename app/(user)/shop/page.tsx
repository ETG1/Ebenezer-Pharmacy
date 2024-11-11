import Container from '@/components/Container'
import Products from '@/components/Products'
import React from 'react'

const ShopPage = () => {
  return (
    <Container className="py-5">
        <h2 className="text-2xl px-2 font-semibold mb-5">
            Available Products:
        </h2>
        <Products/>
    </Container>
  )
}

export default ShopPage