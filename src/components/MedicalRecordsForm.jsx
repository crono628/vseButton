import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'

const MedicalRecordsForm = () => {
  const { state, dispatch } = useAppContext()
  const { requestRecords, recordsRequested } = state

  const handleCheckboxChange = () => {
    dispatch({ type: 'update', payload: { requestRecords: !requestRecords } })
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="Request Medical Records"
            checked={requestRecords}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        {requestRecords && (
          <>
            <Form.Group controlId="formProviderSpecialty">
              <Form.Label>Provider/Specialty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the provider/specialty"
              />
            </Form.Group>

            <Form.Group controlId="formOrganizationCity">
              <Form.Label>Organization/City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the organization/city"
              />
            </Form.Group>

            <Form.Group controlId="formDatesRequested">
              <Form.Label>Dates of Requested Records</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the dates of requested records"
              />
            </Form.Group>

            <Form.Group controlId="formTypeRequestedRecords">
              <Form.Label>Type of Requested Records</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the type of requested records"
              />
            </Form.Group>

            <Form.Group controlId="formOfficeNumber">
              <Form.Label>Office Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter the office number" />
            </Form.Group>

            <Form.Group controlId="formFaxNumber">
              <Form.Label>Fax Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter the fax number" />
            </Form.Group>
          </>
        )}
      </Form>
    </Container>
  )
}

export default MedicalRecordsForm
