import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import CheckoutModal from './CheckoutModal'
import CheckoutOptions from './CheckoutOptions'
import clipboard from './assets/clipboard2-check.svg'
import { useAppContext } from './AppContext'

function App() {
  const { state, dispatch } = useAppContext()
  const { modalShow, optionShow } = state

  function handleDispatch(actionPayload) {
    dispatch({ type: 'update', payload: actionPayload })
  }

  function handleCheckoutSummary() {
    const displayArray = []
    displayArray.push(state.rtc)
    //iterate through state.vaccineList and return true values
    const vaccineList = state.vaccineList
    for (const [key, value] of Object.entries(vaccineList)) {
      if (value) {
        displayArray.push(key)
      }
    }
    //iterate through state.recordsRequested and return values with length > 0
    const recordsRequested = state.recordsRequested
    for (const [key, value] of Object.entries(recordsRequested)) {
      if (value.length > 0) {
        displayArray.push(value)
      }
    }
    dispatch({
      type: 'update',
      payload: { checkout: displayArray, ordersEntered: true }
    })
  }

  const handleModals = (e) => {
    const button = e.target.dataset.name
    if (button === 'close') {
      handleDispatch({ modalShow: false, optionShow: false })
    }
    if (button === 'checkout') {
      handleDispatch({ modalShow: true, optionShow: false })
    }
    if (button === 'cancel-options' || button === 'confirm-options') {
      if (button === 'confirm-options') {
        handleCheckoutSummary()
      }
      handleDispatch({ optionShow: false, modalShow: true })
    }
    if (button === 'confirm') {
      handleDispatch({ modalShow: false, optionShow: false })
    }
    if (button === 'edit') {
      handleDispatch({ modalShow: false, optionShow: true })
    }
  }
  return (
    <div className="app-container">
      <Button
        data-name="checkout"
        variant="primary"
        size="lg"
        onClick={handleModals}
      >
        <img
          data-name="checkout"
          className="clipboard"
          src={clipboard}
          alt="clipboard"
        />
      </Button>
      <CheckoutModal modalShow={modalShow} handleModal={handleModals} />
      <CheckoutOptions optionShow={optionShow} handleOptions={handleModals} />
    </div>
  )
}

export default App
