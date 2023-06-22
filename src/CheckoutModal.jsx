import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useAppContext } from './AppContext'

const CheckoutModal = ({ modalShow, handleModal }) => {
  const { state } = useAppContext()
  const { checkout } = state
  return (
    <>
      <Modal
        show={modalShow}
        onHide={handleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Checkout Sheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {checkout.length === 0 ? 'No orders yet' : 'placeholder for orders'}
        </Modal.Body>
        <Modal.Footer>
          <Button data-name="close" variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button data-name="edit" variant="primary" onClick={handleModal}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CheckoutModal
