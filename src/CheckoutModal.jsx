import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useAppContext } from './AppContext'

const CheckoutModal = ({ modalShow, handleModal }) => {
  const { state } = useAppContext()

  const rtcDiv = state.rtc ? (
    <div>
      <strong>RTC: </strong>
      {state.rtc} months
    </div>
  ) : null

  const vaccineListDiv = () => {
    const vaccineList = state.vaccineList
    const vaccineListDiv = []
    for (const [key, value] of Object.entries(vaccineList)) {
      if (value) {
        vaccineListDiv.push(key)
      }
    }
    return vaccineListDiv
  }

  const recordsRequestedDiv = Object.entries(state.recordsRequested).map(
    ([key, value]) => {
      if (value.length > 0) {
        return (
          <div key={key}>
            <strong>{key}: </strong>
            {value}
          </div>
        )
      }
    }
  )

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
          {!state.ordersEntered ? (
            'No orders yet'
          ) : (
            <div>
              {rtcDiv}
              {
                <div>
                  <strong>Vaccines: </strong>
                  {vaccineListDiv().join(', ')}
                </div>
              }
              {recordsRequestedDiv}
            </div>
          )}
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
