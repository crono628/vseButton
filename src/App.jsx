import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import CheckoutModal from './CheckoutModal'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const [checkout, setCheckout] = useState([])

  const handleCheckoutModal = (e) => {
    setModalShow(!modalShow)
  }
  return (
    <div className="app-container">
      <Button variant="primary" size="lg" onClick={handleCheckoutModal}>
        Checkout
      </Button>
      <CheckoutModal modalShow={modalShow} handleModal={handleCheckoutModal} />
    </div>
  )
}

export default App
