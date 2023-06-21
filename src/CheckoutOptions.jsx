import React from 'react'
import { Tab, Tabs, Modal, Button } from 'react-bootstrap'
import ReturnToClinic from './components/ReturnToClinic'

const CheckoutOptions = ({ optionShow, handleOptions }) => {
  return (
    <>
      <Modal show={optionShow} backdrop="static" keyboard={false} size="lg">
        <Modal.Header>
          <Modal.Title>Checkout Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="rtc" id="uncontrolled-tab-example">
            <Tab eventKey="rtc" title="RTC">
              <ReturnToClinic />
            </Tab>
            <Tab eventKey="today" title="Today">
              <p>labs, pharm, xray, etc</p>
            </Tab>
            <Tab eventKey="future" title="Future">
              <p>future stuff</p>
            </Tab>
            <Tab eventKey="vaccines" title="Vaccines">
              <p>vaccine stuff</p>
            </Tab>
            <Tab eventKey="records" title="Records">
              <p>records</p>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button
            data-name="cancel-options"
            variant="secondary"
            onClick={handleOptions}
          >
            Cancel
          </Button>
          <Button
            data-name="confirm-options"
            variant="primary"
            onClick={handleOptions}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CheckoutOptions
