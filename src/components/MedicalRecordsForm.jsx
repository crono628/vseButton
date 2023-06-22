import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'
import RecordsInput from './RecordsInput'

const MedicalRecordsForm = () => {
  const { state, dispatch } = useAppContext()
  const { requestRecords } = state

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

        {requestRecords && <RecordsInput />}
      </Form>
    </Container>
  )
}

export default MedicalRecordsForm
