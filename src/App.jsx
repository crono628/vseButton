import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import CheckoutModal from './CheckoutModal'
import CheckoutOptions from './CheckoutOptions'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const [checkout, setCheckout] = useState([])
  const [optionShow, setOptionShow] = useState(false)

  const handleModals = (e) => {
    const button = e.target.dataset.name
    if (button === 'close') {
      setModalShow(false)
      setOptionShow(false)
    }
    if (button === 'checkout') {
      setModalShow(true)
      setOptionShow(false)
    }
    if (button === 'cancel-options' || button === 'confirm-options') {
      setOptionShow(false)
      setModalShow(true)
    }
    if (button === 'confirm') {
      setModalShow(false)
      setOptionShow(false)
    }
    if (button === 'edit') {
      setModalShow(false)
      setOptionShow(true)
    }
  }
  return (
    <div className="app-container">
      <Button
        data-name="checkout"
        variant="primary"
        size="lg"
        onClick={handleModals}
      >
        Checkout
      </Button>
      <CheckoutModal modalShow={modalShow} handleModal={handleModals} />
      <CheckoutOptions optionShow={optionShow} handleOptions={handleModals} />
    </div>
  )
}

export default App
