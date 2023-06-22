import React from 'react'
import { Tab, Tabs, Modal, Button } from 'react-bootstrap'
import ReturnToClinic from './components/ReturnToClinic'
import Today from './components/Today'
import VaccineForm from './components/VaccineForm'
import MedicalRecordsForm from './components/MedicalRecordsForm'

const CheckoutOptions = ({ optionShow, handleOptions }) => {
  return (
    <>
      <Modal show={optionShow} backdrop="static" keyboard={false} size="md">
        <Modal.Header>
          <Modal.Title>Checkout Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="rtc"
            id="uncontrolled-tab-example"
            style={{ marginBottom: '20px' }}
          >
            <Tab eventKey="rtc" title="RTC">
              <ReturnToClinic />
            </Tab>
            <Tab eventKey="today" title="Today">
              <Today />
            </Tab>
            <Tab eventKey="future" title="Future">
              <p>future stuff</p>
            </Tab>
            <Tab eventKey="vaccines" title="Vaccines">
              <VaccineForm />
            </Tab>
            <Tab eventKey="records" title="Records">
              <MedicalRecordsForm />
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
