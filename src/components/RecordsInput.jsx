import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'

const RecordsInput = () => {
  const { state, dispatch } = useAppContext()
  const { recordsRequested } = state

  const handleChange = (e) => {
    const { id, value } = e.target
    dispatch({
      type: 'update',
      payload: { recordsRequested: { ...recordsRequested, [id]: value } }
    })
  }

  return (
    <Container>
      <Form.Group controlId="formProviderSpecialty">
        <Form.Control
          type="text"
          placeholder="Provider/specialty"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formOrganizationCity">
        <Form.Control
          type="text"
          placeholder="Organization/city"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDatesRequested">
        <Form.Control
          type="text"
          placeholder="Dates of requested records"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTypeRequestedRecords">
        <Form.Control
          type="text"
          placeholder="Type of requested records"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formOfficeNumber">
        <Form.Control
          type="tel"
          placeholder="Office number"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formFaxNumber">
        <Form.Control
          type="tel"
          placeholder="Fax number"
          onChange={handleChange}
        />
      </Form.Group>
    </Container>
  )
}

export default RecordsInput
