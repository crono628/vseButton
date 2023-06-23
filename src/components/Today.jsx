import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useAppContext } from '../AppContext'

const Today = () => {
  const { state, dispatch } = useAppContext()
  const { today } = state

  const handleCheckboxChange = (index) => {
    const updatedToday = today.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    )
    dispatch({
      type: 'update',
      payload: {
        today: updatedToday
      }
    })
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicCheckbox">
          {today.map((item, index) => {
            return (
              <Form.Check
                key={index}
                type="checkbox"
                label={item.name}
                name={item.key}
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
            )
          })}
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Today
