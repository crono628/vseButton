import React, { useState } from 'react'
import { useAppContext } from '../AppContext'
import { Form } from 'react-bootstrap'

const ReturnToClinic = () => {
  const { state, dispatch } = useAppContext()
  const [selectedOption, setSelectedOption] = useState('return-prn')

  const handleRadioChange = (e) => {
    if (e.target.value === 'return-prn') {
      dispatch({ type: 'update', payload: { rtc: 'RTC PRN' } })
    }
    if (e.target.value === 'return-to-clinic') {
      dispatch({ type: 'update', payload: { rtc: '6' } })
    }
    setSelectedOption(e.target.value)
  }

  const handleMonthChange = (e) => {
    dispatch({ type: 'update', payload: { rtc: e.target.value } })
  }

  return (
    <>
      <Form>
        <Form.Check
          type="radio"
          label="Return PRN"
          name="return-to"
          id="return-prn"
          value="return-prn"
          checked={selectedOption === 'return-prn'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="Return to Clinic"
          name="return-to"
          id="return-to-clinic"
          value="return-to-clinic"
          checked={selectedOption === 'return-to-clinic'}
          onChange={handleRadioChange}
        />
        {selectedOption === 'return-to-clinic' && (
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
    </>
  )
}

export default ReturnToClinic
