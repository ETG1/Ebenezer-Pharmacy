
import Container from '@/components/Container'
import { auth } from '@/auth'
import CartContainer from '@/components/CartSection'


const CartPage = async () => {
  const session = await auth()
  return (
    <Container className="py-10">
      <CartContainer initialSession={session}/>
      {/* <CartSection/> */}
    </Container>
  )
}

export default CartPage
