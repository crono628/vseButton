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
        <Modal.Header closeButton>
          <Modal.Title>Checkout Sheet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to checkout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button data-name="edit" variant="secondary" onClick={handleModal}>
            Edit
          </Button>
          <Button data-name="confirm" variant="primary" onClick={handleModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CheckoutModal
