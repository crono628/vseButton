import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useAppContext } from './AppContext'

const CheckoutModal = ({ modalShow, handleModal }) => {
  const { state } = useAppContext()

  const rtcDiv = () => {
    const rtc = state.rtc
    return rtc.length > 0 ? (
      <div>
        <strong>RTC: </strong>
        {rtc} {rtc === 'PRN' ? '' : 'months'}
      </div>
    ) : null
  }

  const injectionsDiv = () => {
    const injections = state.injections
    const injectionsDiv = []
    for (const [key, value] of Object.entries(injections)) {
      if (value.checked) {
        injectionsDiv.push(value.name)
      }
    }
    return injectionsDiv
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

  const todayDiv = () => {
    const today = state.today
    const todayDiv = []
    for (const [key, value] of Object.entries(today)) {
      if (value.checked) {
        todayDiv.push(value.name)
      }
    }
    return todayDiv
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
              {rtcDiv()}
              {injectionsDiv().length > 0 && (
                <div>
                  <strong>Vaccines: </strong>
                  {injectionsDiv()?.join(', ')}
                </div>
              )}
              {todayDiv().length > 0 && (
                <div>
                  <strong>Today: </strong>
                  {todayDiv()?.join(', ')}
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
