import React from 'react'
import { useAppContext } from '../AppContext'
import { Container, Form } from 'react-bootstrap'

const ReturnToClinic = () => {
  const { state, dispatch } = useAppContext()

  const handleRadioChange = (e) => {
    if (e.target.value === 'return-prn') {
      dispatch({
        type: 'update',
        payload: { rtc: 'PRN', selectedRtcOption: 'return-prn' }
      })
    }
    if (e.target.value === 'return-to-clinic') {
      dispatch({
        type: 'update',
        payload: { rtc: '6', selectedRtcOption: 'return-to-clinic' }
      })
    }
  }

  const handleMonthChange = (e) => {
    dispatch({ type: 'update', payload: { rtc: e.target.value } })
  }

  return (
    <Container>
      <Form>
        <Form.Check
          type="radio"
          label="Return PRN"
          name="return-to"
          id="return-prn"
          value="return-prn"
          checked={state.selectedRtcOption === 'return-prn'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="Return to Clinic"
          name="return-to"
          id="return-to-clinic"
          value="return-to-clinic"
          checked={state.selectedRtcOption === 'return-to-clinic'}
          onChange={handleRadioChange}
        />
        {state.selectedRtcOption === 'return-to-clinic' && (
          <>
            <div className="clinic-text">
              Return to clinic in
              <Form.Select
                aria-label="Select a month"
                className="month-dropdown"
                value={state.rtc}
                onChange={handleMonthChange}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </Form.Select>
              months
            </div>
          </>
        )}
      </Form>
    </Container>
  )
}

export default ReturnToClinic
