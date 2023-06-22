import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useAppContext } from './AppContext'

const CheckoutModal = ({ modalShow, handleModal }) => {
  const { state } = useAppContext()

  const rtcDiv = state.rtc ? (
    <div>
      <strong>RTC: </strong>
      {state.rtc} {state.rtc === 'PRN' ? '' : 'months'}
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

  const recordsRequestedDiv = () => {
    const recordsRequested = state.recordsRequested
    const recordsRequestedDiv = []
    for (const [key, value] of Object.entries(recordsRequested)) {
      if (value) {
        recordsRequestedDiv.push(value)
      }
    }
    return recordsRequestedDiv.length > 0 ? (
      <div>
        <strong>Request records from: </strong>
        {recordsRequestedDiv.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
    ) : null
  }

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
              {vaccineListDiv().length > 0 && (
                <div>
                  <strong>Vaccines: </strong>
                  {vaccineListDiv()?.join(', ')}
                </div>
              )}
              {recordsRequestedDiv()}
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
