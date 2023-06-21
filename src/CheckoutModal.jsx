import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CheckoutModal = ({ modalShow, handleModal }) => {
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
          <p>Are you sure you want to checkout?</p>
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
