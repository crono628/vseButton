import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'
const InjectionForm = () => {
  const { state, dispatch } = useAppContext()
  const { injections } = state

  const handleCheckboxChange = (index) => {
    dispatch({
      type: 'update',
      payload: {
        injections: injections.map((injection, i) =>
          i === index
            ? { ...injection, checked: !injection.checked }
            : injection
        )
      }
    })
  }

  const numColumns = 3

  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    injections.filter((_, index) => index % numColumns === columnIndex)
  )

  return (
    <Container>
      <Row>
        {columns.map((column, columnIndex) => (
          <Col key={columnIndex}>
            {column.map((injection, index) => (
              <Form.Group key={injection.key}>
                <Form.Check
                  type="checkbox"
                  label={injection.name}
                  name={injection.key}
                  checked={injection.checked}
                  onChange={() =>
                    handleCheckboxChange(index * numColumns + columnIndex)
                  }
                />
              </Form.Group>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default InjectionForm
